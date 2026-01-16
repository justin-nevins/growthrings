'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Hammer, Workflow, MessageSquare } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/discovery', label: 'Discovery', icon: FileText },
  { href: '/services', label: 'Services', icon: Hammer },
  { href: '/process', label: 'Process', icon: Workflow },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GR</span>
            </div>
            <span className="font-bold text-stone-800 hidden sm:block">GrowthRings</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:block">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
