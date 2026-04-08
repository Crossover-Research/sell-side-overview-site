import type { EngagementCard as EngagementCardType } from '../lib/types';

interface EngagementCardProps {
  card: EngagementCardType;
}

export function EngagementCard({ card }: EngagementCardProps) {
  return (
    <div className="engagement-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="engagement-header">
        <span className="engagement-label">{card.label}</span>
        <div className="engagement-type">{card.type}</div>
      </div>
      {/* Body grows to fill card height, pushes button to bottom */}
      <div className="engagement-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="engagement-desc">{card.desc}</div>
        <ul className="engagement-steps" style={{ flex: 1 }}>
          {card.steps.map((step, i) => (
            <li key={i}><span className="step-dot" />{step}</li>
          ))}
        </ul>
        {/* Button always at bottom, full width, consistent height */}
        <a
          href={card.ctaHref}
          target={card.ctaTarget || undefined}
          rel={card.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}
          className={`cta-btn${card.ctaStyle === 'outline' ? ' outline' : ''}`}
          style={{ marginTop: '20px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', boxSizing: 'border-box' as const }}
        >
          {card.ctaText}
        </a>
      </div>
    </div>
  );
}
