import { type StaticImageData } from "next/image"
import { type useTranslations } from "next-intl"
import innopolis from "@/assets/img/innopolis.png"
import bit from "@/assets/img/bit.png"
import yandex from "@/assets/img/yandex.png"

export interface BackgroundEntry {
  id: string,
  period: string,
  title: string,
  logo: StaticImageData,
  description: string,
  country?: string,
  label?: string,
  role?: string,
  grade?: string,
  transcript?: { url: string, label: string },
}

interface Experience extends BackgroundEntry {
  months: number,
}

export const getEducation = (t: ReturnType<typeof useTranslations>): BackgroundEntry[] => [
  {
    id: "innopolis",
    period: "2024 - 2028",
    title: t("education.innopolis.title"),
    logo: innopolis,
    description: t("education.innopolis.description"),
    country: `🇷🇺 ${t("education.russia")}`,
    grade: "4.97/5",
    transcript: {
      url: "/docs/bit-transcript.pdf",
      label: t("education.innopolis.transcript"),
    },
  },
  {
    id: "bit",
    period: t("education.bit.period"),
    title: t("education.bit.title"),
    logo: bit,
    description: t("education.bit.description"),
    country: `🇨🇳 ${t("education.china")}`,
    grade: "3.7/4",
    transcript: {
      url: "/docs/bit-transcript.pdf",
      label: t("education.bit.transcript"),
    },
  },
]

export const getExperience = (t: ReturnType<typeof useTranslations>): Experience[] => [
  {
    id: "yandex",
    period: t("experience.yandex.period"),
    title: t("experience.yandex.title"),
    logo: yandex,
    label: t("experience.yandex.label"),
    role: t("experience.yandex.role"),
    description: t("experience.yandex.description"),
    months: 3,
  },
]
