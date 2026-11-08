import Image from "next/image"
import { useTranslations } from "next-intl"
import { Children, type ReactNode } from "react"
import { type EducationEntryData } from "@/lib/education"
import { DocumentLink } from "@/sections/common/document-link"
import styles from "./education.module.css"

interface EducationEntryProps {
  entry: EducationEntryData
}

interface EducationSectionProps {
  children?: ReactNode
}

function EducationSection({ children }: EducationSectionProps) {
  const translate = useTranslations("education")
  const educationEntries = Children.toArray(children)
  if (educationEntries.length === 0) return null

  const sectionHeadingId = "education-heading"

  return (
    <section className={styles.section} id="education" aria-labelledby={sectionHeadingId}>
      <header className={styles.header}>
        <h2 className={styles.heading} id={sectionHeadingId}>{translate("title")}</h2>
        <p className={styles.subtitle}>{translate("level")}</p>
      </header>
      <ol className={styles.entries}>{educationEntries}</ol>
    </section>
  )
}

function EducationEntry({ entry }: EducationEntryProps) {
  return (
    <li className={styles.entry}>
      <span className={styles.marker} aria-hidden="true" />
      <EducationPeriod entry={entry} />
      <EducationDetails entry={entry} />
      <EducationResults entry={entry} />
    </li>
  )
}

function EducationPeriod({ entry }: EducationEntryProps) {
  const { period, country } = entry

  return (
    <p className={styles.period}>
      <span>{period}</span>
      {country && (
        <span className={styles.country}>
          <Image className={styles.flag} src={country.flag} width={18} height={12} alt="" />
          {country.name}
        </span>
      )}
    </p>
  )
}

function EducationDetails({ entry }: EducationEntryProps) {
  const { logo, title, studyType, description } = entry

  return (
    <div className={styles.body}>
      <h3 className={styles.title}>
        <Image className={styles.logo} src={logo} width={24} height={24} alt="" />
        {title}
      </h3>
      <p className={styles.studyType}>{studyType}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

function EducationResults({ entry }: EducationEntryProps) {
  const translate = useTranslations("education")
  const { grade, documents = [] } = entry
  if (!grade && documents.length === 0) return null

  return (
    <div className={styles.results}>
      {grade && (
        <p className={styles.grade}>
          {translate("grade")}: <strong>{grade}</strong>
        </p>
      )}
      {documents.map((document) => (
        <DocumentLink
          key={`${document.href}:${document.label}`}
          href={document.href}
          fileType={document.fileType}
        >
          {document.label}
        </DocumentLink>
      ))}
    </div>
  )
}

export const Education = {
  Section: EducationSection,
  Entry: EducationEntry,
}
