import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Raj Kumar R ✌️",
  description: "AI & Full Stack Developer | SaaS Product Builder",
  keywords: "Raj Kumar R, Full Stack Developer, SaaS Builder, AI Enthusiast, React, Next.js",
  authors: [{ name: "Raj Kumar R" }],
  creator: "Raj Kumar R",
  publisher: "Raj Kumar R",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Raj Kumar R - AI & Full Stack Developer",
    description: "AI & Full Stack Developer | SaaS Product Builder",
    url: "https://github.com/VII-XXIX",
    siteName: "Raj Kumar R's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar R - AI & Full Stack Developer",
    description: "AI & Full Stack Developer | SaaS Product Builder",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
