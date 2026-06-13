"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { filterLabels, systems, type SystemCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

type ActiveFilter = "All" | SystemCategory;

export function SystemsExplorer() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("All");
  const [query, setQuery] = useState("");

  const filteredSystems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return systems.filter((system) => {
      const matchesFilter =
        activeFilter === "All" || system.categories.includes(activeFilter);

      const searchable = [
        system.title,
        system.subtitle,
        system.tag,
        system.categoryTag,
        system.problem,
        system.solution,
        system.stack.join(" ")
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesFilter && searchable.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  return (
    <section className="border-t border-oat">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="flex flex-col gap-5 border-b border-oat pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filterLabels.map((filter) => (
              <button
                className={`focus-ring rounded-md border px-3 py-2 font-mono text-xs uppercase transition-colors ${
                  activeFilter === filter
                    ? "border-terracotta bg-terracotta text-cream"
                    : "border-oat bg-sand text-espresso hover:border-gold hover:bg-cream"
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                [ {filter} ]
              </button>
            ))}
          </div>

          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search systems</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-espresso/45"
              size={17}
              strokeWidth={1.8}
            />
            <input
              className="focus-ring h-11 w-full rounded-md border border-oat bg-cream pl-10 pr-3 text-sm text-espresso placeholder:text-espresso/45"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search systems"
              type="search"
              value={query}
            />
          </label>
        </div>

        <div className="grid gap-px bg-oat md:grid-cols-2 xl:grid-cols-3">
          {filteredSystems.map((system) => (
            <ProjectCard compact key={system.slug} system={system} />
          ))}
        </div>

        {filteredSystems.length === 0 ? (
          <p className="border-x border-b border-oat bg-sand px-5 py-10 text-espresso/65">
            No systems match that query.
          </p>
        ) : null}
      </div>
    </section>
  );
}
