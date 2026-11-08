const test = require("node:test")
const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const Module = require("node:module")
const ts = require("typescript")
const React = require("react")
const { renderToStaticMarkup } = require("react-dom/server")

const root = path.resolve(__dirname, "..")
const moduleCache = new Map()
const imageCalls = []
const h = React.createElement

// Load the real TS components without a Next build. Only framework boundaries
// are replaced; component composition, data factories and React rendering stay real.
const framework = {
  "next-intl": {
    useTranslations: (namespace) => (key, values) => values?.months !== undefined
      ? `${values.months} months`
      : [namespace, key].filter(Boolean).join("."),
  },
  "next/image": {
    __esModule: true,
    default: ({ src, ...props }) => {
      imageCalls.push({ src, ...props })
      const source = typeof src === "string" ? src : (src.default ?? src).src
      return h("img", { ...props, src: source })
    },
  },
}

function loadSource(filename) {
  if (moduleCache.has(filename)) return moduleCache.get(filename).exports
  const sourceModule = new Module(filename, module)
  moduleCache.set(filename, sourceModule)
  sourceModule.filename = filename
  sourceModule.paths = Module._nodeModulePaths(path.dirname(filename))
  const requireFromFile = Module.createRequire(filename)
  sourceModule.require = (request) => {
    if (framework[request]) return framework[request]
    if (!request.startsWith("@/") && !request.startsWith(".")) return requireFromFile(request)
    const target = request.startsWith("@/")
      ? path.join(root, request.slice(2))
      : path.resolve(path.dirname(filename), request)
    if (target.endsWith(".module.css")) {
      return { __esModule: true, default: new Proxy({}, { get: (_, key) => key }) }
    }
    if (/\.(png|svg|jpe?g)$/.test(target)) {
      assert.ok(fs.existsSync(target), `Missing imported image: ${target}`)
      return { __esModule: true, default: { src: `/assets/${path.basename(target)}`, width: 24, height: 24 } }
    }
    const resolved = [target, `${target}.ts`, `${target}.tsx`].find((candidate) =>
      fs.existsSync(candidate) && fs.statSync(candidate).isFile())
    if (!resolved) throw new Error(`Cannot resolve ${request} from ${filename}`)
    return loadSource(resolved)
  }
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    fileName: filename,
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  })
  sourceModule._compile(outputText, filename)
  return sourceModule.exports
}

const { EducationEntry, EducationSection } = loadSource(path.join(root, "components/education-section.tsx"))
const { WorkExperienceEntry, WorkExperienceSection } = loadSource(path.join(root, "components/work-experience-section.tsx"))
const { getEducation } = loadSource(path.join(root, "lib/education.ts"))
const { getExperience } = loadSource(path.join(root, "lib/work-experience.ts"))

function education(id, extra = {}) {
  return { id, title: `School ${id}`, period: "2024–2028", logo: "/school.svg", description: "Computer science", ...extra }
}

function work(id, months) {
  return { id, title: `Employer ${id}`, period: "2026", logo: "/employer.svg", role: "Developer", description: "Infrastructure", months }
}

const educationChild = (entry) => h(EducationEntry, { key: entry.id, entry })
const workChild = (entry) => h(WorkExperienceEntry, { key: entry.id, entry })
const renderEducation = (children, props = {}) => renderToStaticMarkup(h(EducationSection, props, children))
const renderWork = (children) => renderToStaticMarkup(h(WorkExperienceSection, null, children))
const entriesIn = (html) => [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map((match) => match[1])
const titleIn = (html) => html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)?.[1].replace(/<[^>]*>/g, "")

test("education accepts a single entry and preserves DOM order for one to five entries", () => {
  for (let count = 1; count <= 5; count++) {
    const entries = Array.from({ length: count }, (_, index) => educationChild(education(String(index + 1))))
    const html = renderEducation(count === 1 ? entries[0] : entries)
    assert.equal((html.match(/<ol\b/g) ?? []).length, 1)
    assert.deepEqual(entriesIn(html).map(titleIn), entries.map((_, index) => `School ${index + 1}`))
  }
})

test("arrays, conditions and nested fragments keep only visible education entries in their given order", () => {
  const html = renderEducation([
    educationChild(education("first")),
    false,
    h(React.Fragment, { key: "outer" }, [
      null,
      educationChild(education("second")),
      [undefined, h(React.Fragment, { key: "inner" }, educationChild(education("third")))],
    ]),
  ])
  assert.deepEqual(entriesIn(html).map(titleIn), ["School first", "School second", "School third"])
})

test("empty sections, including empty nested fragments, render no heading or timeline", () => {
  for (const children of [null, undefined, false, [], h(React.Fragment, null, [false, null, h(React.Fragment, { key: "empty" })])]) {
    assert.equal(renderEducation(children), "")
    assert.equal(renderWork(children), "")
  }
})

test("work duration follows the visible children after additions, removal and reordering", () => {
  const first = workChild(work("first", 3))
  const second = workChild(work("second", 8))
  const scenarios = [
    { children: first, months: 3, titles: ["Employer first"] },
    { children: [first, h(React.Fragment, { key: "second" }, [false, second])], months: 11, titles: ["Employer first", "Employer second"] },
    { children: [second, first], months: 11, titles: ["Employer second", "Employer first"] },
    { children: [false, second], months: 8, titles: ["Employer second"] },
  ]
  for (const { children, months, titles } of scenarios) {
    const html = renderWork(children)
    assert.match(html, new RegExp(`>${months} months<`))
    assert.deepEqual(entriesIn(html).map(titleIn), titles)
  }
})

test("sections reject unrelated children instead of silently losing entries or duration", () => {
  assert.throws(() => renderEducation(workChild(work("wrong", 3))), /EducationSection/)
  assert.throws(() => renderWork(educationChild(education("wrong"))), /WorkExperienceSection/)
  assert.throws(() => renderEducation("Unexpected text"), /EducationSection/)
})

test("logos and flags pass every supported Next image source shape through unchanged", () => {
  const imported = { src: "/static/school.png", width: 60, height: 60 }
  const sources = ["/school.svg", imported, { default: imported }]
  for (const src of sources) {
    imageCalls.length = 0
    const html = renderEducation(educationChild(education("image", { logo: src, country: { name: "Country", flag: src } })))
    assert.equal((html.match(/<img\b/g) ?? []).length, 2)
    assert.equal(imageCalls.length, 2)
    assert.ok(imageCalls.every((image) => image.src === src && image.alt === ""))
    imageCalls.length = 0
    renderWork(workChild({ ...work("image", 3), logo: src }))
    assert.equal(imageCalls[0].src, src)
  }
})

test("section IDs remain accessible and the requested education column limit reaches the timeline", () => {
  const html = renderEducation(educationChild(education("one")), { id: "academic-history", maxColumns: 1 })
  assert.match(html, /<section\b[^>]*id="academic-history"[^>]*aria-labelledby="academic-history-title"/)
  assert.match(html, /<h2\b[^>]*id="academic-history-title"/)
  assert.match(html, /<ol\b[^>]*data-max-columns="1"/)
})

test("the real education and work data render together on the server with transcript links", () => {
  const t = framework["next-intl"].useTranslations()
  const { innopolis, bitExchange } = getEducation(t)
  const { yandexInternship } = getExperience(t)
  const html = renderToStaticMarkup(h(React.Fragment, null,
    h(EducationSection, null, educationChild(innopolis), educationChild(bitExchange)),
    h(WorkExperienceSection, null, workChild(yandexInternship)),
  ))
  assert.equal(entriesIn(html).length, 3)
  assert.match(html, />3 months</)
  assert.match(html, /education\.innopolis\.title/)
  assert.match(html, /education\.bit\.title/)
  assert.match(html, /experience\.yandex\.title/)
  const transcriptLinks = html.match(/<a\b[^>]*href="\/docs\/bit-transcript\.pdf"[^>]*>/g) ?? []
  assert.equal(transcriptLinks.length, 2)
  assert.ok(transcriptLinks.every((link) => link.includes('target="_blank"') && link.includes('rel="noopener noreferrer"')))
})
