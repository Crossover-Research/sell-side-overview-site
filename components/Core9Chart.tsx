'use client';
import { useEffect, useRef, useState } from 'react';

const DIMENSIONS = [
  { label: 'NPS',                score: 9.0, benchmark: 7.2 },
  { label: 'Renewal Intent',     score: 8.8, benchmark: 7.5 },
  { label: 'Switching Difficulty',score: 8.8, benchmark: 7.8 },
  { label: 'Mission Criticality',score: 8.4, benchmark: 7.1 },
  { label: 'Competitive Advantage',score: 8.6, benchmark: 7.0 },
  { label: 'Replication Cost',   score: 8.8, benchmark: 7.3 },
  { label: 'Pricing Power',      score: 7.8, benchmark: 6.8 },
  { label: 'Growth Durability',  score: 8.5, benchmark: 6.9 },
  { label: 'Moat Defensibility', score: 8.7, benchmark: 7.1 },
];

export function Core9Chart({ title = 'Red Canary' }: { title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let p = 0;
          const tick = () => {
            p = Math.min(p + 0.04, 1);
            setProgress(p);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxW = 260;

  return (
    <div ref={ref} style={{ padding: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>
          Crossover Core 9 — {title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(130,175,255,.85)' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,.45)' }}>{title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,.35)' }}>Benchmark avg</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {DIMENSIONS.map((d, i) => {
          const eased = 1 - Math.pow(1 - Math.min(progress * 1.4 - i * 0.05, 1), 3);
          const p = Math.max(0, eased);
          return (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 36px', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', textAlign: 'right' }}>{d.label}</div>
              <div style={{ position: 'relative', height: 20 }}>
                {/* Benchmark bar */}
                <div style={{
                  position: 'absolute', left: 0, top: 5, height: 10,
                  width: `${(d.benchmark / 10) * 100 * p}%`,
                  background: 'rgba(255,255,255,.1)',
                  borderRadius: 2,
                  transition: 'width .05s',
                }} />
                {/* Score bar */}
                <div style={{
                  position: 'absolute', left: 0, top: 5, height: 10,
                  width: `${(d.score / 10) * 100 * p}%`,
                  background: 'linear-gradient(90deg, rgba(77,144,254,.6), rgba(130,175,255,.85))',
                  borderRadius: 2,
                  transition: 'width .05s',
                }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(130,175,255,.9)', fontFamily: 'JetBrains Mono, monospace' }}>
                {(d.score * p).toFixed(p < 0.98 ? 0 : 1)}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 12, fontSize: 10, color: 'rgba(255,255,255,.2)', fontStyle: 'italic' }}>
        Scored from 75+ verified respondents across 9 benchmark dimensions. Category benchmark derived from 40+ comparable studies.
      </div>
    </div>
  );
}
