'use client';

import type { Metadata } from "next";
import { Database } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { ledgerEntries } from "@/data/portfolio";

// Note: metadata export doesn't work in 'use client' components.
// Move metadata to a parent server layout if needed, or use a separate generateMetadata export.
// For now, the page title is handled by the root layout template.

export default function LedgerPage() {
  return (
    <>
      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-oat bg-sand px-3 py-2 font-mono text-xs uppercase text-terracotta">
            <Database aria-hidden="true" size={15} strokeWidth={1.8} />
            Query Result
          </div>
          <SectionHeading
            body="A chronological, database-style readout of momentum, execution, and community impact."
            eyebrow="[ Track Record & Leadership ]"
            title="The Ledger"
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="overflow-x-auto border border-oat bg-sand">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-oat font-mono text-xs uppercase text-espresso/55">
                  <th className="w-28 px-4 py-4 font-medium">Year</th>
                  <th className="w-40 px-4 py-4 font-medium">Category</th>
                  <th className="px-4 py-4 font-medium">Deployment / Role</th>
                  <th className="px-4 py-4 font-medium">Impact</th>
                </tr>
              </thead>
              <tbody>
                {ledgerEntries.map((entry, index) => (
                  <motion.tr
                    key={`${entry.category}-${entry.deployment}`}
                    className="group border-b border-oat last:border-b-0 transition-colors hover:bg-[#1E5F5A]/[0.04] cursor-default"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{
                      duration: 0.55,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      delay: index * 0.06
                    }}
                  >
                    <td className="px-4 py-5 align-top font-mono text-sm text-terracotta group-hover:text-[#1E5F5A] transition-colors">
                      {entry.year}
                    </td>
                    <td className="px-4 py-5 align-top font-mono text-sm uppercase text-espresso/65">
                      {entry.category}
                    </td>
                    <td className="px-4 py-5 align-top text-lg font-semibold text-espresso">
                      {entry.deployment}
                    </td>
                    <td className="px-4 py-5 align-top leading-7 text-espresso/70">
                      {entry.impact}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
