import containerStyles from "@/styles/containers.module.css"
import commonStyles from "@/styles/common.module.css"
import { githubLink } from "@/lib/constraints"


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={containerStyles.footer}>
      <p className="text-center">Исходный код сайта можно найти на <a href={githubLink} className={commonStyles.link}>GitHub</a> 💙</p>
    </footer>
  )
}