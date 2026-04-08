import { VerbatimCard } from '../components/VerbatimCard';
import { InsightBox } from '../components/InsightBox';
import { VERBATIMS_RED_CANARY } from '../lib/data/redCanary';

export function VoiceTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Verbatim Customer Evidence</div>
        <h2 className="section-title">Direct from the Customer Base</h2>
        <p className="section-lead">All quotes independently sourced from verified Red Canary customers. Attribution anonymized per research protocol. No quotes were provided, reviewed, or influenced by Red Canary management.</p>
      </div>

      <div className="verbatim-grid">
        {VERBATIMS_RED_CANARY.map((card, index) => (
          <VerbatimCard key={index} card={card} />
        ))}
      </div>

      <InsightBox style={{ marginTop: '8px' }}>
        <strong>Red Canary scores 9.0/10 on likelihood to recommend</strong> — placing it among the top tier of all MDR vendors surveyed and well ahead of legacy alternatives like Microsoft Defender (7.4) and Secureworks (5.5).
      </InsightBox>
    </div>
  );
}
