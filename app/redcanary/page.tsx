'use client';
import { useState } from 'react';
import { ResearchSidebar } from '../../components/ResearchSidebar';
import { ResearchHeader } from '../../components/ResearchHeader';
import { ICAccordion } from '../../components/ICCard';
import { ComparisonTable } from '../../components/ComparisonTable';
import { InsightBox } from '../../components/InsightBox';
import { NpsChart } from '../../components/charts/NpsChart';
import { RepChart } from '../../components/charts/RepChart';
import { CostChart } from '../../components/charts/CostChart';
import { DriversChart } from '../../components/charts/DriversChart';
import { VendorSpotlight } from '../../components/VendorSpotlight';
import {
  IC_CARDS_RED_CANARY, VERBATIMS_RED_CANARY, COMPETITOR_ROWS,
  VENDOR_SPOTLIGHT, NPS_CHART_DATA, REP_CHART_DATA,
  COST_CHART_DATA, ADOPTION_DRIVERS_DATA,
} from '../../lib/data/redCanary';

type Section = 'thesis' | 'vendor' | 'voice';

const SECTIONS: { id: Section; label: string }[] = [
  { id: 'thesis', label: 'IC Thesis'    },
  { id: 'vendor', label: 'Vendor Intel' },
  { id: 'voice',  label: 'Voice'        },
];

export default function RedCanaryPage() {
  const [active, setActive] = useState<Section>('thesis');

  return (
    <>
      <ResearchHeader tab="redcanary" />
      <div className="research-layout">
        <ResearchSidebar
          tab="redcanary"
          activeSection={active}
          onSelect={(s) => setActive(s as Section)}
        />
        <div className="content-inner">

          <div className="rc-section-tabs">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                className={`rc-section-tab${active === s.id ? ' active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          {active === 'thesis' && (
            <div className="rc-section">
              <div className="section-header">
                <div className="section-eyebrow">Investment Thesis</div>
                <h2 className="section-title">IC Case in Four Questions</h2>
                <p className="section-lead">
                  Verified customer data answering the four questions every IC will ask —
                  not management, not projections.
                </p>
              </div>
              <ICAccordion cards={IC_CARDS_RED_CANARY} theme="navy" />
            </div>
          )}

          {active === 'vendor' && (
            <div className="rc-section">
              <VendorSpotlight data={VENDOR_SPOTLIGHT} />
              <div className="section-header">
                <div className="section-eyebrow">Vendor Intel</div>
                <h2 className="section-title">9-Vendor Competitive Benchmark</h2>
                <p className="section-lead">
                  Scores from verified customer responses across purpose-built MDR
                  providers and platform alternatives.
                </p>
              </div>
              <ComparisonTable rows={COMPETITOR_ROWS} />
              <div className="divider" />
              <div className="charts-grid">
                <div className="chart-card">
                  <div className="chart-card-title">Likelihood to Recommend</div>
                  <NpsChart labels={NPS_CHART_DATA.labels} data={NPS_CHART_DATA.data} />
                </div>
                <div className="chart-card">
                  <div className="chart-card-title">Replication Difficulty</div>
                  <RepChart labels={REP_CHART_DATA.labels} data={REP_CHART_DATA.data} />
                </div>
                <div className="chart-card">
                  <div className="chart-card-title">Cost vs. In-House SOC</div>
                  <CostChart labels={COST_CHART_DATA.labels} data={COST_CHART_DATA.data} colors={COST_CHART_DATA.colors} />
                </div>
                <div className="chart-card">
                  <div className="chart-card-title">Why Customers Adopted MDR</div>
                  <DriversChart labels={ADOPTION_DRIVERS_DATA.labels} redCanaryData={ADOPTION_DRIVERS_DATA.redCanaryData} avgData={ADOPTION_DRIVERS_DATA.avgData} />
                </div>
              </div>
              <InsightBox>
                <strong>84% of verified Red Canary customers</strong> report the platform
                costs less than an equivalent in-house SOC — sourced data, not management narrative.
              </InsightBox>
            </div>
          )}

          {active === 'voice' && (
            <div className="rc-section">
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
          )}

        </div>
      </div>
    </>
  );
}
