'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
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

const PRODUCTS = [
  {
    audience: 'Investor',
    color: 'rgba(168,130,255,.85)',
    bg: 'rgba(168,130,255,.08)',
    border: 'rgba(168,130,255,.25)',
    title: 'Catalyst Conviction Brief',
    desc: 'Conviction before the first founder call. 6–12 months before the process opens.',
  },
  {
    audience: 'Operator',
    color: 'rgba(45,212,160,.85)',
    bg: 'rgba(45,212,160,.08)',
    border: 'rgba(45,212,160,.25)',
    title: 'Catalyst Preemptive CIM',
    desc: 'Surface your weaknesses before buyers do. Enter diligence with the rebuttal already built.',
  },
  {
    audience: 'Investor',
    color: 'rgba(168,130,255,.85)',
    bg: 'rgba(168,130,255,.08)',
    border: 'rgba(168,130,255,.25)',
    title: 'Commercial Due Diligence',
    desc: 'Diligence that starts from conviction, not from zero.',
  },
  {
    audience: 'Operator',
    color: 'rgba(45,212,160,.85)',
    bg: 'rgba(45,212,160,.08)',
    border: 'rgba(45,212,160,.25)',
    title: 'Catalyst CIM',
    desc: 'A CIM where every claim is pre-validated by independent customer verbatims.',
  },
];

export function ProductArchitecture() {
  const { ref, inView } = useInView();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timings = [200, 650, 1050, 1350, 1550, 1750, 1950, 2400];
    const timers = timings.map((t, i) => setTimeout(() => setStep(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const vis = (n: number) => step >= n;

  const fadeIn = (show: boolean, delay = 0): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(8px)',
    transition: `opacity .45s ease ${delay}ms, transform .45s ease ${delay}ms`,
  });

  const lineH = (show: boolean): React.CSSProperties => ({
    height: 1,
    background: 'rgba(255,255,255,.1)',
    width: show ? '100%' : '0%',
    transition: 'width .4s ease .1s',
  });

  const lineV = (show: boolean): React.CSSProperties => ({
    width: 1,
    background: 'rgba(255,255,255,.1)',
    height: show ? '100%' : '0%',
    transition: 'height .35s ease',
    margin: '0 auto',
  });

  return (
    <section ref={ref} style={{ padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44, ...fadeIn(vis(1)) }}>
          <div className="ib-section-eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>Crossover Catalyst</div>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', marginBottom: 8 }}>
            One evidence base. Each party builds from it.
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.72)' }}>
            Collected independently. Uncoached by any party. The same verbatims power the mandate pitch, the CIM, and the IC memo.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Mandate Deck — top */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <div style={{
              width: 480, padding: '18px 28px',
              background: 'rgba(77,144,254,.08)', border: '1px solid rgba(77,144,254,.3)',
              position: 'relative', overflow: 'hidden', textAlign: 'center',
              ...fadeIn(vis(2)),
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(77,144,254,.5),transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(77,144,254,.9)', background: 'rgba(77,144,254,.15)', border: '1px solid rgba(77,144,254,.3)', padding: '2px 8px' }}>Banker</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 4 }}>Catalyst Mandate Deck</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.70)' }}>Win the mandate with live customer verbatims instead of desk research.</div>
            </div>
          </div>

          {/* Connector: vertical line down */}
          <div style={{ display: 'flex', justifyContent: 'center', height: 24 }}>
            <div style={{ ...lineV(vis(3)), height: vis(3) ? 24 : 0 }} />
          </div>

          {/* Horizontal fork line */}
          <div style={{ overflow: 'hidden', height: 1 }}>
            <div style={{ ...lineH(vis(3)) }} />
          </div>

          {/* Four product cards in 2×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.06)' }}>
            {/* Drop lines above first row */}
            {PRODUCTS.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(6,14,28,.95)',
                padding: '18px 20px',
                borderTop: `2px solid ${i < 2 ? p.color : 'transparent'}`,
                ...fadeIn(vis(i < 2 ? 4 : 5), i % 2 === 1 ? 80 : 0),
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: p.color, background: p.bg, border: `1px solid ${p.border}`, padding: '2px 7px' }}>
                    {p.audience}
                  </span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.88)', marginBottom: 5 }}>{p.title}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.68)', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Connector line down */}
          <div style={{ display: 'flex', justifyContent: 'center', height: 24 }}>
            <div style={{ ...lineV(vis(6)), height: vis(6) ? 24 : 0 }} />
          </div>

          {/* Shared outcome bar */}
          <div style={{
            padding: '20px 32px',
            background: 'rgba(6,14,28,.95)',
            border: '1px solid rgba(255,255,255,.1)',
            textAlign: 'center',
            ...fadeIn(vis(7)),
          }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.88)', marginBottom: 4 }}>
              Every party enters the room with the same evidence base.
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.72)' }}>
              No restarts. No surprises. No retrades at the eleventh hour.
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,.70)', fontStyle: 'italic' }}>
              Nerdio's $500M round — one verbatim truth layer, the bank's mandate, the investor's conviction, the operator's outcome.
            </div>
          </div>

          {/* Final statement */}
          <div style={{ textAlign: 'center', marginTop: 32, ...fadeIn(vis(8)) }}>
            <p style={{ fontSize: 'clamp(15px,2.2vw,20px)', fontWeight: 500, color: 'rgba(255,255,255,.78)', lineHeight: 1.5 }}>
              When every party is working from the same truth,<br />
              they don't just negotiate.{' '}
              <span style={{ color: 'rgba(45,212,160,.9)', fontWeight: 700 }}>They transact. That's Crossover Catalyst.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
