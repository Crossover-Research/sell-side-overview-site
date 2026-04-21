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
      outcome: 'Customer research cited as the mandate-winning differentiator',
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
  const needsInvert = invert ?? src.includes('jpmorgan');
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
            $11.2B in transactions.<br />
            <span style={{ color:'rgba(255,255,255,.60)', fontWeight:400, fontSize:'0.82em' }}>
              Three engagements. One independent evidence base. Neither side chose the respondents.
            </span>
          </h2>
        </div>

        {/* Tab selectors */}
        <div style={{ display:'flex', justifyContent:'center', gap:12, marginBottom:20 }}>
          {DEALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: active === i ? 24 : 6,
                height: 4,
                borderRadius: 2,
                padding: 0,
                border: 'none',
                background: active === i ? 'rgba(130,175,255,.85)' : 'rgba(255,255,255,.25)',
                cursor: 'pointer',
                transition: 'all .3s ease',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height:1, background:'rgba(255,255,255,.06)', marginBottom:20, overflow:'hidden' }}>
          <div key={`${active}-${paused}`} style={{
            height:'100%',
            background:'linear-gradient(90deg, rgba(77,144,254,.3), rgba(130,175,255,.6))',
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : 'width 6s linear',
          }} />
        </div>

        {/* Card */}
        <div style={{
          border:'1px solid rgba(255,255,255,.09)',
          background:'rgba(6,14,28,.98)',
          display:'grid',
          gridTemplateColumns:'220px 1fr 1fr',
          overflow:'hidden',
          position:'relative',
          minHeight:300,
        }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent 0%,rgba(77,144,254,.35) 25%,rgba(130,175,255,.5) 50%,rgba(77,144,254,.35) 75%,transparent 100%)' }} />

          {/* LEFT: Identity */}
          <div style={{
            ...fade,
            background:'rgba(255,255,255,.018)',
            borderRight:'1px solid rgba(255,255,255,.07)',
            padding:'28px 24px',
            display:'flex', flexDirection:'column', justifyContent:'space-between',
          }}>
            <div><LogoImg src={deal.companyLogo} alt={deal.company} height={deal.logoHeight} /></div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:7 }}>
                {deal.sizeLabel}
              </div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:44, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.04em', lineHeight:1, marginBottom:7 }}>
                {deal.size}
              </div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.72)', letterSpacing:'.03em' }}>
                {deal.badge} &middot; {deal.company}
              </div>
            </div>
            <div>
              <div style={{ height:1, background:'rgba(255,255,255,.06)', marginBottom:18 }} />
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.70)', marginBottom:5 }}>Involvement</div>
              <div style={{ fontSize:11, fontWeight:600, color:'rgba(45,212,160,.75)', letterSpacing:'.02em' }}>{deal.involvement}</div>
            </div>
          </div>

          {/* CENTRE: Primary */}
          <div style={{ ...fade, borderRight:'1px solid rgba(255,255,255,.07)', padding:'24px 28px', display:'flex', flexDirection:'column', gap:14 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:s.left.accentColor }}>
              {s.left.label}
            </div>
            {s.left.firmLogo && (
              <div>
                <LogoImg src={s.left.firmLogo} alt={s.left.firmName} height={24} />
                <div style={{ fontSize:10, color:'rgba(255,255,255,.72)', marginTop:5 }}>{s.left.firmRole}</div>
              </div>
            )}
            <div style={{ height:1, background:'rgba(255,255,255,.05)' }} />
            {s.left.quote ? (
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,.82)', lineHeight:1.75, borderLeft:'1px solid rgba(77,144,254,.25)', paddingLeft:14, marginBottom:10 }}>
                  {s.left.quote}
                </div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,.70)', paddingLeft:16 }}>{s.left.quoteAttr}</div>
              </div>
            ) : (
              <div style={{ flex:1, fontSize:12.5, color:'rgba(255,255,255,.72)', lineHeight:1.75 }}>
                {s.left.desc}
              </div>
            )}
            {s.left.outcome && (
              <div style={{ marginTop:'auto', paddingTop: s.left.quote ? 14 : 0, borderTop: s.left.quote ? '1px solid rgba(255,255,255,.06)' : 'none', borderLeft: s.left.quote ? 'none' : `1px solid ${s.left.outcomeBorder}`, paddingLeft: s.left.quote ? 0 : 12 }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.40)', marginBottom:6 }}>Outcome</div>
                <div style={{ fontSize:13, fontWeight:700, color:s.left.outcomeText, lineHeight:1.4 }}>{s.left.outcome}</div>
              </div>
            )}
          </div>

          {/* RIGHT: Context */}
          <div style={{ ...fade, padding:'24px 28px', display:'flex', flexDirection:'column', gap:14 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:s.right.accentColor ?? 'rgba(255,255,255,.25)' }}>
              {s.right.label}
            </div>
            {s.right.firmLogo && (
              <div>
                <LogoImg src={s.right.firmLogo} alt={s.right.firmName} height={24} />
                <div style={{ fontSize:10, color:'rgba(255,255,255,.72)', marginTop:5 }}>{s.right.firmRole}</div>
              </div>
            )}
            {s.right.desc && (
              <>
                <div style={{ height:1, background:'rgba(255,255,255,.05)' }} />
                <div style={{ flex:1, fontSize:12.5, color:'rgba(255,255,255,.72)', lineHeight:1.75 }}>{s.right.desc}</div>
              </>
            )}
            {s.right.stats && (
              <>
                <div style={{ height:1, background:'rgba(255,255,255,.05)' }} />
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(255,255,255,.05)', flex:1 }}>
                  {s.right.stats.map((st: any, i: number) => (
                    <div key={i} style={{ padding:'14px 16px', background:'rgba(6,14,28,.95)' }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, color:'rgba(255,255,255,.92)', marginBottom:5, letterSpacing:'-.02em' }}>{st.val}</div>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,.72)', lineHeight:1.4, textTransform:'uppercase', letterSpacing:'.04em' }}>{st.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {s.right.parties && (
              <>
                <div style={{ height:1, background:'rgba(255,255,255,.05)' }} />
                <div style={{ display:'flex', flexDirection:'column', gap:20, flex:1 }}>
                  {s.right.parties.map((p: any, i: number) => (
                    <div key={i}>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:10 }}>{p.role}</div>
                      <LogoImg src={p.logo} alt={p.name} height={24} invert={p.invert} />
                      {i < s.right.parties.length - 1 && (
                        <div style={{ height:1, background:'rgba(255,255,255,.05)', marginTop:20 }} />
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
            {s.right.outcome && (
              <div style={{ borderLeft:`1px solid ${s.right.outcomeBorder}`, paddingLeft:12, marginTop:'auto' }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.40)', marginBottom:6 }}>Outcome</div>
                <div style={{ fontSize:13, fontWeight:700, color:s.right.outcomeText, lineHeight:1.4 }}>{s.right.outcome}</div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop:1,
          display:'flex', alignItems:'center', justifyContent:'space-between',
          background:'rgba(77,144,254,.05)', border:'1px solid rgba(77,144,254,.12)',
          borderTop:'none', padding:'16px 24px', gap:16, flexWrap:'wrap',
        }}>
          <div style={{ fontSize:13, color:'rgba(255,255,255,.65)', lineHeight:1.5 }}>
            <span style={{ color:'rgba(130,175,255,.9)', fontWeight:600 }}>50+ sell-side mandates. 60+ buy-side engagements.</span>
            {' '}The same customer evidence that closed these deals is available for your next one.
          </div>
          <a
            href="/intelligence?request=1"
            style={{
              display:'inline-flex', alignItems:'center',
              background:'rgba(255,255,255,.9)', color:'#060e1c',
              padding:'10px 22px', fontSize:12, fontWeight:700,
              textDecoration:'none', whiteSpace:'nowrap', flexShrink:0,
              transition:'all .15s',
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-1px)';}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}
          >
            Scope a Mandate →
          </a>
        </div>

      </div>
    </section>
  );
}
