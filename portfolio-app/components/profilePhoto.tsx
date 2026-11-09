import Image from "next/image"
import christmasHat from "@/assets/img/santa-hat.png"
import { isChristmas } from "@/lib/christmas"
import type { ProfilePhotoData } from "@/lib/profile-photo"
import styles from "@/styles/profilePhoto.module.css"

interface ProfilePhotoProps {
  photo: ProfilePhotoData
}

export async function ProfilePhoto({ photo }: ProfilePhotoProps) {
  const christmasThemeEnabled = await isChristmas()
  const christmasHatPlacement = photo.christmasHat

  return (
    <div className={styles.portrait}>
      <Image
        className={styles.photo}
        src={photo.src}
        alt={photo.alt}
        height={500}
        quality={100}
      />
      {christmasThemeEnabled && christmasHatPlacement && (
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
      )}
    </div>
  )
}
