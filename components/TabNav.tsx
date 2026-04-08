'use client';

import { useRouter } from 'next/navigation';
import type { Tab } from '../lib/types';

interface TabNavProps {
  activeTab: Tab;
}

const TABS: { id: Tab; label: string; className?: string }[] = [
  { id: 'thesis',  label: 'Red Canary \u2014 The Thesis' },
  { id: 'vendor',  label: 'Red Canary \u2014 Vendor Intel' },
  { id: 'voice',   label: 'Red Canary \u2014 Customer Voice' },
  { id: 'bluecat', label: 'BlueCat Networks', className: 'tab-asset' },
  { id: 'partner', label: 'Work With Us',     className: 'tab-sep' },
];

export function TabNav({ activeTab }: TabNavProps) {
  const router = useRouter();

  const handleClick = (tab: Tab) => {
    router.push(tab === 'thesis' ? '/' : `/${tab}`);
  };

  return (
    <div className="tab-nav-wrap">
      <div className="tab-nav">
        {TABS.map(({ id, label, className }) => (
          <button
            key={id}
            className={[
              'tab-btn',
              className,
              activeTab === id ? 'active' : '',
            ].filter(Boolean).join(' ')}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
