import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Larchwood Construction | Custom Home Builder - Flathead Valley, Montana",
    template: "%s | Larchwood Construction",
  },
  description:
    "Custom homes built one at a time. Master craftsmanship in Montana's Flathead Valley. 30 years of hands-on expertise from design to finish carpentry.",
  keywords: [
    "custom home builder flathead",
    "custom home builder whitefish mt",
    "custom home builder kalispell",
    "general contractor flathead valley",
    "build house flathead valley",
    "luxury home builder montana",
    "cost plus home builder montana",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Larchwood Construction",
    title: "Larchwood Construction | Custom Home Builder - Flathead Valley, Montana",
    description:
      "Custom homes built one at a time. Master craftsmanship in Montana's Flathead Valley.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${barlow.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
