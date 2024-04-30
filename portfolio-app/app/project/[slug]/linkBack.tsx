"use client"

import { useRouter } from "next/navigation"
import commonStyles from "@/styles/common.module.css"
import Link from "next/link"

export default function LinkBack({ children }: React.PropsWithChildren) {
  const router = useRouter()

  return (
    <Link
      href=".."
      className={commonStyles.link_button}
      onClick={e => {
        e.preventDefault()
        router.back()
      }}
    >{children}</Link>
  )
}