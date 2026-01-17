'use client';

import { useState, useEffect } from 'react';
import { getAllFeedback, FeedbackData } from '@/lib/comments';
import { MessageSquare, CheckCircle, Send, AlertCircle, Download } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const sectionLabels: Record<string, string> = {
  'domain-selection': 'Domain Selection',
  'sweet-spot': 'Target Market & Sweet Spot',
  'spec-homes': 'Spec Homes',
  'custom-homes': 'Custom Homes',
  'gc-craftsman': 'GC vs. Craftsman Balance',
  'realtor-strategy': 'Realtor Strategy',
  'competitors': 'Competitors & Differentiation',
  'brand-story': 'Brand Story & Experience',
  'design-visuals': 'Design & Visuals',
  'logistics': 'Business Logistics',
  'differentiators': 'What Makes You Different',
  'website': 'Website Features',
  'automation': 'Lead Automation',
  'addons': 'Optional Add-ons',
  'process': 'Working Process',
};

// Order sections for the markdown output
const sectionOrder = [
  'domain-selection',
  'sweet-spot',
  'spec-homes',
  'custom-homes',
  'gc-craftsman',
  'realtor-strategy',
  'competitors',
  'brand-story',
  'design-visuals',
  'logistics',
  'differentiators',
  'website',
  'automation',
  'addons',
  'process',
];

function generateMarkdown(comments: Record<string, string>, overallFeedback: string): string {
  const date = new Date().toISOString().split('T')[0];
  const timestamp = new Date().toLocaleString();

  let md = `---
title: "Josh Krueger - Discovery Feedback"
date: ${date}
status: received
---

# GrowthRings Discovery Feedback

**Submitted:** ${timestamp}

---

`;

  // Add sections in order
  for (const section of sectionOrder) {
    const comment = comments[section];
    if (comment && comment.trim()) {
      md += `## ${sectionLabels[section] || section}\n\n${comment.trim()}\n\n---\n\n`;
    }
  }

  // Add any sections not in the order list
  for (const [section, comment] of Object.entries(comments)) {
    if (!sectionOrder.includes(section) && comment && comment.trim()) {
      md += `## ${sectionLabels[section] || section}\n\n${comment.trim()}\n\n---\n\n`;
    }
  }

  // Add overall feedback
  if (overallFeedback && overallFeedback.trim()) {
    md += `## Overall Thoughts\n\n${overallFeedback.trim()}\n\n---\n\n`;
  }

  md += `*Generated from GrowthRings proposal site*\n`;

  return md;
}

function downloadMarkdown(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<FeedbackData>({ comments: {}, options: {} });
  const [overallFeedback, setOverallFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    setFeedback(getAllFeedback());
  }, []);

  const hasComments = Object.values(feedback.comments).some((c) => c && c.trim() !== '');
  const commentCount = Object.values(feedback.comments).filter((c) => c && c.trim() !== '').length;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      // Generate markdown
      const md = generateMarkdown(feedback.comments, overallFeedback);
      setMarkdownContent(md);

      // Send notification to Discord (just a heads up, not the full content)
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comments: feedback.comments,
          options: feedback.options,
          overallFeedback,
        }),
      });

      if (!response.ok) {
        console.error('Discord notification failed, but continuing...');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDownload = () => {
    const date = new Date().toISOString().split('T')[0];
    const filename = `Josh - Discovery Feedback ${date}.md`;
    downloadMarkdown(markdownContent, filename);
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
                Your feedback has been recorded. Download your responses as a document,
                then we&apos;ll review and follow up soon.
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Download Feedback (.md)
                </button>

                <p className="text-sm text-stone-500">
                  Save this file and send it to us, or keep it for your records.
                </p>

                <div className="pt-4">
                  <a
                    href="/"
                    className="inline-block text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    ← Back to Home
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Preview */}
          <FadeIn delay={200}>
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-800 mb-4">Preview</h2>
              <pre className="bg-stone-50 p-4 rounded-lg text-sm text-stone-700 overflow-x-auto whitespace-pre-wrap font-mono">
                {markdownContent}
              </pre>
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

        {/* Error Message */}
        {error && (
          <FadeIn delay={350}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700">{error}</p>
            </div>
          </FadeIn>
        )}

        {/* Submit Button */}
        <FadeIn delay={400}>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={(!hasComments && !overallFeedback) || submitting}
              className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
              {submitting ? 'Submitting...' : 'Submit Feedback'}
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
