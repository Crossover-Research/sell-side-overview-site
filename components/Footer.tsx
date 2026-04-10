export function Footer() {
  return (
    <footer className="site-footer">
      {/* Ian McArdle contact strip */}
      <div className="site-footer-contact">
        <div className="site-footer-contact-inner">
          <div>
            <div className="site-footer-contact-name">Ian McArdle</div>
            <div className="site-footer-contact-title">Head of Strategic Partnerships &middot; Crossover Research</div>
            <a href="mailto:ian@crossoverresearch.com" className="site-footer-contact-email">
              ian@crossoverresearch.com
            </a>
          </div>
          <div className="site-footer-contact-actions">
            <a href="mailto:ian@crossoverresearch.com" className="cta-btn solid" style={{ fontSize: 12, padding: '8px 18px' }}>
              Email Ian
            </a>
            <a
              href="https://book.crossoverresearch.com/#/crossoverresearch"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn outline"
              style={{ fontSize: 12, padding: '8px 18px' }}
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-footer-inner">
        <img
          src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
          alt="Crossover Research"
          className="site-footer-logo"
        />
        <div className="site-footer-links">
          <a href="/partner">Work With Us</a>
          <a href="/capabilities">Intelligence Platform</a>
          <a href="/catalyst">Catalyst Library</a>
          <a href="/redcanary">Red Canary</a>
          <a href="/bluecat">BlueCat</a>
        </div>
        <div className="site-footer-legal">
          © 2026 Crossover Research LLC &middot; Confidential
        </div>
      </div>
    </footer>
  );
}
