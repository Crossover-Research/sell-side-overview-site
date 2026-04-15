'use client';
import { useState } from 'react';

const DEALS = [
  {
    company: 'Nerdio',
    badge: 'Series C',
    size: '$500M',
    sizeLabel: 'at $1B+ valuation',
    involvement: 'Catalyst Dual-Side',
    sell: {
      label: 'Sell-Side Mandate Pitch',
      firm: 'J.P. Morgan',
      firmRole: 'Exclusive advisor',
      desc: 'J.P. Morgan commissioned Crossover to differentiate their pitch. We interviewed 30+ customers. They won the exclusive mandate.',
      outcome: 'Won the exclusive sell-side mandate',
      color: 'rgba(77,144,254,.7)',
    },
    buy: {
      label: 'Buy-Side Diligence',
      firm: 'General Atlantic',
      firmRole: 'Lead investor',
      desc: 'Our research flagged Nerdio as an exceptional asset. General Atlantic commissioned deeper diligence to build conviction before bidding.',
      outcome: '$500M investment at unicorn valuation',
      color: 'rgba(45,212,160,.7)',
    },
  },
  {
    company: 'Mobile.de',
    badge: 'Mandate Pitch',
    size: '$10B',
    sizeLabel: 'transaction mandate',
    involvement: 'CIM Enhancement',
    sell: {
      label: 'Sell-Side Mandate Pitch',
      firm: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      desc: 'The client needed evidence that would stand up to institutional buyer scrutiny. Crossover\'s VoC report was the differentiator that separated J.P. Morgan\'s pitch.',
      outcome: 'VoC report cited as the mandate-winning differentiator',
      color: 'rgba(77,144,254,.7)',
    },
    quote: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented."',
    quoteAttr: 'Executive Director, J.P. Morgan',
  },
  {
    company: 'Red Canary',
    badge: 'Acquired Company',
    size: '$675M',
    sizeLabel: 'exit · Cash + Equity to Zscaler',
    involvement: 'CIM Enhancement',
    sell: {
      label: 'CIM Enhancement',
      firm: 'J.P. Morgan',
      firmRole: 'Sell-side advisor',
      desc: 'Independent customer research strengthened the CIM narrative and gave management a defensible equity story ahead of the Zscaler acquisition. Every customer claim pre-validated — no surprises in diligence.',
      outcome: '$675M exit — CIM backed by independent customer evidence',
      color: 'rgba(77,144,254,.7)',
    },
    acquirer: 'Zscaler',
  },
];

export function DealProof() {
  const [active, setActive] = useState(0);
  const deal = DEALS[active];

  return (
    <section style={{ padding:'64px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <div className="ib-section-eyebrow" style={{ textAlign:'center', marginBottom:8 }}>Proof of Impact</div>
          <h2 style={{ fontSize:'clamp(22px,3vw,32px)', fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', marginBottom:8 }}>
            Voice of Customer Intelligence that drives outcomes.
          </h2>
          <div style={{ fontSize:13, color:'rgba(255,255,255,.35)' }}>
            Three engagements. $11.2B in combined transaction value.
          </div>
        </div>

        {/* Deal selector */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:28, flexWrap:'wrap' }}>
          {DEALS.map((d, i) => (
            <button key={i} onClick={()=>setActive(i)} style={{
              fontSize:11, fontWeight:700, padding:'6px 16px', cursor:'pointer',
              background: active===i ? 'rgba(255,255,255,.1)' : 'transparent',
              border: `1px solid ${active===i ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.08)'}`,
              color: active===i ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)',
              transition:'all .15s',
            }}>
              {String(i+1).padStart(1,'0')} / {DEALS.length} · {d.company} — {d.size}
            </button>
          ))}
        </div>

        {/* Deal card */}
        <div style={{ border:'1px solid rgba(255,255,255,.1)', background:'rgba(6,14,28,.95)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)' }} />

          {/* Card header */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 28px', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
            <div style={{ fontSize:18, fontWeight:700, color:'rgba(255,255,255,.9)' }}>{deal.company}</div>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.7)', padding:'3px 10px' }}>{deal.badge}</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, color:'rgba(255,255,255,.92)', letterSpacing:'-.02em' }}>{deal.size}</span>
            </div>
          </div>

          {/* Card body */}
          <div style={{ display:'grid', gridTemplateColumns: deal.buy ? '1fr 1fr' : '1fr 1fr', gap:0 }}>

            {/* Sell side */}
            <div style={{ padding:'24px 28px', borderRight:'1px solid rgba(255,255,255,.07)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:16 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:deal.sell.color, flexShrink:0 }} />
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.35)' }}>{deal.sell.label}</div>
              </div>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.8)', marginBottom:4 }}>{deal.sell.firm}</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.3)', marginBottom:14 }}>{deal.sell.firmRole}</div>
              {deal.quote && (
                <div style={{ fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,.6)', lineHeight:1.65, marginBottom:14, borderLeft:'2px solid rgba(77,144,254,.3)', paddingLeft:12 }}>
                  {deal.quote}
                </div>
              )}
              {!deal.quote && (
                <div style={{ fontSize:12.5, color:'rgba(255,255,255,.5)', lineHeight:1.65, marginBottom:14 }}>{deal.sell.desc}</div>
              )}
              <div style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', padding:'10px 14px' }}>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', marginBottom:4 }}>Outcome</div>
                <div style={{ fontSize:12.5, fontWeight:600, color:'rgba(255,255,255,.8)' }}>{deal.sell.outcome}</div>
              </div>
              {deal.quoteAttr && <div style={{ fontSize:10, color:'rgba(255,255,255,.3)', marginTop:10 }}>{deal.quoteAttr}</div>}
            </div>

            {/* Buy side or acquirer */}
            <div style={{ padding:'24px 28px' }}>
              {deal.buy && (
                <>
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:16 }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:deal.buy.color, flexShrink:0 }} />
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.35)' }}>{deal.buy.label}</div>
                  </div>
                  <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.8)', marginBottom:4 }}>{deal.buy.firm}</div>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,.3)', marginBottom:14 }}>{deal.buy.firmRole}</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,.5)', lineHeight:1.65, marginBottom:14 }}>{deal.buy.desc}</div>
                  <div style={{ background:'rgba(45,212,160,.06)', border:'1px solid rgba(45,212,160,.15)', padding:'10px 14px' }}>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.6)', marginBottom:4 }}>Outcome</div>
                    <div style={{ fontSize:12.5, fontWeight:600, color:'rgba(45,212,160,.85)' }}>{deal.buy.outcome}</div>
                  </div>
                </>
              )}
              {deal.acquirer && (
                <>
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:16 }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:'rgba(255,255,255,.3)', flexShrink:0 }} />
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.35)' }}>Transaction Parties</div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                    <div>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.25)', marginBottom:6 }}>Sell-Side Advisor</div>
                      <div style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,.7)' }}>J.P. Morgan</div>
                    </div>
                    <div style={{ height:1, background:'rgba(255,255,255,.06)' }} />
                    <div>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.25)', marginBottom:6 }}>Acquirer</div>
                      <div style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,.7)' }}>{deal.acquirer}</div>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Footer */}
          <div style={{ padding:'12px 28px', background:'rgba(77,144,254,.06)', borderTop:'1px solid rgba(77,144,254,.1)', display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:10, color:'rgba(255,255,255,.35)' }}>Crossover's Involvement:</span>
            <span style={{ fontSize:10, fontWeight:700, color:'rgba(130,175,255,.8)', letterSpacing:'.04em' }}>{deal.involvement}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
