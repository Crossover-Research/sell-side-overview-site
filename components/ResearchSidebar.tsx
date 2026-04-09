'use client';
import type { Tab } from '../lib/types';

interface ResearchSidebarProps { tab: Tab; }

const NAV: Record<string, Array<{ label: string; badge?: string }>> = {
  thesis: [
    { label: 'IC 01 — Replication', badge: '8.8' },
    { label: 'IC 02 — Stickiness',  badge: '9.0' },
    { label: 'IC 03 — Competition', badge: '5.5×' },
    { label: 'IC 04 — Durability',  badge: '81%' },
  ],
  vendor: [
    { label: '9-Vendor Benchmark' },
    { label: 'Cost Analysis' },
    { label: 'Adoption Drivers' },
  ],
  voice: [
    { label: '9 Verbatims' },
    { label: 'Switching Costs' },
    { label: 'Detection Quality' },
  ],
  bluecat: [
    { label: 'IC 01 — Replication', badge: '9.0' },
    { label: 'IC 02 — Stickiness',  badge: '98.5%' },
    { label: 'IC 03 — Competition', badge: '3–4×' },
    { label: 'IC 04 — Durability',  badge: 'NPS 64' },
    { label: 'Verbatim Evidence' },
    { label: 'Study Intelligence' },
  ],
};

const TITLES: Record<string, string> = {
  thesis: 'Red Canary', vendor: 'Red Canary', voice: 'Red Canary', bluecat: 'BlueCat Networks',
};

export function ResearchSidebar({ tab }: ResearchSidebarProps) {
  const items = NAV[tab] || [];
  return (
    <nav className="research-sidebar">
      <div className="sidebar-group">{TITLES[tab] || 'Research'}</div>
      {items.map((item, i) => (
        <div key={i} className={`sidebar-item${i === 0 ? ' active' : ''}`}>
          {item.label}
          {item.badge && <span className="sidebar-badge">{item.badge}</span>}
        </div>
      ))}
      <div className="sidebar-group" style={{ marginTop: 12 }}>Downloads</div>
      <div className="sidebar-item">
        {tab === 'bluecat' ? 'BlueCat Sample Report' : 'Red Canary Sample Report'}
      </div>
    </nav>
  );
}
