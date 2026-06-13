import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] border-b border-oat bg-cream flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-terracotta/5 blur-3xl rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 relative z-10 w-full">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase text-terracotta flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-terracotta" />
            404 Error
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-espresso leading-none tracking-tight">
            System<br />
            <span className="text-terracotta/90">Not Found</span>
          </h1>
          <p className="mt-8 text-xl text-espresso/60 leading-relaxed max-w-xl">
            The requested case study or route is not currently available in the systems index. It may have been archived or moved.
          </p>
          <div className="mt-12">
            <ButtonLink href="/systems">Return to Systems</ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
