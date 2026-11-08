import { type ImageProps } from "next/image"
import { type useTranslations } from "next-intl"
import yandexLogo from "@/assets/img/yandex.svg"

export interface WorkExperienceEntryData {
  id: string
  period: string
  title: string
  logo: ImageProps["src"]
  role: string
  description: string
  durationMonths: number
  label?: string
}

export function getWorkInfo(translate: ReturnType<typeof useTranslations>) {
  return {
    yandexInternship: {
      id: "yandex",
      period: translate("experience.yandex.period"),
      title: translate("experience.yandex.title"),
      logo: yandexLogo,
      label: translate("experience.yandex.label"),
      role: translate("experience.yandex.role"),
      description: translate("experience.yandex.description"),
      durationMonths: 3,
    },
  } satisfies Record<string, WorkExperienceEntryData>
}

export function formatWorkExperienceDuration(
  workEntries: WorkExperienceEntryData[],
  translate: ReturnType<typeof useTranslations>,
): string {
  const totalExperienceMonths = workEntries.reduce(
    (totalMonths, workEntry) => totalMonths + workEntry.durationMonths,
    0,
  )
  const experienceYears = Math.floor(totalExperienceMonths / 12)
  const remainingExperienceMonths = totalExperienceMonths % 12
  const durationParts: string[] = []

  if (experienceYears > 0) {
    durationParts.push(translate("durationYears", { years: experienceYears }))
  }
  if (remainingExperienceMonths > 0 || totalExperienceMonths === 0) {
    durationParts.push(translate("durationMonths", { months: remainingExperienceMonths }))
  }

  return durationParts.join(" ")
}
