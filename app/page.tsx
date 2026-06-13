import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredSystems, hero, philosophy } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-73px)] overflow-hidden border-b border-oat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          src="/images/editorial-trek-cricket-hero.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FDFBF7_0%,rgba(253,251,247,0.96)_34%,rgba(253,251,247,0.78)_62%,rgba(253,251,247,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,#FDFBF7_0%,rgba(253,251,247,0)_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-7xl items-center px-5 py-16 md:px-8">
          <div className="max-w-5xl animate-fade-up">
            <p className="mb-5 font-mono text-xs uppercase text-terracotta">
              [ Builder & System Thinker ]
            </p>
            <h1 className="max-w-5xl text-balance font-display text-5xl font-bold leading-none text-espresso md:text-7xl lg:text-8xl">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-espresso/70 md:text-xl md:leading-9">
              {hero.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/systems">Explore the Systems</ButtonLink>
              <ButtonLink href="/resume.pdf" variant="outline">
                View Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading eyebrow="[ Philosophy ]" title="The Engineering Mindset" />
          <div className="mt-12 grid gap-px bg-oat md:grid-cols-3">
            {philosophy.map((pillar) => (
              <article
                className="min-h-72 bg-sand p-6 md:p-8"
                key={pillar.title}
              >
                <h3 className="font-display text-2xl font-bold text-espresso">
                  {pillar.title}
                </h3>
                <p className="mt-5 leading-8 text-espresso/70">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              body="A tight readout of the top systems: climate routing, cyber automation, and offline backend infrastructure."
              eyebrow="[ Active Deployments ]"
              title="Top 3 Systems"
            />
            <ButtonLink href="/systems" variant="outline">
              View All Systems
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-px bg-oat lg:grid-cols-3">
            {featuredSystems.map((system) => (
              <ProjectCard key={system.slug} system={system} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
