import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Josh Krueger",
  description:
    "30 years in construction. Master finish carpenter turned GC. Josh Krueger builds custom homes one at a time in Montana's Flathead Valley.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            About <span className="text-amber">Josh</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            30 years in construction. 10 as a licensed GC. Master finish
            carpenter. Building one custom home at a time in Montana&apos;s
            Flathead Valley.
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
                  The <span className="text-amber">Longer Story</span>
                </h2>
                <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                  <p>
                    Josh Krueger has spent 30 years learning every phase of
                    construction from the ground up. He started as a laborer,
                    worked his way through cabinetmaking and finish carpentry,
                    then into project management — and eventually earned his
                    general contractor&apos;s license a decade ago.
                  </p>
                  <p>
                    Along the way, his reputation for quality craftsmanship and
                    smooth project management spoke for itself. Clients who saw
                    his work firsthand started hiring him directly as their GC —
                    not through ads or cold calls, but through trust earned on
                    the job site.
                  </p>
                  <p>
                    Today, Josh brings that full spectrum of experience to every
                    build. He&apos;s not behind a desk reviewing reports. He&apos;s
                    on your property — designing, problem-solving, and putting
                    his hands on the work that matters most.
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-amber pl-6 py-2 italic text-charcoal/80 text-lg">
                &ldquo;I don&apos;t belong behind a desk. I belong fully
                immersed in the fine points of a project — sometimes
                that&apos;s design, sometimes that&apos;s install, most times
                that&apos;s on site.&rdquo;
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/01-josh-timber-beam-work.jpeg"
                  alt="Josh Krueger working with timber beams"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/02-josh-installing-back-bar-on-ladder.jpeg"
                  alt="Josh Krueger installing ornate back bar"
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
            Still on the <span className="text-amber">Job Site</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-3">
                The Standard Stays High
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Elite finish carpentry requires elite skill. Josh stays
                hands-on because at this level, the person who cares most about
                quality should be the one doing the work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-3">
                Nothing Gets Missed
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                When the same person manages the project, coordinates the subs,
                and handles the finish work, problems get caught early and
                solved fast. No telephone game, no dropped details.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-3">
                It&apos;s More Than a Job
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                After three decades, the passion hasn&apos;t faded. Josh brings
                signature techniques and finishes to every home — details you
                won&apos;t find anywhere else in the valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Craftsman Difference */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal mb-8">
            The Craftsman <span className="text-amber">Difference</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Builder + Craftsman",
                  text: "Most general contractors manage from a distance. Most finish carpenters specialize in one trade. Josh does both at an elite level — which means design decisions are grounded in build reality, and quality control comes from the person actually doing the work.",
                },
                {
                  title: "Undivided Attention",
                  text: "One project at a time isn't a limitation — it's the entire model. Your home gets Josh's complete focus, with direct access and faster decisions. No competing priorities, no excuses about other job sites.",
                },
                {
                  title: "Complete Cost Transparency",
                  text: "Cost-plus pricing means you see every invoice, every material receipt, and every labor charge. No padded bids, no mystery line items. You know exactly where your money is going at every stage.",
                },
                {
                  title: "A True Partnership",
                  text: "Josh approaches every build as a partnership, not a transaction. Both sides need to trust each other for the project to succeed. That mutual respect is the foundation everything else is built on.",
                },
              ].map((item) => (
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
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/details/12-stair-detail-clean-joinery.jpeg"
                  alt="Clean joinery detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/details/10-reclaimed-wood-mantel-stone-fireplace.jpeg"
                  alt="Reclaimed wood mantel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/details/13-timber-railing-detail-wood-plugs.jpeg"
                  alt="Timber railing detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/details/14-rough-sawn-timber-beam-joint.jpeg"
                  alt="Timber beam joint"
                  fill
                  className="object-cover"
                />
              </div>
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
            I prefer a phone call. Let&apos;s discuss your vision and see if
            we&apos;re a good fit.
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
