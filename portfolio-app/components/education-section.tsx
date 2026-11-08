import Image from "next/image"
import { useTranslations } from "next-intl"
import { type ReactNode } from "react"
import { type Education } from "@/lib/education"
import { getTimelineEntries, Timeline, TimelineDecoration } from "@/components/timeline"
import styles from "@/styles/timeline.module.css"

export function EducationEntry({ entry }: { entry: Education }) {
  const t = useTranslations("education")

  return (
    <li className={styles.entry}>
      <TimelineDecoration />
      <p className={styles.period}>
        <span>{entry.period}</span>
        {entry.country && <span className={styles.country}>
          <Image className={styles.flag} src={entry.country.flag} width={18} height={12} alt="" />
          {entry.country.name}
        </span>}
      </p>
      <div className={styles.entryBody}>
        <h3 className={styles.entryTitle}>
          <Image className={styles.logo} src={entry.logo} width={24} height={24} alt="" />
          {entry.title}
        </h3>
        <p className={styles.description}>{entry.description}</p>
      </div>
      {(entry.grade || entry.transcript) && <div className={styles.documents}>
        {entry.grade && <p className={styles.grade}>{t("grade")}: <strong>{entry.grade}</strong></p>}
        {entry.transcript && <a
          className={styles.transcript}
          href={entry.transcript.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={entry.transcript.label}
          title={entry.transcript.label}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8L15 6" />
          </svg>
          {t("transcript")} <small>PDF</small> <span aria-hidden="true">↗</span>
        </a>}
      </div>}
    </li>
  )
}

export function EducationSection({
  children,
  maxColumns = 2,
  id = "education",
  className,
}: {
  children?: ReactNode
  maxColumns?: 1 | 2
  id?: string
  className?: string
}) {
  const t = useTranslations("education")
  const entries = getTimelineEntries(children, EducationEntry, "EducationSection")
  if (entries.length === 0) return null

  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle} id={`${id}-title`}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("level")}</p>
      </header>
      <Timeline entries={entries} layout="education" maxColumns={maxColumns} />
    </section>
  )
}
