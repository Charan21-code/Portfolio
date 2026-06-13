import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Systems Portfolio",
    template: "%s | Systems Portfolio"
  },
  description:
    "A warm editorial engineering portfolio for AI pipelines, full-stack systems, and backend infrastructure."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-oat bg-cream px-5 py-8 text-sm text-espresso/70 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>Systems Portfolio</p>
            <p className="font-mono text-xs uppercase text-espresso/55">
              Warm Editorial Tech / Rich Cream / Terracotta
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
