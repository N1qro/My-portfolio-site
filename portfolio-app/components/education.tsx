import Image from "next/image"
import { useTranslations } from "next-intl"
import { type ReactNode } from "react"
import { collectSectionEntries } from "@/lib/collect-section-entries"
import { type EducationEntryData } from "@/lib/education"
import styles from "@/styles/education.module.css"

export function Entry({ entry }: { entry: EducationEntryData }) {
  const translateEducation = useTranslations("education")

  return (
    <li className={styles.entry}>
      <span className={styles.marker} aria-hidden="true" />
      <p className={styles.period}>
        <span>{entry.period}</span>
        {entry.country && <span className={styles.country}>
          <Image className={styles.flag} src={entry.country.flag} width={18} height={12} alt="" />
          {entry.country.name}
        </span>}
      </p>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Image className={styles.logo} src={entry.logo} width={24} height={24} alt="" />
          {entry.title}
        </h3>
        <p className={styles.studyType}>{entry.studyType}</p>
        <p className={styles.description}>{entry.description}</p>
      </div>
      {(entry.grade || entry.transcriptUrl) && <div className={styles.documents}>
        {entry.grade && <p className={styles.grade}>
          {translateEducation("grade")}: <strong>{entry.grade}</strong>
        </p>}
        {entry.transcriptUrl && <a
          className={styles.documentLink}
          href={entry.transcriptUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={translateEducation("openDocument")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8L15 6" />
          </svg>
          <span>
            {translateEducation("transcript")} <small className={styles.documentType}>PDF</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>}
      </div>}
    </li>
  )
}

export function Section({ children, id = "education" }: { children?: ReactNode, id?: string }) {
  const translateEducation = useTranslations("education")
  const educationEntries = collectSectionEntries(children, Entry, "Education.Section")
  if (educationEntries.length === 0) return null
  const sectionHeadingId = `${id}-title`

  return (
    <section className={styles.section} id={id} aria-labelledby={sectionHeadingId}>
      <header className={styles.header}>
        <h2 className={styles.heading} id={sectionHeadingId}>{translateEducation("title")}</h2>
        <p className={styles.subtitle}>{translateEducation("level")}</p>
      </header>
      <ol className={styles.entries}>{educationEntries}</ol>
    </section>
  )
}
