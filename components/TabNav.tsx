'use client';
import { useRouter } from 'next/navigation';
import type { Tab } from '../lib/types';

interface TabNavProps { activeTab: Tab; }

const PRIMARY: { id: Tab; label: string }[] = [
  { id: 'partner', label: 'Work With Us' },
];

const RESEARCH: { id: Tab; label: string }[] = [
  { id: 'thesis',  label: 'Red Canary — The Thesis' },
  { id: 'vendor',  label: 'Red Canary — Vendor Intel' },
  { id: 'voice',   label: 'Red Canary — Customer Voice' },
  { id: 'bluecat', label: 'BlueCat Networks' },
];

export function TabNav({ activeTab }: TabNavProps) {
  const router = useRouter();
  const go = (tab: Tab) => router.push(`/${tab}`);

  return (
    <div className="tab-nav-wrap">
      <div className="tab-nav">
        {PRIMARY.map(({ id, label }) => (
          <button
            key={id}
            className={`tab-btn tab-primary${activeTab === id ? ' active' : ''}`}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}

        <div className="tab-nav-divider" />
        <span className="tab-nav-group-label">Research</span>

        {RESEARCH.map(({ id, label }) => (
          <button
            key={id}
            className={`tab-btn tab-research${activeTab === id ? ' active' : ''}`}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
