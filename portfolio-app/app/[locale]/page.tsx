import FactCard from "./factCard";
import myself from "@/assets/img/personal/me.png";
import containerStyles from "@/styles/containers.module.css";
import commonStyles from "@/styles/common.module.css";
import ProjectCard from "./projectCard";
import { cookies } from "next/headers";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import locationImage from "@/assets/svg/location2.svg";
import getProjects from "@/lib/projects";
import getAchievements from "@/lib/achievements";
import { Education } from "@/sections/education/education";
import { WorkExperience } from "@/sections/work/work";
import { SectionGroup } from "@/sections/common/section-group";
import { getEducation } from "@/lib/education";
import { getExperience } from "@/lib/work-experience";
import { contactEmail, currentLocation } from "@/lib/constraints";

import picture1 from "@/assets/img/personal/photo_first.png"
import picture2 from "@/assets/img/personal/photo_second.png"
import picture3 from "@/assets/img/personal/photo_third.png"
import picture4 from "@/assets/img/personal/photo_inno1.jpg"
import picture5 from "@/assets/img/personal/photo_inno2.jpg"
import picture6 from "@/assets/img/personal/photo_inno3.jpg"
import picture7 from "@/assets/img/personal/photo_mephi1.jpg"
import picture8 from "@/assets/img/personal/photo_predprof1.jpg"
import picture9 from "@/assets/img/personal/photo_prod1.jpg"
import picture10 from "@/assets/img/personal/photo_prod2.jpg"
import picture11 from "@/assets/img/personal/photo_prod3.jpg"
import { useTranslations } from "next-intl";
import { Button } from "@/components/button";
import Link from "next/link";


export default function Home() {
  const translate = useTranslations()
  const education = getEducation(translate)
  const experience = getExperience(translate)
  const savedFact = parseInt(cookies().get("latestFact")?.value || "0");

  return (
    <main>
      <section className={containerStyles.section_me}>
        <article
          className={`${containerStyles.align_vertically} flex-column-gap`}
        >
          <h1>{translate("author.fullname")}</h1>
          <div className={styles.location_wrapper}>
            <Image
              src={locationImage}
              height={27}
              alt="location-logo"
              style={{ color: "red" }}
            />
            <i className={styles.location}>{translate("home.location")}</i>
          </div>
          <p>
            {translate("home.description")}
          </p>
          <a className={commonStyles.link_redirect} href="/resume.pdf">{translate("home.resume")}</a>
          <FactCard savedFact={savedFact} />
        </article>
        <Image
          className={commonStyles.thumbnail}
          height={500}
          quality={100}
          src={myself}
          alt="thumbnail"
        />
      </section>
      <SectionGroup>
        <Education.Section>
          <Education.Entry entry={education.innopolis} />
          <Education.Entry entry={education.bitExchange} />
        </Education.Section>
        <WorkExperience.Section>
          <WorkExperience.Entry entry={experience.yandexInternship} />
        </WorkExperience.Section>
      </SectionGroup>
      <section
        id="projects"
        className={`${containerStyles.section_projects} offset`}
      >
        <h1>{translate("home.projects")}</h1>
        <div className={containerStyles.project_container}>
          {getProjects(translate).map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>
      <section id="achievements" className="offset">
        <h1>{translate("home.achievements")}</h1>
        <ul className={containerStyles.achievement_container}>
          {getAchievements(translate).map((achivement, idx) => (
            <li key={idx}>
              {achivement.text}
              {achivement.url && <a href={achivement.url}> 🔗</a>}
            </li>
          ))}
        </ul>
      </section>
      <section id="pictures" className="offset">
        <h1 className="text-center">{translate("home.pictures")}</h1>
        <div className={containerStyles.pictures_container}>
          <div className={containerStyles.picture_column}>
            <img src={picture1.src} alt="" />
            <img src={picture2.src} alt="" />
            <img src={picture3.src} alt="" />
          </div>
          <div className={containerStyles.picture_column}>
            <img src={picture4.src} alt="" />
            <img src={picture5.src} alt="" />
            <img src={picture6.src} alt="" />
          </div>
          <div className={containerStyles.picture_column}>
            <img src={picture7.src} alt="" />
            <img src={picture8.src} alt="" />
          </div>
          <div className={containerStyles.picture_column}>
            <img src={picture10.src} alt="" />
            <img src={picture11.src} alt="" />
            <img src={picture9.src} alt="" />
          </div>
        </div>
      </section>
      <section id="contact-me">
        <h1 className="text-center">{translate("home.contact_me")}</h1>
        <p className="text-center">{translate("home.contact_description")} <a className={`${commonStyles.link} ${commonStyles.gradient}`} href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </section>
    </main>
  );
}
