'use client';

const LOGO_URL = '/cr-logo-light.svg';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">
          <div className="topbar-brand-eyebrow">Sell-Side Intelligence</div>
          <div className="topbar-brand-divider" />
          <div className="topbar-brand-row">
            <span className="topbar-brand-label">Powered by</span>
            <img src={LOGO_URL} alt="Crossover Research" className="topbar-logo-img" />
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
