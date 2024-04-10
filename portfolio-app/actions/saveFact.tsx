"use server"

import { cookies } from "next/headers"

export default async function saveFact(index: number) {
  cookies().set("latestFact", index.toString())
}