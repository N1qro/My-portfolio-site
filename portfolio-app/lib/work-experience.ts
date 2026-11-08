import { type ImageProps } from "next/image"
import { type useTranslations } from "next-intl"
import yandex from "@/assets/img/yandex.svg"

export interface WorkExperience {
  id: string
  period: string
  title: string
  logo: ImageProps["src"]
  role: string
  description: string
  months: number
  label?: string
}

export function getExperience(t: ReturnType<typeof useTranslations>) {
  return {
    yandexInternship: {
      id: "yandex",
      period: t("experience.yandex.period"),
      title: t("experience.yandex.title"),
      logo: yandex,
      label: t("experience.yandex.label"),
      role: t("experience.yandex.role"),
      description: t("experience.yandex.description"),
      months: 3,
    },
  } satisfies Record<string, WorkExperience>
}
