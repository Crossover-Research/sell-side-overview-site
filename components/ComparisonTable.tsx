'use client';
import { useEffect, useState } from 'react';
import type { CompetitorRow } from '../lib/types';

interface Props { rows: CompetitorRow[]; }

const DOMAINS: Record<string, string> = {
  'Red Canary':        'redcanary.com',
  'CrowdStrike':       'crowdstrike.com',
  'ReliaQuest':        'reliaquest.com',
  'eSentire':          'esentire.com',
  'SentinelOne':       'sentinelone.com',
  'Microsoft Defender':'microsoft.com',
  'Secureworks':       'secureworks.com',
  'deepwatch':         'deepwatch.com',
  'Palo Alto':         'paloaltonetworks.com',
};

function Bar({ value, hi, lo }: { value: number; hi: boolean; lo: boolean }) {
  const pct = `${(value / 10) * 100}%`;
  const color = hi ? 'rgba(45,212,160,.7)' : lo ? 'rgba(255,77,94,.5)' : 'rgba(130,170,255,.5)';
  return (
    <div className="vbar-row">
      <div className="vbar"><div className="vbar-fill" style={{ width: pct, background: color }} /></div>
      <span className="vnum" style={{ color: hi ? 'var(--green)' : lo ? 'var(--red)' : 'var(--t1)' }}>
        {value.toFixed(1)}
      </span>
      {hi && <span className="vtag hi">↑</span>}
      {lo && <span className="vtag lo">↓</span>}
    </div>
  );
}

export function ComparisonTable({ rows }: Props) {
  const [logos, setLogos] = useState<Record<string, string>>({});

  useEffect(() => {
    const loaded: Record<string, string> = {};
    rows.forEach(row => {
      const domain = DOMAINS[row.vendor];
      if (!domain) return;
      const img = new Image();
      img.onload = () => setLogos(prev => ({ ...prev, [row.vendor]: `https://logo.clearbit.com/${domain}` }));
      img.src = `https://logo.clearbit.com/${domain}`;
    });
  }, [rows]);

  const maxes = {
    sp: Math.max(...rows.map(r => r.securityPosture)),
    rd: Math.max(...rows.map(r => r.replicationDifficulty)),
    rec: Math.max(...rows.map(r => r.recommend)),
    int: Math.max(...rows.map(r => r.integration)),
    con: Math.max(...rows.map(r => r.consolidationPref)),
  };

  return (
    <div className="comparison-table-wrap">
    <table className="comparison-table">
      <thead>
        <tr>
          <th style={{ width: 170 }}>Vendor</th>
          <th>Sec. Posture</th><th>Replication</th>
          <th>Recommend</th><th>Integration</th><th>Consol. Pref.</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const initials = row.vendor.split(' ').map(w => w[0]).join('').slice(0, 2);
          return (
            <tr key={i} className={row.highlight ? 'highlight' : ''}>
              <td>
                <div className="vendor-name-cell">
                  <div className="vendor-logo-wrap">
                    {logos[row.vendor]
                      ? <img src={logos[row.vendor]} className="vendor-logo-img" alt={row.vendor} />
                      : <div className="vendor-logo-init">{initials}</div>
                    }
                  </div>
                  <div>
                    <div className="vname">{row.vendor}</div>
                    {row.highlight && <div className="vname-sub">Purpose-built MDR</div>}
                  </div>
                </div>
              </td>
              <td><Bar value={row.securityPosture}      hi={row.securityPosture===maxes.sp}       lo={row.securityPosture<6.5} /></td>
              <td><Bar value={row.replicationDifficulty} hi={row.replicationDifficulty===maxes.rd} lo={row.replicationDifficulty<6} /></td>
              <td><Bar value={row.recommend}             hi={row.recommend===maxes.rec}             lo={row.recommend<6.5} /></td>
              <td><Bar value={row.integration}           hi={row.integration===maxes.int}           lo={row.integration<6} /></td>
              <td><Bar value={row.consolidationPref}     hi={row.consolidationPref===maxes.con}     lo={row.consolidationPref<3.8} /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
