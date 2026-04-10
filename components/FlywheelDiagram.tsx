'use client';
import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { id: 1, label: 'Sell-Side\nMandate',     sub: 'J.P. Morgan engages Crossover',             color: 'rgba(130,175,255,.9)' },
  { id: 2, label: 'Line of\nSight',         sub: 'Primary research reveals high-conviction asset', color: 'rgba(130,175,255,.75)' },
  { id: 3, label: 'Fundamental\nView',      sub: 'Original thesis formed — stockpicker lens',  color: 'rgba(130,175,255,.6)' },
  { id: 4, label: 'Buy-Side\nMatch',        sub: 'Select funds alerted · 30-min brief',         color: 'rgba(130,175,255,.75)' },
  { id: 5, label: 'Secondary\nDiligence',   sub: 'Validation → $500M at $1B+',                  color: 'rgba(130,175,255,.9)' },
];

export function FlywheelDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
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
      if (i < STEPS.length) timerRef.current = setTimeout(run, 420);
    };
    timerRef.current = setTimeout(run, 200);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [visible]);

  const W = 780, H = 200;
  const nodeW = 124, nodeH = 72;
  const gap = (W - STEPS.length * nodeW) / (STEPS.length - 1);
  const nodeX = (i: number) => i * (nodeW + gap);
  const cx = (i: number) => nodeX(i) + nodeW / 2;
  const cy = H / 2 - 10;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}
      aria-label="Crossover Research flywheel — 5-step transaction lifecycle from sell-side mandate to deal close"
    >
      {/* Connector lines with arrow markers */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(130,175,255,.35)" />
        </marker>
        <marker id="arrow-active" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(130,175,255,.9)" />
        </marker>
      </defs>

      {STEPS.map((_, i) => {
        if (i === STEPS.length - 1) return null;
        const x1 = nodeX(i) + nodeW + 2;
        const x2 = nodeX(i + 1) - 2;
        const isActive = activeStep > i;
        return (
          <line
            key={i}
            x1={x1} y1={cy} x2={x2} y2={cy}
            stroke={isActive ? 'rgba(130,175,255,.6)' : 'rgba(255,255,255,.1)'}
            strokeWidth={isActive ? 1.5 : 1}
            markerEnd={isActive ? 'url(#arrow-active)' : 'url(#arrow)'}
            style={{ transition: 'stroke .3s, stroke-width .3s' }}
          />
        );
      })}

      {STEPS.map((step, i) => {
        const x = nodeX(i);
        const isActive = activeStep >= i;
        const isCurrent = activeStep === i;
        return (
          <g key={i} style={{ cursor: 'default' }}>
            {/* Step box */}
            <rect
              x={x} y={cy - nodeH / 2}
              width={nodeW} height={nodeH}
              rx={3}
              fill={isActive ? 'rgba(77,144,254,.12)' : 'rgba(255,255,255,.03)'}
              stroke={isActive ? 'rgba(130,175,255,.45)' : 'rgba(255,255,255,.1)'}
              strokeWidth={isCurrent ? 1.5 : 1}
              style={{ transition: 'fill .3s, stroke .3s' }}
            />
            {/* Step number */}
            <text
              x={x + 9} y={cy - nodeH / 2 + 13}
              fontSize={9} fontWeight={700}
              fill={isActive ? 'rgba(130,175,255,.7)' : 'rgba(255,255,255,.25)'}
              fontFamily="JetBrains Mono, monospace"
              style={{ transition: 'fill .3s' }}
            >
              {String(step.id).padStart(2, '0')}
            </text>
            {/* Label */}
            {step.label.split('\n').map((line, li) => (
              <text
                key={li}
                x={x + nodeW / 2} y={cy - 6 + li * 14}
                textAnchor="middle"
                fontSize={11} fontWeight={700}
                fill={isActive ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.35)'}
                style={{ transition: 'fill .3s' }}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Outcome badge */}
      {activeStep >= STEPS.length - 1 && (
        <text
          x={W / 2} y={H - 8}
          textAnchor="middle"
          fontSize={10} fontWeight={600}
          fill="rgba(130,175,255,.65)"
          fontFamily="JetBrains Mono, monospace"
          style={{ animation: 'fadeUp .4s ease both' }}
        >
          Sell-side line of sight → Original fundamental view → Buy-side match → $500M at $1B+
        </text>
      )}
    </svg>
  );
}
