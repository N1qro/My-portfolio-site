import { type ImageProps } from "next/image"
import { type useTranslations } from "next-intl"
import innopolisLogo from "@/assets/img/innopolis.svg"
import bitLogo from "@/assets/img/bit.png"
import russiaFlag from "@/assets/img/flags/russia.svg"
import chinaFlag from "@/assets/img/flags/china.svg"

export interface EducationEntryData {
  id: string
  period: string
  title: string
  logo: ImageProps["src"]
  studyType: string
  description: string
  country?: {
    name: string
    flag: ImageProps["src"]
  }
  grade?: string
  documents?: {
    href: string
    label: string
    fileType?: string
  }[]
}

export function getEducationInfo(translate: ReturnType<typeof useTranslations>) {
  return {
    innopolis: {
      id: "innopolis",
      period: "2024 - 2028",
      title: translate("education.innopolis.title"),
      logo: innopolisLogo,
      studyType: translate("education.innopolis.studyType"),
      description: translate("education.innopolis.description"),
      country: { name: translate("education.russia"), flag: russiaFlag },
      grade: "4.97/5",
      documents: [{
        href: "/docs/bit-transcript.pdf",
        label: translate("education.transcript"),
        fileType: "PDF",
      }],
    },
    bitExchange: {
      id: "bit",
      period: translate("education.bit.period"),
      title: translate("education.bit.title"),
      logo: bitLogo,
      studyType: translate("education.bit.studyType"),
      description: translate("education.bit.description"),
      country: { name: translate("education.china"), flag: chinaFlag },
      grade: "3.7/4",
      documents: [{
        href: "/docs/bit-transcript.pdf",
        label: translate("education.transcript"),
        fileType: "PDF",
      }],
    },
  } satisfies Record<string, EducationEntryData>
}
