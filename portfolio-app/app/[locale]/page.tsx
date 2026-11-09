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
import { getEducationInfo } from "@/lib/education";
import { getWorkInfo } from "@/lib/work-experience";
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
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/button";
import Link from "next/link";
import { HomeDescription } from "./homeDescription";
import { Dropdown, DropdownButton, DropdownLabel, DropdownLink, DropdownPanel } from "@/components/dropdown";

export const instant = false

export default async function Home() {
  const locale = await getLocale()
  const translate = await getTranslations()
  const education = getEducationInfo(translate)
  const experience = getWorkInfo(translate)
  const cookieStore = await cookies();
  const savedFact = parseInt(cookieStore.get("latestFact")?.value || "0");

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
          <HomeDescription locale={locale} />
          <Dropdown>
            <DropdownButton>
              {translate("home.resume")}
            </DropdownButton>
            <DropdownPanel>
              <DropdownLabel>
                {translate("home.resumeMenu.prompt")}
              </DropdownLabel>
              <DropdownLink href="/resume.pdf?version=2026-11-03" hrefLang="ru" target="_blank">
                {translate("home.resumeMenu.russian")}
              </DropdownLink>
              <DropdownLink href="/resume-en.pdf?version=2026-11-03" hrefLang="en" target="_blank">
                {translate("home.resumeMenu.english")}
              </DropdownLink>
            </DropdownPanel>
          </Dropdown>
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
