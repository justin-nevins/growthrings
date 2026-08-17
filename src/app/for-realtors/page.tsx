import Image from "next/image";
import Link from "next/link";
import { Phone, AlertTriangle, CheckCircle, Handshake } from "lucide-react";
import type { Metadata } from "next";
import realtors from "@content/for-realtors.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: realtors.meta.title,
  description: realtors.meta.description,
};

export default function ForRealtorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {realtors.hero.heading}{" "}
            <span className="text-amber">{realtors.hero.headingAccent}</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            {realtors.hero.text}
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-amber font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm mb-4">
                <AlertTriangle className="h-5 w-5" />
                {realtors.problem.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-6">
                {realtors.problem.heading}{" "}
                <span className="text-amber">{realtors.problem.headingAccent}</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                {realtors.problem.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={realtors.problem.image}
                alt={realtors.problem.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm mb-4">
              <CheckCircle className="h-5 w-5" />
              {realtors.solution.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal">
              {realtors.solution.heading}{" "}
              <span className="text-amber">{realtors.solution.headingAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realtors.solution.cards.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Realtors Get */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={realtors.partnership.image}
                alt={realtors.partnership.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-amber font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm mb-4">
                <Handshake className="h-5 w-5" />
                {realtors.partnership.eyebrow}
              </div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-6">
                {realtors.partnership.heading}{" "}
                <span className="text-amber">{realtors.partnership.headingAccent}</span>
              </h2>
              <ul className="space-y-4">
                {realtors.partnership.items.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="w-2 h-2 bg-amber rounded-full shrink-0 mt-2" />
                    <div>
                      <h3 className="font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/60">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase">
            {realtors.cta.heading}{" "}
            <span className="text-amber">{realtors.cta.headingAccent}</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">{realtors.cta.text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              {realtors.cta.callButton}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:border-amber hover:text-amber transition-colors"
            >
              {realtors.cta.messageButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
