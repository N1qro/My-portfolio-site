import { StaticImageData } from "next/image"

// Фоны карточек
import greenHouseBG from "@/assets/img/greenhouse-bg.jpg"
import discordBotBG from "@/assets/img/discord_bot_bg.png"
import youtubeBG from "@/assets/img/youtube-bg.png"
import petpreneurBG from "@/assets/img/petpreneur.png"
import shootingSeasBG from "@/assets/img/shootingSeas.png"
import habitLifeBG from "@/assets/img/habitLife.png"
import nftMarketOffenseBG from "@/assets/img/nftMarketOffense.png"

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
  previewImage: StaticImageData,
  creation_date: Date,
}

const projects: ProjectInfo[] = [
  {
    id: 1,
    title: "YouTube video downloader",
    tags: ["Python", "Qt", "Pytube"],
    short_description: "Desktop приложение для установки видео с YouTube",
    full_description: `
      Семейное приложение для установки и просмотра видео с YouTube.
      Внутри есть возможность создать до 3 профилей, где у каждого будут
      отображаться только свои видео. В приложении есть удобный интерфейс удаления
      и запуска скачанных видео, можно скачать субтитры отдельно.
      Также есть возможность передавать видео с компьютера
      на телефон с помощью WiFi и QR-кода. Приложение было сделано в качестве самого первого
      проекта в Яндекс Лицее, за который мы получили наивысший балл

      * После изменения политики YouTube в отношение к подобному роду приложениям в 2023г,
      оно стало скачивать стабильно только видео в формате 720p, в некоторых случаях
      возможны и другие проблемы
    `,
    developmentCost: "36 дней",
    madeFor: "Проект Яндекс лицея",
    rating: "100/100",
    gitLink: "https://github.com/mello-bit/YouTube-Video-Downloader",
    videoURL: "ytdownloader.mp4",
    previewImage: youtubeBG,
    creation_date: new Date("2022-10-14"),
  },
  {
    id: 2,
    title: "Greenhouse App",
    tags: ["Kotlin", "Android"],
    short_description: "Андроид приложение для удалённого управления теплицей",
    full_description: "",
    developmentCost: "4 месяца",
    videoURL: "",
    previewImage: greenHouseBG,
    creation_date: new Date(),
  },
  {
    id: 3,
    title: "Shooting Seas",
    tags: ["React", "Django"],
    short_description: "Веб игра по принципу морского боя для розыгрыша призов",
    full_description: `
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    `,
    videoURL: "shootingseas.mp4",
    madeFor: "Московская предпроф олимпиада",
    rating: "100/100",
    gitLink: "https://fdsaf",
    developmentCost: "2 месяца",
    previewImage: shootingSeasBG,
    creation_date: new Date(),
  },
  {
    id: 4,
    title: "Petpreneur",
    tags: ["Python", "Django"],
    short_description: "Сайт для объединения энтузиастов и единомышленников из разных сфер деятельности",
    full_description: `
      Платформа для объединения людей из разных сфер деятельности для
      работы над совместными проектами или стартапами. Если вы веб-дизайнер и вам
      нужны разработчики для создания своего сайта или вы наоборот хотите куда-нибудь
      присоединиться, то специально для вас есть Petpreneur!

      Заполните своё резюме, откликнитесь на другие резюме и начните работу над проектом
      как можно быстрее. Больше никаких ручных поисков на форумах или группах в вк, здесь
      всё сделано за вас. Быстро, автоматизировано и качественно. 
    `,
    videoURL: "",
    gitLink: "https://github.com/N1qro/petpreneur",
    madeFor: "Специализация Яндекс Лицея",
    rating: "21/28",
    developmentCost: "20 дней",
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
    gitLink: "",
    developmentCost: "",
    previewImage: habitLifeBG,
    creation_date: new Date(),
  },
  {
    id: 6,
    title: "NFT Market Offense",
    tags: [],
    short_description: "Маркетплейс для создания и покупок NFT",
    full_description: "",
    videoURL: "",
    gitLink: "",
    previewImage: nftMarketOffenseBG,
    creation_date: new Date(),
  },
  {
    id: 7,
    title: "Тинькофф встречи",
    tags: [],
    short_description: "Платформа для организации встреч с юр лицами",
    full_description: "",
    videoURL: "",
    previewImage: nftMarketOffenseBG,
    creation_date: new Date(),
  },
  {
    id: 8,
    title: "Twitch notification bot",
    tags: [],
    short_description: "Дискорд бот, отправляющий сообщения, когда кто-то из пользователей начинает стримить",
    full_description: "",
    videoURL: "",
    previewImage: discordBotBG,
    creation_date: new Date(),
  },
]

export default projects