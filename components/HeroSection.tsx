'use client';
import { useState, useEffect } from 'react';
import type { Tab } from '../lib/types';

const METRICS = [
  { val: '50%',   label: 'Mandate win rate' },
  { val: '22+',   label: 'J.P. Morgan engagements' },
  { val: '$25B+', label: 'Transaction value supported' },
];

const PROOF_CARDS = [
  {
    tag: 'Mandate Win',
    quote: 'Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented.',
    name: 'Executive Director, J.P. Morgan',
    role: 'Sell-side mandate · $10B transaction',
  },
  {
    tag: 'Proof of Flywheel',
    quote: 'J.P. Morgan mandate → Crossover line of sight → original fundamental view → GA 30-min brief → secondary diligence validated → $500M Series C at $1B+ valuation.',
    name: 'The Nerdio Deal',
    role: 'Both sides of the same transaction',
  },
  {
    tag: 'Independence',
    quote: 'Independent by construction. Neither side chose the respondents. The same verbatim customer truth serves the sell-side equity story and the buy-side investment thesis simultaneously.',
    name: 'The Verbatim Truth Layer',
    role: 'Why both sides can rely on it',
  },
];

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  if (tab === 'bluecat') return null;

  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setActive(a => (a + 1) % PROOF_CARDS.length); setFading(false); }, 280);
    }, 5200);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 240);
  };

  const card = PROOF_CARDS[active];

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-grid">

          {/* LEFT — headline, subtitle, CTAs, metrics */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <h1 className="hero-title">
              The research layer that spans the full transaction lifecycle.
            </h1>
            <p className="hero-subtitle">
              Independent primary research that wins mandates for bankers, hardens CIMs for
              operators, and builds buy-side conviction for funds. Same data. Neither side
              chose the respondents.
            </p>
            <div style={{ display:'flex', gap:10, marginBottom:28 }}>
              <a href="/intelligence?request=1" className="hero-cta-primary">Start a Mandate &rarr;</a>
              <a href="/catalyst" className="hero-cta-secondary">Catalyst Library</a>
            </div>
            <div className="hero-metrics">
              {METRICS.map((m, i) => (
                <div key={i} className="hero-metric">
                  <div className="hero-metric-val">{m.val}</div>
                  <div className="hero-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — rotating proof carousel */}
          <div className="hero-proof">
            <div style={{ fontSize:9,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(77,144,254,.9)',background:'rgba(77,144,254,.12)',border:'1px solid rgba(77,144,254,.25)',padding:'3px 10px',display:'inline-block',marginBottom:16,opacity:fading?0:1,transition:'opacity .22s' }}>
              {card.tag}
            </div>
            <div style={{ opacity:fading?0:1,transform:fading?'translateY(5px)':'none',transition:'opacity .22s,transform .22s',fontSize:15,fontStyle:'italic',lineHeight:1.7,color:'rgba(255,255,255,.82)',marginBottom:20 }}>
              &ldquo;{card.quote}&rdquo;
            </div>
            <div style={{ width:24,height:1,background:'rgba(255,255,255,.2)',marginBottom:12 }} />
            <div style={{ opacity:fading?0:1,transition:'opacity .22s',marginBottom:20 }}>
              <div style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,.75)',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:3 }}>{card.name}</div>
              <div style={{ fontSize:10,color:'rgba(255,255,255,.38)',letterSpacing:'.03em' }}>{card.role}</div>
            </div>
            <div style={{ display:'flex',gap:6 }}>
              {PROOF_CARDS.map((_,i) => (
                <button key={i} onClick={() => go(i)} style={{ width:i===active?22:6,height:6,borderRadius:3,background:i===active?'rgba(130,175,255,.85)':'rgba(255,255,255,.15)',border:'none',cursor:'pointer',padding:0,transition:'all .3s' }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
