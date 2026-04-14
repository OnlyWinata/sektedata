import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winata Syahputra — Data Professional",
  description:
    "Data analytics portfolio with real-world case studies. Business intelligence, data analysis, and strategic insights.",
  keywords: [
    "data analyst",
    "business intelligence",
    "data analytics",
    "portfolio",
    "case study",
  ],
  openGraph: {
    title: "Winata Syahputra — Data Professional",
    description:
      "Data analytics portfolio with real-world case studies.",
    url: "https://winata.io",
    siteName: "Winata Syahputra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
