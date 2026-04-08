import React from 'react';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--navy)',
      padding: '24px 0',
      textAlign: 'center',
      fontSize: '11px',
      fontFamily: 'var(--font-body)',
      color: 'rgba(255, 255, 255, 0.5)'
    }}>
      <div>
        2026 Crossover Research Confidential
      </div>
      <div style={{ 
        marginTop: '8px',
        display: 'flex',
        justifyContent: 'center',
        gap: '24px'
      }}>
        <a 
          href="#" 
          style={{ 
            color: 'rgba(255, 255, 255, 0.5)',
            textDecoration: 'none'
          }}
        >
          Catalyst Portal
        </a>
        <a 
          href="mailto:ian@crossoverresearch.com"
          style={{ 
            color: 'rgba(255, 255, 255, 0.5)',
            textDecoration: 'none'
          }}
        >
          Contact
        </a>
      </div>
    </footer>
  );
}