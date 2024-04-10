interface ProjectProps {
  id: number;
  videoURI: string;
  title: string;
  description: string;
  category: string;
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <article>
      <div>
        <h2>Теплица</h2>
        <p>Проект бла бла бла</p>
      </div>
      <p>Kotlin + Android studio</p>
    </article>
  );
}
