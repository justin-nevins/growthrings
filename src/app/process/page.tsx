import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import process from "@content/process.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: process.meta.title,
  description: process.meta.description,
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {process.hero.heading}{" "}
            <span className="text-amber">{process.hero.headingAccent}</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            {process.hero.text}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16 lg:space-y-24">
            {process.steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-amber/20 font-[family-name:var(--font-barlow)]">
                      {step.number}
                    </span>
                    <div>
                      <h2 className="text-3xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal">
                        {step.title}
                      </h2>
                      <span className="text-sm text-amber font-medium uppercase tracking-wide">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal/70 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect callout */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-6">
            {process.expect.heading}{" "}
            <span className="text-amber">{process.expect.headingAccent}</span>
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            {process.expect.text}
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {process.expect.stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg">
                <p className="text-3xl font-bold text-amber font-[family-name:var(--font-barlow)]">
                  {stat.value}
                </p>
                <p className="text-charcoal/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase">
            {process.cta.heading}{" "}
            <span className="text-amber">{process.cta.headingAccent}</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">{process.cta.text}</p>
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
              {process.cta.messageButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
