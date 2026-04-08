import React from 'react';
import type { TrackStatItem } from '../lib/types';

interface TrackRecordProps {
  stats: TrackStatItem[];
}

export const TrackRecord: React.FC<TrackRecordProps> = ({ stats }) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--white)',
        padding: '3rem 2rem',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                lineHeight: '1',
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                opacity: '0.9',
                fontWeight: '500',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};