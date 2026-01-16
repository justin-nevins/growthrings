import FadeIn from '@/components/FadeIn';
import CommentSection from '@/components/CommentSection';
import { Workflow, MessageSquare, Palette, Code, Rocket, Wrench, ArrowRight } from 'lucide-react';

const phases = [
  {
    num: '01',
    title: 'Discovery',
    icon: MessageSquare,
    duration: 'Week 1',
    status: 'current',
    description: 'We gather all the information needed to build your site.',
    tasks: [
      'Complete the discovery questionnaire',
      'Review your project photos together',
      'Finalize content and messaging',
      'Discuss automation requirements',
    ],
  },
  {
    num: '02',
    title: 'Design',
    icon: Palette,
    duration: 'Week 2',
    status: 'upcoming',
    description: 'We create the visual design and layout for your site.',
    tasks: [
      'Homepage mockup for your review',
      'Color palette and typography',
      'Mobile layout design',
      'Revisions based on feedback',
    ],
  },
  {
    num: '03',
    title: 'Development',
    icon: Code,
    duration: 'Week 3-4',
    status: 'upcoming',
    description: 'We build the actual website and automation system.',
    tasks: [
      'Build all pages from approved designs',
      'Set up contact form and lead capture',
      'Configure email automation',
      'Mobile optimization and testing',
    ],
  },
  {
    num: '04',
    title: 'Launch',
    icon: Rocket,
    duration: 'Week 5',
    status: 'upcoming',
    description: 'We go live and hand over the keys.',
    tasks: [
      'Final review and testing',
      'Domain setup and SSL',
      'Training on how to update content',
      'Launch and monitoring',
    ],
  },
  {
    num: '05',
    title: 'Support',
    icon: Wrench,
    duration: 'Ongoing',
    status: 'upcoming',
    description: 'Continued support after launch.',
    tasks: [
      'Bug fixes and minor updates',
      'Photo gallery updates as needed',
      'Hosting and maintenance',
      'Future enhancements as discussed',
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
              <Workflow className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-800">How We Work Together</h1>
              <p className="text-stone-600">A clear path from idea to launch</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800">
              <strong>Timeline:</strong> Approximately 4-5 weeks from discovery to launch,
              depending on how quickly we receive content and feedback.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <FadeIn key={phase.num} delay={index * 100}>
              <div className={`bg-white rounded-2xl p-6 shadow-sm border ${
                phase.status === 'current' ? 'border-amber-300 ring-2 ring-amber-100' : 'border-stone-100'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    phase.status === 'current' ? 'bg-amber-500' : 'bg-stone-100'
                  }`}>
                    <phase.icon className={`h-6 w-6 ${
                      phase.status === 'current' ? 'text-white' : 'text-stone-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-stone-400">{phase.num}</span>
                        <h2 className="text-xl font-bold text-stone-800">{phase.title}</h2>
                        {phase.status === 'current' && (
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                            Current Phase
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-stone-500">{phase.duration}</span>
                    </div>
                    <p className="text-stone-600 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 text-sm text-stone-600">
                          <ArrowRight className="h-3 w-3 text-amber-500" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Working Agreement */}
        <FadeIn delay={500}>
          <div className="mt-8 bg-gradient-to-br from-stone-800 to-stone-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Working Agreement</h2>
            <div className="space-y-4 text-stone-300">
              <p>
                <strong className="text-white">Ownership:</strong> You own everything. Full access to the site,
                domain, and all technology. No vendor lock-in.
              </p>
              <p>
                <strong className="text-white">Maintenance:</strong> Simple hosting with minimal ongoing costs
                (targeting under $50/year). Easy admin panel for photo updates.
              </p>
              <p>
                <strong className="text-white">Communication:</strong> We&apos;ll use whatever works best for you -
                email, text, or calls.
              </p>
            </div>
            <CommentSection section="process" title="Questions about the process?" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
