"use client"

import { useEffect, useId, useRef, useState } from "react"
import commonStyles from "@/styles/common.module.css"
import styles from "@/styles/resumeLanguageSelector.module.css"

interface ResumeLanguageSelectorProps {
  buttonLabel: string
  languagePrompt: string
  russianLabel: string
  englishLabel: string
}

export function ResumeLanguageSelector({
  buttonLabel,
  languagePrompt,
  russianLabel,
  englishLabel,
}: ResumeLanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const selectorId = useId()
  const panelId = `${selectorId}-resume-languages`
  const promptId = `${selectorId}-resume-prompt`

  useEffect(() => {
    if (!isOpen) return

    function handleOutsideInteraction(event: Event) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handleOutsideInteraction)
    document.addEventListener("focusin", handleOutsideInteraction)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("pointerdown", handleOutsideInteraction)
      document.removeEventListener("focusin", handleOutsideInteraction)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  function closeAndFocusButton() {
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div ref={containerRef} className={styles.selector}>
      <button
        ref={buttonRef}
        type="button"
        className={`${commonStyles.link_redirect} ${styles.trigger}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonLabel}
        <span className={styles.chevron} aria-hidden="true" />
      </button>
      <div id={panelId} className={styles.panel} hidden={!isOpen}>
        <p id={promptId} className={styles.prompt}>{languagePrompt}</p>
        <ul className={styles.languages} aria-labelledby={promptId}>
          <li>
            <a
              href="/resume.pdf"
              hrefLang="ru"
              type="application/pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAndFocusButton}
            >
              {russianLabel}
            </a>
          </li>
          <li>
            <a
              href="/resume-en.pdf"
              hrefLang="en"
              type="application/pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAndFocusButton}
            >
              {englishLabel}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
