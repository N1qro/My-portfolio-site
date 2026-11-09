import type { StaticImageData } from "next/image"
import profilePhotoImage from "@/assets/img/personal/me.png"

export interface ProfilePhotoData {
  src: StaticImageData
  alt: string
  christmasHat?: {
    xPercent: number
    yPercent: number
    widthPercent: number
    rotationDegrees: number
  }
}

export const profilePhoto = {
  src: profilePhotoImage,
  alt: "thumbnail",
  christmasHat: {
    xPercent: 50,
    yPercent: 13,
    widthPercent: 32,
    rotationDegrees: 10,
  },
} satisfies ProfilePhotoData
