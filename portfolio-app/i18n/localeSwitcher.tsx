import React from 'react'
import { routing } from './routing';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import englishFlag from "@/assets/img/usaFlag.png"
import russianFlag from "@/assets/img/russiaFlag.png"
import { Link } from './navigation';
import style from "@/styles/header.module.css"

const locales = routing.locales;

export default function LocaleSwitcher() {
  const locale = useLocale()

  if (locale == "en") {
    return (
      <Link href="/" locale="ru" className={style.locale_switcher}>
        <Image width={32} height={32} src={englishFlag} alt='English language' />
        <p>{locale.toUpperCase()}</p>
      </Link>
    )
  }

  return (
    <Link href="/" locale="en" className={style.locale_switcher}>
        <Image width={32} height={32} src={russianFlag} alt='Russian language' />
        <p>{locale.toUpperCase()}</p>
      </Link>
  )
}
