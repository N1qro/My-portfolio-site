import { StaticImageData } from "next/image"

// Фоны карточек
import greenHouseBG from "@/assets/img/greenhouse-bg.jpg"
import discordBotBG from "@/assets/img/discord_bot_bg.png"
import youtubeBG from "@/assets/img/youtube-bg.png"
import petpreneurBG from "@/assets/img/petpreneur.png"
import shootingSeasBG from "@/assets/img/shootingSeas.png"
import habitLifeBG from "@/assets/img/habitLife.png"
import nftMarketOffenseBG from "@/assets/img/nftMarketOffense.png"
import noPreviewBG from "@/assets/img/no_preview.png"

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
    full_description: `
      Android приложение для удалённого управления поливом теплицы с возможностью
      его автоматизации. Подключается к теплицам по API для получения сенсорных данных
      и изменения состояния бороздок

      Приложение запрещает пользователю включать/отключать полив при достижении
      краевых значений, поэтому во избежание несчастных случаев был предусмотрен
      экстренный режим, который передаёт полный контроль пользователю

      Проект разрабатывался для отборочного этапа Московской предпроффесиональной олимпиады
    `,
    developmentCost: "2 месяца",
    rating: "95/100",
    madeFor: "Московская предпроф олимпиада",
    videoURL: "",
    gitLink: "https://github.com/mello-bit/greenhouse-app",
    previewImage: greenHouseBG,
    creation_date: new Date("2023-03-19"),
  },
  {
    id: 3,
    title: "Shooting Seas",
    tags: ["React", "Django"],
    short_description: "Веб игра по принципу морского боя для розыгрыша призов",
    full_description: `
      Веб-игра морской бой "Shooting Seas". Регистрируйся на сайте, участвуй
      в промоакции и получи шанс сыграть в морской бой с призами.
      У тебя будет несколько выстрелов и одного поле. Если повезёт, то заберёшь приз
      себе, если нет, то его получит кто-то другой.

      Проект сделан в качестве маркетинговой кампании и содержит
      в себе элементы геймификации для большей увлечённости пользователей.
      Сайт делался в качестве отборочного тура Московской Предпроффесиональной Олимпиады
    `,
    videoURL: "shootingseas.mp4",
    madeFor: "Московская предпроф олимпиада",
    rating: "100/100",
    gitLink: "https://github.com/N1qro/sea-battle-with-gifts.git",
    developmentCost: "1 месяц",
    previewImage: shootingSeasBG,
    creation_date: new Date("2024-02-14"),
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
    creation_date: new Date("2023-11-23"),
  },
  {
    id: 5,
    title: "HabitTracker",
    tags: ["NextJS"],
    short_description: "Трекер привычек с элементами геймификации",
    full_description: `
      Веб-приложение для отслеживания хороших привычек с элементами геймификации.
      Можно добавить сколько любое количество привычек, задать период их выполнения
      (ежедневно/еженедельно/ежемесячно) и за каждое их выполнение получать опыт
      и повышать свой уровень.

      Приложение реализовано как адаптивное PWA, поэтому его можно установить как на компьютер,
      так и на телефон. Избегать хороших привычек стало ещё сложнее 😉
    `,
    videoURL: "",
    gitLink: "",
    developmentCost: "1 неделя",
    madeFor: "Олимпиада PROD",
    previewImage: habitLifeBG,
    creation_date: new Date("2024-03-26"),
  },
  {
    id: 6,
    title: "NFT Market Offense",
    tags: ["Python", "Flask"],
    short_description: "Маркетплейс для создания и покупок NFT",
    full_description: `
      Площадка для торговли и создания NFT токенов.
      Прямо сейчас для покупки NFT не нужно пополять баланс криптовалютой,
      даже при заданной цене у токена, он всё равно бесплатен.

      Есть возможность просматривать галерею у пользователей.
      Фильтр на картинки не предусмотрен

      Проект делался для знакомства с вебом как с площадкой для разработки,
      тренировкой REST api, проектирования путей для маршрутизатора и прочего.
    `,
    videoURL: "",
    gitLink: "https://github.com/mello-bit/NFT-Market-Offense",
    madeFor: "Яндекс Лицей",
    rating: "86/100",
    developmentCost: "18 дней",
    previewImage: nftMarketOffenseBG,
    creation_date: new Date("2023-04-21"),
  },
  {
    id: 7,
    title: "Тинькофф встречи",
    tags: ["NextJS", "FastAPI", "Docker"],
    short_description: "Платформа для организации встреч с юр лицами",
    full_description: `
      Как все знают, у Тинькофф совсем нет отделений банка, поэтому единственная возможность
      обменяться документами или предметами с клиентом представляется через встречи. Особенно
      важны встречи с ЮР лицами, потому-что за каждого ИП или ООО ведётся огромная борьба
      из-за их возможности приносить намного больше денег, чем физ лица.

      На этом сайте ЮР лицо сможет самостоятельно записать себя на встречу с
      представителем и заранее увидеть список всех необходимых документов. Запись
      происходит в три шага, буквально за 2 минуты, что практически гарантирует организацию
      встречи при желании клиента.

      Проект представляет из себя интегрированный сервис, поэтому вход на сайт возможен
      только по ссылке-приглашению, которая уникальна для каждого клиента.
    `,
    developmentCost: "3 дня",
    madeFor: "Олимпиада PROD",
    gitLink: "https://github.com/N1qro/tinkoff-meets/",
    videoURL: "",
    previewImage: noPreviewBG,
    creation_date: new Date("2024-04-04"),
  },
  {
    id: 8,
    title: "Twitch notification bot",
    tags: ["Python", "Pycord", "Twitch API"],
    short_description: "Дискорд бот, отправляющий сообщения, когда кто-то из пользователей начинает стримить",
    full_description: `
      Discord бот, реализованный на новых "slash" командах, с приятным и понятным интерфейсом.
      Предоставляет возможность пользователям искать и подписываться на их любимых твич стримеров,
      чтобы получать уведомление о начале их трансляций.

      Бот идеален для самих стримеров, потому-что создав своё сообщество в Discord и добавив
      туда этого бота, они смогут уведомлять больше пользователей о начале своего стрима и
      получать от этого больший траффик
    `,
    madeFor: "Хобби проект",
    developmentCost: "1 месяц",
    gitLink: "https://github.com/N1qro/discord-twitch-notification-bot",
    videoURL: "",
    previewImage: discordBotBG,
    creation_date: new Date("2023-06-30"),
  },
]

export default projects