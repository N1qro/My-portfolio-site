import { Link } from "@/i18n/navigation"

export default function LinkBack({ children }: React.PropsWithChildren) {
  return (
    <Link href="/#projects">{children}</Link>
  )
}
