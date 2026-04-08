import React from 'react';

interface ThesisBannerProps {
  title: string;
  body: string;
  scoreNum: string;
  scoreLabel: string;
  scoreContext: string;
}

export function ThesisBanner({ title, body, scoreNum, scoreLabel, scoreContext }: ThesisBannerProps) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 50%, var(--navy-light) 100%)',
      padding: '40px',
      borderRadius: 'var(--radius-lg)',
      marginBottom: '40px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '40px',
      alignItems: 'center'
    }}>
      <div>
        <h2 style={{
          color: 'var(--white)',
          fontFamily: 'var(--font-body)',
          fontSize: '32px',
          fontWeight: '600',
          marginBottom: '16px',
          lineHeight: '1.2'
        }}>
          {title}
        </h2>
        <p style={{
          color: 'var(--white)',
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          lineHeight: '1.6',
          opacity: '0.9',
          margin: '0'
        }}>
          {body}
        </p>
      </div>
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--radius)',
        padding: '24px',
        textAlign: 'center',
        minWidth: '160px'
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '36px',
          fontWeight: '700',
          color: 'var(--white)',
          marginBottom: '4px',
          lineHeight: '1'
        }}>
          {scoreNum}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: '500',
          color: 'var(--white)',
          marginBottom: '8px',
          opacity: '0.9'
        }}>
          {scoreLabel}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--red)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {scoreContext}
        </div>
      </div>
    </div>
  );
}