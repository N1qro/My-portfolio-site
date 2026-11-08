import "server-only"
import { cacheLife } from "next/cache"

export const ONE_DAY_IN_SECONDS = 24 * 60 * 60

// The day is approximate to avoid publishing the exact birth date.
const portfolioOwnerBirthDate = { year: 2006, month: 3, day: 15 }

export async function getPortfolioOwnerAge(): Promise<number> {
  "use cache"

  cacheLife({ revalidate: ONE_DAY_IN_SECONDS })

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate()
  const birthdayHasPassed = currentMonth > portfolioOwnerBirthDate.month
    || (currentMonth === portfolioOwnerBirthDate.month && currentDay >= portfolioOwnerBirthDate.day)

  return currentYear - portfolioOwnerBirthDate.year - (birthdayHasPassed ? 0 : 1)
}
