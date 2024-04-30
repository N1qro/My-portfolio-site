import Image from "next/image";
import siteLogo from "@/assets/img/hacker.png";
import { siteTitle } from "@/lib/constraints";
import Link from "next/link";
import styles from "@/styles/header.module.css";
import RootContainer from "./rootContainer";

function Header() {
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
              <Link href="/#projects" replace={true}>Проекты</Link>
            </li>
            <li>
              <Link href="/#achievements" replace={true}>Достижения</Link>
            </li>
            <li>
              <Link href="/#pictures" replace={true}>Фотографии</Link>
            </li>
            <li>
              <Link href="/#contact-me" replace={true}>Связаться со мной</Link>
            </li>
          </ul>
        </nav>
      </RootContainer>
    </header>
  );
}

export default Header;
