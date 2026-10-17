import Image from "next/image"
import { useTranslations } from "next-intl"
import { getEducation, getExperience, type BackgroundEntry } from "@/lib/background"
import styles from "@/styles/background.module.css"

function Timeline({ entries, education = false }: { entries: BackgroundEntry[], education?: boolean }) {
  const t = useTranslations("education")

  return (
    <ol className={`${styles.timeline} ${education ? styles.education : styles.experience}`}>
      {entries.map((entry, index) => (
        <li className={styles.entry} key={entry.id}>
          <svg className={styles.connector} viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M8 0 C20 30 -4 70 8 100" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className={styles.period}>
            <span>{entry.period}</span>
            {entry.country && <span>{entry.country}</span>}
          </p>
          <h3 className={styles.title}>
            <Image src={entry.logo} width={24} height={24} alt="" />
            {entry.title}
            {entry.label && <span>{entry.label}</span>}
          </h3>
          <div className={styles.description}>
            {entry.role && <p className={styles.role}>{entry.role}</p>}
            <p>{entry.description}</p>
          </div>
          {(entry.grade || entry.transcript) && <div className={styles.documents}>
            {entry.grade && <p>{t("grade")}: <strong>{entry.grade}</strong></p>}
            {entry.transcript && <a href={entry.transcript.url} target="_blank" rel="noopener noreferrer" aria-label={entry.transcript.label} title={entry.transcript.label}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8L15 6" />
              </svg>
              {t("transcript")} <small>PDF</small> <span aria-hidden="true">↗</span>
            </a>}
          </div>}
          {index === entries.length - 1 && <span className={styles.endpoint} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  )
}

export default function Background() {
  const t = useTranslations()
  const experience = getExperience(t)

  return (
    <div className={styles.background}>
      <section aria-labelledby="education">
        <header><h2 id="education">{t("education.title")}</h2><p>{t("education.level")}</p></header>
        <Timeline entries={getEducation(t)} education />
      </section>
      <section aria-labelledby="experience">
        <header><h2 id="experience">{t("experience.title")}</h2><p>{t("experience.duration", { months: experience.reduce((sum, entry) => sum + entry.months, 0) })}</p></header>
        <Timeline entries={experience} />
      </section>
    </div>
  )
}
