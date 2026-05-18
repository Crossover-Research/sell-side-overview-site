'use client';
import { useState } from 'react';

const STAGES = [
  {
    num: '01',
    name: 'Sector Research',
    timing: '6–12 months pre-process',
    headline: 'Convert pipeline before competitors know the process is live.',
    desc: 'Customer evidence before management has briefed anyone.',
    tags: ['No management contact', 'Line of sight'],
    cta: 'Start Sector Research',
  },
  {
    num: '02',
    name: 'Mandate Pitch',
    timing: 'Pre-process / RFP stage',
    headline: 'Win RFPs with proof the operator has never seen.',
    desc: '',
    tags: ['Independent verbatims', 'Operator-resonant'],
    cta: 'Prep a Mandate Pitch',
  },
  {
    num: '03',
    name: 'CIM Enhancement',
    timing: 'Pre-launch / CIM stage',
    headline: 'Customer-backed proof points that close the CIM gaps before buyers open them.',
    desc: 'Every weak claim pre-validated before diligence opens.',
    tags: ['40+ benchmark studies', 'Buyer-proof narrative'],
    cta: 'Enhance the CIM',
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
            <a
              href="/intelligence?request=1"
              style={{
                fontSize:14.5, fontWeight:600, color:'rgba(180,210,255,.85)',
                border:'1px solid rgba(120,144,178,.28)', padding:'8px 18px',
                textDecoration:'none', whiteSpace:'nowrap', flexShrink:0,
                transition:'all .15s', background:'rgba(120,144,178,.05)',
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(120,144,178,.55)';el.style.background='rgba(120,144,178,.1)';}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(120,144,178,.28)';el.style.background='rgba(120,144,178,.05)';}}
            >
              Scope a Mandate →
            </a>
          </div>
        </div>

        {/* Entry point label */}
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.82)', marginBottom:10 }}>
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
                  display:'grid', gridTemplateColumns:'140px 1fr auto',
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
                  <div style={{ fontSize:13, color:'rgba(166,183,210,.85)', letterSpacing:'.02em' }}>{s.timing}</div>
                </div>

                {/* Content */}
                <div style={{ padding:'22px 28px' }}>
                  <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.96)', marginBottom:8, lineHeight:1.4 }}>{s.headline}</div>
                  <div style={{ fontSize:14.5, color:'rgba(255,255,255,.82)', lineHeight:1.7, marginBottom:10 }}>{s.desc}</div>
                  <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                    {s.tags.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize:14.5, fontWeight:600,
                        color: isActive ? 'rgba(190,210,232,.95)' : 'rgba(255,255,255,.78)',
                        background: isActive ? 'rgba(120,144,178,.16)' : 'rgba(255,255,255,.06)',
                        border:`1px solid ${isActive ? 'rgba(120,144,178,.35)' : 'rgba(255,255,255,.12)'}`,
                        padding:'4px 10px',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding:'22px 22px', display:'flex', alignItems:'center', borderLeft:'1px solid rgba(255,255,255,.06)' }}>
                  <a
                    href="/intelligence?request=1"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize:14, fontWeight:700,
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
