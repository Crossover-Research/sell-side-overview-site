'use client';
import type { Tab } from '../lib/types';

interface Props {
  tab: Tab;
  activeSection?: string;
  onSelect?: (s: string) => void;
}

const RC_ITEMS = [
  { id: 'thesis', label: 'IC Thesis',    badge: '4 questions' },
  { id: 'vendor', label: 'Vendor Intel', badge: '9 vendors'   },
  { id: 'voice',  label: 'Voice',        badge: '9 verbatims' },
];

const BC_ITEMS = [
  { id: 'thesis', label: 'IC Framework', badge: '4 questions' },
  { id: 'voice',  label: 'Verbatims'                          },
  { id: 'intel',  label: 'Study Intel'                        },
];

export function ResearchSidebar({ tab, activeSection, onSelect }: Props) {
  const isRC = ['thesis', 'vendor', 'voice'].includes(tab);
  const items = isRC ? RC_ITEMS : BC_ITEMS;
  const groupLabel = isRC ? 'Red Canary — MDR' : 'BlueCat Networks — DDI';

  return (
    <nav className="research-sidebar">
      <div className="sidebar-group">{groupLabel}</div>
      {items.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item${activeSection === item.id ? ' active' : ''}`}
          onClick={() => onSelect?.(item.id)}
          style={{ cursor: onSelect ? 'pointer' : 'default' }}
        >
          {item.label}
          {item.badge && <span className="sidebar-badge">{item.badge}</span>}
        </div>
      ))}
      <div className="sidebar-group" style={{ marginTop: 16 }}>Resources</div>
      <div className="sidebar-item" style={{ fontSize: 11 }}>
        {isRC ? 'Red Canary Sample' : 'BlueCat Sample'}
      </div>
    </nav>
  );
}
