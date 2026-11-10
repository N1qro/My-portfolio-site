import Link from "next/link";
import { useTranslations } from "next-intl";

function NotFound() {
  const translate = useTranslations("not_found")

  return (
    <>
      <h2 className="mt-3">{translate("how_did_you_get_here")}</h2>
      <Link href="/" autoFocus>
        {"->"}{translate("go_home")} {"<-"}
      </Link>
    </>
  );
}

export default NotFound;
