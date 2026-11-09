import { cacheLife } from "next/cache"
import { type Locale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { getPortfolioOwnerAge } from "@/lib/portfolio-owner"
import { ONE_DAY_IN_SECONDS } from "@/lib/time"

export async function HomeDescription({ locale }: { locale: Locale }) {
  "use cache"

  cacheLife({ revalidate: ONE_DAY_IN_SECONDS })

  const translate = await getTranslations({ locale, namespace: "home" })
  const portfolioOwnerAge = await getPortfolioOwnerAge()

  return (
    <p>{translate("description", { age: portfolioOwnerAge })}</p>
  )
}
