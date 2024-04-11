import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import RootContainer from "@/components/rootContainer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Новиков Андрей",
  description: "Сайт-портфолио 18 летнего Fullstack разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
