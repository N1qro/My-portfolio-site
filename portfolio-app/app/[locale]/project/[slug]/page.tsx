import getProjects from "@/lib/projects";
import { notFound } from "next/navigation";
import containerStyles from "@/styles/containers.module.css";
import projectStyles from "@/styles/projects.module.css";
import GithubCard from "@/components/githubCard";
import ProjectTags from "./projectTags";
import VideoPlayer from "./videoPlayer";
import LinkBack from "./linkBack";
import { useTranslations } from "next-intl";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export function generateStaticParams() {
  const noTranslation = (key: string) => key

  return getProjects(noTranslation).map((proj) => ({
    slug: proj.slug,
  }));
}

export default function ProjectDisplay(props: PageProps) {
  const t = useTranslations()
  const project = getProjects(t).find(
    (proj) => props.params.slug === proj.slug
  );
  
  if (!project) {
    return notFound();
  }


  const projectInformation = (
    <div className={containerStyles.info_container}>
      {project.developmentCost && (
        <div className={containerStyles.info_circle}>
          <p>{t("project_page.time_window")}:</p>
          <p>{project.developmentCost}</p>
        </div>
      )}
      {project.madeFor && (
        <p className={containerStyles.info_circle}>{project.madeFor}</p>
      )}
      {project.rating && (
        <div className={containerStyles.info_circle}>
          <p>{project.rating}</p>
          <p>{t("project_page.points")}</p>
        </div>
      )}
    </div>
  );

  const lastChildren = projectInformation.props.children.reduce(
    (a: any, b: any) => a || b,
    false
  );
  const informationEnabled = !!(project.gitLink || lastChildren);

  return (
    <main className={containerStyles.project_main}>
      <LinkBack>{"<-"} {t("project_page.return_back")}</LinkBack>
      <div className={containerStyles.project_page_container}>
        <article>
          <h2>
            {project.title}{" "}
            <span className="subtle-text">
              ({project.creation_date.getFullYear()})
            </span>
          </h2>
          <ProjectTags tags={project.tags} />
          <VideoPlayer
            width={640}
            height={360}
            preview={project.previewImage.src}
            src={project.videoURL}
          />
          <hr className={projectStyles.project_divider} />
          <div className={projectStyles.project_description}>
            {project.full_description.split("\n\n").map((text, idx) => (
              <div key={idx}>
                <p>{text || t("project_page.description_empty")}</p>
                <br />
              </div>
            ))}
          </div>
        </article>
        <aside>
          <div className={containerStyles.project_info}>
            {informationEnabled && (
              <>
                <h2 className="text-center">{t("project_page.information")}</h2>
                {projectInformation}
              </>
            )}
            {project.gitLink && <GithubCard src={project.gitLink} />}
          </div>
          <div className="text-center">
            <h2>{t("project_page.participants")}</h2>
            <p>{t("project_page.participants_empty")}</p>
          </div>
          <div className="text-center">
            <h2>{t("project_page.gallery")}</h2>
            <p>{t("project_page.gallery_empty")}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
