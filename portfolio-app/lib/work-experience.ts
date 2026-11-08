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

export function getExperience(translate: ReturnType<typeof useTranslations>) {
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
