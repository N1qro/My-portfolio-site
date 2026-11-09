import { isChristmas } from "@/lib/christmas"
import { ChristmasLights } from "./christmasLights"
import { Snow } from "./snow"

export async function ChristmasDecorations() {
  if (!await isChristmas()) return null

  return (
    <>
      <Snow />
      <ChristmasLights />
    </>
  )
}
