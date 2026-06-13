import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

const variantClasses = {
  primary:
    "border-terracotta bg-terracotta text-cream hover:border-espresso hover:bg-espresso",
  outline:
    "border-espresso/70 bg-transparent text-espresso hover:border-terracotta hover:text-terracotta",
  ghost:
    "border-transparent bg-transparent text-espresso hover:border-oat hover:bg-sand"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = ""
}: ButtonLinkProps) {
  const classes = [
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors",
    variantClasses[variant],
    className
  ].join(" ");
  const Icon = external ? ArrowUpRight : ArrowRight;

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        <span>{children}</span>
        <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
      <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  );
}
