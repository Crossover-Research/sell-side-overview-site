export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <img
          src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
          alt="Crossover Research"
          className="site-footer-logo"
        />
        <div className="site-footer-links">
          <a href="/partner">Work With Us</a>
          <a href="/capabilities">Intelligence Platform</a>
          <a href="/redcanary">Red Canary</a>
          <a href="/bluecat">BlueCat</a>
          <a href="mailto:ian@crossoverresearch.com">Contact</a>
        </div>
        <div className="site-footer-legal">
          © 2026 Crossover Research LLC · Confidential
        </div>
      </div>
    </footer>
  );
}
