import type { MetricCell } from '../lib/types';

interface HeroSectionProps {
  metrics: MetricCell[];
}

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/>
    <polyline points="9 15 12 18 15 15"/>
  </svg>
);

export function HeroSection({ metrics }: HeroSectionProps) {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">Voice of Customer Intelligence &bull; Cyber + Infrastructure Portfolio</div>
        <h1 className="hero-title">
          Two Assets. Independent Evidence. <span>IC-Ready.</span>
        </h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <a
            href="https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px',
              background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)',
              borderRadius: 'var(--radius)', color: '#fff',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <DownloadIcon />
            Red Canary Sample Report
          </a>
          <a
            href="https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/bluecat-catalyst.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px',
              background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)',
              borderRadius: 'var(--radius)', color: '#fff',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <DownloadIcon />
            BlueCat Networks Sample Report
          </a>
        </div>

        <div className="metric-strip">
          {metrics.map((m, i) => (
            <div key={i} className="metric-cell">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">
                {m.value}
                {m.sub && <small style={{ fontSize: '14px', opacity: 0.6 }}>{m.sub}</small>}
              </div>
              {m.delta && (
                <div className="metric-sub">
                  <span className="metric-delta" style={m.deltaStyle}>{m.delta}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
