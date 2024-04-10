import { ProjectInfo } from "@/lib/projects";

export default function ProjectCard(props: ProjectInfo) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.short_description}</p>
      </div>
      <p>{props.tags}</p>
    </article>
  );
}
