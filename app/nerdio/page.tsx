'use client';
import { useState } from 'react';
import { ResearchHeader } from '../../components/ResearchHeader';
import { ICAccordion } from '../../components/ICCard';
import { InsightBox } from '../../components/InsightBox';
import { VendorSpotlight } from '../../components/VendorSpotlight';
import { NpsChart } from '../../components/charts/NpsChart';
import { RepChart } from '../../components/charts/RepChart';
import { CostChart } from '../../components/charts/CostChart';
import {
  IC_CARDS_NERDIO, VERBATIMS_NERDIO, VENDOR_SPOTLIGHT_NERDIO,
  NERDIO_DIMENSIONS_DATA, NERDIO_FEATURES_DATA, NERDIO_DISCOVERY_DATA,
  NERDIO_RESPONDENT_MIX, NERDIO_SELECTION_FACTORS, STUDY_INTEL_NERDIO,
} from '../../lib/data/nerdio';

type Section = 'thesis' | 'intel' | 'voice' | 'study';
const SECTIONS: { id: Section; label: string }[] = [
  { id: 'thesis', label: 'IC Thesis'          },
  { id: 'intel',  label: 'Product Intel'       },
  { id: 'voice',  label: 'Voice'               },
  { id: 'study',  label: 'Study Intelligence'  },
];

export default function NerdioPage() {
  const [active, setActive] = useState<Section>('thesis');
  return (
    <>
      <ResearchHeader tab="nerdio" />
      <div className="content-inner">
        <div className="rc-section-tabs">
          {SECTIONS.map(s => (
            <button key={s.id} className={`rc-section-tab${active === s.id ? ' active' : ''}`} onClick={() => setActive(s.id)}>
              {s.label}
            </button>
          ))}
        </div>

        {active === 'thesis' && (
          <div className="rc-section">
            <ICAccordion cards={IC_CARDS_NERDIO} theme="navy" />
          </div>
        )}

        {active === 'intel' && (
          <div className="rc-section">
            <VendorSpotlight data={VENDOR_SPOTLIGHT_NERDIO} />

            {/* Most important vendor selection factors */}
            <div style={{ padding: '20px 0' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.80)', marginBottom: 16 }}>
                Most Important Vendor Selection Factors
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NERDIO_SELECTION_FACTORS.map((f, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '230px 1fr 40px', alignItems: 'center', gap: 10 }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.78)', textAlign: 'right' }}>{f.label}</div>
                    <div style={{ position: 'relative', height: 18 }}>
                      <div style={{ position: 'absolute', left: 0, top: 4, height: 10, width: `${f.pct}%`, background: 'linear-gradient(90deg, rgba(28,157,185,.85), rgba(166,183,210,.85))', borderRadius: 2 }} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(166,183,210,.9)', fontFamily: 'JetBrains Mono, monospace' }}>{f.pct}%</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 10, color: 'rgba(255,255,255,.78)', fontStyle: 'italic' }}>
                Displayed as % of 21 verified Enterprise and MSP respondents.
              </div>
            </div>

            <div className="divider" />

            <div className="charts-grid">
              <div className="chart-card"><div className="chart-card-title">Recommendation &amp; Key Dimensions</div><RepChart labels={NERDIO_DIMENSIONS_DATA.labels} data={NERDIO_DIMENSIONS_DATA.data} highlightIndex={0} /></div>
              <div className="chart-card"><div className="chart-card-title">Feature &amp; Functionality Ratings</div><NpsChart labels={NERDIO_FEATURES_DATA.labels} data={NERDIO_FEATURES_DATA.data} highlightIndex={0} /></div>
              <div className="chart-card"><div className="chart-card-title">How Customers Discovered Nerdio</div><CostChart labels={NERDIO_DISCOVERY_DATA.labels} data={NERDIO_DISCOVERY_DATA.data} colors={NERDIO_DISCOVERY_DATA.colors} /></div>
              <div className="chart-card"><div className="chart-card-title">Respondent Mix</div><CostChart labels={NERDIO_RESPONDENT_MIX.labels} data={NERDIO_RESPONDENT_MIX.data} colors={NERDIO_RESPONDENT_MIX.colors} /></div>
            </div>
            <InsightBox><strong>95% of respondents run Nerdio Manager for Azure Virtual Desktop.</strong> Customers rate competitive differentiation 8.0/10 and consistently report no comparable solution for AVD management and automation.</InsightBox>
          </div>
        )}

        {active === 'voice' && (
          <div className="rc-section">
            <div className="verbatim-grid">
              {VERBATIMS_NERDIO.map((card, i) => (
                <div key={i} className="verbatim-cell">
                  <div className="verbatim-theme">{card.theme}</div>
                  <div className="verbatim-text">{card.text}</div>
                  <div className="verbatim-attr">{card.attr}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 'study' && (
          <div className="rc-section">
            <InsightBox><strong>Thesis verdict:</strong> {STUDY_INTEL_NERDIO.thesisVerdict}</InsightBox>
            <div className="advantage-grid" style={{ display: 'grid', gap: '1px', background: 'var(--br-lo)', marginTop: 16 }}>
              <div className="advantage-card"><div className="advantage-title">Expansion Segments</div><div className="advantage-desc">{STUDY_INTEL_NERDIO.expansionSegments}</div></div>
              <div className="advantage-card"><div className="advantage-title">Risk Flags</div><div className="advantage-desc">{STUDY_INTEL_NERDIO.riskFlags}</div></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
