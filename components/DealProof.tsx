'use client';
import { useState, useEffect, useCallback } from 'react';
import { CONTACT } from '../lib/config/site';

const DEALS = [
  {
    company: 'Nerdio',
    companyLogo: '/nerdio-logo.svg',
    logoHeight: 28,
    badge: 'Series C',
    size: '$500M',
    sizeLabel: 'Transaction',
    type: 'Dual-Side Engagement',
    parties: [
      { role: 'Sell-Side Advisor', name: 'J.P. Morgan',       logo: '/jpmorgan-logo.svg',         invert: true  },
      { role: 'Lead Investor',     name: 'General Atlantic',   logo: '/general-atlantic-logo.svg', invert: false },
    ],
    crossover: {
      involvement: 'Catalyst Dual-Side',
      desc: 'Independent customer interviews delivered to both parties. Neither side briefed or selected the respondents. J.P. Morgan used the research to differentiate their mandate pitch. General Atlantic used the same dataset to build conviction before the process opened.',
      outcomes: [
        { party: 'J.P. Morgan',      color: 'rgba(166,183,210,.95)', result: 'Won the exclusive mandate' },
        { party: 'General Atlantic', color: 'rgba(89,116,154,.95)',  result: '$500M investment at unicorn valuation' },
      ],
    },
  },
  {
    company: 'Mobile.de',
    companyLogo: '/mobile-de-logo.svg',
    logoHeight: 26,
    badge: 'Mandate Pitch',
    size: '$10B',
    sizeLabel: 'Transaction',
    type: 'Sell-Side Mandate Pitch',
    parties: [
      { role: 'Sell-Side Advisor', name: 'J.P. Morgan', logo: '/jpmorgan-logo.svg', invert: true },
    ],
    crossover: {
      involvement: 'Mandate Pitch Deck',
      quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
      quoteAttr: 'Executive Director, J.P. Morgan',
      outcomes: [
        { party: 'J.P. Morgan', color: 'rgba(166,183,210,.95)', result: 'Customer research cited as the mandate-winning differentiator' },
      ],
    },
  },
  {
    company: 'Red Canary',
    companyLogo: '/red-canary-logo.svg',
    logoHeight: 30,
    badge: 'Acquisition',
    size: '$675M',
    sizeLabel: 'Exit',
    type: 'CIM Enhancement',
    parties: [
      { role: 'Sell-Side Advisor', name: 'J.P. Morgan', logo: '/jpmorgan-logo.svg',    invert: true },
      { role: 'Acquirer',          name: 'Zscaler',     logo: '/zscaler-logo.svg',     invert: true },
    ],
    crossover: {
      involvement: 'CIM Enhancement',
      desc: 'Customer research woven into the CIM narrative. Every customer claim pre-validated against actual user interviews. No gaps for buyers to exploit in diligence.',
      outcomes: [
        { party: 'Outcome', color: 'rgba(166,183,210,.95)', result: '$675M exit. CIM backed by independent evidence' },
      ],
    },
  },
];

function LogoImg({ src, alt, height = 18, invert }: { src: string; alt: string; height?: number; invert?: boolean }) {
  if (!src) return null;
  const needsInvert = invert ?? src.includes('jpmorgan');
  const isGA = src.includes('general-atlantic');
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: isGA ? 20 : height,
        width: 'auto',
        maxWidth: isGA ? 160 : 200,
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
  const fade: React.CSSProperties = { opacity: fading ? 0 : 1, transition: 'opacity .2s ease' };

  return (
    <section
      style={{ padding:'72px 0 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div className="ib-section-eyebrow" style={{ textAlign:'center', marginBottom:10 }}>Proof of Impact</div>
          <h2 style={{
            fontSize:'clamp(22px,3vw,34px)', fontWeight:700,
            color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', marginBottom:10, lineHeight:1.2,
          }}>
            Neither party briefed the respondents.<br />
            <span style={{ color:'rgba(255,255,255,.78)', fontWeight:400, fontSize:'0.82em' }}>
              $11.2B followed.
            </span>
          </h2>
        </div>

        {/* Tab selectors. 44x28 touch targets wrapping visual dots */}
        <div style={{ display:'flex', justifyContent:'center', gap:4, marginBottom:20 }}>
          {DEALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width:44, height:28,
                display:'flex', alignItems:'center', justifyContent:'center',
                padding:0, border:'none', background:'transparent',
                cursor:'pointer',
              }}
            >
              <div style={{
                width: active === i ? 28 : 8,
                height: 4,
                borderRadius: 2,
                background: active === i ? 'rgba(166,183,210,.88)' : 'rgba(255,255,255,.28)',
                transition: 'all .3s ease',
              }} />
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height:1, background:'rgba(255,255,255,.06)', marginBottom:20, overflow:'hidden' }}>
          <div key={`${active}-${paused}`} style={{
            height:'100%',
            background:'linear-gradient(90deg, rgba(120,144,178,.3), rgba(166,183,210,.85))',
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : 'width 6s linear',
          }} />
        </div>

        {/* Card. LEFT: Transaction parties  |  RIGHT: Crossover's role */}
        <div style={{
          border:'1px solid rgba(255,255,255,.09)',
          background:'rgba(6,14,28,.98)',
          display:'grid',
          gridTemplateColumns:'280px 1fr',
          overflow:'hidden',
          position:'relative',
          minHeight:280,
        }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent 0%,rgba(120,144,178,.35) 25%,rgba(166,183,210,.5) 50%,rgba(120,144,178,.35) 75%,transparent 100%)' }} />

          {/* LEFT: Transaction parties */}
          <div style={{
            ...fade,
            background:'rgba(255,255,255,.018)',
            borderRight:'1px solid rgba(255,255,255,.08)',
            padding:'28px 26px',
            display:'flex', flexDirection:'column', gap:0,
          }}>
            {/* Company + size */}
            <div style={{ marginBottom:20 }}>
              <LogoImg src={deal.companyLogo} alt={deal.company} height={deal.logoHeight} />
              <div style={{ marginTop:16 }}>
                <div style={{ fontSize:13.5, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:5 }}>
                  {deal.sizeLabel}
                </div>
                <div style={{ fontSize:38, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.04em', lineHeight:1, marginBottom:5 }}>
                  {deal.size}
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.78)', letterSpacing:'.04em' }}>
                  {deal.badge} &middot; {deal.company}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height:1, background:'rgba(255,255,255,.07)', marginBottom:20 }} />

            {/* Deal type label */}
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.68)', marginBottom:14 }}>
              Transaction Parties
            </div>

            {/* Parties */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {deal.parties.map((p, i) => (
                <div key={i}>
                  <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.70)', marginBottom:8 }}>{p.role}</div>
                  <LogoImg src={p.logo} alt={p.name} height={18} invert={p.invert} />
                  {i < deal.parties.length - 1 && (
                    <div style={{ height:1, background:'rgba(255,255,255,.05)', marginTop:16 }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Crossover's role */}
          <div style={{ ...fade, padding:'28px 32px', display:'flex', flexDirection:'column', gap:0 }}>

            {/* Involvement badge */}
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(89,116,154,.9)', background:'rgba(89,116,154,.09)', border:'1px solid rgba(89,116,154,.22)', padding:'3px 10px' }}>
                {deal.crossover.involvement}
              </div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.65)' }}>
                Crossover Research
              </div>
            </div>

            {/* Quote or description */}
            {(deal.crossover as any).quote ? (
              <div style={{ marginBottom:24, flex:1 }}>
                <div style={{ fontSize:15, fontStyle:'italic', color:'rgba(255,255,255,.85)', lineHeight:1.75, borderLeft:'2px solid rgba(120,144,178,.3)', paddingLeft:16, marginBottom:10 }}>
                  {(deal.crossover as any).quote}
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.76)', paddingLeft:18 }}>{(deal.crossover as any).quoteAttr}</div>
              </div>
            ) : (
              <div style={{ fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.78, marginBottom:24, flex:1 }}>
                {(deal.crossover as any).desc}
              </div>
            )}

            {/* Divider */}
            <div style={{ height:1, background:'rgba(255,255,255,.06)', marginBottom:20 }} />

            {/* Outcomes */}
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {deal.crossover.outcomes.map((o, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ width:3, height:36, background:o.color, borderRadius:2, flexShrink:0, opacity:.6 }} />
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.68)', marginBottom:3 }}>{o.party}</div>
                    <div style={{ fontSize:15, fontWeight:600, color:o.color, lineHeight:1.3 }}>{o.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop:1,
          display:'flex', alignItems:'center', justifyContent:'space-between',
          background:'rgba(120,144,178,.05)', border:'1px solid rgba(120,144,178,.12)',
          borderTop:'none', padding:'16px 24px', gap:16, flexWrap:'wrap',
        }}>
          <div style={{ fontSize:15, color:'rgba(255,255,255,.84)', lineHeight:1.5 }}>
            <span style={{ color:'rgba(166,183,210,.9)', fontWeight:600 }}>50+ sell-side mandates. 60+ buy-side engagements.</span>
            {' '}The same customer evidence that closed these deals is available for your next one.
          </div>
          <a
            href={CONTACT.bookingUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center',
              background:'rgba(255,255,255,.9)', color:'#060e1c',
              padding:'10px 22px', fontSize:15, fontWeight:700,
              textDecoration:'none', whiteSpace:'nowrap', flexShrink:0,
              transition:'all .15s',
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-1px)';}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}
          >
            Book a Meeting
          </a>
        </div>

      </div>
    </section>
  );
}
