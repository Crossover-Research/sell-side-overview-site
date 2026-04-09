import { ComparisonTable } from '../components/ComparisonTable';
import { VendorSpotlight } from '../components/VendorSpotlight';
import { InsightBox } from '../components/InsightBox';
import { COMPETITOR_ROWS, VENDOR_SPOTLIGHT } from '../lib/data/redCanary';

export function VendorTab() {
  return (
    <div>
      <VendorSpotlight data={VENDOR_SPOTLIGHT} />

      <div className="section-header">
        <div className="section-eyebrow">Vendor Intel</div>
        <h2 className="section-title">9-Vendor Competitive Benchmark</h2>
        <p className="section-lead">
          Scores from verified customer responses across purpose-built MDR providers
          and platform alternatives.
        </p>
      </div>

      <ComparisonTable rows={COMPETITOR_ROWS} />

      <div className="divider" />

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-card-title">Likelihood to Recommend by Vendor</div>
          <div style={{ height: 280, position: 'relative' }}>
            <canvas id="chartNPS" />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-card-title">Replication Difficulty by Vendor</div>
          <div style={{ height: 280, position: 'relative' }}>
            <canvas id="chartRep" />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-card-title">Cost vs. In-House SOC Build</div>
          <div style={{ height: 280, position: 'relative' }}>
            <canvas id="chartCost" />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-card-title">Why Customers Adopted MDR — Red Canary vs. Avg</div>
          <div style={{ height: 280, position: 'relative' }}>
            <canvas id="chartDrivers" />
          </div>
        </div>
      </div>

      <InsightBox>
        <strong>84% of verified Red Canary customers</strong> report the platform costs less
        than an equivalent in-house SOC build — independent, third-party evidence that lands
        in the CIM as sourced data, not management narrative.
      </InsightBox>
    </div>
  );
}
