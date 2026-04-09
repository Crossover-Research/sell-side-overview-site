'use client';
import type { EngagementCard as EngagementCardType } from '../lib/types';

interface Props { card: EngagementCardType; }

export function EngagementCard({ card }: Props) {
  return (
    <div className="engagement-item">
      <div>
        <div className="engagement-label">{card.label}</div>
        <div className="engagement-type">{card.type}</div>
      </div>
      <div>
        <div className="engagement-desc">{card.desc}</div>
        <ul className="engagement-steps">
          {card.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ul>
      </div>
      <a
        href={card.ctaHref}
        target={card.ctaTarget || undefined}
        rel={card.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}
        className={`engagement-cta ${card.ctaStyle === 'outline' ? 'outline' : 'primary'}`}
      >
        {card.ctaText} →
      </a>
    </div>
  );
}
