'use client';
import { useState } from 'react';
import type { Tab } from '../lib/types';
import { IB_TRACK_RECORD } from '../lib/data/ibCapabilities';

const METRICS = [
  { val: '$1B+',  label: 'Single transaction outcome' },
  { val: IB_TRACK_RECORD.mandatesSupported,   label: 'Sell-side mandates' },
  { val: '60+',   label: 'Buy-side engagements' },
  { val: IB_TRACK_RECORD.winRateWithCrossover, label: 'Mandate win rate' },
];

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  if (tab === 'bluecat') return null;

  return (
    <div className="hero" style={{ textAlign:'center', padding:'72px var(--content-pad) 0' }}>
      <div className="hero-inner" style={{ maxWidth:'var(--content-max)', margin:'0 auto' }}>

        {/* Eyebrow */}
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:28 }}>
          The Crossover Intelligence Suite
        </div>

        {/* Divider line */}
        <div style={{ width:40, height:1, background:'rgba(255,255,255,.15)', margin:'0 auto 36px' }} />

        {/* Hero headline */}
        <h1 style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:800, lineHeight:1.08, letterSpacing:'-.04em', color:'rgba(255,255,255,.97)', marginBottom:28 }}>
          The only research that powered<br />
          <span style={{ color:'rgba(130,175,255,.85)', fontWeight:700 }}>both sides of a $1B transaction.</span>
        </h1>

        {/* Sub-copy */}
        <div style={{ fontSize:'clamp(14px,1.6vw,17px)', color:'rgba(255,255,255,.55)', lineHeight:1.75, maxWidth:760, margin:'0 auto 40px' }}>
          Our pitch enhancement work won <strong style={{ color:'rgba(255,255,255,.82)', fontWeight:600 }}>J.P. Morgan</strong> the Nerdio mandate.
          Our deep dive research gave <strong style={{ color:'rgba(255,255,255,.82)', fontWeight:600 }}>General Atlantic</strong> the conviction to invest $500M.
        </div>
        <div style={{ fontSize:15, color:'rgba(255,255,255,.4)', fontStyle:'italic', marginBottom:40 }}>
          One deal. Both sides. Powered by Crossover Research.
        </div>



        {/* Metrics strip */}
        <div style={{ display:'flex', borderTop:'1px solid rgba(255,255,255,.07)', marginTop:0 }}>
          {METRICS.map((m, i) => (
            <div key={i} className="hero-metric" style={{ flex:1, borderRight: i < METRICS.length-1 ? '1px solid rgba(255,255,255,.07)' : 'none', borderLeft:'none', padding:'20px 0', alignItems:'center' }}>
              <div className="hero-metric-label">{m.label}</div>
              <div className="hero-metric-val">{m.val}</div>
              <div className="hero-metric-tick" />
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ padding:'18px 0 0', fontSize:18, color:'rgba(255,255,255,.2)', lineHeight:1 }}>&#8964;</div>

      </div>
    </div>
  );
}
