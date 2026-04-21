import { BRAND, CONTACT, LEGAL } from '../lib/config/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <img
          src={BRAND.logoUrl}
          alt={BRAND.name}
          className="site-footer-logo"
          style={{ height: 18, opacity: .7 }}
        />
        <div className="site-footer-links">
          <a href="/partner">Work With Us</a>
          <a href="/intelligence">Intelligence Platform</a>
          <a href="/samples">Case Studies</a>
          <a href="/qofai">AI Research Engine</a>
          <a href={`mailto:${CONTACT.email}`}>Contact</a>
        </div>
        <div className="site-footer-legal">
          &copy; {LEGAL.year} {LEGAL.entity}
        </div>
      </div>
    </footer>
  );
}
