
const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CONFIGS: Record<string, {
  title: string; sub: string;
  kpis: { val: string; lbl: string }[];
  reportUrl: string; reportLabel: string;
}> = {
  redcanary: {
    title: 'Red Canary — Voice of Customer Research',
    sub: 'Catalyst Study CR-2024-005 · 9-vendor MDR benchmark · Verified customer respondents',
    kpis: [{ val: '9.0', lbl: 'NPS' }, { val: '8.8', lbl: 'Replication Diff.' }, { val: '40%', lbl: 'ARR Growth' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
    reportLabel: 'Download Report',
  },
  bluecat: {
    title: 'BlueCat Networks — Voice of Customer Research',
    sub: 'Catalyst Study CR-2024-006 · DDI benchmark · 55 verified enterprise respondents',
    kpis: [{ val: '9.0', lbl: 'Mission Crit.' }, { val: '1.9', lbl: 'Switch Intent' }, { val: '98.5%', lbl: 'Net Retention' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/bluecat-catalyst.pdf',
    reportLabel: 'Download Report',
  },
};

// Map old tab IDs to config keys
const TAB_TO_KEY: Record<string, string | null> = {
  redcanary: 'redcanary',
  bluecat: 'bluecat',
  thesis: 'redcanary',
  partner: null,
};

interface ResearchHeaderProps {
  tab: string;
  onSectionChange?: (s: string) => void;
  activeSection?: string;
}

export function ResearchHeader({ tab }: ResearchHeaderProps) {
  const key = TAB_TO_KEY[tab];
  if (!key) return null;
  const cfg = CONFIGS[key];
  return (
    <div className="research-header">
      <div className="research-brand">
        <div>
          <div className="research-title">{cfg.title}</div>
          <div className="research-sub">{cfg.sub}</div>
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
        <a href={cfg.reportUrl} target="_blank" rel="noopener noreferrer" className="research-download-btn">
          <DownloadIcon />{cfg.reportLabel}
        </a>
      </div>
    </div>
  );
}
