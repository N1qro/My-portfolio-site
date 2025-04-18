import { ProjectInfo } from "@/lib/projects";
import containerStyles from "@/styles/containers.module.css"
import { Link } from "@/i18n/navigation";

export default function ProjectCard(props: ProjectInfo) {
  return (
    <Link href={`/project/${props.slug}`}>
      <article className={containerStyles.project_card}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.short_description}</p>
        </div>
        <div style={{ backgroundImage: `url(${props.previewImage.src})` }} className={containerStyles.project_image}></div>
      </article>
    </Link>
  );
}
