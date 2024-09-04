import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer";
import styles from "@/styles/containers.module.css"
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Новиков Андрей",
  description: "Сайт-портфолио 18 летнего Fullstack разработчика",
};

export const viewport: Viewport = {
  initialScale: 0.75,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = process.env.NODE_ENV === "production" ? "production" : "development"

  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics mode={mode} />
        <SpeedInsights debug={mode === "development"} />
        <Header />
        <div className={`${styles.root_container} mb-4`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
