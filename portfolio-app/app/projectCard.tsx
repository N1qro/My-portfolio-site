import { ProjectInfo } from "@/lib/projects";
import containerStyles from "@/styles/containers.module.css"
import Link from "next/link";

export default function ProjectCard(props: ProjectInfo) {
  return (
    <Link href={`/project/${props.id}`}>
      <article className={containerStyles.project_card}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.short_description}</p>
        </div>
        <p>{props.tags}</p>
        <div style={{ backgroundImage: `url(${props.previewImage.src})` }} className={containerStyles.project_image}></div>
      </article>
    </Link>
  );
}
