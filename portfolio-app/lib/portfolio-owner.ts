import "server-only"
import { cacheLife } from "next/cache"
import { ONE_DAY_IN_SECONDS } from "./time"

// Only the month and year are stored to keep the exact birth date private.
const portfolioOwnerBirthDate = { year: 2006, month: 3 }

export async function getPortfolioOwnerAge(): Promise<number> {
  "use cache"

  cacheLife({ revalidate: ONE_DAY_IN_SECONDS })

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1 // getMonth(): 0–11
  let portfolioOwnerAge = currentYear - portfolioOwnerBirthDate.year

  if (currentMonth < portfolioOwnerBirthDate.month) {
    portfolioOwnerAge -= 1
  }

  return portfolioOwnerAge
}
