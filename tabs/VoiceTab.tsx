import { VERBATIMS_RED_CANARY } from '../lib/data/redCanary';

export function VoiceTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Customer Voice</div>
        <h2 className="section-title">Verbatim Evidence</h2>
        <p className="section-lead">
          Unedited. From verified customers. Every quote sourced and attributed.
        </p>
      </div>
      <div className="verbatim-grid">
        {VERBATIMS_RED_CANARY.map((card, i) => (
          <div key={i} className="verbatim-cell">
            <div className="verbatim-theme">{card.theme}</div>
            <div className="verbatim-text">{card.text}</div>
            <div className="verbatim-attr">{card.attr}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
