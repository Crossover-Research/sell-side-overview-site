'use client';
import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { id: 1, label: 'Sell-Side Mandate',   sub: 'J.P. Morgan engages Crossover', color: 'rgba(120,144,178,.8)' },
  { id: 2, label: 'Line of Sight',       sub: 'Primary research → high-conviction asset', color: 'rgba(120,144,178,.8)' },
  { id: 3, label: 'Fundamental View',    sub: 'Original thesis. independent, not curated', color: 'rgba(120,144,178,.8)' },
  { id: 4, label: 'Buy-Side Match',      sub: 'GA alerted · 30-min brief · early positioning', color: 'rgba(120,144,178,.8)' },
  { id: 5, label: 'Secondary Diligence', sub: '$500M Series C at $1B+ valuation', color: '#5974a0' },
];

export function FlywheelDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const run = () => {
      setActiveStep(i);
      i++;
      if (i < STEPS.length) setTimeout(run, 900);
    };
    setTimeout(run, 600);
  }, [visible]);

  return (
    <div ref={ref} style={{ width:'100%', display:'flex', flexDirection:'column', gap:0 }}>
      {STEPS.map((step, i) => {
        const isActive  = activeStep >= i;
        const isFinal   = i === STEPS.length - 1;
        const isCurrent = activeStep === i;

        return (
          <div key={i} style={{ display:'flex', gap:0, alignItems:'stretch' }}>

            {/* Left: number column + connector line */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:40, flexShrink:0 }}>
              {/* Circle */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink:0,
                border: `2px solid ${isActive ? (isFinal ? '#5974a0' : 'rgba(120,144,178,.9)') : 'rgba(255,255,255,.12)'}`,
                background: isActive ? (isFinal ? 'rgba(89,116,154,.15)' : 'rgba(120,144,178,.15)') : 'transparent',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all .4s ease',
                boxShadow: isCurrent ? `0 0 12px ${isFinal ? 'rgba(89,116,154,.4)' : 'rgba(120,144,178,.4)'}` : 'none',
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  color: isActive ? (isFinal ? '#5974a0' : 'rgba(166,183,210,.9)') : 'rgba(255,255,255,.25)',
                  fontFamily: 'JetBrains Mono, monospace',
                  transition: 'color .4s',
                }}>
                  {String(step.id).padStart(2,'0')}
                </span>
              </div>
              {/* Connector */}
              {!isFinal && (
                <div style={{
                  width: 2, flex:1, minHeight: 20,
                  background: isActive && activeStep > i
                    ? 'linear-gradient(to bottom, rgba(120,144,178,.5), rgba(120,144,178,.2))'
                    : 'rgba(255,255,255,.07)',
                  transition: 'background .4s',
                  margin: '3px 0',
                }} />
              )}
            </div>

            {/* Right: content */}
            <div style={{
              flex: 1, paddingLeft: 16, paddingBottom: isFinal ? 0 : 22, paddingTop: 2,
              opacity: isActive ? 1 : 0.3,
              transform: isActive ? 'none' : 'translateX(-4px)',
              transition: 'opacity .4s ease, transform .4s ease',
            }}>
              <div style={{
                fontSize: 14, fontWeight: 700, lineHeight: 1.3,
                color: isFinal ? '#5974a0' : 'rgba(255,255,255,.88)',
                marginBottom: 4,
              }}>
                {step.label}
              </div>
              <div style={{
                fontSize: 12, color: isFinal ? 'rgba(89,116,154,.9)' : 'rgba(255,255,255,.70)',
                lineHeight: 1.55,
              }}>
                {step.sub}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
