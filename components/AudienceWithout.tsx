'use client';
import { useState } from 'react';

type Audience = 'bankers' | 'operators' | 'investors';

const DATA: Record<Audience, {
  sub: string;
  accent: string;
  rows: { label: string; without: string; with: string; withBold: string }[];
  outcome: { stat: string; statLabel: string; desc: string };
}> = {
  bankers: {
    sub: 'Walk in with evidence no competing bank can replicate.',
    accent: 'rgba(77,144,254,.85)',
    rows: [
      { label:'Mandate', without:'Pitch alongside 3–5 identical banks. Hope relationship wins.', with:'Walk in with customer evidence no competing bank has.', withBold:'The room is already yours.' },
      { label:'Story', without:'Assemble standard deck. Recycle public comps and industry reports.', with:'Customer-validated equity story', withBold:'no competing bank can replicate.' },
      { label:'Intel', without:"Hope buyers don't find the gaps before you do.", with:'Know every buyer objection before they ask it.', withBold:'Have the answer ready.' },
      { label:'Speed', without:'Show up to the first meeting cold. Rebuild context from scratch.', with:"Enter every initial meeting with the company's full customer proof point library already in hand.", withBold:"You're already ahead of every other bank in the room." },
      { label:'Edge', without:'Win on relationship, not insight.', with:'Win on substance.', withBold:"Independent evidence can't be copied overnight." },
    ],
    outcome: { stat:'50%', statLabel:'Win Rate', desc:'50% sell-side mandate win rate. Not because of better relationships. Because Crossover-backed pitches are built from what customers actually say — not what management wants them to hear. No competing bank can walk in with that.' },
  },
  operators: {
    sub: 'Surface every weakness before buyers use it against you.',
    accent: 'rgba(45,212,160,.85)',
    rows: [
      { label:'Diligence', without:'Weaknesses surface during buyer diligence. Too late to fix.', with:'Every weakness found', withBold:'before buyers find it for you.' },
      { label:'CIM', without:'CIM built on curated references buyers already discount.', with:'CIM backed by evidence', withBold:"buyers can't dismiss as operator spin." },
      { label:'Mgmt Prep', without:'Blindsided in management presentations. Scrambling to respond.', with:'Every hard question pre-answered.', withBold:'You already fixed what buyers will flag.' },
      { label:'Valuation', without:'Sit at the mercy of the bidding process. Hope valuation holds.', with:'Set the valuation narrative.', withBold:'Negotiate from evidence, not hope.' },
      { label:'Control', without:'PE fund defines the value-creation plan. Operator reacts.', with:'Operator sets the baseline.', withBold:"The fund's plan starts from your roadmap." },
    ],
    outcome: { stat:'Your terms', statLabel:'The Outcome', desc:"Know your true worth. Demand it. Operators who surface uncomfortable truths early don't just close faster — they set the terms. Crossover gives you the mechanism to find what's real, fix it before buyers do, and walk into every room from a position of strength." },
  },
  investors: {
    sub: 'Build conviction months before the process even opens.',
    accent: 'rgba(168,130,255,.85)',
    rows: [
      { label:'Timing', without:'Teaser arrives. Restart diligence from zero.', with:'Catalyst report arrives', withBold:'before the teaser does.' },
      { label:'Speed', without:'Commission expert calls. Wait weeks. Compress timeline.', with:'Independent customer data already in hand.', withBold:'Weeks of work compressed into hours.' },
      { label:'Proof', without:'Assume the CIM is curated. Rerun diligence anyway.', with:"Evidence base the sell-side can't curate.", withBold:"You're not starting from suspicion — you're starting from proof." },
      { label:'Edge', without:'Compete on the same compressed timeline as every other fund.', with:'Build conviction', withBold:'6–12 months before the process opens.' },
      { label:'IC Prep', without:'Arrive at IC with assumptions. Reprice or pass at the eleventh hour.', with:'Arrive at IC with answers.', withBold:'Pre-emptive bid wins.' },
    ],
    outcome: { stat:'6–12mo', statLabel:'Ahead', desc:"Rushed diligence produces bad conviction. Bad conviction traps capital. Investors who rely on filtered CIMs overpay, pass on real winners, or reprice late. Crossover puts independent customer evidence in your hands before the process even begins." },
  },
};

export function AudienceWithout() {
  const [active, setActive] = useState<Audience>('bankers');
  const d = DATA[active];

  const tabs: { id: Audience; label: string }[] = [
    { id:'bankers',   label:'Bankers'   },
    { id:'operators', label:'Operators' },
    { id:'investors', label:'Investors' },
  ];

  return (
    <section style={{ padding:'64px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        <div style={{ marginBottom:28 }}>
          <div className="ib-section-eyebrow">With vs. Without Crossover</div>
          <h2 style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:700, color: 'rgba(255,255,255,.95)', letterSpacing:'-.025em', marginTop:8, marginBottom:20 }}>
            Evidence changes every outcome in the room.
          </h2>

          <div style={{ display:'flex', gap:4 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={()=>setActive(t.id)} style={{
                fontSize:12, fontWeight:600, padding:'8px 20px', cursor:'pointer',
                background: active===t.id ? 'rgba(255,255,255,.08)' : 'transparent',
                border: `1px solid ${active===t.id ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.1)'}`,
                color: active===t.id ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.60)',
                transition:'all .15s',
              }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ fontSize:12.5, color: 'rgba(255,255,255,.62)', marginTop:10, fontStyle:'italic' }}>{d.sub}</div>
        </div>

        <div style={{ border:'1px solid rgba(255,255,255,.1)', overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'72px 1fr 40px 1fr', background:'rgba(255,255,255,.03)', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
            <div />
            <div style={{ padding:'8px 16px', fontSize: 11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' as const, color: 'rgba(255,255,255,.70)' }}>Without Crossover</div>
            <div />
            <div style={{ padding:'8px 16px', fontSize: 11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' as const, color:d.accent }}>With Crossover</div>
          </div>

          {d.rows.map((row, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'72px 1fr 40px 1fr', borderBottom: i < d.rows.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none', background: i === d.rows.length-1 ? 'rgba(255,255,255,.02)' : 'rgba(6,14,28,.95)' }}>
              <div style={{ padding:'16px 12px', display:'flex', alignItems:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                <span style={{ fontSize: 10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' as const, color: 'rgba(255,255,255,.62)', background:'rgba(255,255,255,.06)', padding:'2px 6px', whiteSpace:'nowrap' as const }}>{row.label}</span>
              </div>
              <div style={{ padding:'16px 20px', fontSize:12.5, color: i === d.rows.length-1 ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.70)', lineHeight:1.65, fontStyle: i === d.rows.length-1 ? 'italic' : 'normal', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                {row.without}
              </div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                <span style={{ fontSize:11, color: 'rgba(255,255,255,.55)' }}>→</span>
              </div>
              <div style={{ padding:'16px 20px', fontSize:12.5, lineHeight:1.65 }}>
                <span style={{ color: i === d.rows.length-1 ? d.accent : 'rgba(255,255,255,.65)' }}>{row.with} </span>
                <strong style={{ color:d.accent, fontWeight:600 }}>{row.withBold}</strong>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background:'rgba(6,14,28,.95)', border:'1px solid rgba(255,255,255,.08)', borderTop:'none', padding:'16px 24px', display:'flex', alignItems:'center', gap:24 }}>
          <div style={{ flexShrink:0 }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:24, fontWeight:700, color:d.accent, lineHeight:1, letterSpacing:'-.02em' }}>{d.outcome.stat}</div>
            <div style={{ fontSize: 10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase' as const, color: 'rgba(255,255,255,.72)', marginTop:3 }}>{d.outcome.statLabel}</div>
          </div>
          <div style={{ width:1, height:36, background:'rgba(255,255,255,.08)', flexShrink:0 }} />
          <div style={{ fontSize:12, color: 'rgba(255,255,255,.70)', lineHeight:1.65 }}>{d.outcome.desc}</div>
        </div>

      </div>
    </section>
  );
}
