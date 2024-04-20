import Link from "next/link"
import projects from "@/lib/projects"
import { notFound } from "next/navigation"
import containerStyles from "@/styles/containers.module.css"
import { colorHash } from "@/lib/constraints"

interface PageProps {
  params: {
    id: string
  },
  searchParams: {}
}


export default function ProjectDisplay(props: PageProps) {
  const project = projects.find(proj => parseInt(props.params.id) === proj.id)

  if (!project) {
    return notFound()
  }

  return (
    <main>
      <Link href="..">{"<-"} Вернуться назад</Link>
      <div className={containerStyles.project_page_container}>
        <article>
          <h2>{project.title} <span className="subtle-text">({project.creation_date.getFullYear()})</span></h2>
          <div className={containerStyles.tag_container}>
            {project.tags.map(tag => {
              const color = colorHash.hex(tag)
              return <p style={{background: color}} key={`tag-${tag}`}>{tag}</p>
            })}
          </div>
        </article>
        <aside>
          <h2>Информация</h2>
          <div className={containerStyles.info_container}>
            <p className={containerStyles.info_circle}>
              {project.developmentCost}
            </p>
            {project.madeFor && <p className={containerStyles.info_circle}>{project.madeFor}</p>}
            {project.rating && <p className={containerStyles.info_circle}>
              <p>{project.rating}</p>
              <p>баллов</p>
            </p>}
          </div>
        </aside>
      </div>
    </main>
  )
}