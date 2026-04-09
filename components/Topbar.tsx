'use client';
import { usePathname } from 'next/navigation';

const SUBTITLES: Record<string, string> = {
  '/partner':      'Sell-Side Intelligence Portal',
  '/thesis':       'Red Canary — VoC Research',
  '/vendor':       'Red Canary — Vendor Intel',
  '/voice':        'Red Canary — Customer Voice',
  '/bluecat':      'BlueCat Networks — VoC Research',
  '/capabilities': 'Intelligence Platform',
};

export function Topbar() {
  const path = usePathname();
  const subtitle = SUBTITLES[path] ?? 'Sell-Side Intelligence Portal';

  return (
    <div className="topbar">
      <div className="topbar-left">
        <img
          src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
          alt="Crossover Research"
          className="topbar-logo-img"
        />
        <div className="topbar-divider" />
        <div className="topbar-title">
          <h1>{subtitle}</h1>
        </div>
      </div>
      <div className="topbar-right">
        <a href="/capabilities" className="topbar-cap-link">Intelligence Platform</a>
        <div className="badge-confidential">Confidential</div>
      </div>
    </div>
  );
}
