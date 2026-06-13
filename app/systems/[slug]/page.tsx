import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { getSystemBySlug, systems } from "@/data/portfolio";

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
      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase text-terracotta">
            [ {system.number} / {system.tag} ]
          </p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-5xl font-bold leading-none text-espresso md:text-7xl">
            {system.title}
          </h1>
          <p className="mt-4 text-xl font-semibold text-espresso/60">
            {system.subtitle}
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-espresso/70">
            {system.summary}
          </p>
        </div>
      </section>

      <section className="border-b border-oat bg-sand">
        <div className="mx-auto grid max-w-7xl gap-px bg-oat px-5 md:grid-cols-2 md:px-8">
          {system.problem ? (
            <article className="bg-sand py-12 pr-0 md:py-16 md:pr-10">
              <p className="font-mono text-xs uppercase text-terracotta">
                [ The Problem ]
              </p>
              <p className="mt-5 text-2xl leading-10 text-espresso">
                {system.problem}
              </p>
            </article>
          ) : null}

          <article className="bg-sand py-12 md:py-16 md:pl-10">
            <p className="font-mono text-xs uppercase text-terracotta">
              [ {system.solutionLabel} ]
            </p>
            <p className="mt-5 text-2xl leading-10 text-espresso">
              {system.solution}
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase text-terracotta">
                [ Architecture & Workflow ]
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-espresso md:text-5xl">
                System Path
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-espresso/70">
              The diagram reads left to right on desktop and top to bottom on
              smaller screens, matching the operational flow behind the case
              study.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-oat lg:grid-cols-5">
            {system.workflow.map((step, index) => (
              <div className="relative bg-sand p-5 md:p-6" key={step}>
                <p className="font-mono text-xs uppercase text-terracotta">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 min-h-16 text-lg font-semibold leading-7 text-espresso">
                  {step}
                </p>
                {index < system.workflow.length - 1 ? (
                  <>
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute right-4 top-5 hidden text-gold lg:block"
                      size={18}
                      strokeWidth={1.8}
                    />
                    <ArrowDown
                      aria-hidden="true"
                      className="absolute bottom-4 right-5 text-gold lg:hidden"
                      size={18}
                      strokeWidth={1.8}
                    />
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase text-terracotta">
              [ Technical Implementation ]
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-espresso md:text-5xl">
              Stack Choices
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {system.stack.map((item) => (
                <span
                  className="rounded-md border border-oat bg-sand px-3 py-2 font-mono text-xs uppercase text-espresso/70"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-y border-oat">
            {system.implementation.map((item) => (
              <div
                className="grid gap-4 border-b border-oat py-6 last:border-b-0 md:grid-cols-[1rem_1fr]"
                key={item}
              >
                <span className="mt-2 h-2 w-2 rounded-sm bg-terracotta" />
                <p className="leading-8 text-espresso/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-oat bg-sand">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-mono text-xs uppercase text-terracotta">
              [ Live / Code Links ]
            </p>
            {system.impact ? (
              <p className="mt-3 text-lg font-semibold text-espresso">
                {system.impact}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
        </div>
      </section>
    </>
  );
}
