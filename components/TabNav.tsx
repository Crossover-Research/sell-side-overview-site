'use client';

import { useRouter } from 'next/navigation';
import { Tab } from '../lib/types';

interface TabNavProps {
  activeTab: Tab;
}

export function TabNav({ activeTab }: TabNavProps) {
  const router = useRouter();

  const handleTabClick = (tab: Tab) => {
    if (tab === 'thesis') {
      router.push('/');
    } else {
      router.push(`/${tab}`);
    }
  };

  const tabs = [
    { id: 'thesis' as Tab, label: 'Red Canary — The Thesis' },
    { id: 'vendor' as Tab, label: 'Red Canary — Vendor Intel' },
    { id: 'voice' as Tab, label: 'Red Canary — Customer Voice' },
    { id: 'bluecat' as Tab, label: 'BlueCat Networks', isAsset: true },
    { id: 'partner' as Tab, label: 'Work With Us', hasSeparator: true }
  ];

  return (
    <div className={"tabNavWrap"}>
      <div className={"tabNav"}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${"tabBtn"} ${
              activeTab === tab.id ? "active" : ''
            } ${tab.isAsset ? "tabAsset" : ''} ${
              tab.hasSeparator ? "tabSep" : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}