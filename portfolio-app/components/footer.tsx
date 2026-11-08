import containerStyles from "@/styles/containers.module.css"
import commonStyles from "@/styles/common.module.css"
import { githubLink } from "@/lib/constraints"
import { useTranslations } from "next-intl"


export default function Footer() {
  const t = useTranslations()

  return (
    <footer className={containerStyles.footer}>
      <p className="text-center">{t("footer.source_code")} <a href={githubLink} className={commonStyles.link}>GitHub</a> 💙</p>
    </footer>
  )
}
