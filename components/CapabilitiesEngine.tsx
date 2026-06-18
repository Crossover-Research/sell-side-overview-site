'use client';
import { useState } from 'react';
import { CONTACT } from '../lib/config/site';

const STAGES = [
  {
    num: '01',
    name: 'Sector Research',
    timing: 'Pipeline build · pre-mandate',
    headline: 'Build pipeline before competitors know the market is in play.',
    desc: 'Independent customer evidence across a sector. no management contact required.',
    tags: ['3–6 weeks'],
    cta: 'Scope Sector Research',
  },
  {
    num: '02',
    name: 'Mandate Pitch Deck',
    timing: 'Mandate pursuit',
    headline: 'Win the mandate with customer evidence no competing bank can replicate.',
    desc: 'Independent verbatims delivered in time for the pitch.',
    tags: ['2–3 weeks'],
    cta: 'Scope a Mandate Pitch',
  },
  {
    num: '03',
    name: 'VoC-Enhanced CIM',
    timing: 'Sell-side process launch',
    headline: 'Every weak claim pre-validated before buyers find it.',
    desc: 'Every CIM claim backed by independent customer evidence.',
    tags: ['4–5 weeks'],
    cta: 'Scope a VoC CIM',
  },
  {
    num: '04',
    name: 'Customer Diligence Report',
    timing: 'Pre-process conviction',
    headline: 'Conviction before the teaser drops.',
    desc: 'Independent commercial diligence ahead of the formal process.',
    tags: ['5–7 weeks'],
    cta: 'Scope a Diligence Report',
  },
];

export function CapabilitiesEngine() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ marginBottom:40 }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap' }}>
            <h2 style={{
              fontSize:'clamp(20px,3vw,30px)', fontWeight:700,
              color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', margin:0, lineHeight:1.2,
            }}>
              We enter before the pitch. We stay through the CIM.<br />
              <span style={{ color:'rgba(255,255,255,.78)', fontWeight:400, fontSize:'.88em' }}>
                You win with evidence no one else has.
              </span>
            </h2>
          </div>
        </div>

        {/* Entry point label */}
        <div style={{ fontSize:13.5, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.82)', marginBottom:10 }}>
          Entry points
        </div>

        {/* Stage rows */}
        <div style={{ display:'flex', flexDirection:'column', border:'1px solid rgba(255,255,255,.07)' }}>
          {STAGES.map((s, i) => {
            const isActive = activeStage === i;
            return (
              <div
                key={i}
                onClick={() => setActiveStage(isActive ? null : i)}
                style={{
                  display:'grid', gridTemplateColumns:'180px 1fr 250px',
                  background: isActive ? 'rgba(120,144,178,.07)' : 'rgba(6,14,28,.97)',
                  cursor:'pointer', transition:'background .15s',
                  borderLeft:`2px solid ${isActive ? 'rgba(120,144,178,.5)' : 'transparent'}`,
                  borderBottom: i < STAGES.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none',
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(6,14,28,.97)'; }}
              >
                {/* Stage label */}
                <div style={{ padding:'22px 20px', borderRight:'1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize:15, fontWeight:700, color: isActive ? 'rgba(255,255,255,.97)' : 'rgba(255,255,255,.92)', lineHeight:1.3, marginBottom:6 }}>{s.name}</div>
                  <div style={{ fontSize:13.5, color:'rgba(166,183,210,.85)', letterSpacing:'.02em' }}>{s.timing}</div>
                </div>

                {/* Content */}
                <div style={{ padding:'22px 28px' }}>
                  <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.96)', marginBottom:8, lineHeight:1.4 }}>{s.headline}</div>
                  <div style={{ fontSize:15, color:'rgba(255,255,255,.82)', lineHeight:1.7, marginBottom:10 }}>{s.desc}</div>
                  <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                    {s.tags.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize:15, fontWeight:600,
                        color: isActive ? 'rgba(190,210,232,.95)' : 'rgba(255,255,255,.78)',
                        background: isActive ? 'rgba(120,144,178,.16)' : 'rgba(255,255,255,.06)',
                        border:`1px solid ${isActive ? 'rgba(120,144,178,.35)' : 'rgba(255,255,255,.12)'}`,
                        padding:'4px 10px',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding:'22px 24px', display:'flex', alignItems:'center', borderLeft:'1px solid rgba(255,255,255,.06)', boxSizing:'border-box', overflow:'visible' }}>
                  <a
                    href={CONTACT.bookingUrl}
                    target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize:15, fontWeight:700,
                      color: isActive ? 'rgba(190,210,232,.97)' : 'rgba(255,255,255,.75)',
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


      </div>
    </section>
  );
}
