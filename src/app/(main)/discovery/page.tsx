import FadeIn from '@/components/FadeIn';
import CommentSection from '@/components/CommentSection';
import { FileText, Building, Users, Target, Hammer, Home, Paintbrush, Briefcase, Globe, CheckCircle2, XCircle } from 'lucide-react';

const questions = [
  {
    id: 'sweet-spot',
    icon: Target,
    title: '1. Target Market & Sweet Spot',
    description: 'Understanding exactly where you sit in the market so the website attracts the "right" people.',
    questions: [
      'If you could clone one project and do it 10x this year, which one? Why was it perfect?',
      'What\'s your minimum project size / budget threshold?',
      'When a client picks you over competitors, is it because you\'re fastest, most affordable, better quality, or personal relationships?',
      'Do you prefer clients with strict budgets (maximize value) or specific vision (pay for details)?',
      'Who is NOT a good fit? What\'s a deal breaker?',
      'Specific neighborhoods or communities you\'re targeting?',
    ],
  },
  {
    id: 'spec-homes',
    icon: Building,
    title: '2. Spec Homes (Goal 1)',
    description: 'Details about your investor-funded spec home business.',
    questions: [
      'Budget range for ideal spec home?',
      'Size (sq ft) and style (modern, craftsman, mountain contemporary)?',
      'Target neighborhood?',
      'Where are buyers from? (Local / Montana / Out of state?)',
      'Price point they\'re shopping?',
      'Have potential investors, or need to attract them?',
      'What\'s the benefit for investors working with you vs competitors?',
    ],
  },
  {
    id: 'custom-homes',
    icon: Home,
    title: '3. Custom Homes (Goal 2)',
    description: 'Details about your client-funded custom home business.',
    questions: [
      '2-3 benefits of working with you over other GCs',
      'Your sweet spot (price range, style, lot type)',
      'Do you take jobs with zero fine finish work, or only projects where you can apply your detailed touch?',
      'Walk me through first site visit to keys-in-hand (3-5 steps)',
      'Typical build timeline?',
      'How do you handle job site cleanliness? (clients worry about dust/chaos)',
    ],
  },
  {
    id: 'gc-craftsman',
    icon: Hammer,
    title: '4. GC vs. Craftsman Balance',
    description: 'Clarifying how your specialized skills fit into your general services.',
    questions: [
      'Do you want "Fine Finish Carpentry" advertised as a separate service? Or only part of larger projects?',
      'Do clients hire you as GC and discover the trim work, or hire for woodwork and ask you to manage the rest?',
      'Use smaller carpentry jobs to "audition" for larger projects later?',
      'Ideal split: % time as Project Manager vs. Craftsman?',
      'Does your finish work background make you a better GC? (sharper eye for detail = selling point)',
    ],
  },
  {
    id: 'realtor-strategy',
    icon: Users,
    title: '5. Realtor Strategy',
    description: 'You mentioned wanting to market to realtors. Need to know what "problem" to solve for them.',
    questions: [
      'Do you want small, fast-turnaround punch list jobs? (fix 5 things in 48 hours so house can close)',
      'Interest in a "Closing Gift Program"? (custom cutting boards, etc. that realtors buy to give clients)',
      'Biggest complaint realtors make about OTHER contractors? (ghost clients, look unprofessional?)',
      'Already have 1-2 realtors who love you? (testimonials from realtors = gold)',
      'What referrals do you want from realtors? Why is it in their interest?',
    ],
  },
  {
    id: 'competitors',
    icon: Target,
    title: '6. Competitors & Differentiation',
    description: 'Understanding who you\'re up against and what makes you different.',
    questions: [
      'Who is the one contractor you bid against most?',
      'What do they do better than you? What do you do better?',
      'What are people typing into Google to find you? ("Kitchen remodeler Whitefish" vs "Custom cabinetry Whitefish"?)',
    ],
  },
  {
    id: 'brand-story',
    icon: FileText,
    title: '7. Brand Story & Experience',
    description: 'Translating your "hands-on" approach to the screen.',
    questions: [
      'Walk me through the first site visit. How do you make them feel taken care of before signing?',
      'Biggest fear clients have before hiring a contractor? How do you alleviate it?',
      'Why do you still do trim work yourself? Don\'t trust others, or love the craft? (This is your origin story)',
      'How do you want people to contact you? (rigorous form to filter, or cell phone front and center?)',
    ],
  },
  {
    id: 'design-visuals',
    icon: Paintbrush,
    title: '8. Design & Visuals',
    description: 'We\'ll match the website style to the homes you build.',
    questions: [
      'What style homes do you typically build? (modern, craftsman, mountain contemporary, etc.)',
      'Any strong opinions about websites? Things you love or hate?',
    ],
  },
  {
    id: 'logistics',
    icon: Briefcase,
    title: '9. Business Logistics',
    description: 'Practical details that shape the website and automation.',
    questions: [
      'How many employees? Any with notable experience?',
      'How many projects can you handle simultaneously?',
      'Service area boundaries?',
      'Current lead sources? (referrals, realtors, word of mouth, ads?)',
      'How do you currently track and follow up with leads?',
      'What does success look like in 3 months?',
      'What\'s frustrating about getting clients now?',
    ],
  },
];

const domainOptions = [
  { domain: 'growthringdesignbuild.com', rank: 1, reason: 'Exactly describes the service - design AND build', recommended: true },
  { domain: 'growthringsdesignbuild.com', rank: 2, reason: 'Same, but plural (slightly longer)' },
  { domain: 'growthringspechomes.com', rank: 3, reason: 'Literally says "spec homes" - the goal' },
  { domain: 'growthringshomes.com', rank: 4, reason: 'Clean, focuses on homes not generic construction' },
  { domain: 'growthringsbuilders.com', rank: 5, reason: '"Builders" implies full-service more than "construction"' },
  { domain: 'growthringshomesmt.com', rank: 6, reason: 'Homes + Montana locality' },
  { domain: 'growthringsconstruction.com', rank: 7, reason: 'Clear but generic - doesn\'t highlight design' },
  { domain: 'growthringsmt.com', rank: 8, reason: 'Short + local, but vague on service' },
];

const takenDomains = [
  { domain: 'growthrings.com', note: 'HugeDomains - $10,295 asking price' },
  { domain: 'growthring.com', note: 'Registered - unknown owner' },
  { domain: 'growthringbuilders.com', note: 'Registered - unknown owner' },
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
              we need answered to build a website that truly fits your business and attracts the right clients.
              Leave your answers in the comment boxes, or jot notes to discuss on our next call.
            </p>
          </div>
        </FadeIn>

        {/* Domain Selection Section */}
        <FadeIn delay={150}>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-stone-800">Domain Selection</h2>
                <p className="text-sm text-stone-500">All available at $11.08/yr on Porkbun</p>
              </div>
            </div>

            <p className="text-stone-600 mb-4">
              Which domain name feels right for your brand? Pick your top 1-2 choices.
            </p>

            <div className="space-y-2 mb-6">
              {domainOptions.map((option) => (
                <div
                  key={option.domain}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    option.recommended
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                      option.recommended
                        ? 'bg-emerald-500 text-white'
                        : 'bg-stone-300 text-stone-600'
                    }`}>
                      {option.rank}
                    </span>
                    <div>
                      <span className={`font-mono text-sm ${option.recommended ? 'font-semibold text-emerald-700' : 'text-stone-700'}`}>
                        {option.domain}
                      </span>
                      {option.recommended && (
                        <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-stone-500 hidden sm:block">{option.reason}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 pt-4">
              <p className="text-sm text-stone-500 mb-2 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-400" />
                <span className="font-medium">Already taken:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {takenDomains.map((item) => (
                  <span key={item.domain} className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded font-mono">
                    {item.domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Want to search for other options?</strong> Visit{' '}
                <a href="https://porkbun.com/products/domains" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                  porkbun.com
                </a>{' '}
                to check availability and brainstorm alternatives.
              </p>
            </div>

            <CommentSection section="domain-selection" title="Which domain(s) do you prefer?" />
          </div>
        </FadeIn>

        {/* Question Sections */}
        <div className="space-y-8">
          {questions.map((section, index) => (
            <FadeIn key={section.id} delay={200 + index * 50}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-stone-600" />
                  </div>
                  <h2 className="text-xl font-bold text-stone-800">{section.title}</h2>
                </div>
                <p className="text-stone-500 text-sm mb-4 ml-13">{section.description}</p>
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
                <CommentSection section={section.id} title={`Your answers for "${section.title.split('. ')[1]}"`} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Differentiators Section */}
        <FadeIn delay={700}>
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
                '30 years experience, 10 as GC',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
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
