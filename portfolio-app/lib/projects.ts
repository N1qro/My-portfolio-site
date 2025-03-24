import { StaticImageData } from "next/image"
import { type useTranslations } from "next-intl";

// Фоны карточек
import greenHouseBG from "@/assets/img/greenhouse-bg.jpg"
import discordBotBG from "@/assets/img/discord_bot_bg.png"
import youtubeBG from "@/assets/img/youtube-bg.png"
import petpreneurBG from "@/assets/img/petpreneur.png"
import shootingSeasBG from "@/assets/img/shootingSeas.png"
import habitLifeBG from "@/assets/img/habitLife.png"
import nftMarketOffenseBG from "@/assets/img/nftMarketOffense.png"
import noPreviewBG from "@/assets/img/no_preview.png"
import {  } from "next-intl/server"

interface Member {
  firstName: string,
  lastName: string,
  position?: string,
  redirectUrl?: string,
  image?: string,
}

export interface ProjectInfo {
  id: number,
  title: string,
  madeFor?: string,          // Для чего делался проект
  developmentCost?: string,   // Длительность разработки
  rating?: string,           // Баллы за проект
  gitLink?: string,
  tags: string[],
  members?: Member[],
  short_description: string,
  full_description: string,
  videoURL?: string,
  slug: string,
  previewImage: StaticImageData,
  creation_date: Date,
}

const getProjects = (t: ReturnType<typeof useTranslations> | ((arg0: string) => string)): ProjectInfo[] => {
  return [
    {
      id: 1,
      title: t("projects.youtube_downloader.title"),
      tags: ["Python", "Qt", "Pytube"],
      short_description: t("projects.youtube_downloader.short_description"),
      full_description: t("projects.youtube_downloader.full_description"),
      developmentCost: t("projects.youtube_downloader.developmentCost"),
      madeFor: t("projects.youtube_downloader.madeFor"),
      rating: "100/100",
      gitLink: "https://github.com/mello-bit/YouTube-Video-Downloader",
      videoURL: "ytdownloader.mp4",
      slug: "yt-downloader",
      previewImage: youtubeBG,
      creation_date: new Date("2022-10-14"),
    },
    {
      id: 2,
      title: t("projects.greenhouse_app.title"),
      tags: ["Kotlin", "Android"],
      short_description: t("projects.greenhouse_app.short_description"),
      full_description: t("projects.greenhouse_app.full_description"),
      developmentCost: t("projects.greenhouse_app.developmentCost"),
      madeFor: t("projects.greenhouse_app.madeFor"),
      rating: "95/100",
      gitLink: "https://github.com/mello-bit/greenhouse-app",
      videoURL: "",
      slug: "greenhouse",
      previewImage: greenHouseBG,
      creation_date: new Date("2023-03-19"),
    },
    {
      id: 3,
      title: t("projects.shooting_seas.title"),
      tags: ["React", "Django"],
      short_description: t("projects.shooting_seas.short_description"),
      full_description: t("projects.shooting_seas.full_description"),
      developmentCost: t("projects.shooting_seas.developmentCost"),
      madeFor: t("projects.shooting_seas.madeFor"),
      rating: "100/100",
      gitLink: "https://github.com/N1qro/sea-battle-with-gifts.git",
      videoURL: "shootingseas.mp4",
      slug: "shootingseas",
      previewImage: shootingSeasBG,
      creation_date: new Date("2024-02-14"),
    },
    {
      id: 4,
      title: t("projects.petpreneur.title"),
      tags: ["Python", "Django"],
      short_description: t("projects.petpreneur.short_description"),
      full_description: t("projects.petpreneur.full_description"),
      developmentCost: t("projects.petpreneur.developmentCost"),
      madeFor: t("projects.petpreneur.madeFor"),
      rating: "21/28",
      gitLink: "https://github.com/N1qro/petpreneur",
      videoURL: "",
      slug: "petpreneur",
      previewImage: petpreneurBG,
      creation_date: new Date("2023-11-23"),
    },
    {
      id: 5,
      title: t("projects.habit_tracker.title"),
      tags: ["NextJS"],
      short_description: t("projects.habit_tracker.short_description"),
      full_description: t("projects.habit_tracker.full_description"),
      developmentCost: t("projects.habit_tracker.developmentCost"),
      madeFor: t("projects.habit_tracker.madeFor"),
      gitLink: "",
      videoURL: "",
      slug: "habittracker",
      previewImage: habitLifeBG,
      creation_date: new Date("2024-03-26"),
    },
    {
      id: 6,
      title: t("projects.nft_market_offense.title"),
      tags: ["Python", "Flask"],
      short_description: t("projects.nft_market_offense.short_description"),
      full_description: t("projects.nft_market_offense.full_description"),
      developmentCost: t("projects.nft_market_offense.developmentCost"),
      madeFor: t("projects.nft_market_offense.madeFor"),
      rating: "86/100",
      gitLink: "https://github.com/mello-bit/NFT-Market-Offense",
      videoURL: "",
      slug: "nftmarket",
      previewImage: nftMarketOffenseBG,
      creation_date: new Date("2023-04-21"),
    },
    {
      id: 7,
      title: t("projects.tinkoff_meets.title"),
      tags: ["NextJS", "FastAPI", "Docker"],
      short_description: t("projects.tinkoff_meets.short_description"),
      full_description: t("projects.tinkoff_meets.full_description"),
      developmentCost: t("projects.tinkoff_meets.developmentCost"),
      madeFor: t("projects.tinkoff_meets.madeFor"),
      gitLink: "https://github.com/N1qro/tinkoff-meets/",
      videoURL: "",
      slug: "tinkoff_meets",
      previewImage: noPreviewBG,
      creation_date: new Date("2024-04-04"),
    },
    {
      id: 8,
      title: t("projects.twitch_notification_bot.title"),
      tags: ["Python", "Pycord", "Twitch API"],
      short_description: t("projects.twitch_notification_bot.short_description"),
      full_description: t("projects.twitch_notification_bot.full_description"),
      developmentCost: t("projects.twitch_notification_bot.developmentCost"),
      madeFor: t("projects.twitch_notification_bot.madeFor"),
      gitLink: "https://github.com/N1qro/discord-twitch-notification-bot",
      videoURL: "",
      slug: "twitch_discord_bot",
      previewImage: discordBotBG,
      creation_date: new Date("2023-06-30"),
    },
  ]
}

export default getProjects