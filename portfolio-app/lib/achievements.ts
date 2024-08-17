import predprofParticipate from "@/assets/img/predprof_participate.png"

interface Achievement {
  text: string,
  url?: string,
  acquiredYear?: number,
}


const achievements: Achievement[] = [
  {
    text: "Победитель Московской предпроффесиональной олимпиады по продуктовому \"IT\" профилю 2024",
    acquiredYear: 2024,
    url: "/docs/predprof_win.pdf",
  },
  {
    text: "Призёр 2 степени олимпиады \"РосАтом\" по информатике 2024",
    acquiredYear: 2024,
    url: "/docs/rosatom_win.pdf"
  },
  {
    text: "Прошёл грантовый отбор в Университет Иннополис",
    acquiredYear: 2024,
    url: "/docs/iu_grant.pdf"
  },
  {
    text: "Получил серебрянную медаль за окончание 11 класса",
    acquiredYear: 2024,
    url: "/docs/silver_medal.pdf"
  },
  {
    text: "Закончил курс \"Основы программирования на Python\" с рейтингом в 70+ баллов",
    acquiredYear: 2022,
    url: "/docs/yandex_1.pdf",
  },
  {
    text: "Закончил курс \"Промышленное программирование на Python\" с рейтингом в 100+ баллов",
    acquiredYear: 2023,
    url: "/docs/yandex_2.pdf",
  },
  {
    text: "Закончил курс Advanced React для разработки Frontend приложений",
    acquiredYear: 2023,
    url: "/docs/advanced_react.pdf",
  },
  {
    text: "Окончил специализацию Яндекса по программе \"Web-разработка на Django\"",
    acquiredYear: 2024,
    url: "/docs/yandex_django.pdf",
  },
  {
    text: "Финалист предпрофессиональной олимпиады школьников по профилю \"Информационные технологии\"",
    acquiredYear: 2023,
    url: predprofParticipate.src,
  },
  {
    text: "Финалист хакатона \"STANKIN\\Data Science. Большие данные\"",
    acquiredYear: 2022,
    url: "/docs/stankin.pdf"
  },
  {
    text: "Финалист и первопроходец олимпиады PROD по промышленному программированию от Тинькофф",
    acquiredYear: 2024,
    url: "/docs/prod.pdf",
  },
  {
    text: "Финалист олимпиады Изумруд по математике",
    acquiredYear: 2024,
    url: "docs/izumr_math.pdf",
  },
  {
    text: "Финалист олимпиады Изумруд по информатике",
    acquiredYear: 2024,
    url: "docs/izumr_inf.pdf",
  },
]

export default achievements