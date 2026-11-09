"use client"

import { Fluri, type WeatherController, type WeatherOptions } from "@fluritheme/fluri-react"
import { christmasPack, type ChristmasOptions } from "@fluritheme/fluri/christmas"
import { useState } from "react"
import styles from "@/styles/christmasLights.module.css"

const christmasLightsSettings: ChristmasOptions = {
  lights: {
    spacing: 48,
    warmth: 0.3,
    twinkle: true,
  },
  palette: ["#ff6b6b", "#ffe08a", "#6bdca8", "#73c9ff", "#eaa0ef"],
  garlands: false,
  ornaments: false,
  gifts: false,
  candyCanes: false,
  wreath: false,
  icicles: false,
  sparkle: false,
  frost: false,
  plough: false,
}

const lightsRendererSettings: WeatherOptions = {
  snow: {
    enabled: false,
    particleCount: 0,
    accumulation: { enabled: false },
  },
  dom: {
    detection: "explicit",
    observeMutations: false,
    respectLayers: false,
    maxSurfaces: 1,
  },
  interactions: {
    brush: { enabled: false },
    snowballs: { enabled: false },
    snowman: { enabled: false },
    pointerVortex: { enabled: false },
  },
  performance: {
    maxFPS: 30,
    maxDPR: 1.5,
  },
  accessibility: {
    reducedMotion: "respect",
    controls: false,
  },
}

function addChristmasLights(weather: WeatherController) {
  weather.use(christmasPack(christmasLightsSettings))
}

export function ChristmasLights() {
  const [lightsContainer, setLightsContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setLightsContainer} className={styles.container} aria-hidden="true">
      <div className={styles.surface} data-weather-surface data-holiday-lights />
      {lightsContainer && (
        <Fluri
          options={{ ...lightsRendererSettings, container: lightsContainer }}
          onReady={addChristmasLights}
        />
      )}
    </div>
  )
}
