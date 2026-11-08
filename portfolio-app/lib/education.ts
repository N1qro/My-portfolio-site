import { type ImageProps } from "next/image"
import { type useTranslations } from "next-intl"
import innopolis from "@/assets/img/innopolis.svg"
import bit from "@/assets/img/bit.png"
import russiaFlag from "@/assets/img/flags/russia.svg"
import chinaFlag from "@/assets/img/flags/china.svg"

export interface Education {
  id: string
  period: string
  title: string
  logo: ImageProps["src"]
  description: string
  country?: { name: string, flag: ImageProps["src"] }
  grade?: string
  transcript?: { url: string, label: string }
}

export function getEducation(t: ReturnType<typeof useTranslations>) {
  return {
    innopolis: {
      id: "innopolis",
      period: "2024 - 2028",
      title: t("education.innopolis.title"),
      logo: innopolis,
      description: t("education.innopolis.description"),
      country: { name: t("education.russia"), flag: russiaFlag },
      grade: "4.97/5",
      transcript: {
        url: "/docs/bit-transcript.pdf",
        label: t("education.innopolis.transcript"),
      },
    },
    bitExchange: {
      id: "bit",
      period: t("education.bit.period"),
      title: t("education.bit.title"),
      logo: bit,
      description: t("education.bit.description"),
      country: { name: t("education.china"), flag: chinaFlag },
      grade: "3.7/4",
      transcript: {
        url: "/docs/bit-transcript.pdf",
        label: t("education.bit.transcript"),
      },
    },
  } satisfies Record<string, Education>
}
