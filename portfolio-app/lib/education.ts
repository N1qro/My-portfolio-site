import { type ImageProps } from "next/image"
import { type useTranslations } from "next-intl"
import innopolis from "@/assets/img/innopolis.svg"
import bit from "@/assets/img/bit.png"
import russiaFlag from "@/assets/img/flags/russia.svg"
import chinaFlag from "@/assets/img/flags/china.svg"

export interface EducationEntryData {
  id: string
  period: string
  title: string
  logo: ImageProps["src"]
  studyType: string
  description: string
  country?: { name: string, flag: ImageProps["src"] }
  grade?: string
  transcriptUrl?: string
}

export function getEducation(translate: ReturnType<typeof useTranslations>) {
  return {
    innopolis: {
      id: "innopolis",
      period: "2024 - 2028",
      title: translate("education.innopolis.title"),
      logo: innopolis,
      studyType: translate("education.innopolis.studyType"),
      description: translate("education.innopolis.description"),
      country: { name: translate("education.russia"), flag: russiaFlag },
      grade: "4.97/5",
      transcriptUrl: "/docs/bit-transcript.pdf",
    },
    bitExchange: {
      id: "bit",
      period: translate("education.bit.period"),
      title: translate("education.bit.title"),
      logo: bit,
      studyType: translate("education.bit.studyType"),
      description: translate("education.bit.description"),
      country: { name: translate("education.china"), flag: chinaFlag },
      grade: "3.7/4",
      transcriptUrl: "/docs/bit-transcript.pdf",
    },
  } satisfies Record<string, EducationEntryData>
}
