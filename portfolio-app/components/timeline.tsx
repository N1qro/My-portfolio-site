import { Children, Fragment, isValidElement, type ComponentType, type ReactElement, type ReactNode } from "react"
import styles from "@/styles/timeline.module.css"

interface TimelineEntryProps {
  entry: { id: string }
}

export function getTimelineEntries<Props extends TimelineEntryProps>(
  children: ReactNode,
  entryComponent: ComponentType<Props>,
  sectionName: string,
): ReactElement<Props>[] {
  const entries: ReactElement<Props>[] = []

  Children.forEach(children, (child) => {
    if (child === null || child === undefined) return

    if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) {
      entries.push(...getTimelineEntries(child.props.children, entryComponent, sectionName))
      return
    }

    if (!isValidElement<Props>(child) || child.type !== entryComponent) {
      throw new Error(`${sectionName} only accepts its corresponding entry components.`)
    }

    entries.push(child)
  })

  return entries
}

export function Timeline({
  entries,
  layout,
  maxColumns = 1,
}: {
  entries: ReactElement<TimelineEntryProps>[]
  layout: "education" | "work"
  maxColumns?: 1 | 2
}) {
  return (
    <ol
      className={`${styles.timeline} ${layout === "education" ? styles.educationTimeline : styles.workTimeline}`}
      data-max-columns={maxColumns}
    >
      {entries.map((child) => <Fragment key={child.props.entry.id}>{child}</Fragment>)}
    </ol>
  )
}

export function TimelineDecoration() {
  return <>
    <span className={styles.marker} aria-hidden="true" />
    <span className={styles.connector} aria-hidden="true" />
    <span className={styles.endpoint} aria-hidden="true" />
  </>
}
