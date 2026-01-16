import FadeIn from '@/components/FadeIn';
import CommentSection from '@/components/CommentSection';
import { Hammer, Globe, Mail, Users, Camera, Search, Workflow, Check } from 'lucide-react';

const websiteFeatures = [
  { title: 'Portfolio Gallery', desc: 'Showcase your best projects with high-quality photo galleries' },
  { title: 'About / Story Page', desc: 'Tell your story - 30 years of experience, hands-on approach, craftsmanship' },
  { title: 'Services Overview', desc: 'Spec homes and custom builds explained clearly' },
  { title: 'Process Page', desc: 'Walk prospects through how you work - from first meeting to completion' },
  { title: 'Contact Form', desc: 'Capture leads with qualifying questions' },
  { title: 'Realtor Page', desc: 'Dedicated page for realtors with referral info and value proposition' },
  { title: 'Testimonials', desc: 'Social proof from past clients and realtor partners' },
  { title: 'Mobile Responsive', desc: 'Looks great on phones, tablets, and desktops' },
];

const automationFeatures = [
  { title: 'Lead Capture', desc: 'Form submissions go directly to your CRM or email' },
  { title: 'Auto-Response', desc: 'Instant email to new leads confirming you received their inquiry' },
  { title: 'Follow-up Sequences', desc: 'Automated email nurture for leads who don\'t respond immediately' },
  { title: 'Realtor Referral Tracking', desc: 'Track which realtors send you leads' },
  { title: 'Simple CRM', desc: 'Basic lead tracking so nothing falls through the cracks' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-800">What We&apos;re Building</h1>
              <p className="text-stone-600">Website + automation system tailored for you</p>
            </div>
          </div>
        </FadeIn>

        {/* Website Section */}
        <FadeIn delay={100}>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-800">Professional Website</h2>
            </div>

            <p className="text-stone-600 mb-6">
              A custom-designed website that showcases your craftsmanship and attracts your ideal clients.
              Built for speed, SEO, and easy updates.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {websiteFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-stone-800">{feature.title}</p>
                    <p className="text-sm text-stone-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <CommentSection section="website" title="Questions about the website?" />
          </div>
        </FadeIn>

        {/* Automation Section */}
        <FadeIn delay={200}>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Workflow className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-800">Lead Automation</h2>
            </div>

            <p className="text-stone-600 mb-6">
              Never lose a lead again. Automated systems to capture, respond, and follow up with
              prospects while you focus on building.
            </p>

            <div className="space-y-4 mb-6">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{feature.title}</p>
                    <p className="text-sm text-stone-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <CommentSection section="automation" title="Questions about automation?" />
          </div>
        </FadeIn>

        {/* Optional Add-ons */}
        <FadeIn delay={300}>
          <div className="bg-gradient-to-br from-stone-800 to-stone-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-stone-300 mb-6">
              Features we can add later based on your needs:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Camera, title: 'Photo Management', desc: 'Easy drag-drop photo uploads for portfolio' },
                { icon: Mail, title: 'Email Newsletter', desc: 'Stay in touch with past clients and realtors' },
                { icon: Users, title: 'Investor Page', desc: 'Private page for potential investors' },
                { icon: Search, title: 'SEO Package', desc: 'Google Business, local SEO optimization' },
              ].map((addon, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <addon.icon className="h-5 w-5 text-amber-400" />
                    <span className="font-medium">{addon.title}</span>
                  </div>
                  <p className="text-sm text-stone-300">{addon.desc}</p>
                </div>
              ))}
            </div>
            <CommentSection section="addons" title="Interested in any add-ons?" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
