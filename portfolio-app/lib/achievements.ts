interface Achievement {
  text: string,
  url?: string,
  acquiredYear?: number,
}


const achievements: Achievement[] = [
  {
    text: "Закончил курс \"Основы программирования на Python\" с рейтингом в 70+ баллов",
    acquiredYear: 2022,
    url: "yea",
  },
  {
    text: "Закончил курс \"Промышленное программирование на Python\" с рейтингом в 100+ баллов",
    acquiredYear: 2023,
  },
  {
    text: "Закончил курс Advanced React для разработки Frontend приложений",
    acquiredYear: 2023,
  },
  {
    text: "Окончил специализацию Яндекса по программе \"Web-разработка на Django\"",
    acquiredYear: 2024,
  },
  {
    text: "Финалист предпрофессиональной олимпиады школьников по профилю \"Информационные технологии\"",
    acquiredYear: 2023
  },
  {
    text: "Финалист хакатона \"STANKIN\Data Science. Большие данные\"",
    acquiredYear: 2022
  },
  {
    text: "Финалист и первопроходец олимпиады PROD по промышленному программированию от Тинькофф",
    acquiredYear: 2024,
  },
  {
    text: "Победитель Московской предпроффесиональной олимпиады по продуктовому \"IT\" профилю 2024",
    acquiredYear: 2024,
  },
  {
    text: "Призёр 2 степени олимпиады \"РосАтом\" по информатике 2024",
    acquiredYear: 2024,
  },
]

export default achievements