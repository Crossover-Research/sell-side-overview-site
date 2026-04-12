'use client';
import { useState } from 'react';
import { ICAccordion } from '../components/ICCard';
import { InsightBox } from '../components/InsightBox';
import { IC_CARDS_BLUECAT, VERBATIMS_BLUECAT, STUDY_INTEL } from '../lib/data/blueCat';

type Section = 'thesis' | 'voice' | 'intel';
const SECTIONS: { id: Section; label: string }[] = [
  { id: 'thesis', label: 'IC Thesis'          },
  { id: 'voice',  label: 'Voice'              },
  { id: 'intel',  label: 'Study Intelligence' },
];

export function BluecatContent() {
  const [active, setActive] = useState<Section>('thesis');
  return (
    <>
      <div className="rc-section-tabs">
        {SECTIONS.map(s => (
          <button key={s.id} className={`rc-section-tab${active === s.id ? ' active' : ''}`} onClick={() => setActive(s.id)}>
            {s.label}
          </button>
        ))}
      </div>

      {active === 'thesis' && (
        <div className="rc-section">
          <ICAccordion cards={IC_CARDS_BLUECAT} theme="green" />
        </div>
      )}

      {active === 'voice' && (
        <div className="rc-section">
          <div className="verbatim-grid">
            {VERBATIMS_BLUECAT.map((card, i) => (
              <div key={i} className="verbatim-cell">
                <div className="verbatim-theme">{card.theme}</div>
                <div className="verbatim-text">{card.text}</div>
                <div className="verbatim-attr">{card.attr}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 'intel' && (
        <div className="rc-section">
          <InsightBox><strong>Thesis verdict:</strong> {STUDY_INTEL.thesisVerdict}</InsightBox>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--br-lo)',marginTop:16 }}>
            <div className="advantage-card"><div className="advantage-title">Expansion Segments</div><div className="advantage-desc">{STUDY_INTEL.expansionSegments}</div></div>
            <div className="advantage-card"><div className="advantage-title">Risk Flags</div><div className="advantage-desc">{STUDY_INTEL.riskFlags}</div></div>
          </div>
        </div>
      )}
    </>
  );
}

export function BluecatTab() { return <BluecatContent />; }
