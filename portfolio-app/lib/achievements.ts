import predprofParticipate from "@/assets/img/predprof_participate.png"
import { type useTranslations } from "next-intl"

interface Achievement {
  text: string,
  url?: string,
  acquiredYear?: number,
}


const getAchievements = (t: ReturnType<typeof useTranslations>):  Achievement[] => {
  return [
    {
      text: t("achievements.moscow_predprof_2024"),
      acquiredYear: 2024,
      url: "/docs/predprof_win.pdf",
    },
    {
      text: t("achievements.rosatom_2024"),
      acquiredYear: 2024,
      url: "/docs/rosatom_win.pdf"
    },
    {
      text: t("achievements.university_grant"),
      acquiredYear: 2024,
      url: "/docs/iu_grant.pdf"
    },
    {
      text: t("achievements.silver_medal"),
      acquiredYear: 2024,
      url: "/docs/silver_medal.pdf"
    },
    {
      text: t("achievements.yandex_lyceum_2022"),
      acquiredYear: 2022,
      url: "/docs/yandex_1.pdf",
    }, 
    {
      text: t("achievements.yandex_lyceum_2023"),
      acquiredYear: 2023,
      url: "/docs/yandex_2.pdf",
    },
    {
      text: t("achievements.react_course"),
      acquiredYear: 2023,
      url: "/docs/advanced_react.pdf",
    },
    {
      text: t("achievements.yandex_django"),
      acquiredYear: 2024,
      url: "/docs/yandex_django.pdf",
    },
    {
      text: t("achievements.moscow_predprof_2023"),
      acquiredYear: 2023,
      url: predprofParticipate.src,
    },
    {
      text: t("achievements.stankin_hackathon"),
      acquiredYear: 2022,
      url: "/docs/stankin.pdf"
    },
    {
      text: t("achievements.prod_2024"),
      acquiredYear: 2024,
      url: "/docs/prod.pdf",
    },
    {
      text: t("achievements.izumrud_math"),
      acquiredYear: 2024,
      url: "docs/izumr_math.pdf",
    },
    {
      text: t("achievements.izumrud_informatics"),
      acquiredYear: 2024,
      url: "docs/izumr_inf.pdf",
    },
  ]
}

export default getAchievements