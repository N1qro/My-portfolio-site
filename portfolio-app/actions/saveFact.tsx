"use server"

import { cookies } from "next/headers"

export default async function saveFact(index: number) {
  const cookieStore = await cookies()
  cookieStore.set("latestFact", index.toString())
}
