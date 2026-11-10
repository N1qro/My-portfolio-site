import Image from "next/image"
import christmasHat from "@/assets/img/santa-hat.png"
import { isChristmas } from "@/lib/christmas"
import type { ProfilePhotoData } from "@/lib/profile-photo"
import styles from "@/styles/profilePhoto.module.css"

interface ProfilePhotoProps {
  photo: ProfilePhotoData
  height: number
  alt: string
}

export function ProfilePhoto({ photo, height, alt }: ProfilePhotoProps) {
  return (
    <div className={styles.portrait}>
      <Image
        className={styles.photo}
        src={photo.src}
        alt={alt}
        height={height}
        quality={100}
      />
      <ChristmasHat photo={photo} />
    </div>
  )
}

async function ChristmasHat({ photo }: { photo: ProfilePhotoData }) {
  const christmasHatPlacement = photo.christmasHat
  if (!christmasHatPlacement) {
    return null
  }

  const christmasThemeEnabled = await isChristmas()
  if (!christmasThemeEnabled) {
    return null
  }

  return (
    <Image
      className={styles.hat}
      src={christmasHat}
      alt=""
      aria-hidden="true"
      style={{
        left: `${christmasHatPlacement.xPercent}%`,
        top: `${christmasHatPlacement.yPercent}%`,
        width: `${christmasHatPlacement.widthPercent}%`,
        transform: `translate(-50%, -100%) rotate(${christmasHatPlacement.rotationDegrees}deg)`,
      }}
    />
  )
}
