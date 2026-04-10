'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function TabNav() {
  const router   = useRouter();
  const pathname = usePathname();
  const [samplesOpen, setSamplesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isResearch = pathname === '/redcanary' || pathname === '/bluecat';
  const isPartner  = pathname === '/partner' || pathname === '/';
  const isCap      = pathname === '/capabilities' || pathname === '/intelligence';

  const updatePos = useCallback(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setDropdownPos({ top: r.bottom + 4, left: r.left });
    }
  }, []);

  const openDropdown = useCallback(() => {
    updatePos();
    setSamplesOpen(true);
  }, [updatePos]);

  // Close on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setSamplesOpen(false);
      }
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
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

        <a href="/intelligence" className={`tab-btn tab-primary${pathname === '/intelligence' || isCap || pathname === '/catalyst' ? ' active' : ''}`}>
          Intelligence
        </a>

        <div className="tab-nav-divider" />

        <button
          ref={btnRef}
          className={`tab-btn tab-primary${isResearch ? ' active' : ''}`}
          onClick={() => samplesOpen ? setSamplesOpen(false) : openDropdown()}
          onMouseEnter={openDropdown}
        >
          Research Samples
          <span className="tab-chevron" style={{ transform: samplesOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
        </button>

        <div className="tab-nav-divider" />

        <a href="mailto:ian@crossoverresearch.com" className="tab-btn tab-primary">
          Submit a Request
        </a>

      </div>

      {/* Dropdown rendered at root level via fixed position - escapes overflow:auto clipping */}
      {samplesOpen && (
        <div
          ref={dropdownRef}
          className="tab-dropdown"
          style={{ position: 'fixed', top: dropdownPos.top, left: dropdownPos.left }}
          onMouseLeave={() => setSamplesOpen(false)}
        >
          <button
            className={`tab-dropdown-item${pathname === '/redcanary' ? ' active' : ''}`}
            onClick={() => { router.push('/redcanary'); setSamplesOpen(false); }}
          >
            Red Canary
          </button>
          <div className="tab-dropdown-sep" />
          <button
            className={`tab-dropdown-item${pathname === '/bluecat' ? ' active' : ''}`}
            onClick={() => { router.push('/bluecat'); setSamplesOpen(false); }}
          >
            BlueCat Networks
          </button>
        </div>
      )}
    </div>
  );
}
