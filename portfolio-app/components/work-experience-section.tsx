import Image from "next/image"
import { useTranslations } from "next-intl"
import { type ReactNode } from "react"
import { type WorkExperience } from "@/lib/work-experience"
import { getTimelineEntries, Timeline, TimelineDecoration } from "@/components/timeline"
import styles from "@/styles/timeline.module.css"

export function WorkExperienceEntry({ entry }: { entry: WorkExperience }) {
  return (
    <li className={styles.entry}>
      <TimelineDecoration />
      <p className={styles.period}>{entry.period}</p>
      <h3 className={styles.entryTitle}>
        <Image className={styles.logo} src={entry.logo} width={24} height={24} alt="" />
        <span>
          {entry.title}
          {entry.label && <> <span className={styles.entryLabel}>{entry.label}</span></>}
        </span>
      </h3>
      <div className={styles.description}>
        <p className={styles.role}>{entry.role}</p>
        <p>{entry.description}</p>
      </div>
    </li>
  )
}

export function WorkExperienceSection({ children, id = "experience", className }: {
  children?: ReactNode
  id?: string
  className?: string
}) {
  const t = useTranslations("experience")
  const entries = getTimelineEntries(children, WorkExperienceEntry, "WorkExperienceSection")
  if (entries.length === 0) return null
  const months = entries.reduce((total, child) => total + child.props.entry.months, 0)

  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle} id={`${id}-title`}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("duration", { months })}</p>
      </header>
      <Timeline entries={entries} layout="work" />
    </section>
  )
}
