'use client';
import type { Tab } from '../lib/types';

interface ResearchSidebarProps { tab: Tab; }

const NAV: Record<string, Array<{ label: string; badge?: string }>> = {
  thesis: [
    { label: 'Replication', badge: '8.8' },
    { label: 'Stickiness',  badge: '9.0' },
    { label: 'Competition', badge: '5.5×' },
    { label: 'Durability',  badge: '81%' },
  ],
  vendor: [
    { label: '9-Vendor Benchmark' },
    { label: 'Cost Analysis' },
    { label: 'Adoption Drivers' },
  ],
  voice: [
    { label: 'Customer Verbatims' },
    { label: 'Switching Costs' },
    { label: 'Detection Quality' },
  ],
  bluecat: [
    { label: 'Replication', badge: '9.0' },
    { label: 'Stickiness',  badge: '98.5%' },
    { label: 'Competition', badge: '3–4×' },
    { label: 'Durability',  badge: 'NPS 64' },
    { label: 'Verbatims' },
    { label: 'Study Intel' },
  ],
};

const GROUP_LABEL: Record<string, string> = {
  thesis: 'IC Framework', vendor: 'Benchmarking', voice: 'Evidence', bluecat: 'IC Framework',
};

export function ResearchSidebar({ tab }: ResearchSidebarProps) {
  const items = NAV[tab] || [];
  return (
    <nav className="research-sidebar">
      <div className="sidebar-group">{GROUP_LABEL[tab] || 'Research'}</div>
      {items.map((item, i) => (
        <div key={i} className={`sidebar-item${i === 0 ? ' active' : ''}`}>
          {item.label}
          {item.badge && <span className="sidebar-badge">{item.badge}</span>}
        </div>
      ))}
      <div className="sidebar-group" style={{ marginTop: 16 }}>Resources</div>
      <div className="sidebar-item" style={{ fontSize: 11 }}>
        {tab === 'bluecat' ? 'BlueCat Sample' : 'Red Canary Sample'}
      </div>
    </nav>
  );
}
