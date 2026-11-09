"use client"

import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import type { HTMLAttributeAnchorTarget, ReactNode } from "react"
import commonStyles from "@/styles/common.module.css"
import styles from "@/styles/dropdown.module.css"

interface DropdownLinkProps {
  children: ReactNode
  href: string
  hrefLang?: string
  target?: HTMLAttributeAnchorTarget
}

export function Dropdown({ children }: { children: ReactNode }) {
  return <Popover className={styles.dropdown}>{children}</Popover>
}

export function DropdownButton({ children }: { children: ReactNode }) {
  return (
    <PopoverButton className={`${commonStyles.link_redirect} ${styles.trigger}`}>
      {children}
      <span className={styles.chevron} aria-hidden="true" />
    </PopoverButton>
  )
}

export function DropdownPanel({ children }: { children: ReactNode }) {
  return (
    <PopoverPanel className={styles.panel}>
      {children}
    </PopoverPanel>
  )
}

export function DropdownLabel({ children }: { children: ReactNode }) {
  return <p className={styles.label}>{children}</p>
}

export function DropdownLink({ children, href, hrefLang, target }: DropdownLinkProps) {
  return (
    <CloseButton
      as="a"
      className={styles.link}
      href={href}
      hrefLang={hrefLang}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </CloseButton>
  )
}
