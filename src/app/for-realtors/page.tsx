import Image from "next/image";
import Link from "next/link";
import { Phone, AlertTriangle, CheckCircle, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Realtors",
  description:
    "Your clients deserve a builder you trust. Partner with GrowthRings for reliable, transparent custom home building in Montana's Flathead Valley.",
};

export default function ForRealtorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            Your Clients Deserve a Builder{" "}
            <span className="text-amber">You Trust</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            When your client purchases land and needs a builder, we want to be
            your first recommendation. A partnership that makes you look good
            and keeps your clients coming back.
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
                The Problem You&apos;ve Seen
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-6">
                You&apos;ve Seen It <span className="text-amber">Go Wrong</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  Your client hires the wrong contractor. The project goes
                  sideways. Ghosting. Delays. Excuses. Unprofessional job sites.
                  And the relationship you built with that client suffers.
                </p>
                <p>
                  When a land buyer needs a builder, the referral you make
                  reflects directly on you. A bad recommendation costs you future
                  business.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/process/01-timber-frame-construction-framing.jpeg"
                alt="Professional construction site"
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
              The Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal">
              A Referral You Can Be{" "}
              <span className="text-amber">Proud Of</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "One Project Focus",
                text: "Your client is the only client. One project at a time means undivided attention, clear communication, and no excuses about other jobs.",
              },
              {
                title: "Clear Communication",
                text: "Monthly cost breakdowns, regular progress meetings, and direct phone access. Your client will never wonder what's happening with their build.",
              },
              {
                title: "Professional Job Sites",
                text: "Clean, organized, and safe. A job site you'd be comfortable walking through with a prospective buyer — because that's exactly the kind of operation we run.",
              },
              {
                title: "Reputation-Built Business",
                text: "30 years of work, zero advertising. Every project has come through earned trust and personal relationships. That track record protects your referral.",
              },
            ].map((item) => (
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
                src="/images/hero/05-cedar-shingle-craftsman-autumn-exterior.jpeg"
                alt="Completed craftsman home"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-amber font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm mb-4">
                <Handshake className="h-5 w-5" />
                What You Get
              </div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-6">
                A True <span className="text-amber">Partnership</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Reliable Referral Partner",
                    text: "One call to me saves your client months of searching and vetting builders.",
                  },
                  {
                    title: "Client Updates",
                    text: "I'll keep you in the loop on your client's build progress if desired.",
                  },
                  {
                    title: "Professional Representation",
                    text: "My job sites and finished product make you look good. Guaranteed.",
                  },
                  {
                    title: "Future Referrals Back",
                    text: "Buyers of completed homes need realtors. I send business both ways.",
                  },
                ].map((item) => (
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
            Let&apos;s <span className="text-amber">Talk</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            I want to be your first call when a client is looking to purchase
            land and hire a builder. Let&apos;s start that relationship.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:4068580748"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Josh Directly
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
