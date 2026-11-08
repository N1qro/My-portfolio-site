import { Children, Fragment, cloneElement, isValidElement, type ComponentType, type ReactElement, type ReactNode } from "react"

interface SectionEntryProps {
  entry: { id: string }
}

export function collectSectionEntries<EntryProps extends SectionEntryProps>(
  children: ReactNode,
  entryComponent: ComponentType<EntryProps>,
  sectionName: string,
): ReactElement<EntryProps>[] {
  const visibleEntries: ReactElement<EntryProps>[] = []

  Children.forEach(children, (child) => {
    if (child === null || child === undefined) return

    if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) {
      visibleEntries.push(...collectSectionEntries(child.props.children, entryComponent, sectionName))
      return
    }

    if (!isValidElement<EntryProps>(child) || child.type !== entryComponent) {
      throw new Error(`${sectionName} only accepts its corresponding Entry components.`)
    }

    visibleEntries.push(cloneElement(child, { ...child.props, key: child.props.entry.id }))
  })

  return visibleEntries
}
