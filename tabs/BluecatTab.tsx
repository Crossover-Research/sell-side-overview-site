'use client';
import { ICAccordion } from '../components/ICCard';
import { InsightBox } from '../components/InsightBox';
import { IC_CARDS_BLUECAT, VERBATIMS_BLUECAT, STUDY_INTEL } from '../lib/data/blueCat';

export function BluecatTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Investment Thesis &middot; BlueCat Networks</div>
        <h2 className="section-title">IC Case in Four Questions</h2>
        <p className="section-lead">
          DNS, DHCP, and IP address management — foundational enterprise infrastructure
          with near-zero churn and active Infoblox displacement opportunity.
        </p>
      </div>

      <ICAccordion cards={IC_CARDS_BLUECAT} theme="green" />

      <div className="divider" />

      <div className="section-header">
        <div className="section-eyebrow">Customer Voice</div>
        <h2 className="section-title">Verbatim Evidence</h2>
      </div>
      <div className="verbatim-grid">
        {VERBATIMS_BLUECAT.map((card, i) => (
          <div key={i} className="verbatim-cell">
            <div className="verbatim-theme">{card.theme}</div>
            <div className="verbatim-text">{card.text}</div>
            <div className="verbatim-attr">{card.attr}</div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="section-header">
        <div className="section-eyebrow">Study Intelligence</div>
        <h2 className="section-title">Summary</h2>
      </div>

      <InsightBox>
        <strong>Thesis verdict:</strong> {STUDY_INTEL.thesisVerdict}
      </InsightBox>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--br-lo)' }}>
        <div className="advantage-card">
          <div className="advantage-title">Expansion Segments</div>
          <div className="advantage-desc">{STUDY_INTEL.expansionSegments}</div>
        </div>
        <div className="advantage-card">
          <div className="advantage-title">Risk Flags</div>
          <div className="advantage-desc">{STUDY_INTEL.riskFlags}</div>
        </div>
      </div>
    </div>
  );
}
