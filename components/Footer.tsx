export function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-brand-block">
        <div className="footer-eyebrow">Sell-Side Intelligence</div>
        <div className="footer-rule" />
        <div className="footer-powered">
          <span className="footer-powered-label">Powered by</span>
          <img
            src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
            alt="Crossover Research"
            className="footer-logo"
          />
          <span className="footer-brand-text">CROSSOVER<span className="footer-brand-accent"> RESEARCH</span></span>
        </div>
      </div>
      <div className="footer-meta">
        © 2026 Crossover Research · Confidential ·
        <a href="mailto:ian@crossoverresearch.com">Contact</a>
      </div>
    </footer>
  );
}
