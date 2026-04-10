export function Footer() {
  return (
    <footer className="page-footer">
      <div>© 2026 Crossover Research · Confidential · <a href="mailto:ian@crossoverresearch.com">Contact</a></div>
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img
            src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
            alt="Crossover Research"
            className="site-footer-logo"
          />
          <span className="site-footer-name">
            CROSSOVER<span className="site-footer-accent"> RESEARCH</span>
          </span>
        </div>

        <div className="site-footer-links">
          <a href="/partner">Work With Us</a>
          <a href="/capabilities">Intelligence Platform</a>
          <a href="/redcanary">Red Canary Study</a>
          <a href="/bluecat">BlueCat Study</a>
          <a href="mailto:ian@crossoverresearch.com">Contact</a>
        </div>

        <div className="site-footer-legal">
          <span>© 2026 Crossover Research LLC</span>
          <span className="site-footer-dot">·</span>
          <span>Confidential — Not for Distribution</span>
        </div>
      </div>
    </footer>
  );
}
