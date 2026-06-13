import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioSystem } from "@/data/portfolio";

type ProjectCardProps = {
  system: PortfolioSystem;
  compact?: boolean;
};

export function ProjectCard({ system, compact = false }: ProjectCardProps) {
  return (
    <Link
      className="focus-ring group flex h-full flex-col justify-between rounded-lg border border-oat bg-sand p-5 transition-colors hover:border-teal/40 hover:bg-cream md:p-6"
      href={`/systems/${system.slug}`}
    >
      <div>
        <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase text-terracotta">
          <span>[ {system.categoryTag} ]</span>
          <span className="text-espresso/35">/</span>
          <span>{system.number}</span>
        </div>
        <h3 className="font-display text-2xl font-bold leading-tight text-espresso">
          {system.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-espresso/60">
          {system.subtitle}
        </p>
        <p
          className={`mt-5 leading-7 text-espresso/75 ${
            compact ? "text-sm" : "text-base"
          }`}
        >
          {system.hook}
        </p>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
        <span className="editorial-link">View case study</span>
        <ArrowRight
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
          size={16}
          strokeWidth={1.8}
        />
      </div>
    </Link>
  );
}
