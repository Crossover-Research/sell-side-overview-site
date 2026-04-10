export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <img
          src="/cr-logo-light.svg"
          alt="Crossover Research"
          className="site-footer-logo"
          style={{ height: 18, opacity: .7 }}
        />
        <div className="site-footer-links">
          <a href="/partner">Work With Us</a>
          <a href="/intelligence">Intelligence Platform</a>
          <a href="/intelligence">Catalyst Library</a>
          <a href="/redcanary">Red Canary</a>
          <a href="/bluecat">BlueCat</a>
        </div>
        <div className="site-footer-legal">
          &copy; 2026 Crossover Research LLC
        </div>
      </div>
    </footer>
  );
}
