import type { Tab } from '../lib/types';

const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const HEADERS: Record<Tab, {
  title: string;
  sub: string;
  kpis: Array<{ val: string; lbl: string }>;
  reportUrl?: string;
  reportLabel?: string;
} | null> = {
  thesis: {
    title: 'Red Canary — VoC Research',
    sub: 'Catalyst Study CR-2024-005 · 9-vendor MDR benchmark · Verified customer respondents',
    kpis: [{ val: '9.0', lbl: 'NPS Score' }, { val: '8.8', lbl: 'Replication Diff.' }, { val: '40%', lbl: 'ARR Growth' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
    reportLabel: 'Download Sample Report',
  },
  vendor: {
    title: 'Red Canary — Vendor Intel',
    sub: 'Competitive benchmark across 9 MDR providers',
    kpis: [{ val: '#3', lbl: 'Security Posture' }, { val: '9.0', lbl: 'Recommend' }, { val: '5.5×', lbl: 'Consol. Pref.' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
    reportLabel: 'Download Sample Report',
  },
  voice: {
    title: 'Red Canary — Customer Voice',
    sub: 'Verbatim evidence from verified customers',
    kpis: [{ val: '9', lbl: 'Verbatims' }, { val: '81%', lbl: '24/7 Driver' }, { val: '8.8', lbl: 'Switching Cost' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
    reportLabel: 'Download Sample Report',
  },
  bluecat: {
    title: 'BlueCat Networks — VoC Research',
    sub: 'Catalyst Study CR-2024-006 · DDI benchmark · 55 verified enterprise respondents',
    kpis: [{ val: '9.0', lbl: 'Mission Crit.' }, { val: '1.9', lbl: 'Switch Intent' }, { val: '98.5%', lbl: 'Net Retention' }],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/bluecat-catalyst.pdf',
    reportLabel: 'Download Sample Report',
  },
  partner: null,
};

interface ResearchHeaderProps { tab: Tab; }

export function ResearchHeader({ tab }: ResearchHeaderProps) {
  const hdr = HEADERS[tab];
  if (!hdr) return null;
  return (
    <div className="research-header">
      <div className="research-brand">
        <div>
          <div className="research-title">{hdr.title}</div>
          <div className="research-sub">{hdr.sub}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div className="research-kpis">
          {hdr.kpis.map((k, i) => (
            <div key={i} style={{ textAlign: 'right' }}>
              <div className="research-kpi-val">{k.val}</div>
              <div className="research-kpi-lbl">{k.lbl}</div>
            </div>
          ))}
        </div>
        {hdr.reportUrl && (
          <a
            href={hdr.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="research-download-btn"
          >
            <DownloadIcon />
            {hdr.reportLabel}
          </a>
        )}
      </div>
    </div>
  );
}
