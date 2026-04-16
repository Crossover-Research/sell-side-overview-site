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
    tagline: 'Both sides of the same transaction',
    left: {
      label: 'Sell-Side',
      accentColor: 'rgba(77,144,254,.65)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Exclusive advisor',
      desc: '30+ customer interviews differentiated their pitch. Walked in with verbatims the operator had never seen. No competing bank had them.',
      outcome: 'Won the exclusive mandate',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.18)',
      outcomeText: 'rgba(130,175,255,.88)',
    },
    right: {
      label: 'Buy-Side',
      accentColor: 'rgba(45,212,160,.65)',
      firmName: 'General Atlantic',
      firmLogo: '/general-atlantic-logo.svg',
      firmRole: 'Lead investor',
      desc: 'Independent conviction brief. Research flagged Nerdio before the process opened. Arrived ahead of every competing bidder.',
      outcome: '$500M investment at unicorn valuation',
      outcomeBg: 'rgba(45,212,160,.07)',
      outcomeBorder: 'rgba(45,212,160,.18)',
      outcomeText: 'rgba(45,212,160,.88)',
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
    tagline: 'Flagship European sell-side engagement',
    left: {
      label: 'Sell-Side',
      accentColor: 'rgba(77,144,254,.65)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Sell-side advisor',
      quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
      quoteAttr: 'Executive Director, J.P. Morgan',
      desc: '',
      outcome: 'VoC report cited as the mandate-winning differentiator',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.18)',
      outcomeText: 'rgba(130,175,255,.88)',
    },
    right: {
      label: 'The Context',
      accentColor: 'rgba(255,255,255,.25)',
      firmName: '',
      firmLogo: '',
      firmRole: '',
      desc: '',
      stats: [
        { val: '$10B', label: 'Transaction value' },
        { val: '30+', label: 'Customer interviews' },
        { val: 'Flagship', label: 'European sell-side' },
        { val: '1st', label: 'Bank with independent VoC' },
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
    logoHeight: 32,
    badge: 'Acquisition',
    size: '$675M',
    sizeLabel: 'Exit',
    involvement: 'CIM Enhancement',
    tagline: 'CIM backed by independent customer evidence',
    left: {
      label: 'CIM Enhancement',
      accentColor: 'rgba(77,144,254,.65)',
      firmName: 'J.P. Morgan',
      firmLogo: '/jpmorgan-logo.svg',
      firmRole: 'Sell-side advisor',
      desc: 'Independent customer research strengthened the CIM narrative. Every customer claim pre-validated — no surprises in diligence.',
      outcome: '$675M exit — CIM backed by independent evidence',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.18)',
      outcomeText: 'rgba(130,175,255,.88)',
    },
    right: {
      label: 'Transaction Parties',
      accentColor: 'rgba(255,255,255,.25)',
      firmName: '',
      firmLogo: '',
      firmRole: '',
      desc: '',
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

function LogoImg({ src, alt, height = 18, invert = false }: { src: string; alt: string; height?: number; invert?: boolean }) {
  if (!src) return null;
  const needsInvert = invert || alt === 'J.P. Morgan' || alt === 'General Atlantic';
  return <img src={src} alt={alt} style={{ height, width: 'auto', maxWidth: 190, display: 'block', filter: needsInvert ? 'brightness(0) invert(1)' : 'none', opacity: needsInvert ? .85 : 1 }} />;
}

export function DealProof() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 220);
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setActive(a => (a + 1) % DEALS.length); setFading(false); }, 220);
    }, 5500);
    return () => clearInterval(t);
  }, [paused]);

  const deal = DEALS[active];
  const s = deal as any;

  const fade: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transition: 'opacity .22s ease',
  };

  return (
    <section
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}
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

        {/* Selectors — dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          {DEALS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: active === i ? 24 : 6, height: 6,
              borderRadius: 3, padding: 0, cursor: 'pointer', border: 'none',
              background: active === i ? 'rgba(130,175,255,.85)' : 'rgba(255,255,255,.2)',
              transition: 'all .3s ease',
            }} />
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginBottom: 24, overflow: 'hidden' }}>
          <div key={`${active}-${paused}`} style={{
            height: '100%', background: 'rgba(130,175,255,.4)',
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : 'width 5.5s linear',
          }} />
        </div>

        {/* Card — B layout: large stat left, content right */}
        <div style={{ border: '1px solid rgba(255,255,255,.1)', background: 'rgba(6,14,28,.98)', display: 'grid', gridTemplateColumns: '200px 1fr', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)' }} />

          {/* Left stat column */}
          <div style={{ ...fade, background: 'rgba(255,255,255,.02)', borderRight: '1px solid rgba(255,255,255,.07)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.25)', marginBottom: 12 }}>
                {deal.sizeLabel}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 42, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>
                {deal.size}
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,.35)', letterSpacing: '.04em' }}>
                {deal.badge} &middot; {deal.company}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.2)', marginBottom: 6 }}>Involvement</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(45,212,160,.65)', letterSpacing: '.03em' }}>{deal.involvement}</div>
            </div>
          </div>

          {/* Right content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Right header */}
            <div style={{ ...fade, padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <LogoImg src={deal.companyLogo} alt={deal.company} height={deal.logoHeight} />
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)', fontStyle: 'italic' }}>{deal.tagline}</div>
            </div>

            {/* Two columns */}
            <div style={{ ...fade, display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>

              {/* Left panel */}
              <div style={{ padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,.06)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: deal.left.accentColor }}>
                  {deal.left.label}
                </div>
                {deal.left.firmLogo && (
                  <div>
                    <LogoImg src={deal.left.firmLogo} alt={deal.left.firmName} height={17} />
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', marginTop: 4 }}>{deal.left.firmRole}</div>
                  </div>
                )}
                {s.left.quote ? (
                  <div style={{ fontSize: 12.5, fontStyle: 'italic', color: 'rgba(255,255,255,.58)', lineHeight: 1.7, borderLeft: '2px solid rgba(77,144,254,.25)', paddingLeft: 12, flex: 1 }}>
                    {s.left.quote}
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', marginTop: 6, fontStyle: 'normal' }}>{s.left.quoteAttr}</div>
                  </div>
                ) : (
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.48)', lineHeight: 1.7, flex: 1 }}>{deal.left.desc}</div>
                )}
                {deal.left.outcome && (
                  <div style={{ background: deal.left.outcomeBg, border: `1px solid ${deal.left.outcomeBorder}`, padding: '9px 13px' }}>
                    <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.22)', marginBottom: 4 }}>Outcome</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: deal.left.outcomeText, lineHeight: 1.4 }}>{deal.left.outcome}</div>
                  </div>
                )}
              </div>

              {/* Right panel */}
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: deal.right.accentColor }}>
                  {deal.right.label}
                </div>
                {deal.right.firmLogo && (
                  <div>
                    <LogoImg src={deal.right.firmLogo} alt={deal.right.firmName} height={17} />
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', marginTop: 4 }}>{deal.right.firmRole}</div>
                  </div>
                )}
                {deal.right.desc && (
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.48)', lineHeight: 1.7, flex: 1 }}>{deal.right.desc}</div>
                )}
                {s.right.stats && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.05)', flex: 1 }}>
                    {s.right.stats.map((st: any, i: number) => (
                      <div key={i} style={{ padding: '12px 14px', background: 'rgba(6,14,28,.95)' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 17, fontWeight: 700, color: 'rgba(255,255,255,.82)', marginBottom: 3, letterSpacing: '-.01em' }}>{st.val}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,.32)', lineHeight: 1.4 }}>{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {s.right.parties && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                    {s.right.parties.map((p: any, i: number) => (
                      <div key={i}>
                        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.22)', marginBottom: 7 }}>{p.role}</div>
                        <LogoImg src={p.logo} alt={p.name} height={17} invert={p.invert} />
                        {i < s.right.parties.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,.05)', marginTop: 14 }} />}
                      </div>
                    ))}
                  </div>
                )}
                {deal.right.outcome && (
                  <div style={{ background: deal.right.outcomeBg, border: `1px solid ${deal.right.outcomeBorder}`, padding: '9px 13px' }}>
                    <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.22)', marginBottom: 4 }}>Outcome</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: deal.right.outcomeText, lineHeight: 1.4 }}>{deal.right.outcome}</div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
