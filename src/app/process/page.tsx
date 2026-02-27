import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From first conversation to keys in hand. Learn how Josh Krueger builds custom homes one at a time in Montana's Flathead Valley.",
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "2-4 weeks",
    description:
      "Every project begins with a conversation — your vision, your priorities, your land. We'll walk the site together, discuss what's realistic within your budget, and start shaping an approach. No sales pitch. Just an honest look at what we can build together.",
    image: "/images/process/17-foundation-forms-mountain-jobsite.jpeg",
  },
  {
    number: "02",
    title: "Design & Refine",
    duration: "4-8 weeks",
    description:
      "Josh collaborates with you on the design, drawing from three decades of build knowledge to guide every decision. Which materials hold up in Montana winters. Where to invest for impact. How to get the home you want within the budget you have. The design evolves until it's right — no rushing, no compromises on what matters.",
    image: "/images/details/06-timber-frame-vaulted-ceiling-beams.jpeg",
  },
  {
    number: "03",
    title: "Lock In",
    duration: "1-2 weeks",
    description:
      "With the design finalized, we present the contract, secure your deposit, and schedule our trusted subcontractors. Cost-plus pricing means complete transparency — you see actual material costs, actual labor costs, and Josh's fee. No hidden margins, no inflated contingencies.",
    image: "/images/process/09-timber-frame-commercial-construction.jpeg",
  },
  {
    number: "04",
    title: "Build",
    duration: "12-18 months",
    description:
      "This is where it all comes together. Josh is on site daily, managing every detail. You receive monthly invoices with a full cost breakdown and regular progress meetings to keep you informed. The job site stays immaculate — an orderly environment that reflects the standard of the finished product.",
    image: "/images/process/01-timber-frame-construction-framing.jpeg",
  },
  {
    number: "05",
    title: "Handover",
    duration: "2 weeks",
    description:
      "A thorough final walkthrough, punch list completion, and keys in hand. Because the same person who designed your home also managed the build and did the finish work, nothing falls through the cracks. Your home, built exactly as envisioned.",
    image: "/images/portfolio/interiors/01-great-room-timber-trusses-metal-railing.jpeg",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            How We <span className="text-amber">Build</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            From first conversation to keys in hand. One project at a time,
            12-24 months, with full transparency every step of the way.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
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
            What to <span className="text-amber">Expect</span>
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            A custom home takes time to do right. Plan for 12-24 months from
            your first meeting to move-in day. Because we take on only one
            project at a time, there are no delays from competing priorities —
            your timeline stays on track.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-amber font-[family-name:var(--font-barlow)]">
                $700k-1.5M
              </p>
              <p className="text-charcoal/60 mt-2">Build budget range</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-amber font-[family-name:var(--font-barlow)]">
                12-24 mo
              </p>
              <p className="text-charcoal/60 mt-2">Typical timeline</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-amber font-[family-name:var(--font-barlow)]">
                1 at a time
              </p>
              <p className="text-charcoal/60 mt-2">Projects in progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase">
            Ready to <span className="text-amber">Start?</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            The best way to begin is a phone call. Let&apos;s talk about your
            vision, your land, and whether we&apos;re a good fit.
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
    </>
  );
}
