import Link from "next/link"
import projects from "@/lib/projects"
import { notFound } from "next/navigation"
import containerStyles from "@/styles/containers.module.css"
import projectStyles from "@/styles/projects.module.css"
import { colorHash } from "@/lib/constraints"
import GithubCard from "@/components/githubCard"
import ProjectTags from "./projectTags"
import VideoPlayer from "./videoPlayer"
import LinkBack from "./linkBack"

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

  const projectInformation = (
    <div className={containerStyles.info_container}>
      {project.developmentCost && <div className={containerStyles.info_circle}>
        <p>Cрок:</p>
        <p>{project.developmentCost}</p>
      </div>}
      {project.madeFor && <p className={containerStyles.info_circle}>{project.madeFor}</p>}
      {project.rating && <div className={containerStyles.info_circle}>
        <p>{project.rating}</p>
        <p>баллов</p>
      </div>}
    </div>
  )

  const lastChildren = projectInformation.props.children.reduce((a: any, b: any) => a || b, false)
  const informationEnabled = !!(project.gitLink || lastChildren)

  return (
    <main className={containerStyles.project_main}>
      <LinkBack>{"<-"} Вернуться назад</LinkBack>
      <div className={containerStyles.project_page_container}>
        <article>
          <h2>{project.title} <span className="subtle-text">({project.creation_date.getFullYear()})</span></h2>
          <ProjectTags tags={project.tags} />
          <VideoPlayer width={640} height={360} preview={project.previewImage.src} src={project.videoURL} />
          <hr className={projectStyles.project_divider} />
          <div className={projectStyles.project_description}>
            {project.full_description.split("\n\n").map((text, idx) => (
              <div key={idx}>
                <p>{text || "Описание не указано"}</p>
                <br />
              </div>
            ))}
          </div>
        </article>
        <aside>
          <div className={containerStyles.project_info}>
            {informationEnabled && <>
              <h2 className="text-center">Информация</h2>
              {projectInformation}
            </>}
            {project.gitLink && <GithubCard src={project.gitLink} />}
          </div>
          <div className="text-center">
            <h2>Участники</h2>
            <p>Временно отстутствуют. Скоро будут добавлены</p>
          </div>
          <div className="text-center">
            <h2>Галлерея</h2>
            <p>Временно пустая. Фотографии в процессе добавления</p>
          </div>
        </aside>
      </div>
    </main>
  )
}