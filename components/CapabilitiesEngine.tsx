'use client';
import { useState } from 'react';

const STAGES = [
  {
    num: '01',
    name: 'Sector Research',
    timing: '6–12 months pre-process',
    headline: 'Convert pipeline before competitors know the process is live.',
    desc: 'Independent sector research gives you defensible customer evidence before management has briefed anyone. Enter every initial conversation already ahead.',
    tags: ['No management contact', 'Operator sourcing', 'Line of sight'],
    cta: 'Start Sector Research',
  },
  {
    num: '02',
    name: 'Mandate Pitch',
    timing: 'Pre-process / RFP stage',
    headline: 'Win RFPs with proof the operator has never seen.',
    desc: 'Win RFPs by bringing proprietary customer insights that show management teams you know the story better than every competing bank in the room.',
    tags: ['Independent verbatims', 'No competing bank has them', 'Operator-resonant'],
    cta: 'Prep a Mandate Pitch',
  },
  {
    num: '03',
    name: 'CIM Enhancement',
    timing: 'Pre-launch / CIM stage',
    headline: 'Customer-backed proof points that close the CIM gaps before buyers open them.',
    desc: 'Every weak claim in the CIM gets pre-validated against independent customer evidence. Buyers find no gaps — because they were found and closed first.',
    tags: ['Customer-backed proof points', '40+ benchmark studies', 'Buyer-proof narrative'],
    cta: 'Enhance the CIM',
  },
];

const CAPS = [
  { num: '01', stat: '1st', label: 'Mandate Pitch',  hook: 'First bank in the room with independent customer proof.' },
  { num: '02', stat: '40+', label: 'CIM Narrative',  hook: 'Every claim benchmarked across 40+ comparable studies.' },
  { num: '03', stat: '1st', label: 'Buyer Mapping',  hook: 'Target buyers ranked and prioritised before the first call.' },
  { num: '04', stat: '5',   label: 'AI IC Prep',     hook: 'Fund-specific adversarial personas. Management arrives knowing every question.' },
  { num: '05', stat: '30+', label: 'Cortex Engine',  hook: 'Signal sources beneath every engagement.' },
];

export function CapabilitiesEngine() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [activeCap, setActiveCap] = useState<number | null>(null);

  return (
    <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ marginBottom:40 }}>
          <div className="ib-section-eyebrow" style={{ marginBottom:10 }}>The Engagement Model</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap' }}>
            <h2 style={{
              fontSize:'clamp(20px,3vw,30px)', fontWeight:700,
              color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', margin:0, lineHeight:1.2,
            }}>
              We enter before the pitch. We stay through the CIM.<br />
              <span style={{ color:'rgba(255,255,255,.55)', fontWeight:400, fontSize:'.88em' }}>
                You win with evidence no one else has.
              </span>
            </h2>
            <a
              href="/intelligence?request=1"
              style={{
                fontSize:12, fontWeight:600, color:'rgba(180,210,255,.85)',
                border:'1px solid rgba(77,144,254,.28)', padding:'8px 18px',
                textDecoration:'none', whiteSpace:'nowrap', flexShrink:0,
                transition:'all .15s', background:'rgba(77,144,254,.05)',
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(77,144,254,.55)';el.style.background='rgba(77,144,254,.1)';}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(77,144,254,.28)';el.style.background='rgba(77,144,254,.05)';}}
            >
              Scope a Mandate →
            </a>
          </div>
        </div>

        {/* Entry point label */}
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.38)', marginBottom:8 }}>
          Entry points
        </div>

        {/* Stage rows */}
        <div style={{ display:'flex', flexDirection:'column', gap:1, background:'rgba(255,255,255,.06)', marginBottom:40 }}>
          {STAGES.map((s, i) => {
            const isActive = activeStage === i;
            return (
              <div
                key={i}
                onClick={() => setActiveStage(isActive ? null : i)}
                style={{
                  display:'grid', gridTemplateColumns:'140px 1fr auto',
                  background: isActive ? 'rgba(77,144,254,.07)' : 'rgba(6,14,28,.97)',
                  cursor:'pointer', transition:'background .15s',
                  borderLeft:`2px solid ${isActive ? 'rgba(77,144,254,.5)' : 'transparent'}`,
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(6,14,28,.97)'; }}
              >
                {/* Stage label */}
                <div style={{ padding:'22px 20px', borderRight:'1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:4 }}>Stage {s.num}</div>
                  <div style={{ fontSize:13, fontWeight:700, color: isActive ? 'rgba(255,255,255,.97)' : 'rgba(255,255,255,.82)', lineHeight:1.3, marginBottom:4 }}>{s.name}</div>
                  <div style={{ fontSize:10, color:'rgba(77,144,254,.7)', letterSpacing:'.03em' }}>{s.timing}</div>
                </div>

                {/* Content */}
                <div style={{ padding:'22px 28px' }}>
                  <div style={{ fontSize:13.5, fontWeight:600, color:'rgba(255,255,255,.92)', marginBottom:8, lineHeight:1.4 }}>{s.headline}</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,.65)', lineHeight:1.7, marginBottom:10 }}>{s.desc}</div>
                  <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                    {s.tags.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize:11, fontWeight:600,
                        color: isActive ? 'rgba(130,175,255,.8)' : 'rgba(255,255,255,.52)',
                        background: isActive ? 'rgba(77,144,254,.09)' : 'rgba(255,255,255,.04)',
                        border:`1px solid ${isActive ? 'rgba(77,144,254,.22)' : 'rgba(255,255,255,.07)'}`,
                        padding:'2px 8px',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding:'22px 22px', display:'flex', alignItems:'center', borderLeft:'1px solid rgba(255,255,255,.05)' }}>
                  <a
                    href="/intelligence?request=1"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize:11, fontWeight:700,
                      color: isActive ? 'rgba(130,175,255,.9)' : 'rgba(255,255,255,.45)',
                      letterSpacing:'.03em', textDecoration:'none', whiteSpace:'nowrap',
                      transition:'color .15s',
                    }}
                  >
                    {s.cta} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities label */}
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.38)', marginBottom:8 }}>
          Capabilities deployed
        </div>

        {/* Capabilities grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:1, background:'rgba(255,255,255,.06)' }}>
          {CAPS.map((cap, i) => {
            const isActive = activeCap === i;
            return (
              <div
                key={i}
                onClick={() => setActiveCap(isActive ? null : i)}
                style={{
                  background: isActive ? 'rgba(77,144,254,.07)' : 'rgba(6,14,28,.97)',
                  padding:'22px 20px', cursor:'pointer', transition:'background .15s',
                  borderTop:`2px solid ${isActive ? 'rgba(77,144,254,.45)' : 'transparent'}`,
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(6,14,28,.97)'; }}
              >
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', color:'rgba(255,255,255,.35)', marginBottom:12 }}>{cap.num}</div>
                <div style={{
                  fontFamily:'var(--font-mono)', fontSize:30, fontWeight:700,
                  color: isActive ? 'rgba(130,175,255,.97)' : 'rgba(255,255,255,.88)',
                  letterSpacing:'-.03em', lineHeight:1, marginBottom:8,
                }}>{cap.stat}</div>
                <div style={{
                  fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
                  color: isActive ? 'rgba(45,212,160,.95)' : 'rgba(45,212,160,.65)',
                  marginBottom:10,
                }}>{cap.label}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.62)', lineHeight:1.55 }}>{cap.hook}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
