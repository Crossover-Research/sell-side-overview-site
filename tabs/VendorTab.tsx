'use client';
import { ComparisonTable } from '../components/ComparisonTable';
import { VendorSpotlight } from '../components/VendorSpotlight';
import { InsightBox } from '../components/InsightBox';
import { NpsChart } from '../components/charts/NpsChart';
import { RepChart } from '../components/charts/RepChart';
import { CostChart } from '../components/charts/CostChart';
import { DriversChart } from '../components/charts/DriversChart';
import {
  COMPETITOR_ROWS,
  VENDOR_SPOTLIGHT,
  NPS_CHART_DATA,
  REP_CHART_DATA,
  COST_CHART_DATA,
  ADOPTION_DRIVERS_DATA,
} from '../lib/data/redCanary';

export function VendorTab() {
  return (
    <div>
      <VendorSpotlight data={VENDOR_SPOTLIGHT} />

      <div className="section-header">
        <div className="section-eyebrow">Vendor Intel</div>
        <h2 className="section-title">9-Vendor Competitive Benchmark</h2>
        <p className="section-lead">
          Scores derived from verified customer responses across purpose-built MDR
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
          <div className="chart-card-title">Cost vs. In-House SOC Build</div>
          <CostChart
            labels={COST_CHART_DATA.labels}
            data={COST_CHART_DATA.data}
            colors={COST_CHART_DATA.colors}
          />
        </div>
        <div className="chart-card">
          <div className="chart-card-title">Why Customers Adopted MDR</div>
          <DriversChart
            labels={ADOPTION_DRIVERS_DATA.labels}
            redCanaryData={ADOPTION_DRIVERS_DATA.redCanaryData}
            avgData={ADOPTION_DRIVERS_DATA.avgData}
          />
        </div>
      </div>

      <InsightBox>
        <strong>84% of verified Red Canary customers</strong> report the platform costs
        less than an equivalent in-house SOC build — independent, third-party evidence
        that lands in the CIM as sourced data, not management narrative.
      </InsightBox>
    </div>
  );
}
