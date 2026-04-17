'use client';
import { useState } from 'react';

const STAGES = [
  {
    num: '01',
    name: 'Sector Research',
    headline: 'Demonstrate sector expertise. Convert pipeline before competitors arrive.',
    desc: 'Demonstrate sector expertise and use the underlying work to solicit operators and improve pipeline conversion.',
    tags: ['6–12mo pre-process', 'No management contact', 'Operator sourcing'],
    cta: 'Start Sector Research',
  },
  {
    num: '02',
    name: 'Mandate Pitch',
    headline: 'Win RFPs with proof the operator has never seen.',
    desc: 'Win RFPs by bringing proprietary customer insights that show management teams you know the story better than competitors.',
    tags: ['Independent verbatims', 'No competing bank has them', 'Operator-resonant'],
    cta: 'Prep a Mandate Pitch',
  },
  {
    num: '03',
    name: 'CIM Enhancement',
    headline: "The pitch deck becomes the basis for the CIM.",
    desc: "The bank's pitch deck serves as the basis for CIM development — Crossover helps operators get customer-backed proof points to counter the weakest elements of the story.",
    tags: ['Customer-backed proof points', '40+ benchmark studies', 'Buyer-proof narrative'],
    cta: 'Enhance the CIM',
  },
];

const CAPS = [
  { num: '01', stat: '1st', label: 'Mandate Pitch', hook: 'First bank in the room with independent customer proof.' },
  { num: '02', stat: '9',   label: 'CIM Narrative', hook: 'Every claim benchmarked across 40+ comparable studies.' },
  { num: '03', stat: '50',  label: 'Buyer Mapping', hook: 'Buyers ranked by conviction before the first call goes out.' },
  { num: '04', stat: '5',   label: 'AI IC Prep',    hook: 'Fund-specific adversarial personas. Management arrives knowing every question.' },
  { num: '05', stat: '30+', label: 'Cortex Engine', hook: 'Signal sources. The intelligence infrastructure beneath everything.' },
];

export function CapabilitiesEngine() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [activeCap, setActiveCap] = useState<number | null>(null);

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div className="ib-section-eyebrow" style={{ marginBottom: 8 }}>How It Works</div>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 6 }}>
            Three entry points. Five capabilities. One infrastructure.
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.62)' }}>
            Start where you are in the deal. Every stage draws from the same verbatim truth layer.
          </p>
        </div>

        {/* Divider label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 1 }}>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.07)' }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.70)', whiteSpace: 'nowrap' }}>When do you engage</span>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.07)' }} />
        </div>

        {/* Stage rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,.06)', marginBottom: 32 }}>
          {STAGES.map((s, i) => {
            const isActive = activeStage === i;
            return (
              <div
                key={i}
                onClick={() => setActiveStage(isActive ? null : i)}
                style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr auto',
                  background: isActive ? 'rgba(77,144,254,.07)' : 'rgba(6,14,28,.97)',
                  cursor: 'pointer', transition: 'background .15s',
                  borderLeft: `2px solid ${isActive ? 'rgba(77,144,254,.5)' : 'transparent'}`,
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(6,14,28,.97)'; }}
              >
                {/* Stage label */}
                <div style={{ padding: '20px 20px', borderRight: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.70)', marginBottom: 5 }}>Stage {s.num}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: isActive ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.78)', lineHeight: 1.3 }}>{s.name}</div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px 24px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.88)', marginBottom: isActive ? 8 : 3 }}>{s.headline}</div>
                  {isActive && (
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</div>
                  )}
                  {!isActive && (
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.55 }}>{s.desc}</div>
                  )}
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
                    {s.tags.map((t, ti) => (
                      <span key={ti} style={{ fontSize: 11, fontWeight: 600, color: isActive ? 'rgba(130,175,255,.75)' : 'rgba(255,255,255,.55)', background: isActive ? 'rgba(77,144,254,.08)' : 'rgba(255,255,255,.04)', border: `1px solid ${isActive ? 'rgba(77,144,254,.2)' : 'rgba(255,255,255,.07)'}`, padding: '2px 7px' }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding: '20px 20px', display: 'flex', alignItems: 'center', borderLeft: '1px solid rgba(255,255,255,.05)' }}>
                  <a
                    href="/intelligence?request=1"
                    onClick={e => e.stopPropagation()}
                    style={{ fontSize: 10, fontWeight: 700, color: isActive ? 'rgba(130,175,255,.9)' : 'rgba(255,255,255,.55)', letterSpacing: '.04em', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color .15s' }}
                  >
                    {s.cta} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 1 }}>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.07)' }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.70)', whiteSpace: 'nowrap' }}>What gets deployed</span>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.07)' }} />
        </div>

        {/* Capabilities grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: 'rgba(255,255,255,.06)' }}>
          {CAPS.map((cap, i) => {
            const isActive = activeCap === i;
            return (
              <div
                key={i}
                onClick={() => setActiveCap(isActive ? null : i)}
                style={{
                  background: isActive ? 'rgba(77,144,254,.07)' : 'rgba(6,14,28,.97)',
                  padding: '18px 18px', cursor: 'pointer', transition: 'background .15s',
                  borderTop: `2px solid ${isActive ? 'rgba(77,144,254,.45)' : 'transparent'}`,
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(6,14,28,.97)'; }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: 'rgba(255,255,255,.55)', marginBottom: 10 }}>{cap.num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 700, color: isActive ? 'rgba(130,175,255,.95)' : 'rgba(255,255,255,.85)', letterSpacing: '-.03em', lineHeight: 1, marginBottom: 6 }}>{cap.stat}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: isActive ? 'rgba(45,212,160,.9)' : 'rgba(45,212,160,.68)', marginBottom: 8 }}>{cap.label}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.55 }}>{cap.hook}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
