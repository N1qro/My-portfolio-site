import FactCard from "./factCard";
import Image from "next/image";
import myself from "@/assets/img/me.png";
import containerStyles from "@/styles/containers.module.css";
import commonStyles from "@/styles/common.module.css";
import ProjectCard from "./projectCard";

const testProject = {
  id: 1,
  videoURI: "",
  title: "",
  description: "",
  category: "",
};

export default function Home() {
  return (
    <main>
      <section className={containerStyles.section_me}>
        <article
          className={`${containerStyles.align_vertically} flex-column-gap`}
        >
          <h1>Новиков Андрей</h1>
          <p>
            Backend + Frontend разработчик с большим опытом в серверной части,
            также увлекаюсь созданием ботов в дискорде. Любитель олимпиад по
            информатике, хакатонов и командной работы.
          </p>
          <FactCard />
        </article>
        <Image
          className={commonStyles.thumbnail}
          height={500}
          quality={100}
          src={myself}
          alt="thumbnail"
        />
      </section>
      <section className={containerStyles.section_projects}>
        <h1 className="text-center">Мои проекты</h1>
        <ProjectCard {...testProject} />
      </section>
    </main>
  );
}
