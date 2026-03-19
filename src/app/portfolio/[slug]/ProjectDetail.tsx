"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-bold text-charcoal">
          Project not found
        </h1>
        <Link href="/portfolio" className="text-amber mt-4 inline-block">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/60 hover:text-amber transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-white/60">
            <span>{project.location}</span>
            {project.sqft && <span>· {project.sqft} sq ft</span>}
            {project.style && <span>· {project.style}</span>}
          </div>
        </div>
      </section>

      {/* Description + Highlights */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {project.description}
              </p>
            </div>
            {project.highlights && (
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm text-amber mb-4">
                  Project Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-charcoal/80">
                      <span className="w-2 h-2 bg-amber rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {project.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setLightboxIndex(i)}
                className="block break-inside-avoid w-full overflow-hidden rounded-lg cursor-pointer group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img}
                    alt={`${project.title} photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase">
            Want Something Like <span className="text-amber">This?</span>
          </h2>
          <p className="mt-4 text-white/60">
            Every project starts with a conversation about your vision, your
            land, and your budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:4068580748"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              (406) 858-0748
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:border-amber hover:text-amber transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-8">
            More <span className="text-amber">Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold font-[family-name:var(--font-barlow)] uppercase">
                      {p.title}
                    </h4>
                    <p className="text-white/60 text-sm">{p.location}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
