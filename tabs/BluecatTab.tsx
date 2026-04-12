'use client';
import { useEffect, useRef } from 'react';
import { ICAccordion } from '../components/ICCard';
import { InsightBox } from '../components/InsightBox';
import { IC_CARDS_BLUECAT, VERBATIMS_BLUECAT, STUDY_INTEL } from '../lib/data/blueCat';

interface Props { onSectionVisible?: (id: string) => void; }

export function BluecatTab({ onSectionVisible }: Props) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const sections = [
    { id: 'bc-thesis', sectionId: 'thesis' },
    { id: 'bc-voice',  sectionId: 'voice'  },
    { id: 'bc-intel',  sectionId: 'intel'  },
  ];

  useEffect(() => {
    if (!onSectionVisible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id.replace('bc-', '');
            onSectionVisible(id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, [onSectionVisible]);

  return (
    <div>
      <div id="bc-thesis" ref={el => { refs.current[0] = el; }}>
        <ICAccordion cards={IC_CARDS_BLUECAT} theme="green" />
      </div>

      <div className="divider" />

      <div id="bc-voice" ref={el => { refs.current[1] = el; }}>
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
      </div>

      <div className="divider" />

      <div id="bc-intel" ref={el => { refs.current[2] = el; }}>
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
    </div>
  );
}
