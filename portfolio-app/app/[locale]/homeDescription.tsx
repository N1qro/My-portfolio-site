import { cacheLife } from "next/cache"
import { type Locale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { getPortfolioOwnerAge, ONE_DAY_IN_SECONDS } from "@/lib/portfolio-owner"

export async function HomeDescription({ locale }: { locale: Locale }) {
  "use cache"

  cacheLife({ revalidate: ONE_DAY_IN_SECONDS })

  const translate = await getTranslations({ locale, namespace: "home" })
  const portfolioOwnerAge = await getPortfolioOwnerAge()

  return (
    <p>{translate("description", { age: portfolioOwnerAge })}</p>
  )
}
