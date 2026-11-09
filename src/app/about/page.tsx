import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import about from "@content/about.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {about.hero.heading}{" "}
            <span className="text-amber">{about.hero.headingAccent}</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            {about.hero.text}
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-4">
                  {about.story.heading}{" "}
                  <span className="text-amber">{about.story.headingAccent}</span>
                </h2>
                <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                  {about.story.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-amber pl-6 py-2 italic text-charcoal/80 text-lg">
                &ldquo;{about.story.quote}&rdquo;
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={about.story.photos[0].src}
                  alt={about.story.photos[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={about.story.photos[1].src}
                  alt={about.story.photos[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Still Do The Work */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-8">
            {about.jobSite.heading}{" "}
            <span className="text-amber">{about.jobSite.headingAccent}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.jobSite.cards.map((card) => (
              <div key={card.title} className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craftsman Difference */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-8">
            {about.difference.heading}{" "}
            <span className="text-amber">{about.difference.headingAccent}</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {about.difference.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {about.difference.photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    i % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase">
            {about.cta.heading}{" "}
            <span className="text-amber">{about.cta.headingAccent}</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">{about.cta.text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:border-amber hover:text-amber transition-colors"
            >
              {about.cta.messageButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
