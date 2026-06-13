import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] border-b border-oat bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="font-mono text-xs uppercase text-terracotta">
          [ 404 ]
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold text-espresso">
          System not found.
        </h1>
        <p className="mt-5 max-w-xl leading-8 text-espresso/70">
          The requested case study is not in the current systems index.
        </p>
        <div className="mt-8">
          <ButtonLink href="/systems">Return to Systems</ButtonLink>
        </div>
      </div>
    </section>
  );
}
