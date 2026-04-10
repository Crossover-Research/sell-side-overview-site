'use client';
import { BRAND, CONTACT, LEGAL } from '../lib/config/site';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">
          <div className="topbar-brand-eyebrow">{BRAND.tagline}</div>
          <div className="topbar-brand-divider" />
          <div className="topbar-brand-row">
            <span className="topbar-brand-label">Powered by</span>
            <img src={BRAND.logoUrl} alt={BRAND.name} className="topbar-logo-img" />
          </div>
        </div>
      </div>
      <div className="topbar-right">
        <a
          href={CONTACT.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-book-btn"
        >
          {CONTACT.bookingLabel}
        </a>
        <div className="badge-confidential">{LEGAL.badgeLabel}</div>
      </div>
    </div>
  );
}
