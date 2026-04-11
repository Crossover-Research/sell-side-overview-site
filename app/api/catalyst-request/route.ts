import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, firm, orgType, mandate } = body;

    // 1. Insert into Supabase
    const { error } = await supabase
      .from('catalyst_requests')
      .insert([{
        first_name: firstName,
        last_name: lastName,
        email,
        firm,
        org_type: orgType,
        mandate,
        submitted_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('Supabase insert error:', error);
    }

    // 2. Slack webhook notification
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `*New Catalyst Request*\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Firm:* ${firm} (${orgType})\n*Target/Mandate:* ${mandate || 'not specified'}`,
        }),
      }).catch(e => console.error('Slack webhook error:', e));
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Catalyst request error:', e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
