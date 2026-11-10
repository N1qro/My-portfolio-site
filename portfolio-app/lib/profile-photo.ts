import type { StaticImageData } from "next/image"
import profilePhotoImage from "@/assets/img/personal/me.png"

export interface ProfilePhotoData {
  src: StaticImageData
  christmasHat?: {
    xPercent: number
    yPercent: number
    widthPercent: number
    rotationDegrees: number
  }
}

export const profilePhotoData = {
  src: profilePhotoImage,
  christmasHat: {
    xPercent: 53,
    yPercent: 16,
    widthPercent: 31,
    rotationDegrees: 13,
  },
} satisfies ProfilePhotoData
