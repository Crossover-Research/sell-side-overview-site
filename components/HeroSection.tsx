import type { MetricCell } from '../lib/types';
import type { Tab } from '../lib/types';

interface HeroSectionProps {
  metrics: MetricCell[];
  tab?: Tab;
}

export function HeroSection({ metrics, tab }: HeroSectionProps) {
  const isPartner = !tab || tab === 'partner';

  return (
    <div className="hero">
      <div className="hero-inner">
        {isPartner ? (
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">Institutional Research · Sell-Side Intelligence</div>
              <h1 className="hero-title">
                Independent customer evidence<br />
                <span>no competing bank can replicate.</span>
              </h1>
              <p className="hero-subtitle">
                Voice of Customer intelligence that changes the mandate conversation from
                &ldquo;trust us&rdquo; to &ldquo;here&rsquo;s what customers actually said.&rdquo;
                Verified data, not management projections.
              </p>
              <div className="hero-actions">
                <a href="/partner" className="hero-cta-primary">Start a Mandate →</a>
                <a href="/thesis" className="hero-cta-secondary">View Research ↓</a>
                <a href="/capabilities" className="hero-cta-secondary">Intelligence Platform ↗</a>
              </div>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-quote">
                &ldquo;Having a Voice of Customer document was seen as a differentiator by the
                client. The findings from your report were a key part of the equity story
                materials we presented.&rdquo;
              </div>
              <div className="hero-proof-rule" />
              <div className="hero-proof-name">Executive Director, J.P. Morgan</div>
              <div className="hero-proof-role">Sell-side mandate · $10B transaction</div>
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: '4px' }}>
            <div className="hero-eyebrow">Voice of Customer Intelligence · {
              tab === 'bluecat' ? 'BlueCat Networks' : 'Red Canary'
            }</div>
            <h1 className="hero-title" style={{ fontSize: '18px', marginBottom: '0' }}>
              {tab === 'thesis'  && 'The IC Case in Four Questions'}
              {tab === 'vendor'  && '9-Vendor Competitive Benchmark'}
              {tab === 'voice'   && 'Verbatim Customer Evidence'}
              {tab === 'bluecat' && 'DDI — Mission-Critical Infrastructure'}
            </h1>
          </div>
        )}
        <div className="metric-strip">
          {metrics.map((m, i) => (
            <div key={i} className="metric-cell">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">
                {m.value}
                {m.sub && <small style={{ fontSize: '13px', opacity: 0.5 }}>{m.sub}</small>}
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
