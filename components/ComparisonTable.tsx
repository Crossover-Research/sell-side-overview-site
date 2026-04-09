
import type { CompetitorRow } from '../lib/types';

interface ComparisonTableProps {
  rows: CompetitorRow[];
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  const getScoreColor = (value: number, allValues: number[]): string => {
    const maxValue = Math.max(...allValues);
    if (value === maxValue) return 'var(--green)';
    if (value < 6.5) return 'var(--red)';
    return 'var(--navy)';
  };

  const allSecurityValues = rows.map(row => row.securityPosture);
  const allReplicationValues = rows.map(row => row.replicationDifficulty);
  const allRecommendValues = rows.map(row => row.recommend);
  const allIntegrationValues = rows.map(row => row.integration);
  const allConsolidationValues = rows.map(row => row.consolidationPref);

  const ScoreCell = ({ value, allValues }: { value: number; allValues: number[] }) => (
    <td style={{ padding: '16px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ 
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          minWidth: '24px'
        }}>
          {value.toFixed(1)}
        </span>
        <div style={{ 
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--slate-300)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div 
            style={{ 
              width: `${(value / 10) * 100}%`,
              height: '100%',
              backgroundColor: getScoreColor(value, allValues),
              borderRadius: '2px'
            }}
          />
        </div>
      </div>
    </td>
  );

  return (
    <div style={{ 
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      backgroundColor: 'var(--white)'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--navy)' }}>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Vendor
            </th>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Security Posture
            </th>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Replication Difficulty
            </th>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Likelihood to Recommend
            </th>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Integration
            </th>
            <th style={{ 
              padding: '16px 12px',
              textAlign: 'left',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)'
            }}>
              Consolidation Pref
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={row.vendor} 
              className={row.highlight ? 'highlight-row' : ''}
              style={{ 
                backgroundColor: row.highlight ? 'var(--navy-surface)' : 'var(--white)',
                borderTop: index > 0 ? '1px solid var(--border)' : 'none'
              }}
            >
              <td style={{ 
                padding: '16px 12px',
                fontSize: '14px',
                fontWeight: row.highlight ? '600' : '500',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)'
              }}>
                {row.vendor}
              </td>
              <ScoreCell value={row.securityPosture} allValues={allSecurityValues} />
              <ScoreCell value={row.replicationDifficulty} allValues={allReplicationValues} />
              <ScoreCell value={row.recommend} allValues={allRecommendValues} />
              <ScoreCell value={row.integration} allValues={allIntegrationValues} />
              <ScoreCell value={row.consolidationPref} allValues={allConsolidationValues} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}