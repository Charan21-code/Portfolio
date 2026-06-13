import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Mulagiri Charan Tej",
    template: "%s | Mulagiri Charan Tej"
  },
  description:
    "Portfolio of Mulagiri Charan Tej — Full-stack engineer building AI pipelines, resilient backend systems, and human-in-the-loop applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
