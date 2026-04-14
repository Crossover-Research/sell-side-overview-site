const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CONFIGS: Record<string, {
  company: string; product: string; studyId: string; color: string; logoSrc: string;
  kpis: { val: string; lbl: string }[];
  reportUrl: string;
}> = {
  redcanary: {
    company: 'Red Canary',
    logoSrc: '/red-canary-logo.svg',
    product: 'Managed Detection & Response',
    studyId: 'Catalyst Study CR-2024-005 · 9-vendor MDR benchmark · 75+ respondents',
    color: '#e05c5c',
    kpis: [{ val: '9.0', lbl: 'NPS' }, { val: '8.8', lbl: 'Replication' }, { val: '40%', lbl: 'ARR Growth' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
  },
  bluecat: {
    company: 'BlueCat Networks',
    logoSrc: '/bluecat-logo.svg',
    product: 'DNS · DHCP · IP Address Management',
    studyId: 'Catalyst Study CR-2024-006 · 55 verified enterprise respondents',
    color: '#1e90d4',
    kpis: [{ val: '9.0', lbl: 'Mission Crit.' }, { val: '1.9', lbl: 'Switch Intent' }, { val: '98.5%', lbl: 'Net Retention' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/bluecat-catalyst.pdf',
  },
};

interface ResearchHeaderProps { tab: string; }

export function ResearchHeader({ tab }: ResearchHeaderProps) {
  const cfg = CONFIGS[tab];
  if (!cfg) return null;
  return (
    <div className="research-header">
      <div className="research-brand">
        {/* Color accent bar */}
        <div style={{ width: 3, height: 36, background: cfg.color, flexShrink: 0, borderRadius: 2 }} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
            <img src={cfg.logoSrc} alt={cfg.company} style={{ height: 22, width: "auto", filter: tab === 'bluecat' ? "brightness(0) invert(1)" : "none", opacity: tab === 'bluecat' ? .85 : 1 }} />
            <div style={{ fontSize: 10, fontWeight: 600, color: cfg.color, background: `${cfg.color}18`, border: `1px solid ${cfg.color}35`, padding: '2px 8px', letterSpacing: '.04em', textTransform: 'uppercase' }}>
              Catalyst Study
            </div>
          </div>
          <div className="research-sub">{cfg.product} &middot; {cfg.studyId}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div className="research-kpis">
          {cfg.kpis.map((k, i) => (
            <div key={i} style={{ textAlign: 'right' }}>
              <div className="research-kpi-val">{k.val}</div>
              <div className="research-kpi-lbl">{k.lbl}</div>
            </div>
          ))}
        </div>
        <a href={cfg.reportUrl} target="_blank" rel="noopener noreferrer" download className="research-download-btn">
          <DownloadIcon />Download
        </a>
      </div>
    </div>
  );
}
