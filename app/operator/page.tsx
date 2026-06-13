import type { Metadata } from "next";
import { ArrowUpRight, Compass, Trophy } from "lucide-react";
import { contactLinks, operatorStatement } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Operator"
};

export default function OperatorPage() {
  return (
    <div className="bg-sand">
      <section className="border-b border-oat">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-xs uppercase text-terracotta">
              [ Beyond the Terminal ]
            </p>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-none text-espresso md:text-7xl">
              The Operator
            </h1>
            <p className="mt-8 max-w-4xl text-2xl leading-10 text-espresso">
              {operatorStatement}
            </p>
          </div>

          <div className="grid gap-px bg-oat self-start">
            <article className="bg-cream p-6">
              <Compass
                aria-hidden="true"
                className="text-terracotta"
                size={24}
                strokeWidth={1.7}
              />
              <h2 className="mt-5 font-display text-2xl font-bold text-espresso">
                High-altitude, budget-conscious trekking
              </h2>
              <p className="mt-4 leading-7 text-espresso/70">
                The travel texture is grit, adaptability, and preference for
                real-world exploration over luxury.
              </p>
            </article>
            <article className="bg-cream p-6">
              <Trophy
                aria-hidden="true"
                className="text-terracotta"
                size={24}
                strokeWidth={1.7}
              />
              <h2 className="mt-5 font-display text-2xl font-bold text-espresso">
                The master run-chaser mindset
              </h2>
              <p className="mt-4 leading-7 text-espresso/70">
                The cricket psychology is composure under pressure, clean
                execution, and relentless deadline chasing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sand" id="contact">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase text-terracotta">
            [ Contact ]
          </p>
          <div className="mt-8 grid gap-px bg-oat md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                className="focus-ring group flex min-h-44 items-end justify-between bg-cream p-6 transition-colors hover:bg-sand"
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                <span className="font-display text-4xl font-bold text-espresso">
                  {link.label}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="text-terracotta transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={24}
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
