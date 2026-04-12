'use client';
import { usePathname } from 'next/navigation';

export function TabNav() {
  const pathname = usePathname();
  const isIntel    = pathname === '/intelligence' || pathname === '/';
  const isCatalyst = pathname === '/catalyst';
  const isSamples  = pathname === '/samples' || pathname === '/redcanary' || pathname === '/bluecat';

  return (
    <div className="tab-nav-wrap">
      <nav className="tab-nav">
        <a href="/intelligence" className={`tab-btn tab-primary${isIntel ? ' active' : ''}`}>Intelligence Platform</a>
        <div className="tab-nav-divider" />
        <a href="/catalyst"     className={`tab-btn tab-primary${isCatalyst ? ' active' : ''}`}>Catalyst Library</a>
        <div className="tab-nav-divider" />
        <a href="/samples"      className={`tab-btn tab-primary${isSamples ? ' active' : ''}`}>Research Samples</a>
        <div className="tab-nav-divider" />
        <a href="/intelligence?request=1" className="tab-btn tab-primary">Submit a Request</a>
      </nav>
    </div>
  );
}
