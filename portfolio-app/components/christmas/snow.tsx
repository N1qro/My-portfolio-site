"use client"

import type { Engine, ISourceOptions } from "@tsparticles/engine"
import { NextParticles, NextParticlesProvider } from "@tsparticles/nextjs"
import { loadMotionPlugin } from "@tsparticles/plugin-motion"
import { loadSnowPreset } from "@tsparticles/preset-snow"
import styles from "@/styles/snow.module.css"

async function initializeSnow(engine: Engine) {
  await loadSnowPreset(engine)
  await loadMotionPlugin(engine)
}

const snowOptions: ISourceOptions = {
  preset: "snow",
  background: {
    opacity: 0,
  },
  fullScreen: {
    enable: false,
  },
  fpsLimit: 30,
  pauseOnBlur: true,
  motion: {
    disable: true,
  },
  particles: {
    size: {
      value: { min: 1, max: 4 },
    },
    number: {
      value: 100,
      density: {
        enable: true,
        width: 1280,
        height: 900,
      },
    },
    paint: {
      fill: {
        color: { value: "#fff" },
      },
    },
  },
  style: {
    pointerEvents: "none",
  },
}

export function Snow() {
  return (
    <div className={styles.snow} aria-hidden="true">
      <NextParticlesProvider init={initializeSnow}>
        <NextParticles id="christmas-snow" className={styles.canvas} options={snowOptions} />
      </NextParticlesProvider>
    </div>
  )
}
