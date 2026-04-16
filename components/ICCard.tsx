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
  const accentColor = isOpen ? 'rgba(77,144,254,.7)' : 'transparent';

  return (
    <div className={`ic-accordion-row${isOpen ? ' open' : ''}`}>
      {/* TRIGGER */}
      <div className="ic-trigger" onClick={onToggle} role="button" aria-expanded={isOpen}>
        <div style={{ textAlign: 'center', opacity: isOpen ? 0 : 1, transition: 'opacity .18s' }}>
          <div className="ic-stat-num">{card.stat.num}</div>
          <div className="ic-stat-lbl">{statLabel}</div>
        </div>
        <div className="ic-question">{card.question}</div>
        <div className="ic-verdict-chip">&#10003; {card.verdict.split(';')[0].split(',')[0]}</div>
      </div>

      {/* EXPANDED BODY — clean 3-col layout */}
      <div className="ic-body">
        <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr 1fr', gap: 0, padding: '0 20px 20px', alignItems: 'start' }}>
          {/* Col 1: Stat */}
          <div style={{ paddingTop: 16, paddingRight: 16, borderRight: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 700, color: 'rgba(130,175,255,.9)', lineHeight: 1, letterSpacing: '-.02em', marginBottom: 5 }}>
              {card.stat.num}
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', lineHeight: 1.4 }}>
              {card.stat.label}
            </div>
          </div>

          {/* Col 2: Finding */}
          <div style={{ padding: '16px 20px', borderRight: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.50)', marginBottom: 7 }}>Finding</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.65 }}>{card.finding}</div>
          </div>

          {/* Col 3: Verbatim */}
          <div style={{ padding: '16px 0 16px 20px' }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.50)', marginBottom: 7 }}>Customer Verbatim</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', fontStyle: 'italic', lineHeight: 1.65, borderLeft: '2px solid rgba(77,144,254,.3)', paddingLeft: 12, marginBottom: 8 }}>
              &ldquo;{card.quote.text.replace(/^\"|\"$/g, '')}&rdquo;
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.52)' }}>{card.quote.cite}</div>
            <div className="pill-row" style={{ marginTop: 10 }}>
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
