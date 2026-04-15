'use client';
import { useState, useEffect, useCallback } from 'react';

const DEALS = [
  {
    company: 'Nerdio',
    companyLogo: '/nerdio-logo.svg',
    logoHeight: 28,
    badge: 'Series C',
    size: '$500M',
    involvement: 'Catalyst Dual-Side',
    left: {
      label: 'Sell-Side Mandate Pitch',
      accentColor: 'rgba(77,144,254,.7)',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Exclusive advisor',
      body: 'J.P. Morgan commissioned Crossover to differentiate their pitch. We interviewed 30+ customers. They won the exclusive mandate.',
      outcome: 'Won the exclusive sell-side mandate',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
    },
    right: {
      label: 'Buy-Side Diligence',
      accentColor: 'rgba(45,212,160,.7)',
      firmLogo: '/general-atlantic-logo.svg',
      firmName: 'General Atlantic',
      firmRole: 'Lead investor',
      body: 'Our research flagged Nerdio as an exceptional asset. General Atlantic commissioned deeper diligence to build conviction before bidding.',
      outcome: '$500M investment at unicorn valuation',
      outcomeBg: 'rgba(45,212,160,.07)',
      outcomeBorder: 'rgba(45,212,160,.2)',
      outcomeText: 'rgba(45,212,160,.9)',
    },
  },
  {
    company: 'Mobile.de',
    companyLogo: '/mobile-de-logo.svg',
    logoHeight: 26,
    badge: 'Mandate Pitch',
    size: '$10B',
    involvement: 'Mandate Pitch Deck',
    left: {
      label: 'Sell-Side Mandate Pitch',
      accentColor: 'rgba(77,144,254,.7)',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
      quoteAttr: 'Executive Director, J.P. Morgan',
      body: '',
      outcome: 'VoC report cited as the mandate-winning differentiator',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
    },
    right: {
      label: 'The Context',
      accentColor: 'rgba(255,255,255,.3)',
      firmLogo: '',
      firmName: '',
      firmRole: '',
      body: '',
      stats: [
        { val: '$10B', label: 'Transaction value' },
        { val: 'Flagship', label: 'European sell-side engagement' },
        { val: '30+', label: 'Customer interviews' },
        { val: '1st', label: 'Bank with independent VoC proof' },
      ],
      outcome: '',
      outcomeBg: '',
      outcomeBorder: '',
      outcomeText: '',
    },
  },
  {
    company: 'Red Canary',
    companyLogo: '/red-canary-logo.svg',
    logoHeight: 22,
    badge: 'Acquired Company',
    size: '$675M',
    involvement: 'CIM Enhancement',
    left: {
      label: 'CIM Enhancement',
      accentColor: 'rgba(77,144,254,.7)',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      body: 'Independent customer research strengthened the CIM narrative and gave management a defensible equity story ahead of acquisition. Every customer claim pre-validated — no surprises in diligence.',
      outcome: '$675M exit — CIM backed by independent customer evidence',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
    },
    right: {
      label: 'Transaction Parties',
      accentColor: 'rgba(255,255,255,.3)',
      firmLogo: '',
      firmName: '',
      firmRole: '',
      body: '',
      parties: [
        { role: 'Sell-Side Advisor', logo: '/jpmorgan-logo.svg', name: 'J.P. Morgan' },
        { role: 'Acquirer', logo: '/zscaler-logo.svg', name: 'Zscaler', invert: true },
      ],
      outcome: '',
      outcomeBg: '',
      outcomeBorder: '',
      outcomeText: '',
    },
  },
];

function LogoImg({ src, alt, height = 20, invert = false }: { src: string; alt: string; height?: number; invert?: boolean }) {
  if (!src) return null;
  return (
    <img src={src} alt={alt} style={{ height, width: 'auto', maxWidth: 200, display: 'block', filter: invert ? 'brightness(0) invert(1)' : 'none' }} />
  );
}

function Panel({ side, fading }: { side: typeof DEALS[0]['left'] | typeof DEALS[0]['right']; fading: boolean }) {
  const s = side as any;
  return (
    <div style={{ opacity: fading ? 0 : 1, transition: 'opacity .25s', display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: side.accentColor, flexShrink: 0 }} />
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)' }}>{side.label}</div>
      </div>

      {side.firmLogo && (
        <div>
          <LogoImg src={side.firmLogo} alt={side.firmName} height={18} />
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.32)', marginTop: 4 }}>{side.firmRole}</div>
        </div>
      )}

      {s.quote && (
        <div style={{ fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,.62)', lineHeight: 1.7, borderLeft: '2px solid rgba(77,144,254,.3)', paddingLeft: 14, flex: 1 }}>
          {s.quote}
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)', marginTop: 8, fontStyle: 'normal', letterSpacing: '.02em' }}>{s.quoteAttr}</div>
        </div>
      )}

      {side.body && (
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, flex: 1 }}>{side.body}</div>
      )}

      {s.stats && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.06)', flex: 1 }}>
          {s.stats.map((st: any, i: number) => (
            <div key={i} style={{ padding: '14px 16px', background: 'rgba(6,14,28,.95)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,.85)', marginBottom: 4, letterSpacing: '-.01em' }}>{st.val}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', lineHeight: 1.4 }}>{st.label}</div>
            </div>
          ))}
        </div>
      )}

      {s.parties && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
          {s.parties.map((p: any, i: number) => (
            <div key={i}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.25)', marginBottom: 8 }}>{p.role}</div>
              <LogoImg src={p.logo} alt={p.name} height={18} invert={p.invert} />
              {i < s.parties.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginTop: 16 }} />}
            </div>
          ))}
        </div>
      )}

      {side.outcome && (
        <div style={{ background: side.outcomeBg, border: `1px solid ${side.outcomeBorder}`, padding: '10px 14px', marginTop: 'auto' }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.28)', marginBottom: 4 }}>Outcome</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: side.outcomeText, lineHeight: 1.4 }}>{side.outcome}</div>
        </div>
      )}
    </div>
  );
}

export function DealProof() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 250);
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setActive(a => (a + 1) % DEALS.length); setFading(false); }, 250);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const deal = DEALS[active];

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="ib-section-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>Proof of Impact</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 6 }}>
            VoC Intelligence that drives outcomes.
          </h2>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.35)' }}>Three engagements. $11.2B in combined transaction value.</div>
        </div>

        {/* Deal selector + progress dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
          {DEALS.map((d, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              fontSize: 11, fontWeight: 600, padding: '7px 18px', cursor: 'pointer',
              background: active === i ? 'rgba(255,255,255,.1)' : 'transparent',
              border: `1px solid ${active === i ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.08)'}`,
              color: active === i ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.38)',
              transition: 'all .2s', whiteSpace: 'nowrap' as const,
            }}>
              {i + 1} / {DEALS.length} &middot; {d.company} &mdash; {d.size}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: 'rgba(255,255,255,.06)', marginBottom: 20, position: 'relative', overflow: 'hidden' }}>
          <div key={`${active}-${paused}`} style={{
            position: 'absolute', left: 0, top: 0, height: '100%',
            background: 'rgba(130,175,255,.5)',
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : 'width 5s linear',
          }} />
        </div>

        {/* Card */}
        <div style={{ border: '1px solid rgba(255,255,255,.1)', background: 'rgba(6,14,28,.98)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)' }} />

          {/* Card header — fades with content */}
          <div style={{ opacity: fading ? 0 : 1, transition: 'opacity .25s', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 28px', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
            <LogoImg src={deal.companyLogo} alt={deal.company} height={deal.logoHeight} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.55)', padding: '3px 10px', border: '1px solid rgba(255,255,255,.1)' }}>
                {deal.badge}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.02em' }}>
                {deal.size}
              </span>
            </div>
          </div>

          {/* Two-column body */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div style={{ padding: '24px 28px', borderRight: '1px solid rgba(255,255,255,.07)' }}>
              <Panel side={deal.left} fading={fading} />
            </div>
            <div style={{ padding: '24px 28px' }}>
              <Panel side={deal.right} fading={fading} />
            </div>
          </div>

          {/* Footer */}
          <div style={{ opacity: fading ? 0 : 1, transition: 'opacity .25s', padding: '11px 28px', background: 'rgba(77,144,254,.05)', borderTop: '1px solid rgba(77,144,254,.1)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,.3)' }}>Crossover&rsquo;s Involvement:</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(130,175,255,.8)', letterSpacing: '.04em' }}>{deal.involvement}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
