import { NextRequest, NextResponse } from 'next/server';

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
    const { section, content } = await request.json();

    if (!section || !content?.trim()) {
      return NextResponse.json({ success: false, error: 'Missing section or content' }, { status: 400 });
    }

    const sectionName = sectionLabels[section] || section;
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });

    const discordPayload = {
      embeds: [
        {
          title: `📝 Draft: ${sectionName}`,
          description: content.slice(0, 4000), // Discord embed limit
          color: 0x78716c, // stone-500 (draft color)
          footer: {
            text: `GrowthRings Draft • ${timestamp}`,
          },
        },
      ],
    };

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
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Draft save error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
