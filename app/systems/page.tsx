import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SystemsExplorer } from "@/components/systems-explorer";

import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Systems"
};

export default function SystemsPage() {
  return (
    <>
      <section className="border-b border-oat bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-terracotta/5 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase text-terracotta flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-terracotta" />
              Repository
            </p>
            <div className="max-w-3xl">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-espresso leading-none tracking-tight">
                Featured<br />
                <span className="text-terracotta/90">Engineering</span>
              </h1>
              <p className="mt-8 text-xl text-espresso/60 leading-relaxed max-w-xl">
                A searchable repository of engineering work spanning infrastructure, AI pipelines, public safety, and gamified product systems.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <SystemsExplorer />
    </>
  );
}
