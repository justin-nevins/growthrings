import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Eye, Hammer, FileText } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import home from "@content/home.json";
import site from "@content/site.json";

const pillarIcons = [
  <Eye key="eye" className="h-8 w-8" />,
  <Hammer key="hammer" className="h-8 w-8" />,
  <FileText key="file" className="h-8 w-8" />,
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <Image
          src={home.hero.image}
          alt={home.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase leading-tight">
              {home.hero.headline}{" "}
              <span className="text-amber">{home.hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-white/80 max-w-xl">
              {home.hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold text-lg hover:bg-amber-light transition-colors uppercase tracking-wide"
              >
                {home.hero.primaryButton}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:border-amber hover:text-amber transition-colors"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {home.pillars.map((pillar, i) => (
              <div key={pillar.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 text-amber mb-6">
                  {pillarIcons[i]}
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wide text-charcoal mb-4">
                  {pillar.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed">
                  {pillar.text}
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
              {home.featuredWork.heading}{" "}
              <span className="text-amber">{home.featuredWork.headingAccent}</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
              {home.featuredWork.text}
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
              {home.featuredWork.viewAllLabel}
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
            {home.testimonial.quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src={home.testimonial.photo}
              alt={home.testimonial.name}
              width={56}
              height={56}
              className="rounded-full object-cover w-14 h-14"
            />
            <div className="text-left">
              <p className="font-semibold">{home.testimonial.name}</p>
              <p className="text-white/60 text-sm">{home.testimonial.role}</p>
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
                {home.serviceArea.heading}{" "}
                <span className="text-amber">{home.serviceArea.headingAccent}</span>
              </h2>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                {home.serviceArea.text}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {site.serviceAreas.map((area) => (
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
                src={home.serviceArea.image}
                alt={home.serviceArea.imageAlt}
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
          src={home.cta.image}
          alt={home.cta.imageAlt}
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase leading-tight">
            {home.cta.heading}{" "}
            <span className="text-amber">{home.cta.headingAccent}</span>
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            {home.cta.text}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded font-semibold text-lg hover:bg-amber-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:border-amber hover:text-amber transition-colors"
            >
              {home.cta.messageButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
