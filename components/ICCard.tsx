'use client';
import { useState } from 'react';
import type { ICCard as ICCardType } from '../lib/types';

interface ICCardProps { card: ICCardType; theme?: 'navy' | 'green'; index: number; isOpen: boolean; onToggle: () => void; }

const STAT_LABELS: Record<string, string> = {
  '8.8': 'Replicate', '9.0': 'Recommend', '5.5x': 'vs. MSFT',
  '81%': '24/7 Driver', '9.0%': 'Mission Crit', '1.9': 'Switch',
};

export function ICCard({ card, isOpen, onToggle }: ICCardProps) {
  const statLabel = STAT_LABELS[card.stat.num] || card.num;
  return (
    <div className={`ic-accordion-row${isOpen ? ' open' : ''}`}>
      <div className="ic-trigger" onClick={onToggle} role="button" aria-expanded={isOpen}>
        <div style={{ textAlign: 'center', opacity: isOpen ? 0 : 1, transition: 'opacity .2s' }}>
          <div className="ic-stat-num">{card.stat.num}</div>
          <div className="ic-stat-lbl">{statLabel}</div>
        </div>
        <div className="ic-question">{card.question}</div>
        <div className="ic-verdict-chip">✓ {card.verdict.split(';')[0].split(',')[0]}</div>
      </div>
      <div className="ic-body">
        <div className="ic-body-inner">
          <div>
            <div className="ic-body-stat">{card.stat.num}</div>
            <div className="ic-body-sub">{card.stat.label}</div>
          </div>
          <div>
            <div className="ic-body-finding">{card.finding}</div>
            <div className="ic-body-quote">&ldquo;{card.quote.text.replace(/^"|"$/g, '')}&rdquo;</div>
            <div className="ic-body-cite">{card.quote.cite}</div>
            <div className="pill-row">
              {card.pills.map((p, i) => (
                <span key={i} className={`pill${p.win ? ' win' : ''}`}>{p.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ICAccordionProps { cards: ICCardType[]; theme?: 'navy' | 'green'; }

export function ICAccordion({ cards, theme }: ICAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <div className="ic-accordion-wrap">
      {cards.map((card, i) => (
        <ICCard
          key={i} card={card} theme={theme} index={i}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
