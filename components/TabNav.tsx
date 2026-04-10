'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function TabNav() {
  const router   = useRouter();
  const pathname = usePathname();
  const [samplesOpen, setSamplesOpen] = useState(false);

  const isResearch = pathname === '/redcanary' || pathname === '/bluecat';
  const isPartner  = pathname === '/partner' || pathname === '/';
  const isCap      = pathname === '/capabilities';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const RESEARCH_TABS = [
  { href: '/thesis',  label: 'IC Thesis'    },
  { href: '/vendor',  label: 'Vendor Intel' },
  { href: '/voice',   label: 'Voice'        },
];

export function TabNav() {
  const router   = useRouter();
  const pathname = usePathname();
  const [samplesOpen, setSamplesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isResearch = ['/thesis', '/vendor', '/voice', '/bluecat'].includes(pathname);
  const isPartner  = pathname === '/partner' || pathname === '/';
  const isCap      = pathname === '/capabilities';
  const isResearch = pathname === '/redcanary' || pathname === '/bluecat';
  const isPartner  = pathname === '/partner' || pathname === '/';
  const isCap      = pathname === '/capabilities';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSamplesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="tab-nav-wrap">
      <div className="tab-nav">

        <button
          className={`tab-btn tab-primary${isPartner ? ' active' : ''}`}
          onClick={() => router.push('/partner')}
        >
          Work With Us
        </button>

        <div className="tab-nav-divider" />

        <a href="/capabilities" className={`tab-btn tab-primary${isCap ? ' active' : ''}`}>
          Intelligence Platform
        </a>

        <div className="tab-nav-divider" />

        <div
          className="tab-dropdown-wrap"
          onMouseEnter={() => setSamplesOpen(true)}
          onMouseLeave={() => setSamplesOpen(false)}
        >
          <button className={`tab-btn tab-primary${isResearch ? ' active' : ''}`}>
            Research Samples
            <span className="tab-chevron" style={{ transform: samplesOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
          </button>
          {samplesOpen && (
            <div className="tab-dropdown">
              <div className="tab-dropdown-label">Red Canary — MDR</div>
              <button
                className={`tab-dropdown-item${pathname === '/redcanary' ? ' active' : ''}`}
                onClick={() => { router.push('/redcanary'); setSamplesOpen(false); }}
              >
                Full Study
              </button>
              <div className="tab-dropdown-sep" />
              <div className="tab-dropdown-label">BlueCat Networks — DDI</div>
              <button
                className={`tab-dropdown-item${pathname === '/bluecat' ? ' active' : ''}`}
                onClick={() => { router.push('/bluecat'); setSamplesOpen(false); }}
              >
                Full Study
              </button>
            </div>
          )}
        </div>

        <div className="tab-nav-divider" />

        <a
          href="/capabilities"
          className={`tab-btn tab-primary${isCap ? ' active' : ''}`}
        >
        <a href="/capabilities" className={`tab-btn tab-primary${isCap ? ' active' : ''}`}>
          Intelligence Platform
        </a>

        <div className="tab-nav-divider" />

        <div
          className="tab-dropdown-wrap"
          ref={dropdownRef}
          onMouseEnter={() => setSamplesOpen(true)}
          onMouseLeave={() => setSamplesOpen(false)}
        >
          <button
            className={`tab-btn tab-primary${isResearch ? ' active' : ''}`}
            onClick={() => setSamplesOpen(prev => !prev)}
          >
            Research Samples
            <span className="tab-chevron" style={{ transform: samplesOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
          </button>
          {samplesOpen && (
            <div className="tab-dropdown">
              <div className="tab-dropdown-label">Red Canary — MDR</div>
              {RESEARCH_TABS.map(({ href, label }) => (
                <button
                  key={href}
                  className={`tab-dropdown-item${pathname === href ? ' active' : ''}`}
                  onClick={() => { router.push(href); setSamplesOpen(false); }}
                >
                  {label}
                </button>
              ))}
              <button
                className={`tab-dropdown-item${pathname === '/redcanary' ? ' active' : ''}`}
                onClick={() => { router.push('/redcanary'); setSamplesOpen(false); }}
              >
                Full Study
              </button>
              <div className="tab-dropdown-sep" />
              <div className="tab-dropdown-label">BlueCat Networks — DDI</div>
              <button
                className={`tab-dropdown-item${pathname === '/bluecat' ? ' active' : ''}`}
                onClick={() => { router.push('/bluecat'); setSamplesOpen(false); }}
              >
                Full Study
              </button>
            </div>
          )}
        </div>

        <div className="tab-nav-divider" />

        <a href="mailto:ian@crossoverresearch.com" className="tab-btn tab-primary">
          Submit a Request
        </a>

      </div>
    </div>
  );
}
