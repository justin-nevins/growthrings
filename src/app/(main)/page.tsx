import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, FileText, Hammer, Workflow, MessageSquare, Target, Users, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-amber-500 rounded-full opacity-10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-amber-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Target className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium">Proposal for Josh Krueger</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Build Your Brand.
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-2xl md:text-4xl text-stone-300 mb-8 font-light">
                Attract clients. <span className="text-amber-400 font-semibold">Close deals.</span>
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-12">
                A custom website and automation system designed for a luxury home builder
                in the Flathead Valley. Professional presence, streamlined leads, more time building.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/discovery"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-lg"
                >
                  Start Discovery
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
                >
                  See What We&apos;re Building
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-4">
              What This Project Delivers
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto text-lg">
              A complete digital presence tailored for spec home building and custom construction.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Attract Ideal Clients</h3>
                <p className="text-stone-600">
                  Showcase your craftsmanship and personal approach. Connect with clients who value quality over price.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Realtor Relationships</h3>
                <p className="text-stone-600">
                  A dedicated realtor page and referral system to strengthen your network and generate warm leads.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Hammer className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Showcase Your Work</h3>
                <p className="text-stone-600">
                  A portfolio that highlights your craftsmanship and attention to detail. Let your work speak for itself.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-12 text-center">
              Explore the Proposal
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/discovery', title: 'Discovery', desc: 'Tell us about your business', icon: FileText, num: '01' },
              { href: '/services', title: 'Services', desc: "What we're building", icon: Hammer, num: '02' },
              { href: '/process', title: 'Process', desc: 'How we work together', icon: Workflow, num: '03' },
              { href: '/feedback', title: 'Feedback', desc: 'Review & submit thoughts', icon: MessageSquare, num: '04' },
            ].map((item, index) => (
              <FadeIn key={item.href} delay={index * 50}>
                <Link
                  href={item.href}
                  className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-stone-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                      {item.num}
                    </span>
                    <item.icon className="h-6 w-6 text-stone-300 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-stone-800 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 mt-1">{item.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-stone-900 font-bold text-sm">NT</span>
              </div>
              <span className="text-lg font-bold">Nevins Tech</span>
            </div>
            <p className="text-stone-400 text-sm">
              Proposal prepared for GrowthRings
            </p>
            <div className="text-stone-400 text-sm">
              Questions? <a href="mailto:justin@nevinstech.com" className="text-amber-400 hover:underline">justin@nevinstech.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
