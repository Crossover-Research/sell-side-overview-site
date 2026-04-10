import type { Tab } from '../lib/types';

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  const isBluecat = tab === 'bluecat';

  return (
    <div className="hero">
      <div className="hero-inner">
        {!isBluecat ? (
          <div>
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
              <a href="/redcanary" className="hero-cta-secondary">View Research ↓</a>
              <a href="/capabilities" className="hero-cta-secondary">Intelligence Platform ↗</a>
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
