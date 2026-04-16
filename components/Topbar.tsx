'use client';
import { BRAND, CONTACT } from '../lib/config/site';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">
          <div className="topbar-brand-eyebrow">
            <span>Voice of Customer Intelligence</span>
            <span className="topbar-brand-badge">For Bankers</span>
          </div>
          <div className="topbar-brand-divider" />
          <div className="topbar-brand-row">
            <span className="topbar-brand-label">Powered&nbsp;by</span>
            <img src={BRAND.logoUrl} alt="Crossover Research" className="topbar-logo-img" />
          </div>
        </div>
      </div>
      <div className="topbar-right">
        <a
          href="/intelligence?request=1"
          className="topbar-scope-btn"
        >
          Scope a Mandate →
        </a>
        <a
          href={CONTACT.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-book-btn"
        >
          Book a Meeting
        </a>
      </div>
    </div>
  );
}
