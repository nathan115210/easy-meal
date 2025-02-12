// lib/getMetadata.ts
import type { Metadata } from "next";

export async function getMetadata(pageTitle?: string): Promise<Metadata> {
  const siteUrl = process.env.SITE_URL || "https://zhaohongyu.netlify.app";
  const title = `${process.env.SITE_AUTHOR} | ${pageTitle || "Easy Meal"}`;
  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: process.env.SITE_DESCRIPTION || "Default Description",
    applicationName: process.env.SITE_NAME || "Default App Name",
    authors: [
      { name: process.env.SITE_AUTHOR || "Default Author", url: siteUrl },
    ],
    generator: "Next.js, React, TailwindCSS",
    keywords: [
      "Easy Meal",
      "Cooking",
      "Recipes",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Food Blog",
      "Recipe Sharing",
      "Zhao Hongyu",
    ],
    openGraph: {
      type: "website",
      title: process.env.SITE_NAME || "Default Site Name",
      description: process.env.SITE_DESCRIPTION || "Default Description",
      url: siteUrl,
      siteName: process.env.SITE_NAME || "Default Site Name",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 800,
          height: 600,
        },
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1800,
          height: 1600,
        },
      ],
    },
    icons: {
      icon: `${siteUrl}/favicon.ico`,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
