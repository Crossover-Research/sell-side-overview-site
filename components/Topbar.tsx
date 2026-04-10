'use client';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-brand">

          {/* Row 1: SELL-SIDE INTELLIGENCE */}
          <div className="topbar-brand-eyebrow">Sell-Side Intelligence</div>

          {/* Divider */}
          <div className="topbar-brand-divider" />

          {/* Row 2: Powered by [colored logo] */}
          <div className="topbar-brand-row">
            <span className="topbar-brand-label">Powered by</span>
            <img
              src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
              alt="Crossover Research"
              className="topbar-logo-img"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const fb = t.nextElementSibling as HTMLElement;
                if (fb) fb.style.display = 'inline';
              }}
            />
            <span className="topbar-logo-fallback">CROSSOVER RESEARCH</span>
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
