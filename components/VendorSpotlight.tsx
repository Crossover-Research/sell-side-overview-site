import React from 'react';
import { VendorSpotlightData } from '../lib/types';

interface VendorSpotlightProps {
  data: VendorSpotlightData;
}

export function VendorSpotlight({ data }: VendorSpotlightProps) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--navy-surface) 0%, var(--white) 50%, var(--navy-surface) 100%)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '32px',
      alignItems: 'center',
      border: '1px solid var(--border)',
      minHeight: '120px'
    }}>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          margin: '0 0 8px 0'
        }}>
          {data.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: '0'
        }}>
          {data.descriptor}
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        {data.scores.map((score, index) => (
          <div key={index} style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '4px'
            }}>
              {score.val}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {score.lbl}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--white)',
        borderRadius: 'var(--radius)',
        padding: '16px 24px',
        textAlign: 'center',
        minWidth: '120px'
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '1',
          marginBottom: '4px'
        }}>
          {data.rankNum}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          opacity: '0.9'
        }}>
          {data.rankLbl}
        </div>
      </div>
    </div>
  );
}