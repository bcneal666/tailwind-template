import { defaultMeta, viewport } from "@/utils/meta";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { languages } from "./i18n/settings";
import { NextUIProvider } from "@nextui-org/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};
export { viewport };
export const metadata = defaultMeta;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lng: string;
  }>;
}>) {
  return (
    <html lang={(await params).lng} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
