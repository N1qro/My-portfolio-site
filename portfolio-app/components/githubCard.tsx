import Image from "next/image";
import Link from "next/link";
import githubImage from "@/assets/svg/github.svg"
import containerStyles from "@/styles/containers.module.css"
import { useTranslations } from "next-intl";

interface CardProps {
  src: string
}


export default function GithubCard({ src }: CardProps) {
  const t = useTranslations("project_page")

  return (
    <Link href={src} target="_blank" className={containerStyles.github_container}>
      <Image height={40} src={githubImage} alt="github-logo"/>
      <h4>{t("go_to_github")}</h4>
    </Link>
  )
}

