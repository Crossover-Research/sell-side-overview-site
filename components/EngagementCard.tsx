import type { EngagementCard as EngagementCardType } from '../lib/types';

interface EngagementCardProps {
  card: EngagementCardType;
}

export function EngagementCard({ card }: EngagementCardProps) {
  return (
    <div className="engagement-card">
      <div className="engagement-header">
        <span className="engagement-label">{card.label}</span>
        <div className="engagement-type">{card.type}</div>
      </div>
      <div className="engagement-body">
        <div className="engagement-desc">{card.desc}</div>
        <ul className="engagement-steps">
          {card.steps.map((step, i) => (
            <li key={i}><span className="step-dot" />{step}</li>
          ))}
        </ul>
        <a
          href={card.ctaHref}
          className={`cta-btn${card.ctaStyle === 'outline' ? ' outline' : ''}`}
        >
          {card.ctaText}
        </a>
      </div>
    </div>
  );
}
