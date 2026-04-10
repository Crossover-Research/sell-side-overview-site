'use client';
import { useEffect, useRef, useState } from 'react';

interface Metric { val: string; label: string; }

function CounterVal({ val, active }: { val: string; active: boolean }) {
  const [displayed, setDisplayed] = useState('0');
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    // Parse numeric portion
    const match = val.match(/^([^0-9]*)([\d.]+)([^0-9]*)$/);
    if (!match) { setDisplayed(val); return; }
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const isInt = !num.includes('.');
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = target * eased;
      setDisplayed(prefix + (isInt ? Math.round(current) : current.toFixed(1)) + suffix);
      if (elapsed < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, val]);

  return <span className="counter-val">{displayed}</span>;
}

export function AnimatedMetrics({ metrics }: { metrics: Metric[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="ib-metrics">
      {metrics.map((m, i) => (
        <div key={i} className="ib-metric">
          <div className="ib-metric-val">
            <CounterVal val={m.val} active={active} />
          </div>
          <div className="ib-metric-lbl">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
