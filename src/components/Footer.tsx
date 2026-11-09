import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import site from "@content/site.json";

const quickLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = site.services;

const serviceAreas = site.serviceAreas;

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold font-[family-name:var(--font-barlow)] uppercase tracking-wider">
              Larchwood<span className="text-amber"> Construction</span>
            </span>
            <p className="mt-4 text-white/60 leading-relaxed">
              {site.footerBlurb}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm text-amber mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/for-realtors"
                  className="text-white/60 hover:text-amber transition-colors"
                >
                  For Realtors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm text-amber mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] font-semibold uppercase tracking-wide text-sm text-amber mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Serving {serviceAreas.join(", ")}, and the greater Flathead
                  Valley
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Larchwood Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
