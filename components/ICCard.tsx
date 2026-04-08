import React from 'react';
import type { ICCard as ICCardType } from '../lib/types';

interface ICCardProps {
  card: ICCardType;
  theme?: 'navy' | 'green';
}

export const ICCard: React.FC<ICCardProps> = ({ card, theme = 'navy' }) => {
  const headerBg = theme === 'green' ? '#0b2416' : 'var(--navy)';
  const quoteBorder = theme === 'green' ? '#0f7b55' : 'var(--navy)';

  return (
    <div className="ic-card fadeUp" style={{
      backgroundColor: 'var(--white)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: headerBg,
        color: 'var(--white)',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>
          {card.num}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.25rem'
          }}>
            {card.question}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem'
          }}>
            <div style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'var(--green)',
              borderRadius: '50%'
            }}></div>
            {card.verdict}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Stat */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)'
          }}>
            {card.stat.num}
          </div>
          <div style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontWeight: '500'
          }}>
            {card.stat.label}
          </div>
        </div>

        {/* Finding */}
        <p style={{
          color: 'var(--text-primary)',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          {card.finding}
        </p>

        {/* Quote */}
        <div style={{
          backgroundColor: 'var(--navy-surface)',
          borderLeft: `3px solid ${quoteBorder}`,
          padding: '1rem 1.5rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            lineHeight: '1.5'
          }}>
            "{card.quote.text}"
          </div>
          <div style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontWeight: '500'
          }}>
            {card.quote.cite}
          </div>
        </div>

        {/* Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {card.pills.map((pill, index) => (
            <span
              key={index}
              className={`comp-pill${pill.win ? ' win' : ''}`}
              style={{
                backgroundColor: pill.win ? 'var(--green-light)' : 'var(--slate-100)',
                color: pill.win ? 'var(--green)' : 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius)',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};