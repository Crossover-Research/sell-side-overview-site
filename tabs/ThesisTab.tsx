import { ThesisBanner } from '../components/ThesisBanner';
import { ICCard } from '../components/ICCard';
import { IC_CARDS_RED_CANARY } from '../lib/data/redCanary';

export function ThesisTab() {
  return (
    <div>
      <ThesisBanner
        title="The Investment Thesis in Four IC Questions"
        body="Every buyer IC asks the same questions. This data answers them independently. The findings below are sourced from verified Red Canary customers — not management, not projections, not analyst estimates."
        scoreNum="9.0"
        scoreLabel="NPS Score"
        scoreContext="Top-tier MDR"
      />
      <div className="ic-grid">
        {IC_CARDS_RED_CANARY.map((card) => (
          <ICCard key={card.num} card={card} />
        ))}
      </div>
    </div>
  );
}
