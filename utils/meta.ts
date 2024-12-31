import { Metadata, Viewport } from "next";

// 将 viewport 配置分离出来
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const defaultMeta: Metadata = {
  title: "Tailwind-Template",
  description: "Tailwind-Template",
  keywords: ["Tailwind-Template", "Tailwind-Template", "Tailwind-Template"],
  referrer: "origin",
  openGraph: {
    type: "website",
    title: "Tailwind-Template",
    description: "Tailwind-Template",
    url: "https://Tailwind-Template.com",
    siteName: "Tailwind-Template",
    // images: ['https://Tailwind-Template.com/og.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind-Template",
    description: "Tailwind-Template",
    // images: ['https://Tailwind-Template.com/og.png'],
  },
};
