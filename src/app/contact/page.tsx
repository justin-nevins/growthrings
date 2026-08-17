"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import contact from "@content/contact.json";
import site from "@content/site.json";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <section className="relative pt-32 pb-16 bg-charcoal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
              {contact.submitted.heading}{" "}
              <span className="text-amber">{contact.submitted.headingAccent}</span>
            </h1>
          </div>
        </section>
        <section className="section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircle className="h-16 w-16 text-amber mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-[family-name:var(--font-barlow)] uppercase text-charcoal">
              {contact.submitted.confirmationHeading}
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg">
              {contact.submitted.confirmationText}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase">
            {contact.hero.heading}{" "}
            <span className="text-amber">{contact.hero.headingAccent}</span>
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-2xl">
            {contact.hero.text}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone - prominent */}
              <div className="bg-amber/10 p-8 rounded-lg">
                <h2 className="text-sm font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-amber mb-4">
                  {contact.phoneBox.heading}
                </h2>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center gap-3 text-3xl font-bold text-charcoal hover:text-amber transition-colors font-[family-name:var(--font-barlow)]"
                >
                  <Phone className="h-8 w-8" />
                  {site.phone}
                </a>
                <p className="mt-3 text-charcoal/60">
                  {contact.phoneBox.text}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-charcoal/70">
                  <Mail className="h-5 w-5 text-amber" />
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-amber transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-charcoal/70">
                  <MapPin className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                  <span>{contact.servingLine}</span>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm text-charcoal mb-3">
                  {contact.nextSteps.heading}
                </h3>
                <ol className="space-y-3 text-charcoal/70">
                  {contact.nextSteps.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-bold text-amber">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get("name") as string;
                  const phone = data.get("phone") as string;
                  const email = data.get("email") as string;
                  const message = data.get("message") as string;
                  const referral = data.get("referral") as string;

                  const subject = encodeURIComponent(
                    `New inquiry from ${name}`
                  );
                  const body = encodeURIComponent(
                    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nReferral: ${referral || "Not specified"}\n\n${message}`
                  );
                  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none"
                      placeholder="(406) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none resize-none"
                    placeholder="Tell me about your vision, your land, and what you're looking to build..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="referral"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Select one...</option>
                    {contact.referralSources.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-amber text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-amber-light transition-colors uppercase tracking-wide"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>

                <p className="text-center text-charcoal/40 text-sm">
                  Or call directly:{" "}
                  <a href={`tel:${site.phoneRaw}`} className="text-amber font-medium">
                    {site.phone}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
