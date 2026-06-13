import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SystemsExplorer } from "@/components/systems-explorer";

export const metadata: Metadata = {
  title: "Systems"
};

export default function SystemsPage() {
  return (
    <>
      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            body="A searchable repository of engineering work spanning infrastructure, AI pipelines, public safety, and gamified product systems."
            eyebrow="[ Repository ]"
            title="Featured Engineering"
          />
        </div>
      </section>
      <SystemsExplorer />
    </>
  );
}
