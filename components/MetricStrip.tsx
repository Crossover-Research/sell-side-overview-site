import type { CSSProperties } from 'react';
import type { MetricCell } from '../lib/types';

interface MetricStripProps {
  metrics: MetricCell[];
  style?: CSSProperties;
  variant?: 'dark' | 'green';
}

const DEFAULT_DELTA_STYLE: CSSProperties = {
  fontSize: '10px',
  fontWeight: 600,
  padding: '2px 6px',
  borderRadius: '3px',
  background: 'rgba(15,123,85,.35)',
  color: '#5be4ac',
  display: 'inline-flex',
  alignItems: 'center',
};

export function MetricStrip({ metrics, style }: MetricStripProps) {
  return (
    <div className="metric-strip" style={style}>
      {metrics.map((metric, i) => (
        <div key={i} className="metric-cell">
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value">
            {metric.value}
            {metric.sub && <small style={{ fontSize: '14px', opacity: 0.6 }}>{metric.sub}</small>}
          </div>
          {metric.delta && (
            <div className="metric-sub">
              <span
                className="metric-delta"
                style={metric.deltaStyle ? { ...DEFAULT_DELTA_STYLE, ...metric.deltaStyle } : undefined}
              >
                {metric.delta}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
