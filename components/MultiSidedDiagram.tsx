'use client';
import { useEffect, useRef, useState } from 'react';

export function MultiSidedDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const tick = () => {
            setStep(s => s + 1);
            i++;
            if (i < 4) setTimeout(tick, 350);
          };
          setTimeout(tick, 300);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const W = 540, H = 300;
  const cx = W / 2, cy = H / 2;
  const r = 95; // radius from center to party nodes

  // Positions: Crossover center, parties at corners
  const nodes = {
    center: { x: cx,          y: cy,          label: 'CORTEX',     sub: 'Independent Research\nEngine', main: true },
    banker: { x: cx - r * 1.5, y: cy - r * 0.9, label: 'Banker',   sub: 'Mandate pitch ·\nEquity story' },
    operator:{ x: cx + r * 1.5, y: cy - r * 0.9, label: 'Operator', sub: 'Narrative ·\nOperator Rebuttal' },
    fund:   { x: cx,           y: cy + r * 1.1, label: 'Fund',      sub: 'Catalyst ·\nSecondary diligence' },
  };

  const parties = [nodes.banker, nodes.operator, nodes.fund];
  const stepColors = ['rgba(130,175,255,.7)', 'rgba(45,212,160,.7)', 'rgba(255,180,80,.7)'];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}
      aria-label="Multi-sided diagram showing Crossover Research at center serving bankers, operators, and funds simultaneously from the same independent data source"
    >
      <defs>
        {parties.map((p, i) => (
          <marker key={i} id={`arr${i}`} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill={stepColors[i]} />
          </marker>
        ))}
        <marker id="arrIn" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="rgba(255,255,255,.2)" />
        </marker>
      </defs>

      {/* Lines from center to parties */}
      {parties.map((p, i) => {
        const active = step > i;
        const dx = p.x - cx, dy = p.y - cy;
        const len = Math.sqrt(dx * dx + dy * dy);
        // Start/end with small offset from node edges
        const off = 42;
        const x1 = cx + (dx / len) * off;
        const y1 = cy + (dy / len) * off;
        const x2 = p.x - (dx / len) * off;
        const y2 = p.y - (dy / len) * off;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={active ? stepColors[i] : 'rgba(255,255,255,.08)'}
            strokeWidth={active ? 1.5 : 1}
            strokeDasharray={active ? 'none' : '4 4'}
            markerEnd={active ? `url(#arr${i})` : 'url(#arrIn)'}
            style={{ transition: 'stroke .4s, stroke-width .3s' }}
          />
        );
      })}

      {/* Center node — Crossover */}
      <circle cx={cx} cy={cy} r={40} fill="rgba(77,144,254,.14)" stroke="rgba(130,175,255,.5)" strokeWidth={1.5} />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize={9} fontWeight={800} fill="rgba(130,175,255,.9)" letterSpacing="1.5" fontFamily="JetBrains Mono, monospace">CROSSOVER</text>
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize={9} fontWeight={800} fill="rgba(130,175,255,.9)" letterSpacing="1.5" fontFamily="JetBrains Mono, monospace">RESEARCH</text>
      <text x={cx} y={cy + 17} textAnchor="middle" fontSize={8} fill="rgba(255,255,255,.35)">Independent Source</text>

      {/* Party nodes */}
      {parties.map((p, i) => {
        const active = step > i;
        return (
          <g key={i}>
            <rect
              x={p.x - 52} y={p.y - 30}
              width={104} height={60}
              rx={3}
              fill={active ? 'rgba(255,255,255,.05)' : 'rgba(255,255,255,.02)'}
              stroke={active ? stepColors[i] : 'rgba(255,255,255,.1)'}
              strokeWidth={active ? 1.5 : 1}
              style={{ transition: 'fill .4s, stroke .4s' }}
            />
            <text
              x={p.x} y={p.y - 10}
              textAnchor="middle" fontSize={12} fontWeight={700}
              fill={active ? 'rgba(255,255,255,.88)' : 'rgba(255,255,255,.35)'}
              style={{ transition: 'fill .4s' }}
            >
              {p.label}
            </text>
            {p.sub.split('\n').map((line, li) => (
              <text
                key={li}
                x={p.x} y={p.y + 6 + li * 12}
                textAnchor="middle" fontSize={9}
                fill={active ? 'rgba(255,255,255,.45)' : 'rgba(255,255,255,.2)'}
                style={{ transition: 'fill .4s' }}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Footer label */}
      <text x={cx} y={H - 4} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,.2)" fontStyle="italic">
        Same data. Neither side chose the respondents. Different strategic framing.
      </text>
    </svg>
  );
}
