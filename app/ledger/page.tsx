"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  Zap,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { ledgerEntries } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

type FilterType = "All" | "Hackathon" | "Leadership";

const filters: FilterType[] = ["All", "Hackathon", "Leadership"];

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string; border: string }> = {
  Hackathon: {
    icon: Trophy,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200"
  },
  Leadership: {
    icon: Users,
    color: "text-teal",
    bg: "bg-teal/5",
    border: "border-teal/20"
  }
};

const stats = [
  { value: "2×", label: "Hackathons Won", icon: Trophy },
  { value: String(ledgerEntries.length), label: "Field Entries", icon: Zap },
  { value: "AAC", label: "Core Membership", icon: Users },
  { value: "1st", label: "Place — MGIT '24", icon: Trophy }
];

export default function LedgerPage() {
  const [active, setActive] = useState<FilterType>("All");

  const filtered = active === "All"
    ? ledgerEntries
    : ledgerEntries.filter((e) => e.category === active);

  return (
    <div className="bg-cream min-h-screen">

      {/* ── HEADER ── */}
      <section className="border-b border-oat bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-teal/4 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-teal" />
              Track Record & Leadership
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end">
              <div className="lg:col-span-7">
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-espresso leading-none tracking-tight">
                  The<br />
                  <span className="text-teal/80">Ledger</span>
                </h1>
                <p className="mt-8 text-xl text-espresso/60 leading-relaxed max-w-xl">
                  A chronological field-journal of momentum, execution, and community impact. Wins, deployments, and roles — all accounted for.
                </p>
              </div>

              {/* Stat row */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-oat border border-oat">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-sand p-6">
                      <div className="flex items-start justify-between">
                        <div className="font-display text-4xl font-bold text-espresso">{stat.value}</div>
                        <Icon size={16} className="text-teal/40 mt-1" strokeWidth={1.5} />
                      </div>
                      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-espresso/50">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="sticky top-[73px] z-30 border-b border-oat bg-cream/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active === f
                    ? "border-teal bg-teal text-cream"
                    : "border-oat text-espresso/60 hover:border-espresso/30 hover:text-espresso"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto shrink-0 font-mono text-xs text-espresso/30 pl-4">
              {filtered.length} entr{filtered.length === 1 ? "y" : "ies"}
            </span>
          </div>
        </div>
      </section>

      {/* ── ENTRY CARDS ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <div className="relative">
            {/* Vertical timeline rail */}
            <div className="absolute left-[11px] md:left-[23px] top-2 bottom-2 w-px bg-oat hidden sm:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {filtered.map((entry, i) => {
                  const config = categoryConfig[entry.category] ?? categoryConfig["System"];
                  const Icon = config.icon;
                  return (
                    <motion.div
                      key={`${entry.category}-${entry.deployment}`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="group relative flex gap-5 sm:gap-8"
                    >
                      {/* Timeline dot */}
                      <div className="relative z-10 hidden sm:flex shrink-0 w-12 h-12 rounded-full border-2 border-oat bg-cream items-center justify-center group-hover:border-teal group-hover:bg-teal/5 transition-colors">
                        <Icon size={18} className={`${config.color} transition-colors`} strokeWidth={1.6} />
                      </div>

                      {/* Card */}
                      <div className={`flex-1 rounded-2xl border ${config.border} ${config.bg} p-6 md:p-8 transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5`}>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          {/* Category pill */}
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${config.border} ${config.bg} font-mono text-xs uppercase tracking-widest ${config.color}`}>
                            <Icon size={11} strokeWidth={2} />
                            {entry.category}
                          </span>
                          {/* Year badge */}
                          <span className="font-mono text-xs uppercase tracking-widest text-espresso/40 border border-oat px-3 py-1 rounded-full bg-cream/80">
                            {entry.year}
                          </span>
                          {/* Hackathon winner badge */}
                          {entry.category === "Hackathon" && (
                            <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                              <Trophy size={11} strokeWidth={2} />
                              Winner
                            </span>
                          )}
                        </div>

                        <h2 className="font-serif text-xl md:text-2xl text-espresso font-medium leading-snug group-hover:text-teal transition-colors">
                          {entry.deployment}
                        </h2>
                        <p className="mt-3 text-espresso/65 leading-relaxed text-base">
                          {entry.impact}
                        </p>

                        <div className="mt-5 pt-5 border-t border-black/5 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-espresso/30 font-mono text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                            Entry {String(i + 1).padStart(2, "0")}
                          </div>
                          <ChevronRight size={14} className="text-espresso/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-mono text-sm uppercase tracking-widest text-espresso/30">No entries in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-oat bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-3 flex items-center gap-3">
                  <span className="w-4 h-px bg-terracotta" />
                  Looking for the full picture?
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso">
                  Explore the Systems
                </h2>
                <p className="mt-3 text-espresso/60 max-w-md">
                  Dig into the architecture, stack choices, and engineering decisions behind each deployment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/systems"
                  className="group inline-flex items-center gap-2 bg-espresso text-cream px-7 py-4 rounded-xl font-mono text-sm tracking-widest uppercase font-bold hover:bg-teal transition-colors"
                >
                  All Systems
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 border border-espresso/20 text-espresso px-7 py-4 rounded-xl font-mono text-sm tracking-widest uppercase hover:border-teal hover:text-teal transition-colors"
                >
                  Contact
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
