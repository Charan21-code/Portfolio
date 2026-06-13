"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:mulagiricharantej@gmail.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charantejmulagiri/",
    icon: Linkedin,
    external: true
  },
  {
    label: "GitHub",
    href: "https://github.com/Charan21-code",
    icon: Github,
    external: true
  }
];

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-oat bg-cream px-5 py-8 text-sm text-espresso/70 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-base font-semibold text-espresso">Mulagiri Charan Tej</p>
          <p className="font-mono text-xs uppercase text-espresso/45">
            Full-Stack &amp; Systems Engineer
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2.5 py-2 font-mono text-xs uppercase text-espresso/60 transition-colors hover:border-oat hover:text-espresso focus-ring"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
