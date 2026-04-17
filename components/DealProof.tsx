'use client';
import { useState, useEffect, useCallback } from 'react';

const DEALS = [
  {
    company: 'Nerdio',
    companyLogo: '/nerdio-logo.svg',
    logoHeight: 28,
    badge: 'Series C',
    size: '$500M',
    sizeLabel: 'Transaction',
    involvement: 'Catalyst Dual-Side',
    left: {
      label: 'Sell-Side',
      accentColor: 'rgba(77,144,254,.7)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Exclusive advisor',
      desc: '30+ customer interviews differentiated their pitch. Walked in with verbatims the operator had never seen. No competing bank had them.',
      outcome: 'Won the exclusive mandate',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.95)',
    },
    right: {
      label: 'Buy-Side',
      accentColor: 'rgba(45,212,160,.7)',
      firmName: 'General Atlantic',
      firmLogo: '/general-atlantic-logo.svg',
      firmRole: 'Lead investor',
      desc: 'Independent conviction brief. Research flagged Nerdio before the process opened. Arrived ahead of every competing bidder.',
      outcome: '$500M investment at unicorn valuation',
      outcomeBg: 'rgba(45,212,160,.07)',
      outcomeBorder: 'rgba(45,212,160,.2)',
      outcomeText: 'rgba(45,212,160,.95)',
    },
  },
  {
    company: 'Mobile.de',
    companyLogo: '/mobile-de-logo.svg',
    logoHeight: 26,
    badge: 'Mandate Pitch',
    size: '$10B',
    sizeLabel: 'Transaction',
    involvement: 'Mandate Pitch Deck',
    left: {
      label: 'Sell-Side',
      accentColor: 'rgba(77,144,254,.7)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Sell-side advisor',
      quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
      quoteAttr: 'Executive Director, J.P. Morgan',
      desc: '',
      outcome: 'VoC report cited as the mandate-winning differentiator',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.95)',
    },
    right: {
      label: 'The Context',
      accentColor: 'rgba(255,255,255,.25)',
      stats: [
        { val: '$10B', label: 'Transaction value' },
        { val: '30+', label: 'Customer interviews' },
        { val: 'Flagship', label: 'European sell-side' },
        { val: '1st', label: 'Bank with independent VoC' },
      ],
    },
  },
  {
    company: 'Red Canary',
    companyLogo: '/red-canary-logo.svg',
    logoHeight: 32,
    badge: 'Acquisition',
    size: '$675M',
    sizeLabel: 'Exit',
    involvement: 'CIM Enhancement',
    left: {
      label: 'CIM Enhancement',
      accentColor: 'rgba(77,144,254,.7)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Sell-side advisor',
      desc: 'Independent customer research strengthened the CIM narrative. Every customer claim pre-validated — no surprises in diligence.',
      outcome: '$675M exit — CIM backed by independent evidence',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.95)',
    },
    right: {
      label: 'Transaction Parties',
      accentColor: 'rgba(255,255,255,.25)',
      parties: [
        { role: 'Sell-Side Advisor', logo: '/jpmorgan-logo.svg', name: 'J.P. Morgan', invert: true },
        { role: 'Acquirer', logo: '/zscaler-logo.svg', name: 'Zscaler', invert: true },
      ],
    },
  },
];

function LogoImg({ src, alt, height = 18, invert }: { src: string; alt: string; height?: number; invert?: boolean }) {
  if (!src) return null;
  const needsInvert = invert ?? (src.includes('jpmorgan') || src.includes('zscaler'));
  const isGA = src.includes('general-atlantic');
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: isGA ? 22 : height,
        width: 'auto',
        maxWidth: isGA ? 180 : 220,
        display: 'block',
        filter: (!isGA && needsInvert) ? 'brightness(0) invert(1)' : 'none',
        opacity: (!isGA && needsInvert) ? 0.85 : 1,
      }}
    />
  );
}

export function DealProof() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 200);
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setActive(a => (a + 1) % DEALS.length); setFading(false); }, 200);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const deal = DEALS[active];
  const s = deal as any;

  const fade: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transition: 'opacity .2s ease',
  };

  return (
    <section
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="ib-section-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>Proof of Impact</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 6 }}>
            VoC Intelligence that drives outcomes.
          </h2>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.72)' }}>Three engagements. $11.2B in combined transaction value.</div>
        </div>

        {/* Tab selectors */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
          {DEALS.map((d, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '6px 16px',
                border: `1px solid ${active === i ? 'rgba(130,175,255,.35)' : 'rgba(255,255,255,.09)'}`,
                background: active === i ? 'rgba(77,144,254,.08)' : 'transparent',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all .2s ease',
              }}
            >
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: active === i ? 'rgba(130,175,255,.9)' : 'rgba(255,255,255,.35)',
                transition: 'background .2s ease',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '.08em',
                textTransform: 'uppercase' as const,
                color: active === i ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.58)',
                transition: 'color .2s ease',
              }}>{d.company}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginBottom: 20, overflow: 'hidden' }}>
          <div key={`${active}-${paused}`} style={{
            height: '100%',
            background: 'linear-gradient(90deg, rgba(77,144,254,.3), rgba(130,175,255,.6))',
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : 'width 6s linear',
          }} />
        </div>

        {/* Card — 3 column grid */}
        <div style={{
          border: '1px solid rgba(255,255,255,.09)',
          background: 'rgba(6,14,28,.98)',
          display: 'grid',
          gridTemplateColumns: '220px 1fr 1fr',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 300,
        }}>
          {/* Top accent line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent 0%,rgba(77,144,254,.35) 25%,rgba(130,175,255,.5) 50%,rgba(77,144,254,.35) 75%,transparent 100%)' }} />

          {/* ── LEFT: Identity ── */}
          <div style={{
            ...fade,
            background: 'rgba(255,255,255,.018)',
            borderRight: '1px solid rgba(255,255,255,.07)',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Logo */}
            <div style={{ marginBottom: 24 }}>
              <LogoImg src={deal.companyLogo} alt={deal.company} height={deal.logoHeight} />
            </div>

            {/* Size */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.55)', marginBottom: 7 }}>
                {deal.sizeLabel}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 44, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.04em', lineHeight: 1, marginBottom: 7 }}>
                {deal.size}
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.72)', letterSpacing: '.03em' }}>
                {deal.badge} &middot; {deal.company}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)', margin: '22px 0' }} />

            {/* Involvement */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.70)', marginBottom: 5 }}>Involvement</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(45,212,160,.75)', letterSpacing: '.02em' }}>{deal.involvement}</div>
            </div>
          </div>

          {/* ── CENTRE: Primary ── */}
          <div style={{ ...fade, borderRight: '1px solid rgba(255,255,255,.07)', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: s.left.accentColor }}>
              {s.left.label}
            </div>

            {s.left.firmLogo && (
              <div>
                <LogoImg src={s.left.firmLogo} alt={s.left.firmName} height={24} />
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.72)', marginTop: 5 }}>{s.left.firmRole}</div>
              </div>
            )}

            <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />

            {s.left.quote ? (
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,.82)', lineHeight: 1.75, borderLeft: '2px solid rgba(77,144,254,.28)', paddingLeft: 14, marginBottom: 10 }}>
                  {s.left.quote}
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.70)', paddingLeft: 16 }}>{s.left.quoteAttr}</div>
              </div>
            ) : (
              <div style={{ flex: 1, fontSize: 12.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.75 }}>
                {s.left.desc}
              </div>
            )}

            {s.left.outcome && (
              <div style={{ background: s.left.outcomeBg, border: `1px solid ${s.left.outcomeBorder}`, padding: '10px 14px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.55)', marginBottom: 5 }}>Outcome</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: s.left.outcomeText, lineHeight: 1.4 }}>{s.left.outcome}</div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Context/Counterpart ── */}
          <div style={{ ...fade, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: s.right.accentColor ?? 'rgba(255,255,255,.25)' }}>
              {s.right.label}
            </div>

            {s.right.firmLogo && (
              <div>
                <LogoImg src={s.right.firmLogo} alt={s.right.firmName} height={24} />
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.72)', marginTop: 5 }}>{s.right.firmRole}</div>
              </div>
            )}

            {s.right.desc && (
              <>
                <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
                <div style={{ flex: 1, fontSize: 12.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.75 }}>{s.right.desc}</div>
              </>
            )}

            {s.right.stats && (
              <>
                <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.05)', flex: 1 }}>
                  {s.right.stats.map((st: any, i: number) => (
                    <div key={i} style={{ padding: '14px 16px', background: 'rgba(6,14,28,.95)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 5, letterSpacing: '-.02em' }}>{st.val}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.72)', lineHeight: 1.4, textTransform: 'uppercase' as const, letterSpacing: '.04em' }}>{st.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {s.right.parties && (
              <>
                <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
                  {s.right.parties.map((p: any, i: number) => (
                    <div key={i}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.55)', marginBottom: 10 }}>{p.role}</div>
                      <LogoImg src={p.logo} alt={p.name} height={24} invert={p.invert} />
                      {i < s.right.parties.length - 1 && (
                        <div style={{ height: 1, background: 'rgba(255,255,255,.05)', marginTop: 20 }} />
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {s.right.outcome && (
              <div style={{ background: s.right.outcomeBg, border: `1px solid ${s.right.outcomeBorder}`, padding: '10px 14px', marginTop: 'auto' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.55)', marginBottom: 5 }}>Outcome</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: s.right.outcomeText, lineHeight: 1.4 }}>{s.right.outcome}</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
