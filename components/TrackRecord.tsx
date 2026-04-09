import type { TrackStatItem } from '../lib/types';

interface TrackRecordProps { stats: TrackStatItem[]; }

export function TrackRecord({ stats }: TrackRecordProps) {
  return (
    <div className="track-record">
      {stats.map((stat, i) => (
        <div key={i}>
          <div className="tr-stat-num">{stat.num}</div>
          <div className="tr-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
