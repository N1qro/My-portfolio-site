import Link from "next/link"
import projects from "@/lib/projects"
import { notFound } from "next/navigation"
import containerStyles from "@/styles/containers.module.css"
import projectStyles from "@/styles/projects.module.css"
import { colorHash } from "@/lib/constraints"
import GithubCard from "@/components/githubCard"

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
    <main className={containerStyles.project_main}>
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
          {project.videoURL ?
            <video width={640} height={360} poster={project.previewImage.src} controls>
              <source src={`/${project.videoURL}`} type="video/mp4" />
            </video> :
            <div className={projectStyles.not_found_wrapper}>
              <div className={projectStyles.video_not_found} style={{backgroundImage: `url(${project.previewImage.src})`}} />
              <h3>Видео временно не доступно</h3>
            </div>
          }
          <hr />
          <p className={projectStyles.project_description}>{project.full_description}</p>
        </article>
        <aside>
          <h2 className="text-center">Информация</h2>
          <div className={containerStyles.info_container}>
            {project.developmentCost && <p className={containerStyles.info_circle}>
              {project.developmentCost}
            </p>}
            {project.madeFor && <p className={containerStyles.info_circle}>{project.madeFor}</p>}
            {project.rating && <div className={containerStyles.info_circle}>
              <p>{project.rating}</p>
              <p>баллов</p>
            </div>}
          </div>
          {project.gitLink && <GithubCard src={project.gitLink} />}
        </aside>
      </div>
    </main>
  )
}