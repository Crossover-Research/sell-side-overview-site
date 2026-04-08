import type { AdvantageCard as AdvantageCardType } from '../lib/types';

interface AdvantageCardProps {
  card: AdvantageCardType;
}

export function AdvantageCard({ card }: AdvantageCardProps) {
  return (
    <div className="advantage-card">
      <div className="advantage-title">{card.title}</div>
      <div className="advantage-desc">{card.desc}</div>
    </div>
  );
}
