import type { ICCard as ICCardType } from '../lib/types';

interface ICCardProps {
  card: ICCardType;
  theme?: 'navy' | 'green';
}

export function ICCard({ card, theme = 'navy' }: ICCardProps) {
  const headerBg  = theme === 'green' ? '#0b2416' : 'var(--navy)';
  const quoteBorderColor = theme === 'green' ? 'var(--green)' : 'var(--navy)';

  return (
    <div className="ic-card fade-up">
      <div className="ic-card-header" style={{ background: headerBg }}>
        <div className="ic-num">{card.num}</div>
        <div className="ic-question">{card.question}</div>
      </div>
      <div className="ic-card-body">
        <div className="ic-verdict">
          <div className="verdict-dot" />
          <div className="verdict-text">{card.verdict}</div>
        </div>
        <div className="ic-stat-row">
          <div className="ic-stat-num">{card.stat.num}</div>
          <div className="ic-stat-label">{card.stat.label}</div>
        </div>
        <p className="ic-finding">{card.finding}</p>
        <div className="ic-quote" style={{ borderLeftColor: quoteBorderColor }}>
          {card.quote.text}
          <cite>{card.quote.cite}</cite>
        </div>
        <div className="ic-pills">
          {card.pills.map((pill, i) => (
            <span key={i} className={`ic-pill${pill.win ? ' win' : ''}`}>
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
