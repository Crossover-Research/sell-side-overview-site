import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

async function getZohoAccessToken(): Promise<string | null> {
  try {
    const res = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id:     process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type:    'refresh_token',
      }),
    });
    const data = await res.json();
    return data.access_token ?? null;
  } catch { return null; }
}

async function sendZohoEmail(
  accessToken: string,
  to: string,
  subject: string,
  body: string,
): Promise<boolean> {
  try {
    const accountId = process.env.ZOHO_MAIL_ACCOUNT_ID!;
    const res = await fetch(`https://mail.zoho.com/api/accounts/${accountId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromAddress: 'ian@crossoverresearch.com',
        toAddress:   to,
        subject,
        content:     body,
        mailFormat:  'html',
      }),
    });
    const d = await res.json();
    return d.status?.code === 200 || res.ok;
  } catch { return false; }
}

async function sendCliqNotification(text: string): Promise<void> {
  const url = process.env.CLIQ_LEAD_URL;
  if (!url) return;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  }).catch(() => {});
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, firm, orgType, mandate } = body;

    // ── Supabase write (service role key — bypasses RLS) ────────────────────
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
      );
      const { error } = await supabase.from('catalyst_requests').insert([{
        first_name: firstName,
        last_name:  lastName,
        email,
        firm,
        org_type:     orgType,
        mandate,
        submitted_at: new Date().toISOString(),
      }]);
      if (error) console.error('Supabase insert error:', error.message);
    } catch (e) {
      console.error('Supabase error:', e);
    }

    // ── Email + Cliq notification ────────────────────────────────────────────
    const notifyTo    = process.env.NOTIFY_TO_EMAIL ?? 'ian@crossoverresearch.com';
    const subject     = `New Catalyst Request — ${firstName} ${lastName} · ${firm}`;
    const htmlBody    = `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px">
        <h2 style="margin:0 0 16px">New Catalyst Request</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td><strong>${firstName} ${lastName}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Firm</td><td>${firm} (${orgType})</td></tr>
          <tr><td style="padding:8px 0;color:#666">Target</td><td>${mandate || '—'}</td></tr>
        </table>
        <p style="margin-top:20px;font-size:12px;color:#999">Submitted via sell-side-sample-ts.vercel.app</p>
      </div>
    `;

    let emailSent = false;
    const accessToken = await getZohoAccessToken();
    if (accessToken) {
      emailSent = await sendZohoEmail(accessToken, notifyTo, subject, htmlBody);
    }

    // Always send Cliq — guaranteed channel
    const cliqText = `*New Catalyst Request*\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Firm:* ${firm} (${orgType})\n*Target:* ${mandate || 'not specified'}${emailSent ? '' : '\n_(email notification failed — check Zoho scopes)_'}`;
    await sendCliqNotification(cliqText);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Catalyst request error:', e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
