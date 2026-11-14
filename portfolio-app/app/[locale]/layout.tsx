import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer";
import styles from "@/styles/containers.module.css"
import { SpeedInsights } from "@vercel/speed-insights/next";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getPortfolioOwnerAge} from '@/lib/portfolio-owner';
import { ChristmasDecorations } from '@/components/christmas/christmasDecorations';

const inter = Manrope({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params
  const translate = await getTranslations({ locale })
  const portfolioOwnerAge = await getPortfolioOwnerAge()

  return {
    title: translate("author.fullname"),
    description: translate("metadata.description", { age: portfolioOwnerAge }),
    icons: {
      icon: [
        { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    other: {
      "apple-mobile-web-app-title": "andycodes",
    },
  }
}

export const viewport: Viewport = {
  initialScale: 0.75,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const mode = process.env.NODE_ENV === "production" ? "production" : "development"

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={inter.className}>
        <ChristmasDecorations />
        <Analytics mode={mode} />
        <SpeedInsights debug={mode === "development"} />
        <NextIntlClientProvider>
          <Header />
          <div className={`${styles.root_container} mb-4`}>
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
