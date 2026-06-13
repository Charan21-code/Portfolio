import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { getSystemBySlug, systems } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";

type SystemPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params
}: SystemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    return {
      title: "System Not Found"
    };
  }

  return {
    title: `${system.title} Case Study`,
    description: system.summary
  };
}

export default async function SystemDetailPage({ params }: SystemPageProps) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  return (
    <>
      <FadeIn delay={0}>
        <section className="bg-cream border-b border-oat relative overflow-hidden">
          {/* Subtle decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/30 -skew-x-12 transform origin-top-right mix-blend-multiply opacity-50 pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24 relative z-10">
            <Link 
              href="/systems" 
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-espresso/50 hover:text-teal transition-colors mb-16 md:mb-20"
            >
              <ArrowLeft size={14} />
              Back to Systems
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-sm tracking-widest uppercase text-teal font-medium bg-teal/10 px-3 py-1 rounded-sm">
                  {system.number}
                </span>
                <span className="w-12 h-px bg-terracotta/30" />
                <span className="font-mono text-sm tracking-widest uppercase text-terracotta">
                  {system.tag}
                </span>
              </div>
              
              <h1 className="text-balance font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-espresso">
                {system.title}
              </h1>
              
              <p className="mt-8 text-2xl font-serif italic text-espresso/70 max-w-2xl">
                {system.subtitle}
              </p>
              
              <div className="mt-12 pt-8 border-t border-oat max-w-3xl">
                <p className="text-xl md:text-2xl leading-relaxed text-espresso/80 font-medium">
                  {system.summary}
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="bg-sand border-b border-oat">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* The Problem */}
            {system.problem ? (
              <FadeIn delay={0.1} className="lg:col-span-5">
                <div className="sticky top-24">
                  <h2 className="font-mono text-xs tracking-widest uppercase text-terracotta mb-6 flex items-center gap-3">
                    <span className="w-4 h-px bg-terracotta" />
                    The Problem
                  </h2>
                  <p className="text-3xl md:text-4xl leading-tight font-serif text-espresso">
                    "{system.problem}"
                  </p>
                </div>
              </FadeIn>
            ) : null}

            {/* The Solution */}
            <FadeIn delay={0.2} className={system.problem ? "lg:col-span-7" : "lg:col-span-12"}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-teal mb-6 flex items-center gap-3">
                <span className="w-4 h-px bg-teal" />
                {system.solutionLabel}
              </h2>
              <div className="prose prose-lg prose-espresso max-w-none">
                <p className="text-xl leading-relaxed text-espresso/80">
                  {system.solution}
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="bg-cream border-b border-oat relative overflow-hidden">
        {/* Subtle vertical line for the timeline on desktop */}
        <div className="hidden md:block absolute left-[50%] top-32 bottom-32 w-px bg-oat" />

        <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
          <FadeIn>
            <div className="text-center mb-24 relative z-10">
              <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-4">
                Architecture & Workflow
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-espresso bg-cream inline-block px-8">
                System Path
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-16 md:space-y-32">
            {system.workflow.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={step} delay={0.1} className="relative z-10">
                  <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Number block */}
                    <div className={`flex-1 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} w-full`}>
                      <div className="font-display text-[8rem] leading-none font-bold text-sand drop-shadow-sm select-none opacity-80">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    
                    {/* Node marker */}
                    <div className="hidden md:flex flex-col items-center justify-center w-8">
                      <div className="w-3 h-3 rounded-full bg-teal ring-4 ring-cream z-10" />
                    </div>

                    {/* Content block */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} w-full`}>
                      <div className="bg-white/50 backdrop-blur-sm border border-oat p-8 rounded-xl shadow-sm hover:border-teal/30 hover:shadow-md transition-all duration-300">
                        <h3 className="text-2xl font-serif font-medium text-espresso">
                          {step}
                        </h3>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech & Implementation */}
      <section className="bg-sand border-b border-oat">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Stack Sidebar */}
            <FadeIn delay={0.1} className="lg:col-span-4 lg:pr-12">
              <h2 className="font-mono text-xs tracking-widest uppercase text-terracotta mb-8 flex items-center gap-3">
                <span className="w-4 h-px bg-terracotta" />
                Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {system.stack.map((item) => (
                  <span
                    className="px-3 py-2 bg-cream border border-oat text-sm font-mono text-espresso/80 uppercase tracking-wide rounded hover:border-teal/40 hover:text-teal transition-colors"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Implementation details */}
            <FadeIn delay={0.2} className="lg:col-span-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-teal mb-8 flex items-center gap-3">
                <span className="w-4 h-px bg-teal" />
                Implementation Details
              </h2>
              <ul className="space-y-6">
                {system.implementation.map((item) => (
                  <li
                    className="flex items-start gap-4"
                    key={item}
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                    <p className="text-lg leading-relaxed text-espresso/80">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / Links */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <FadeIn className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-mono text-xs tracking-widest uppercase text-terracotta mb-4">
                Live Status / Artifacts
              </h2>
              {system.impact ? (
                <p className="text-2xl font-serif text-espresso leading-snug">
                  {system.impact}
                </p>
              ) : null}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {system.links.map((link, index) => (
                <ButtonLink
                  external={link.external}
                  href={link.href}
                  key={link.label}
                  variant={index === 0 ? "primary" : "outline"}
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
