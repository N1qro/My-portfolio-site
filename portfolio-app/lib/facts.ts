import { type useTranslations } from "next-intl"

// Change this number accordingly to the corresponding number of
// facts in the messages translation files
const factNumber = 7

const getFacts = (t: ReturnType<typeof useTranslations>): string[] => {
  const facts = []

  for (let i = 1; i <= factNumber; i++) {
    facts.push(t(`personal_facts.fact_${i}`))
  }

  return facts
}

export default getFacts