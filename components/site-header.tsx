"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";

const navItems = [
  { href: "/", label: "[ Home ]" },
  { href: "/systems", label: "[ Systems ]" },
  { href: "/ledger", label: "[ Ledger ]" },
  { href: "/operator", label: "[ Operator ]" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-oat bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          className="focus-ring w-fit font-display text-xl font-bold text-espresso"
          href="/"
        >
          Systems Portfolio
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-2 text-sm"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                className={`focus-ring rounded-md border px-3 py-2 font-mono transition-colors ${
                  active
                    ? "border-terracotta bg-sand text-terracotta"
                    : "border-transparent text-espresso/75 hover:border-oat hover:text-espresso"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-espresso/70 px-3 py-2 font-mono text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
            href="/resume.pdf"
          >
            <FileText aria-hidden="true" size={15} strokeWidth={1.8} />
            [ Resume ]
          </Link>
        </nav>
      </div>
    </header>
  );
}
