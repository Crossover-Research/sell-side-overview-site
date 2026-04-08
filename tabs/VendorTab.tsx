import { SectionHeader } from '../components/SectionHeader';
import { VendorSpotlight } from '../components/VendorSpotlight';
import { ComparisonTable } from '../components/ComparisonTable';
import { NpsChart } from '../components/charts/NpsChart';
import { RepChart } from '../components/charts/RepChart';
import { DriversChart } from '../components/charts/DriversChart';
import { CostChart } from '../components/charts/CostChart';
import { InsightBox } from '../components/InsightBox';
import {
  VENDOR_SPOTLIGHT,
  COMPETITOR_ROWS,
  NPS_CHART_DATA,
  REP_CHART_DATA,
  COST_CHART_DATA,
  ADOPTION_DRIVERS_DATA,
} from '../lib/data/redCanary';

export function VendorTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Competitive Benchmarking"
        title="Red Canary vs. 8 Peer Vendors"
        lead="32 verified respondents rated their MDR or endpoint security provider across five dimensions. All scores on a 1-10 scale."
      />

      <VendorSpotlight data={VENDOR_SPOTLIGHT} />

      <div className="table-wrap" style={{ marginBottom: '32px' }}>
        <ComparisonTable rows={COMPETITOR_ROWS} />
      </div>

      <div className="charts-grid" style={{ marginBottom: '32px' }}>
        <div className="chart-card">
          <div className="chart-card-title">Likelihood to Recommend by Vendor</div>
          <div className="chart-card-sub">1-10 scale &bull; Higher = stronger customer advocacy</div>
          <div style={{ position: 'relative', height: '300px' }}>
            <NpsChart npsData={NPS_CHART_DATA} />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-card-title">Replication Difficulty by Vendor</div>
          <div className="chart-card-sub">1-10 scale &bull; Higher = harder to build in-house</div>
          <div style={{ position: 'relative', height: '300px' }}>
            <RepChart repData={REP_CHART_DATA} />
          </div>
        </div>
      </div>

      <div className="chart-card" style={{ marginBottom: '32px' }}>
        <div className="chart-card-title">Why Customers Adopted MDR - Red Canary vs. All-Vendor Average</div>
        <div className="chart-card-sub">Select all that apply</div>
        <div style={{ position: 'relative', height: '320px' }}>
          <DriversChart driversData={ADOPTION_DRIVERS_DATA} />
        </div>
        <InsightBox style={{ marginTop: '20px', marginBottom: 0 }}>
          Red Canary over-indexes on the top two drivers: 24/7 monitoring and staff shortage. Both are structural, secular tailwinds. Neither is cyclical or discretionary.
        </InsightBox>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="chart-card">
          <div className="chart-card-title">Cost vs. Building In-House SOC</div>
          <div className="chart-card-sub">Customer perception &bull; n=32</div>
          <div style={{ position: 'relative', height: '240px' }}>
            <CostChart costData={COST_CHART_DATA} />
          </div>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="card-title">Cost Breakdown</div>
          {COST_CHART_DATA.labels.map((label, i) => (
            <div key={i} className="driver-row">
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', width: '210px', flexShrink: 0 }}>{label}</div>
              <div className="driver-bar-track">
                <div className="driver-bar-fill" style={{ width: `${COST_CHART_DATA.data[i]}%`, background: COST_CHART_DATA.colors[i] }} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, width: '36px', textAlign: 'right' }}>
                {COST_CHART_DATA.data[i]}%
              </div>
            </div>
          ))}
          <InsightBox style={{ marginTop: '20px', marginBottom: 0 }}>
            <strong>84% total</strong> perceive Red Canary as less expensive than building an equivalent in-house SOC. Zero customers called it significantly more expensive.
          </InsightBox>
        </div>
      </div>
    </div>
  );
}
