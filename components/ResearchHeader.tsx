import type { Tab } from '../lib/types';

const HEADERS: Record<Tab, { title: string; sub: string; kpis: Array<{ val: string; lbl: string }> }> = {
  thesis: {
    title: 'Red Canary — VoC Research',
    sub: 'Catalyst Study CR-2024-005 · 9-vendor MDR benchmark · Verified customer respondents',
    kpis: [{ val: '9.0', lbl: 'NPS Score' }, { val: '8.8', lbl: 'Replication Diff.' }, { val: '40%', lbl: 'ARR Growth' }],
  },
  vendor: {
    title: 'Red Canary — Vendor Intel',
    sub: 'Competitive benchmark across 9 MDR providers',
    kpis: [{ val: '#3', lbl: 'Security Posture' }, { val: '9.0', lbl: 'Recommend' }, { val: '5.5×', lbl: 'Consol. Pref.' }],
  },
  voice: {
    title: 'Red Canary — Customer Voice',
    sub: 'Verbatim evidence from verified customers',
    kpis: [{ val: '9', lbl: 'Verbatims' }, { val: '81%', lbl: '24/7 Driver' }, { val: '8.8', lbl: 'Switching Cost' }],
  },
  bluecat: {
    title: 'BlueCat Networks — VoC Research',
    sub: 'Catalyst Study CR-2024-006 · DDI benchmark · 55 verified enterprise respondents',
    kpis: [{ val: '9.0', lbl: 'Mission Crit.' }, { val: '1.9', lbl: 'Switch Intent' }, { val: '98.5%', lbl: 'Net Retention' }],
  },
  partner: { title: '', sub: '', kpis: [] },
};

interface ResearchHeaderProps { tab: Tab; }

export function ResearchHeader({ tab }: ResearchHeaderProps) {
  const hdr = HEADERS[tab];
  if (!hdr || !hdr.title) return null;
  return (
    <div className="research-header">
      <div className="research-brand">
        <div>
          <div className="research-title">{hdr.title}</div>
          <div className="research-sub">{hdr.sub}</div>
        </div>
      </div>
      <div className="research-kpis">
        {hdr.kpis.map((k, i) => (
          <div key={i} style={{ textAlign: 'right' }}>
            <div className="research-kpi-val">{k.val}</div>
            <div className="research-kpi-lbl">{k.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
