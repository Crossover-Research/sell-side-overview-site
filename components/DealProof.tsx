'use client';
import { useState } from 'react';

const DEALS = [
  {
    company: 'Nerdio',
    companyLogo: '/nerdio-logo.svg',
    badge: 'Series C',
    size: '$500M',
    involvement: 'Catalyst Dual-Side',
    sell: {
      label: 'Sell-Side Mandate Pitch',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Exclusive advisor',
      desc: 'J.P. Morgan commissioned Crossover to differentiate their pitch. We interviewed 30+ customers. They won the exclusive mandate.',
      outcome: 'Won the exclusive sell-side mandate',
      accentColor: 'rgba(77,144,254,.7)',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
    },
    buy: {
      label: 'Buy-Side Diligence',
      firmLogo: '/general-atlantic-logo.svg',
      firmName: 'General Atlantic',
      firmRole: 'Lead investor',
      desc: 'Our research flagged Nerdio as an exceptional asset. General Atlantic commissioned deeper diligence to build conviction before bidding.',
      outcome: '$500M investment at unicorn valuation',
      accentColor: 'rgba(45,212,160,.7)',
      outcomeBg: 'rgba(45,212,160,.07)',
      outcomeBorder: 'rgba(45,212,160,.2)',
      outcomeText: 'rgba(45,212,160,.9)',
    },
  },
  {
    company: 'Mobile.de',
    companyLogo: '/mobile-de-logo.svg',
    badge: 'Mandate Pitch',
    size: '$10B',
    involvement: 'Mandate Pitch Deck',
    sell: {
      label: 'Sell-Side Mandate Pitch',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      desc: "The client needed evidence that would stand up to institutional buyer scrutiny at the $10B level. Crossover's VoC report was the differentiator that separated J.P. Morgan's pitch.",
      outcome: 'VoC report cited as the mandate-winning differentiator',
      accentColor: 'rgba(77,144,254,.7)',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
      quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
      quoteAttr: 'Executive Director, J.P. Morgan',
    },
    buy: null,
    acquirer: null,
    advisor: null,
    context: {
      label: 'The Context',
      size: '$10B',
      sizeLabel: 'Transaction mandate — flagship European sell-side engagement.',
      desc: "The client needed evidence that would stand up to institutional buyer scrutiny. Desk research alone wouldn't clear the bar at this deal size.",
    },
  },
  {
    company: 'Red Canary',
    companyLogo: '/red-canary-logo.svg',
    badge: 'Acquired Company',
    size: '$675M',
    involvement: 'CIM Enhancement',
    sell: {
      label: 'CIM Enhancement',
      firmLogo: '/jpmorgan-logo.svg',
      firmName: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      desc: 'Independent customer research strengthened the CIM narrative and gave management a defensible equity story ahead of acquisition. Every customer claim pre-validated — no surprises in diligence.',
      outcome: '$675M exit — CIM backed by independent customer evidence',
      accentColor: 'rgba(77,144,254,.7)',
      outcomeBg: 'rgba(77,144,254,.07)',
      outcomeBorder: 'rgba(77,144,254,.2)',
      outcomeText: 'rgba(130,175,255,.9)',
    },
    buy: null,
    acquirer: { firmLogo: '/zscaler-logo.svg', firmName: 'Zscaler', firmRole: 'Acquirer' },
    advisor: { firmLogo: '/jpmorgan-logo.svg', firmName: 'J.P. Morgan', firmRole: 'Sell-side advisor' },
    context: null,
  },
];

function LogoImg({ src, alt, height = 22 }: { src: string; alt: string; height?: number }) {
  const needsInvert = alt === 'Zscaler';
  return (
    <img src={src} alt={alt} style={{
      height, width: 'auto', maxWidth: 200, display: 'block',
      filter: needsInvert ? 'brightness(0) invert(1)' : 'none',
    }} />
  );
}

function OutcomeBox({ outcome, bg, border, text }: { outcome: string; bg: string; border: string; text: string }) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, padding: '10px 14px', marginTop: 'auto' }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.28)', marginBottom: 4 }}>Outcome</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.4 }}>{outcome}</div>
    </div>
  );
}

export function DealProof() {
  const [active, setActive] = useState(0);
  const deal = DEALS[active];

  const hasRight = deal.buy || deal.acquirer;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="ib-section-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>Proof of Impact</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 6 }}>
            VoC Intelligence that drives outcomes.
          </h2>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.35)' }}>Three engagements. $11.2B in combined transaction value.</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
          {DEALS.map((d, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              fontSize: 11, fontWeight: 600, padding: '7px 18px', cursor: 'pointer',
              background: active === i ? 'rgba(255,255,255,.1)' : 'transparent',
              border: `1px solid ${active === i ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.08)'}`,
              color: active === i ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)',
              transition: 'all .15s', whiteSpace: 'nowrap' as const,
            }}>
              {i + 1} / {DEALS.length} &middot; {d.company} &mdash; {d.size}
            </button>
          ))}
        </div>

        <div style={{ border: '1px solid rgba(255,255,255,.1)', background: 'rgba(6,14,28,.98)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)' }} />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 28px', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
            <LogoImg src={deal.companyLogo} alt={deal.company} height={deal.company === 'Red Canary' ? 22 : 26} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)', padding: '3px 10px' }}>
                {deal.badge}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.02em' }}>
                {deal.size}
              </span>
            </div>
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: hasRight ? '1fr 1fr' : '1fr', gap: 0 }}>

            {/* Left: sell side */}
            <div style={{ padding: '24px 28px', borderRight: hasRight ? '1px solid rgba(255,255,255,.07)' : 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: deal.sell.accentColor, flexShrink: 0 }} />
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)' }}>{deal.sell.label}</div>
              </div>
              <div>
                <LogoImg src={deal.sell.firmLogo} alt={deal.sell.firmName} height={20} />
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.32)', marginTop: 4 }}>{deal.sell.firmRole}</div>
              </div>
              {(deal.sell as any).quote ? (
                <div style={{ fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,.6)', lineHeight: 1.65, borderLeft: '2px solid rgba(77,144,254,.3)', paddingLeft: 12 }}>
                  {(deal.sell as any).quote}
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)', marginTop: 6, fontStyle: 'normal' }}>{(deal.sell as any).quoteAttr}</div>
                </div>
              ) : (
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>{deal.sell.desc}</div>
              )}
              <OutcomeBox outcome={deal.sell.outcome} bg={deal.sell.outcomeBg} border={deal.sell.outcomeBorder} text={deal.sell.outcomeText} />
            </div>

            {/* Right: buy side */}
            {deal.buy && (
              <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: deal.buy.accentColor, flexShrink: 0 }} />
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)' }}>{deal.buy.label}</div>
                </div>
                <div>
                  <LogoImg src={deal.buy.firmLogo} alt={deal.buy.firmName} height={20} />
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.32)', marginTop: 4 }}>{deal.buy.firmRole}</div>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>{deal.buy.desc}</div>
                <OutcomeBox outcome={deal.buy.outcome} bg={deal.buy.outcomeBg} border={deal.buy.outcomeBorder} text={deal.buy.outcomeText} />
              </div>
            )}

            {/* Right: acquirer panel (Red Canary) */}
            {deal.acquirer && (
              <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)', marginBottom: 4 }}>Transaction Parties</div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.25)', marginBottom: 8 }}>Sell-Side Advisor</div>
                  <LogoImg src={deal.advisor!.firmLogo} alt={deal.advisor!.firmName} height={20} />
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} />
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.25)', marginBottom: 8 }}>Acquirer</div>
                  <LogoImg src={deal.acquirer.firmLogo} alt={deal.acquirer.firmName} height={20} />
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div style={{ padding: '11px 28px', background: 'rgba(77,144,254,.05)', borderTop: '1px solid rgba(77,144,254,.1)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,.3)' }}>Crossover's Involvement:</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(130,175,255,.8)', letterSpacing: '.04em' }}>{deal.involvement}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
