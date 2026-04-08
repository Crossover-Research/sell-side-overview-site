import React from 'react';
import { MetricCell } from '../lib/types';

interface MetricStripProps {
  metrics: MetricCell[];
  style?: React.CSSProperties;
  variant?: 'dark' | 'green';
}

export function MetricStrip({ metrics, variant = 'dark' }: MetricStripProps) {
  const stripStyles: React.CSSProperties = {
    backgroundColor: variant === 'green' ? '#0b2416' : 'var(--navy)',
    color: 'var(--white)',
    padding: '2rem 1rem',
  };

  const containerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cellStyles: React.CSSProperties = {
    textAlign: 'center',
  };

  const labelStyles: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    opacity: 0.9,
  };

  const valueStyles: React.CSSProperties = {
    fontSize: '2rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    lineHeight: '1',
    marginBottom: '0.25rem',
  };

  const subStyles: React.CSSProperties = {
    fontSize: '0.75rem',
    opacity: 0.8,
    marginBottom: '0.5rem',
  };

  const getDeltaStyles = (deltaStyle?: string): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-block',
      fontSize: '0.75rem',
      fontWeight: '600',
      padding: '0.25rem 0.5rem',
      borderRadius: 'var(--radius-sm)',
    };

    switch (deltaStyle) {
      case 'positive':
        return {
          ...baseStyles,
          backgroundColor: 'var(--green)',
          color: 'var(--white)',
        };
      case 'negative':
        return {
          ...baseStyles,
          backgroundColor: 'var(--red)',
          color: 'var(--white)',
        };
      case 'neutral':
      default:
        return {
          ...baseStyles,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'var(--white)',
        };
    }
  };

  return (
    <div style={stripStyles}>
      <div style={containerStyles}>
        {metrics.map((metric, index) => (
          <div key={index} style={cellStyles}>
            <div style={labelStyles}>{metric.label}</div>
            <div style={valueStyles}>{metric.value}</div>
            {metric.sub && <div style={subStyles}>{metric.sub}</div>}
            {metric.delta && (
              <div style={getDeltaStyles(metric.deltaStyle)}>
                {metric.delta}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}