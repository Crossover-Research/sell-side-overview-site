const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CONFIGS: Record<string, {
  company: string; product: string; studyId: string; color: string; logoSrc: string;
  invertLogo?: boolean;
  kpis: { val: string; lbl: string }[];
  reportUrl: string;
}> = {
  redcanary: {
    company: 'Red Canary',
    logoSrc: '/red-canary-logo.svg',
    invertLogo: false,
    product: 'Managed Detection & Response',
    studyId: 'CR-2024-005 · 9-vendor benchmark · 75+ respondents',
    color: '#e05c5c',
    kpis: [
      { val: '9.0', lbl: 'NPS' },
      { val: '8.8', lbl: 'Replication Difficulty' },
      { val: '40%', lbl: 'ARR Growth' },
    ],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/red-canary-catalyst.pdf',
  },
  bluecat: {
    company: 'BlueCat Networks',
    logoSrc: '/bluecat-logo.svg',
    invertLogo: true,
    product: 'DNS · DHCP · IPAM',
    studyId: 'CR-2024-006 · 55 verified enterprise respondents',
    color: '#1e90d4',
    kpis: [
      { val: '9.0', lbl: 'Mission Criticality' },
      { val: '1.9', lbl: 'Switching Intent' },
      { val: '98.5%', lbl: 'Net Retention' },
    ],
    reportUrl: 'https://yvkbfmdugujhxerdopcm.supabase.co/storage/v1/object/public/public-assets/bluecat-catalyst.pdf',
  },
};

interface ResearchHeaderProps { tab: string; }

export function ResearchHeader({ tab }: ResearchHeaderProps) {
  const cfg = CONFIGS[tab];
  if (!cfg) return null;

  return (
    <div className="research-header">
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, width: '100%' }}>

        {/* Left: accent line + logo + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0, flex: 1 }}>
          <div style={{ width: 2, height: 32, background: `linear-gradient(to bottom, ${cfg.color}, ${cfg.color}33)`, flexShrink: 0 }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <img
                src={cfg.logoSrc}
                alt={cfg.company}
                style={{ height: 20, width: 'auto', maxWidth: 150, filter: cfg.invertLogo ? 'brightness(0) invert(1)' : 'none', opacity: cfg.invertLogo ? .85 : 1, flexShrink: 0 }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: cfg.color, background: `${cfg.color}18`, border: `1px solid ${cfg.color}40`, padding: '1px 7px', flexShrink: 0 }}>
                Catalyst Study
              </span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.78)', letterSpacing: '.02em', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {cfg.product}&nbsp;&middot;&nbsp;{cfg.studyId}
            </div>
          </div>
        </div>

        {/* Right: KPI strip + download */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
          {cfg.kpis.map((k, i) => (
            <div key={i} style={{ padding: '0 18px', borderRight: i < cfg.kpis.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none', textAlign: 'center' as const }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.88)', lineHeight: 1, letterSpacing: '-.01em', marginBottom: 3 }}>
                {k.val}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '.1em', color: 'rgba(255,255,255,.72)', whiteSpace: 'nowrap' as const }}>
                {k.lbl}
              </div>
            </div>
          ))}

          <a
            href={cfg.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 16px', marginLeft: 16, background: `${cfg.color}20`, border: `1px solid ${cfg.color}50`, color: cfg.color, fontSize: 11, fontWeight: 700, textDecoration: 'none', letterSpacing: '.04em', whiteSpace: 'nowrap' as const, transition: 'all .15s' }}
          >
            <DownloadIcon />
            Download PDF
          </a>
        </div>

      </div>
    </div>
  );
}
