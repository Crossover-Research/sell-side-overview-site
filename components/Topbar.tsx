import React from 'react';

interface TopbarProps {
  title: string;
  subtitle: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div style={styles.topbar}>
      <div style={styles.topbarLeft}>
        <div>
          <img 
            src="/logos/CrossoverResearchLogo.svg" 
            alt="Crossover Research" 
            style={styles.topbarLogoImg}
          />
        </div>
        <div style={styles.topbarDivider}></div>
        <div style={styles.topbarTitle}>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div style={styles.topbarRight}>
        <div style={styles.badgeConfidential}>Confidential</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  topbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
    padding: '0 32px',
    backgroundColor: 'var(--navy)',
    color: 'var(--white)',
  },
  topbarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  topbarLogoImg: {
    height: '32px',
    width: 'auto',
  },
  topbarDivider: {
    width: '1px',
    height: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  topbarTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--white)',
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'var(--font-body)',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  topbarRight: {
    display: 'flex',
    alignItems: 'center',
  },
  badgeConfidential: {
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--red)',
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--radius)',
    textTransform: 'uppercase' as const,
  },
};