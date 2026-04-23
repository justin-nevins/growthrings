import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Eye, Hammer, FileText } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <Image
          src="/images/hero/01-modern-mountain-home-twilight-stone-chimney.jpeg"
          alt="Custom mountain home built by Larchwood Construction in Flathead Valley, Montana"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase leading-tight">
              Custom Homes Built{" "}
              <span className="text-amber">One At A Time</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-white/80 max-w-xl">
              Master craftsmanship in Montana&apos;s Flathead Valley. 30 years
              of hands-on expertise, from design to finish carpentry.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold text-lg hover:bg-amber-light transition-colors uppercase tracking-wide"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:4068580748"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:border-amber hover:text-amber transition-colors"
              >
                <Phone className="h-5 w-5" />
                (406) 858-0748
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "One Project Focus",
                quote:
                  "Your home is the only home we're building. One project at a time means undivided attention, faster decisions, and no delays from competing priorities.",
              },
              {
                icon: <Hammer className="h-8 w-8" />,
                title: "Craftsman's Eye",
                quote:
                  "With 30 years of hands-on experience — from framing to fine finish carpentry — Josh serves as GC, project manager, and lead craftsman. Nothing escapes his eye.",
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Transparent Process",
                quote:
                  "Every dollar is accounted for. Cost-plus pricing means you see actual costs with no inflated bids or hidden margins. A true partnership built on trust.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 text-amber mb-6">
                  {pillar.icon}
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wide text-charcoal mb-4">
                  {pillar.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed">
                  {pillar.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wide text-charcoal">
              Featured <span className="text-amber">Work</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
              Modern mountain homes with craftsman detailing. Every project
              reflects 30 years of hands-on expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg card-hover"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mt-1">
                    {project.location}
                    {project.sqft && ` · ${project.sqft} sq ft`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-amber font-semibold hover:text-amber-dark transition-colors uppercase tracking-wide"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-amber text-6xl font-serif mb-6">&ldquo;</div>
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed italic">
            I build one home at a time because that&apos;s what your project
            deserves — my full attention, from the first sketch to the final
            walkthrough. This isn&apos;t a production line. It&apos;s a
            partnership.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src="/images/about/01-josh-timber-beam-work.jpeg"
              alt="Josh Krueger"
              width={56}
              height={56}
              className="rounded-full object-cover w-14 h-14"
            />
            <div className="text-left">
              <p className="font-semibold">Josh Krueger</p>
              <p className="text-white/60 text-sm">
                Owner &amp; Master Craftsman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wide text-charcoal">
                Serving the{" "}
                <span className="text-amber">Flathead Valley</span>
              </h2>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                From Bigfork and Somers to the south, through Kalispell and
                Whitefish, up to West Glacier and the North Fork. We build
                custom homes on undeveloped lots throughout Montana&apos;s most
                beautiful valley.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Whitefish",
                  "Kalispell",
                  "Bigfork",
                  "Columbia Falls",
                  "Somers",
                  "West Glacier",
                ].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-charcoal/80"
                  >
                    <span className="w-2 h-2 bg-amber rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/02-workshop-mountain-field-setting.jpeg"
                alt="Larchwood Construction building in Montana's Flathead Valley"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <Image
          src="/images/hero/03-metal-workshop-mountain-backdrop.jpeg"
          alt="Custom home with mountain backdrop"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase leading-tight">
            Ready to Build Your{" "}
            <span className="text-amber">Forever Home?</span>
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            The best way to start is a conversation. Let&apos;s talk about your
            vision, your land, and whether we&apos;re a good fit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:4068580748"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold text-lg hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (406) 858-0748
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:border-amber hover:text-amber transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
