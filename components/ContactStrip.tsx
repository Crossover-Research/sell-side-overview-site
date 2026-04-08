'use client';

interface ContactStripProps {
  name: string;
  title: string;
  email: string;
}

export function ContactStrip({ name, title, email }: ContactStripProps) {
  const firstName = name.split(' ')[0];
  return (
    <div className="contact-strip">
      <div className="contact-info">
        <div className="contact-name">{name}</div>
        <div className="contact-title">{title}</div>
        <a href={`mailto:${email}`} className="contact-email">{email}</a>
      </div>
      <div className="contact-actions">
        <a href={`mailto:${email}`} className="cta-btn" style={{ width: 'auto' }}>
          Email {firstName}
        </a>
        <a
          href="https://book.crossoverresearch.com/#/crossoverresearch"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn outline"
          style={{ width: 'auto' }}
        >
          Book a Meeting
        </a>
      </div>
    </div>
  );
}
