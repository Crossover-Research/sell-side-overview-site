'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function TabNav() {
  const router   = useRouter();
  const pathname = usePathname();
  const [samplesOpen, setSamplesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const isResearch  = pathname === '/redcanary' || pathname === '/bluecat';
  const isIntel     = pathname === '/intelligence' || pathname === '/capabilities';
  const isCatalyst  = pathname === '/catalyst';

  const openDropdown = useCallback(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setDropdownPos({ top: r.bottom, left: r.left });
    }
    setSamplesOpen(true);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) setSamplesOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="tab-nav-wrap">
      <nav className="tab-nav">

        <a href="/intelligence" className={`tab-btn tab-primary${isIntel ? ' active' : ''}`}>
          Intelligence Platform
        </a>

        <div className="tab-nav-divider" />

        <a href="/catalyst" className={`tab-btn tab-primary${isCatalyst ? ' active' : ''}`}>
          Catalyst Library
        </a>

        <div className="tab-nav-divider" />

        <button
          ref={btnRef}
          className={`tab-btn tab-primary${isResearch ? ' active' : ''}`}
          onClick={() => samplesOpen ? setSamplesOpen(false) : openDropdown()}
          onMouseEnter={openDropdown}
          onMouseLeave={() => {}}
        >
          Research Samples <span style={{ fontSize: 9, opacity: .6 }}>&#9660;</span>
        </button>

        <div className="tab-nav-divider" />

        <a href="/intelligence?request=1" className="tab-btn tab-primary">
          Submit a Request
        </a>

      </nav>

      {samplesOpen && (
        <div
          ref={undefined}
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
