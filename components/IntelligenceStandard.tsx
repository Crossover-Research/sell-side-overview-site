'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const DEALS = [
  { label: 'J.P. Morgan + General Atlantic', deal: 'Nerdio $500M Series C' },
  { label: 'J.P. Morgan + Zscaler', deal: 'Red Canary $675M exit' },
  { label: 'J.P. Morgan mandate', deal: 'Mobile.de $10B' },
];

export function IntelligenceStandard() {
  const { ref, inView } = useInView(0.15);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timings = [200, 700, 1200, 1750, 2100, 2450, 3000];
    const timers = timings.map((t, i) => setTimeout(() => setStep(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const vis = (n: number) => step >= n;

  const nodeStyle = (show: boolean, active: boolean): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity .5s ease, transform .5s ease, border-color .4s, background .4s',
    border: `1px solid ${active ? 'rgba(77,144,254,.4)' : 'rgba(255,255,255,.1)'}`,
    background: active ? 'rgba(77,144,254,.08)' : 'rgba(6,14,28,.95)',
    padding: '16px 24px',
    textAlign: 'center' as const,
  });

  const lineStyle = (show: boolean, width?: string, height?: string): React.CSSProperties => ({
    transition: `${width ? 'width' : 'height'} .4s ease`,
    background: 'rgba(255,255,255,.12)',
    ...(height ? { width: 1, height: show ? height : '0px' } : { height: 1, width: show ? (width || '100%') : '0px' }),
  });

  return (
    <section ref={ref} style={{ padding: '64px 0', background: 'rgba(255,255,255,.015)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="ib-section-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>The Standard</div>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 10 }}>
            One evidence base. Every party in the room.
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.68)', maxWidth: 560, margin: '0 auto' }}>
            Customer verbatims collected independently. Uncoached. Defensible at IC. The mandate pitch deck is the baseline — the operator's CIM and the investor's diligence both draw from the same verbatim record.
          </p>
        </div>

        {/* Animated arc */}
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          {/* SOURCE */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <div style={{ width: 360, ...nodeStyle(vis(1), vis(2)) }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(77,144,254,.7)', marginBottom: 5 }}>Crossover Research · Intelligence Infrastructure</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 3 }}>Verbatim Truth Layer</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.72)', fontStyle: 'italic' }}>The verbatim truth layer that all parties can rely on.</div>
            </div>
          </div>

          {/* Line down to banker */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ ...lineStyle(vis(2), undefined, '36px') }} />
          </div>

          {/* BANKER */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <div style={{ width: 360, ...nodeStyle(vis(3), vis(3)), borderColor: vis(3) ? 'rgba(77,144,254,.5)' : 'rgba(255,255,255,.08)', background: vis(3) ? 'rgba(77,144,254,.1)' : 'rgba(6,14,28,.95)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(77,144,254,.85)', marginBottom: 5 }}>Bankers · Stage 01</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 3 }}>Mandate pitch deck</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.72)' }}>Walk in first. Walk in with proof no competing bank has.</div>
            </div>
          </div>

          {/* Fork */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: 52 }}>
            {/* Center drop */}
            <div style={{ position: 'absolute', left: '50%', top: 0, ...lineStyle(vis(3), undefined, '28px') }} />
            {/* Horizontal fork */}
            <div style={{ position: 'absolute', top: 27, left: '50%', transform: 'translateX(-50%)', ...lineStyle(vis(4), vis(4) ? '260px' : '0px') }} />
            {/* Drop left */}
            <div style={{ position: 'absolute', top: 27, left: 'calc(50% - 130px)', ...lineStyle(vis(4), undefined, vis(4) ? '25px' : '0px') }} />
            {/* Drop right */}
            <div style={{ position: 'absolute', top: 27, right: 'calc(50% - 130px)', ...lineStyle(vis(4), undefined, vis(4) ? '25px' : '0px') }} />
          </div>

          {/* OPERATORS + INVESTORS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* Operators */}
            <div style={{ ...nodeStyle(vis(5), false), borderColor: vis(5) ? 'rgba(45,212,160,.3)' : 'rgba(255,255,255,.06)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(45,212,160,.8)', marginBottom: 5 }}>Operators · Stage 02</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,.88)', marginBottom: 4 }}>Preemptive CIM</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.68)', lineHeight: 1.6 }}>Weaknesses surfaced and closed before buyers use them as leverage.</div>
            </div>
            {/* Investors */}
            <div style={{ ...nodeStyle(vis(6), false), borderColor: vis(6) ? 'rgba(245,158,11,.3)' : 'rgba(255,255,255,.06)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(245,158,11,.8)', marginBottom: 5 }}>Investors · Stage 03</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,.88)', marginBottom: 4 }}>Secondary diligence</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.68)', lineHeight: 1.6 }}>Stress-test the thesis 6–12 months before the process opens.</div>
            </div>
          </div>

          {/* Truth bar */}
          <div style={{
            marginTop: 12, padding: '20px 28px',
            background: 'rgba(6,14,28,.95)', border: '1px solid rgba(255,255,255,.08)',
            opacity: vis(7) ? 1 : 0, transform: vis(7) ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity .5s ease, transform .5s ease',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.8)', lineHeight: 1.6, marginBottom: 16 }}>
              One verbatim truth layer. Every party relies on it. No party produced it.
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              {DEALS.map((d, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', padding: '8px 16px' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.85)' }}>{d.deal}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.68)' }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
