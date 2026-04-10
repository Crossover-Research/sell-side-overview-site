import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log to console (replace with Supabase insert, Resend email, or Slack webhook)
    console.log('=== CATALYST ACCESS REQUEST ===');
    console.log(JSON.stringify(body, null, 2));
    console.log('Submitted:', new Date().toISOString());

    // TODO: Insert into Supabase catalyst_requests table
    // TODO: Send Slack notification to #catalyst-leads
    // TODO: Send confirmation email via Resend

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
