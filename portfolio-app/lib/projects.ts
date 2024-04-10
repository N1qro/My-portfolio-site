import greenHouseBG from "@/assets/img/greenhouse-bg.jpg"
import discordBotBG from "@/assets/img/discord_bot_bg.png"
import youtubeBG from "@/assets/img/youtube-bg.png"
import petpreneurBG from "@/assets/img/petpreneur.png"
import shootingSeasBG from "@/assets/img/ShootingSeas.png"

import { StaticImageData } from "next/image"

export interface ProjectInfo {
  id: number,
  title: string,
  tags: string[]
  short_description: string,
  full_description: string,
  videoURL?: string,
  previewImage: StaticImageData,
  creation_date: Date,
}

const Projects: ProjectInfo[] = [
  {
    id: 1,
    title: "YouTube video downloader",
    tags: [],
    short_description: "Desktop приложение для установки видео с YouTube",
    full_description: "",
    videoURL: "",
    previewImage: youtubeBG,
    creation_date: new Date(),
  },
  {
    id: 2,
    title: "Greenhouse App",
    tags: [],
    short_description: "Андроид приложение для удалённого управления теплицей",
    full_description: "",
    videoURL: "",
    previewImage: greenHouseBG,
    creation_date: new Date(),
  },
  {
    id: 3,
    title: "Shooting Seas",
    tags: [],
    short_description: "Веб игра по принципу морского боя для розыгрыша призов",
    full_description: "",
    videoURL: "",
    previewImage: shootingSeasBG,
    creation_date: new Date(),
  },
  {
    id: 4,
    title: "Petpreneur",
    tags: [],
    short_description: "Сайт для объединения энтузиастов и единомышленников из разных сфер деятельности",
    full_description: "",
    videoURL: "",
    previewImage: petpreneurBG,
    creation_date: new Date(),
  },
  {
    id: 5,
    title: "HabitTracker",
    tags: [],
    short_description: "Трекер привычек с элементами геймификации",
    full_description: "",
    videoURL: "",
    previewImage: "",
    creation_date: new Date(),
  },
  {
    id: 6,
    title: "NFT Market Offense",
    tags: [],
    short_description: "Маркетплейс для создания и покупок NFT",
    full_description: "",
    videoURL: "",
    previewImage: "",
    creation_date: new Date(),
  },
  {
    id: 7,
    title: "Тинькофф встречи",
    tags: [],
    short_description: "Платформа для организации встреч с юр лицами",
    full_description: "",
    videoURL: "",
    previewImage: "",
    creation_date: new Date(),
  },
  {
    id: 7,
    title: "Twitch notification bot",
    tags: [],
    short_description: "Дискорд бот, отправляющий сообщения, когда кто-то из пользователей начинает стримить",
    full_description: "",
    videoURL: "",
    previewImage: discordBotBG,
    creation_date: new Date(),
  },
]

export default Projects