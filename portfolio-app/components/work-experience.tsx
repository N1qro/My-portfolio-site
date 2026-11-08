import Image from "next/image"
import { useTranslations } from "next-intl"
import { type ReactNode } from "react"
import { collectSectionEntries } from "@/lib/collect-section-entries"
import { type WorkExperienceEntryData } from "@/lib/work-experience"
import styles from "@/styles/work-experience.module.css"

export function Entry({ entry }: { entry: WorkExperienceEntryData }) {
  return (
    <li className={styles.entry}>
      <span className={styles.marker} aria-hidden="true" />
      <p className={styles.period}>{entry.period}</p>
      <h3 className={styles.title}>
        <Image className={styles.logo} src={entry.logo} width={24} height={24} alt="" />
        <span>
          {entry.title}
          {entry.label && <> <span className={styles.label}>{entry.label}</span></>}
        </span>
      </h3>
      <div className={styles.description}>
        <p className={styles.role}>{entry.role}</p>
        <p>{entry.description}</p>
      </div>
    </li>
  )
}

export function Section({ children, id = "experience" }: { children?: ReactNode, id?: string }) {
  const translateExperience = useTranslations("experience")
  const workExperienceEntries = collectSectionEntries(children, Entry, "WorkExperience.Section")
  if (workExperienceEntries.length === 0) return null

  const totalExperienceMonths = workExperienceEntries.reduce(
    (totalMonths, workExperienceEntry) => totalMonths + workExperienceEntry.props.entry.durationMonths,
    0,
  )
  const experienceYears = Math.floor(totalExperienceMonths / 12)
  const remainingExperienceMonths = totalExperienceMonths % 12
  const durationParts: string[] = []

  if (experienceYears > 0) {
    durationParts.push(translateExperience("durationYears", { years: experienceYears }))
  }
  if (remainingExperienceMonths > 0 || totalExperienceMonths === 0) {
    durationParts.push(translateExperience("durationMonths", { months: remainingExperienceMonths }))
  }

  const sectionHeadingId = `${id}-title`

  return (
    <section className={styles.section} id={id} aria-labelledby={sectionHeadingId}>
      <header className={styles.header}>
        <h2 className={styles.heading} id={sectionHeadingId}>{translateExperience("title")}</h2>
        <p className={styles.subtitle}>{durationParts.join(" ")}</p>
      </header>
      <ol className={styles.entries}>{workExperienceEntries}</ol>
    </section>
  )
}
