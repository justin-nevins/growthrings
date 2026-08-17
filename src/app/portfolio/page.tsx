"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, beforeAfterPairs, portfolioPage } from "@/data/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type Filter = "all" | "exterior" | "interior" | "detail" | "other";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Exteriors", value: "exterior" },
  { label: "Interiors", value: "interior" },
  { label: "Details", value: "detail" },
  { label: "Other", value: "other" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {portfolioPage.heading}{" "}
            <span className="text-amber">{portfolioPage.headingAccent}</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            {portfolioPage.text}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded font-medium text-sm uppercase tracking-wide transition-colors whitespace-nowrap ${
                  activeFilter === f.value
                    ? "bg-amber text-white"
                    : "bg-cream text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block break-inside-avoid overflow-hidden rounded-lg card-hover"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wide text-charcoal">
              {portfolioPage.beforeAfterHeading}{" "}
              <span className="text-amber">{portfolioPage.beforeAfterHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
              {portfolioPage.beforeAfterText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterPairs.slice(0, 6).map((pair) => (
              <BeforeAfterSlider
                key={pair.slug}
                beforeImage={`/images/before-after/${pair.slug}/before.jpeg`}
                afterImage={`/images/before-after/${pair.slug}/after.jpeg`}
                title={pair.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
