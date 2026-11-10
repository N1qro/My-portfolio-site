import projectStyles from "@/styles/projects.module.css"
import { useTranslations } from "next-intl"

interface PlayerProps {
  preview: string,
  src?: string,
  width: number,
  height: number,
}

export default function VideoPlayer({ width, height, preview, src }: PlayerProps) {
  const translate = useTranslations("project_page")

  if (src) {
    return (
      <video
        className={projectStyles.video_player}
        poster={preview} 
        controls
      >
        <source src={`/${src}`} type="video/mp4" />
      </video>
    )
  }

  return (
    <div className={projectStyles.not_found_wrapper}>
      <div className={projectStyles.video_not_found} style={{backgroundImage: `url(${preview})`}} />
      <h3>{translate("video_unavailable")}</h3>
    </div>
  )
}
