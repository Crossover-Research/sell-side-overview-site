import type { CSSProperties } from 'react';
import type { MetricCell } from '../lib/types';

const BASE_DELTA: CSSProperties = { fontSize: '10px', fontWeight: 600, padding: '2px 6px', borderRadius: '3px', background: 'rgba(45,212,160,.15)', color: '#2dd4a0' };

interface MetricStripProps { metrics: MetricCell[]; style?: CSSProperties; variant?: 'dark'; }

export function MetricStrip({ metrics, style }: MetricStripProps) {
  return (
    <div className="metric-strip" style={style}>
      {metrics.map((m, i) => (
        <div key={i} className="metric-cell">
          <div className="metric-label">{m.label}</div>
          <div className="metric-value">
            {m.value}
            {m.sub && <small style={{ fontSize: '13px', opacity: 0.5 }}>{m.sub}</small>}
          </div>
          {m.delta && (
            <div className="metric-sub">
              <span className="metric-delta" style={m.deltaStyle ? { ...BASE_DELTA, ...m.deltaStyle } : undefined}>
                {m.delta}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
