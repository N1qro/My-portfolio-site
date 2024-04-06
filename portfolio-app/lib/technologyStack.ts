import pythonLogo from "@/assets/svg/python.svg"
import javaScriptLogo from "@/assets/svg/js.svg"
import nextJSLogo from "@/assets/svg/nextjs.svg"
import djangoLogo from "@/assets/svg/django.svg"
// import pycordLogo from "@/assets/svg/pycord"



type StackItem = {
  name: string,
  image: string,
  description: string,
  type: "regular" | "gold" | "brilliant",
}


// Javascript, React, NextJS, Python, Django, Pycord, PostgreSQL, Figma
const stack: StackItem[] = [
  {
    name: "JavaScript",
    description: "Браузерный ЯП. Знаю синтаксис, но нервов писать на обычном JavaScript у меня не хватит",
    image: javaScriptLogo,
    type: "regular",
  },
  {
    name: "TypeScript",
    description: "Надстройка над JavaScript, которая добавляет типизацию в разработку. Всегда использую в своих проектах",
    image: null,
    type: "gold",
  },
  {
    name: "React",
    description: "Библиотека для JavaScript, позволяющая декларативно писать сайты. Есть большой опыт использования",
    image: reactLogo,
    type: "gold",
  },
  {
    name: "NextJS",
    description: "Фреймворк, основанный на React. Использую его для оптимизации сайтов, SEO-продвижения и удобства разработки",
    image: nextJSLogo,
    type: "gold",
  },
  {
    name: "Python",
    description: "",
    image: "",
    type: "brilliant",
  },
  {
    name: "Django",
    description: "",
    image: "",
    type: "regular",
  },
  {
    name: "Pycord",
    description: `
      Библиотека для Python - Pycord. Позволяет писать ботов в дискорде.
      При разработке использую slash-команды и работаю с интерфейсами на "ты"`,
    image: "",
    type: "gold",
  },
  {
    name: "PostgreSQL",
    description: `
      База данных для приложений. Понимаю суть использования, но много практики не было.
      Однажды соединил ПК удалённо с базой данных на своём ноутбуке`,
    image: "",
    type: "regular",
  },
  {
    name: "Figma",
    description: "",
    image: "",
    type: "regular",
  },
]


export default stack