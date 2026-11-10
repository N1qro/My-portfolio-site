import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function NotFound() {
  const translate = useTranslations("not_found")

  return (
    <>
      <h2 className="mt-3">{translate("project_not_found")}</h2>
      <Link href="/#projects" scroll={true}>
        {"<-"} {translate("view_options")}
      </Link>
    </>
  );
}

export default NotFound;
