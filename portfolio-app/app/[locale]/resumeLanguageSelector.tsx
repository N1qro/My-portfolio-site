"use client"

import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
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
  return (
    <Popover className={styles.selector}>
      <PopoverButton
        className={`${commonStyles.link_redirect} ${styles.trigger}`}
      >
        {buttonLabel}
        <span className={styles.chevron} aria-hidden="true" />
      </PopoverButton>
      <PopoverPanel className={styles.panel}>
        <p id="resume-language-prompt" className={styles.prompt}>{languagePrompt}</p>
        <ul className={styles.languages} aria-labelledby="resume-language-prompt">
          <li>
            <CloseButton
              as="a"
              href="/resume.pdf"
              hrefLang="ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              {russianLabel}
            </CloseButton>
          </li>
          <li>
            <CloseButton
              as="a"
              href="/resume-en.pdf"
              hrefLang="en"
              target="_blank"
              rel="noopener noreferrer"
            >
              {englishLabel}
            </CloseButton>
          </li>
        </ul>
      </PopoverPanel>
    </Popover>
  )
}
