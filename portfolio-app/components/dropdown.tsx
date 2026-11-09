"use client"

import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import type { HTMLAttributeAnchorTarget, ReactNode } from "react"
import commonStyles from "@/styles/common.module.css"
import styles from "@/styles/dropdown.module.css"

interface DropdownProps {
  children: ReactNode
}

interface DropdownPanelProps extends DropdownProps {
  "aria-labelledby": string
}

interface DropdownLabelProps extends DropdownProps {
  id: string
}

interface DropdownLinkProps extends DropdownProps {
  href: string
  hrefLang?: string
  target?: HTMLAttributeAnchorTarget
}

export function Dropdown({ children }: DropdownProps) {
  return <Popover className={styles.dropdown}>{children}</Popover>
}

export function DropdownButton({ children }: DropdownProps) {
  return (
    <PopoverButton className={`${commonStyles.link_redirect} ${styles.trigger}`}>
      {children}
      <span className={styles.chevron} aria-hidden="true" />
    </PopoverButton>
  )
}

export function DropdownPanel({ children, "aria-labelledby": labelId }: DropdownPanelProps) {
  return (
    <PopoverPanel className={styles.panel} role="group" aria-labelledby={labelId}>
      {children}
    </PopoverPanel>
  )
}

export function DropdownLabel({ children, id }: DropdownLabelProps) {
  return <p id={id} className={styles.label}>{children}</p>
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
