import type { Tab } from '../lib/types';

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  const isBluecat = tab === 'bluecat';

  return (
    <div className="hero">
      <div className="hero-inner">
        {!isBluecat ? (
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                The gaps in your story<br />
                <span>exist whether you surface them or not.</span>
              </h1>
              <p className="hero-subtitle">
                Crossover finds them first — using independent respondents nobody handpicked —
                then builds customer-backed evidence to close them before buyers do.
                The same research wins your mandate, hardens your CIM, and anchors buy-side conviction.
              </p>
              <div className="hero-actions">
                <a href="/partner" className="hero-cta-primary">Work With Us →</a>
                <a href="/catalyst" className="hero-cta-secondary">Catalyst Library ↗</a>
                <a href="/capabilities" className="hero-cta-secondary">Intelligence Platform ↗</a>
              </div>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-quote">
                &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.
                The findings from your report were a key part of the equity story materials we presented.&rdquo;
              </div>
              <div className="hero-proof-rule" />
              <div className="hero-proof-name">Executive Director, J.P. Morgan</div>
              <div className="hero-proof-role">Sell-side mandate · $10B transaction</div>
              <div className="hero-proof-rule" style={{ marginTop: 16 }} />
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 8 }}>
                  The Flywheel — Nerdio Series C
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>
                  J.P. Morgan mandate → Crossover line of sight → original fundamental view →
                  GA 30-minute conviction brief → secondary diligence → validated →{' '}
                  <span style={{ color: 'rgba(255,255,255,.75)', fontWeight: 600 }}>$500M at $1B+</span>
                </div>
                <div style={{ marginTop: 8, fontSize: 10, color: 'rgba(255,255,255,.3)', fontStyle: 'italic' }}>
                  Sell-side line of sight. Buy-side match. One research infrastructure.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: '4px' }}>
            <div className="hero-eyebrow">Voice of Customer Intelligence · BlueCat Networks</div>
            <h1 className="hero-title" style={{ fontSize: '18px', marginBottom: '0' }}>
              DDI — Mission-Critical Infrastructure
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
