import FadeIn from '@/components/FadeIn';
import CommentSection from '@/components/CommentSection';
import { FileText, Building, Users, Target, DollarSign, MapPin } from 'lucide-react';

const questions = [
  {
    id: 'spec-home',
    icon: Building,
    title: 'Your Ideal Spec Home',
    questions: [
      'What budget range are you targeting?',
      'What size (sq ft) and style?',
      'Which neighborhoods are you considering?',
      'Who is the target buyer? (Local, Montana transplant, out of state?)',
    ],
  },
  {
    id: 'experience',
    icon: FileText,
    title: 'Your Experience',
    questions: [
      'Describe your experience as a Lead Designer',
      'Describe your experience as a General Contractor',
      'Describe your experience as a Project Manager',
      'Do you have employees? How many? Notable experience?',
    ],
  },
  {
    id: 'custom-homes',
    icon: Users,
    title: 'Custom Homes (Client Work)',
    questions: [
      'What are 2-3 benefits of working with you over other GCs?',
      'What\'s your "sweet spot" project? (price range, style, lot type)',
      'Walk us through your process from first meeting to keys-in-hand',
    ],
  },
  {
    id: 'investment',
    icon: DollarSign,
    title: 'Investment & Funding',
    questions: [
      'Do you have potential investors lined up, or looking to attract them?',
      'What\'s the benefit for investors working with you vs competitors?',
    ],
  },
  {
    id: 'target-market',
    icon: Target,
    title: 'Target Market',
    questions: [
      'Describe your ideal customer (budget, timeline, involvement level)',
      'Who is NOT a good fit for you?',
      'What should realtors know about your business?',
      'What referrals do you want from realtors? Why is it in their interest?',
    ],
  },
  {
    id: 'operations',
    icon: MapPin,
    title: 'Operations & Capacity',
    questions: [
      'How many projects can you handle simultaneously?',
      'What\'s your typical build timeline?',
      'What are your service area boundaries?',
      'How do you currently track and follow up with leads?',
    ],
  },
];

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-800">Discovery Questions</h1>
              <p className="text-stone-600">Help us understand your business better</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800">
              <strong>How to use this page:</strong> Review each section below. These are the questions
              we need answered to build a website and automation system that truly fits your business.
              Leave your answers in the comment boxes, or jot notes to discuss later.
            </p>
          </div>
        </FadeIn>

        {/* Question Sections */}
        <div className="space-y-8">
          {questions.map((section, index) => (
            <FadeIn key={section.id} delay={index * 50}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-stone-600" />
                  </div>
                  <h2 className="text-xl font-bold text-stone-800">{section.title}</h2>
                </div>
                <ul className="space-y-3 ml-13">
                  {section.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {qIndex + 1}
                      </span>
                      <span className="text-stone-700">{question}</span>
                    </li>
                  ))}
                </ul>
                <CommentSection section={section.id} title={`Your answers for "${section.title}"`} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Differentiators Section */}
        <FadeIn delay={300}>
          <div className="mt-8 bg-gradient-to-br from-stone-800 to-stone-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">What Makes You Different?</h2>
            <p className="text-stone-300 mb-6">
              From our initial conversation, we noted these differentiators.
              Confirm or expand on these:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Personal relationships with clients',
                'Very hands-on approach',
                'Exceptional quality craftsmanship',
                'High-end / luxury positioning',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <CommentSection section="differentiators" title="Anything to add or clarify?" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
