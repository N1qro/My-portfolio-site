import FactCard from "./factCard";
import myself from "@/assets/img/me.png";
import containerStyles from "@/styles/containers.module.css";
import commonStyles from "@/styles/common.module.css";
import ProjectCard from "./projectCard";
import { cookies } from "next/headers";
import styles from "@/styles/home.module.css"
import Image from "next/image";
import locationImage from "@/assets/svg/location2.svg"
import projects from "@/lib/projects";
import achievements from "@/lib/achievements";

export default function Home() {
  const savedFact = parseInt(cookies().get("latestFact")?.value || "0")

  return (
    <main>
      <section className={containerStyles.section_me}>
        <article
          className={`${containerStyles.align_vertically} flex-column-gap`}
        >
          <h1>Новиков Андрей</h1>
          <div className={styles.location_wrapper}>
            <Image src={locationImage} height={27} alt="location-logo" style={{color: "red"}} />
            <i className={styles.location}>Москва, Россия</i>
          </div>
          <p>
            Веб разработчик, 18 лет. Увлекаюсь созданием ботов в дискорде.
            Любитель олимпиад по информатике, хакатонов и командной работы.
            На текущий момент стараюсь изо всех сил поступить в университет Иннополиса.
          </p>
          <FactCard savedFact={savedFact}/>
        </article>
        <Image
          className={commonStyles.thumbnail}
          height={500}
          quality={100}
          src={myself}
          alt="thumbnail"
        />
      </section>
      <section id="projects" className={containerStyles.section_projects}>
        <h1>Мои проекты</h1>
        <div className={containerStyles.project_container}>
          {projects.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </section>
      <section id="achievements">
        <h1>Достижения</h1>
        <ul className={containerStyles.achievement_container}>
          {achievements.map((achivement, idx) => (
            <li key={idx}>
              {achivement.text}
              {achivement.url && <a href={achivement.url}>🔗</a>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
