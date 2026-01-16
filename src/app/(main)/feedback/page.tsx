'use client';

import { useState, useEffect } from 'react';
import { getAllFeedback, FeedbackData } from '@/lib/comments';
import { MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const sectionLabels: Record<string, string> = {
  'spec-home': 'Ideal Spec Home',
  'experience': 'Your Experience',
  'custom-homes': 'Custom Homes',
  'investment': 'Investment & Funding',
  'target-market': 'Target Market',
  'operations': 'Operations & Capacity',
  'differentiators': 'What Makes You Different',
  'website': 'Website Features',
  'automation': 'Lead Automation',
  'addons': 'Optional Add-ons',
  'process': 'Working Process',
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<FeedbackData>({ comments: {}, options: {} });
  const [overallFeedback, setOverallFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFeedback(getAllFeedback());
  }, []);

  const hasComments = Object.values(feedback.comments).some((c) => c && c.trim() !== '');
  const commentCount = Object.values(feedback.comments).filter((c) => c && c.trim() !== '').length;

  const handleSubmit = () => {
    // In production, this would send to a backend
    console.log('Submitting feedback:', {
      comments: feedback.comments,
      overallFeedback,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-stone-800 mb-4">Thank You!</h1>
              <p className="text-stone-600 mb-6">
                Your feedback has been recorded. We&apos;ll review your responses and follow up soon.
              </p>
              <a
                href="/"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-800">Your Feedback</h1>
              <p className="text-stone-600">Review and submit your thoughts</p>
            </div>
          </div>
        </FadeIn>

        {/* Summary Stats */}
        <FadeIn delay={100}>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-500">Comments saved</p>
                <p className="text-3xl font-bold text-stone-800">{commentCount}</p>
              </div>
              <div className={`px-4 py-2 rounded-full ${hasComments ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {hasComments ? 'Ready to submit' : 'Add some comments first'}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section Comments */}
        {hasComments && (
          <FadeIn delay={200}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-8">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Your Comments</h2>
              <div className="space-y-4">
                {Object.entries(feedback.comments).map(([section, comment]) => {
                  if (!comment || !comment.trim()) return null;
                  return (
                    <div key={section} className="border-l-4 border-amber-500 pl-4">
                      <h3 className="font-semibold text-stone-800">
                        {sectionLabels[section] || section}
                      </h3>
                      <p className="text-stone-600 whitespace-pre-wrap">{comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        )}

        {/* No Feedback Yet */}
        {!hasComments && (
          <FadeIn delay={200}>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 font-medium">No comments yet</p>
                <p className="text-amber-700 text-sm mt-1">
                  Visit the Discovery, Services, and Process pages to leave your feedback,
                  then come back here to review and submit.
                </p>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Overall Feedback */}
        <FadeIn delay={300}>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-8">
            <h2 className="text-xl font-bold text-stone-800 mb-4">Overall Thoughts</h2>
            <p className="text-stone-600 mb-4">
              Anything else you&apos;d like us to know? Questions, concerns, ideas?
            </p>
            <textarea
              value={overallFeedback}
              onChange={(e) => setOverallFeedback(e.target.value)}
              placeholder="Share any final thoughts here..."
              className="w-full h-40 p-4 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            />
          </div>
        </FadeIn>

        {/* Submit Button */}
        <FadeIn delay={400}>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={!hasComments && !overallFeedback}
              className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
              Submit Feedback
            </button>
            <p className="text-sm text-stone-500 mt-4">
              Your feedback is saved locally. Clicking submit will finalize your responses.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
