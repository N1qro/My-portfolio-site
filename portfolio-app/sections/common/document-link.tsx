import { type ReactNode } from "react"
import { useTranslations } from "next-intl"
import styles from "./document-link.module.css"

interface DocumentLinkProps {
  href: string
  children: ReactNode
  fileType?: string
}

function PaperclipIcon() {
  return (
    <svg
      className={styles.paperclip}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8L15 6" />
    </svg>
  )
}

export function DocumentLink({ href, children, fileType }: DocumentLinkProps) {
  const translate = useTranslations("common")

  return (
    <a
      className={styles.documentLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={translate("documentLinkTitle")}
    >
      <PaperclipIcon />
      <span>
        {children}
        {fileType && <small className={styles.documentType}> {fileType}</small>}
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
