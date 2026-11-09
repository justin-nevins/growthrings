"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import site from "@content/site.json";

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "For Realtors", href: "/for-realtors" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white font-[family-name:var(--font-barlow)] uppercase tracking-wider">
              Larchwood<span className="text-amber"> Construction</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-amber font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 text-white/80 hover:text-amber font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="bg-amber text-white px-5 py-2.5 rounded font-semibold hover:bg-amber-light transition-colors text-sm uppercase tracking-wide"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-amber font-medium py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-2 text-amber font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="bg-amber text-white px-5 py-3 rounded font-semibold text-center uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
