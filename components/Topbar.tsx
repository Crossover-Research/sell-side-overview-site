'use client';

const LOGO_URL = '/cr-logo-light.svg';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">

          {/* Row 1: VOICE OF CUSTOMER INTELLIGENCE */}
          <div className="topbar-brand-eyebrow">
            <span>Sell-Side</span><span>Intelligence</span>
          </div>

          {/* Divider */}
          <div className="topbar-brand-divider" />

          {/* Row 2: Powered by [logo] */}
          <div className="topbar-brand-row">
            <span className="topbar-brand-label">Powered by</span>
            <img
              src={LOGO_URL}
              alt="Crossover Research"
              className="topbar-logo-img"
            />
          </div>

        </div>
      </div>
      <div className="topbar-right">
        <a
          href="https://book.crossoverresearch.com/#/crossoverresearch"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-book-btn"
        >
          Book a Meeting
        </a>
        <div className="badge-confidential">Confidential</div>
      </div>
    </div>
  );
}
