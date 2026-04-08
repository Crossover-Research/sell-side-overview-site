import React from 'react';

interface InsightBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function InsightBox({ children, style }: InsightBoxProps) {
  return (
    <div style={{
      backgroundColor: 'var(--navy-surface)',
      border: '1px solid var(--navy-light)',
      borderRadius: 'var(--radius)',
      padding: '16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      ...style
    }}>
      <div style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'var(--navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: '2px'
      }}>
        <span style={{
          color: 'var(--white)',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: 'var(--font-body)'
        }}>
          !
        </span>
      </div>
      <div style={{
        fontSize: '13.5px',
        color: 'var(--navy)',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        lineHeight: 1.5,
        flex: 1
      }}>
        {children}
      </div>
    </div>
  );
}