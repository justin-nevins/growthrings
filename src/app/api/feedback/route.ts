import { NextRequest, NextResponse } from 'next/server';

interface FeedbackPayload {
  comments: Record<string, string>;
  options: Record<string, { selected: string; notes: string }>;
  overallFeedback: string;
}

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

export async function POST(request: NextRequest) {
  try {
    const payload: FeedbackPayload = await request.json();
    const { comments, overallFeedback } = payload;

    // Build Discord embed
    const fields = Object.entries(comments)
      .filter(([, comment]) => comment && comment.trim())
      .map(([section, comment]) => ({
        name: sectionLabels[section] || section,
        value: comment.slice(0, 1024), // Discord field limit
        inline: false,
      }));

    if (overallFeedback?.trim()) {
      fields.push({
        name: 'Overall Thoughts',
        value: overallFeedback.slice(0, 1024),
        inline: false,
      });
    }

    const discordPayload = {
      embeds: [
        {
          title: 'New GrowthRings Feedback',
          color: 0xd97706, // amber-600
          fields,
          timestamp: new Date().toISOString(),
          footer: {
            text: 'GrowthRings Proposal Site',
          },
        },
      ],
    };

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
      });

      if (!response.ok) {
        console.error('Discord webhook failed:', response.status);
      }
    } else {
      console.log('No DISCORD_WEBHOOK_URL configured, logging feedback:', payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}
