'use client';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">
          <div className="topbar-brand-eyebrow">Sell-Side Intelligence</div>
          <div className="topbar-brand-rule" />
          <div className="topbar-brand-powered">
            <span className="topbar-brand-label">Powered by</span>
            <img
              src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
              alt="Crossover Research"
              className="topbar-logo-img"
            />
            <span className="topbar-brand-name">
              CROSSOVER<span className="topbar-brand-accent"> RESEARCH</span>
            </span>
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
