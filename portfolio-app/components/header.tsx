import Image from "next/image";
import siteLogo from "@/assets/img/hacker.png";
import { siteTitle } from "@/lib/constraints";
import styles from "@/styles/header.module.css";
import RootContainer from "./rootContainer";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "@/i18n/localeSwitcher";

function Header() {
  const t = useTranslations()
  const locale = useLocale();
    
  return (
    <header className={styles.header}>
      <RootContainer>
        <Link href="/" className={styles.header_title}>
          <Image width={32} src={siteLogo} alt="site-logo" />
          <h2>{siteTitle}</h2>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/#projects" replace={true}>{t("header.projects")}</Link>
            </li>
            <li>
              <Link href="/#achievements" replace={true}>{t("header.achievements")}</Link>
            </li>
            <li>
              <Link href="/#pictures" replace={true}>{t("header.pictures")}</Link>
            </li>
            <li>
              <Link href="/#contact-me" replace={true}>{t("header.contact_me")}</Link>
            </li>
          </ul>
        </nav>
        <LocaleSwitcher/>
      </RootContainer>
    </header>
  );
}

export default Header;
