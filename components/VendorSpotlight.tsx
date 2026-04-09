import type { VendorSpotlightData } from '../lib/types';

interface Props { data: VendorSpotlightData; }

export function VendorSpotlight({ data }: Props) {
  return (
    <div className="research-header" style={{ marginBottom: 'var(--sp-5)' }}>
      <div className="research-brand">
        <div>
          <div className="research-title">{data.name}</div>
          <div className="research-sub">{data.descriptor}</div>
        </div>
      </div>
      <div className="research-kpis">
        {data.scores.map((s, i) => (
          <div key={i} style={{ textAlign: 'right' }}>
            <div className="research-kpi-val">{s.val}</div>
            <div className="research-kpi-lbl">{s.lbl}</div>
          </div>
        ))}
        <div style={{ textAlign: 'right' }}>
          <div className="research-kpi-val">{data.rankNum}</div>
          <div className="research-kpi-lbl">{data.rankLbl}</div>
        </div>
      </div>
    </div>
  );
}
