import Image from "next/image";
import Link from "next/link";
import githubImage from "@/assets/svg/github.svg"
import containerStyles from "@/styles/containers.module.css"

interface CardProps {
  src: string
}


export default function GithubCard({ src }: CardProps) {
  return (
    <Link href={src} className={containerStyles.github_container}>
      <Image height={40} src={githubImage} alt="github-logo"/>
      <h4>Посмотреть на GitHub</h4>
    </Link>
  )
}

