import projectStyles from "@/styles/projects.module.css"

interface PlayerProps {
  preview: string,
  src?: string,
  width: number,
  height: number,
}

export default function VideoPlayer({ width, height, preview, src }: PlayerProps) {
  if (src) {
    return (
      <video width={width} height={height} poster={preview} controls>
        <source src={`/${src}`} type="video/mp4" />
      </video>
    )
  }

  return (
    <div className={projectStyles.not_found_wrapper}>
      <div className={projectStyles.video_not_found} style={{backgroundImage: `url(${preview})`}} />
      <h3>Видео временно не доступно</h3>
    </div>
  )
}
