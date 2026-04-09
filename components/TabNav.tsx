'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { Tab } from '../lib/types';

export function TabNav({ activeTab }: { activeTab: Tab }) {
  const router = useRouter();
  const pathname = usePathname();
  const [samplesOpen, setSamplesOpen] = useState(false);

  const isResearch = ['thesis', 'vendor', 'voice', 'bluecat'].includes(activeTab);

  return (
    <div className="tab-nav-wrap">
      <div className="tab-nav">

        <button
          className={`tab-btn tab-primary${activeTab === 'partner' ? ' active' : ''}`}
          onClick={() => router.push('/partner')}
        >
          Work With Us
        </button>

        <div className="tab-nav-divider" />

        <a
          href="/capabilities"
          className={`tab-btn tab-primary${pathname === '/capabilities' ? ' active' : ''}`}
        >
          Intelligence Platform
        </a>

        <div className="tab-nav-divider" />

        {/* Research Samples dropdown */}
        <div
          className="tab-dropdown-wrap"
          onMouseEnter={() => setSamplesOpen(true)}
          onMouseLeave={() => setSamplesOpen(false)}
        >
          <button className={`tab-btn tab-primary${isResearch ? ' active' : ''}`}>
            Research Samples
            <span className="tab-chevron" style={{ transform: samplesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▾
            </span>
          </button>

          {samplesOpen && (
            <div className="tab-dropdown">
              <div className="tab-dropdown-label">Red Canary — MDR</div>
              {([
                { id: 'thesis' as Tab, label: 'IC Thesis'    },
                { id: 'vendor' as Tab, label: 'Vendor Intel' },
                { id: 'voice'  as Tab, label: 'Voice'        },
              ]).map(({ id, label }) => (
                <button
                  key={id}
                  className={`tab-dropdown-item${activeTab === id ? ' active' : ''}`}
                  onClick={() => { router.push(`/${id}`); setSamplesOpen(false); }}
                >
                  {label}
                </button>
              ))}
              <div className="tab-dropdown-sep" />
              <div className="tab-dropdown-label">BlueCat Networks — DDI</div>
              <button
                className={`tab-dropdown-item${activeTab === 'bluecat' ? ' active' : ''}`}
                onClick={() => { router.push('/bluecat'); setSamplesOpen(false); }}
              >
                VoC Report
              </button>
            </div>
          )}
        </div>

        <div className="tab-nav-divider" />

        <a
          href="mailto:ian@crossoverresearch.com"
          className="tab-btn tab-primary"
        >
          Submit a Request
        </a>

      </div>
    </div>
  );
}
