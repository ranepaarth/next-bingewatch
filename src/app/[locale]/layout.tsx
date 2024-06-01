import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const locales = ["en", "hi"];
export function generateStaticParams() {
  return locales.map((locale) => locale);
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  unstable_setRequestLocale(params.locale);
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
