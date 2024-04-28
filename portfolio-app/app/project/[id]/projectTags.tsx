import containerStyles from "@/styles/containers.module.css";
import { colorHash } from "@/lib/constraints";

interface TagProps {
  tags: string[];
}

export default function ProjectTags({ tags }: TagProps) {
  return (
    <div className={containerStyles.tag_container}>
      {tags.map((tag) => {
        const color = colorHash.hex(tag);
        return (
          <p style={{ background: color }} key={`tag-${tag}`}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}
