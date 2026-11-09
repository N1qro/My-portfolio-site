import "server-only"
import { cacheLife } from "next/cache"
import { ONE_DAY_IN_SECONDS } from "./time"

const christmasSeasonStartMonth = 11
const christmasSeasonEndMonth = 2

export async function isChristmas(): Promise<boolean> {
  "use cache"
  cacheLife({ revalidate: ONE_DAY_IN_SECONDS })

  const currentMonth = new Date().getMonth() + 1 // getMonth(): 0–11
  return currentMonth >= christmasSeasonStartMonth || currentMonth <= christmasSeasonEndMonth
}
