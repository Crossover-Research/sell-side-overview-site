'use client';
import { useRouter } from 'next/navigation';
import type { Tab } from '../lib/types';

interface TabNavProps { activeTab: Tab; }

export function TabNav({ activeTab }: TabNavProps) {
  const router = useRouter();
  const go = (tab: Tab) => router.push(`/${tab}`);

  return (
    <div className="tab-nav-wrap">
      <div className="tab-nav">

        {/* Primary */}
        <button
          className={`tab-btn tab-primary${activeTab === 'partner' ? ' active' : ''}`}
          onClick={() => go('partner')}
        >
          Work With Us
        </button>

        <div className="tab-nav-divider" />

        {/* Red Canary group */}
        <span className="tab-nav-group-label">Red Canary</span>
        {([
          { id: 'thesis' as Tab,  label: 'Thesis'       },
          { id: 'vendor' as Tab,  label: 'Vendor Intel'  },
          { id: 'voice'  as Tab,  label: 'Voice'         },
        ]).map(({ id, label }) => (
          <button
            key={id}
            className={`tab-btn tab-research${activeTab === id ? ' active' : ''}`}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}

        <div className="tab-nav-divider" />

        {/* BlueCat */}
        <button
          className={`tab-btn tab-research${activeTab === 'bluecat' ? ' active' : ''}`}
          onClick={() => go('bluecat')}
        >
          BlueCat
        </button>

      </div>
    </div>
  );
}
