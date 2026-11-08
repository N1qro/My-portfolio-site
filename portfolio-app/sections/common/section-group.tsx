import { type ReactNode } from "react"
import styles from "./section-group.module.css"

export function SectionGroup({ children }: { children?: ReactNode }) {
  return <div className={styles.group}>{children}</div>
}
