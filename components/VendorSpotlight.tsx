import type { VendorSpotlightData } from '../lib/types';

interface VendorSpotlightProps {
  data: VendorSpotlightData;
}

export function VendorSpotlight({ data }: VendorSpotlightProps) {
  return (
    <div className="vendor-spotlight">
      <div>
        <div className="vs-name">{data.name}</div>
        <div className="vs-descriptor">{data.descriptor}</div>
      </div>
      <div className="vs-scores">
        {data.scores.map((score, i) => (
          <div key={i} className="vs-score-item">
            <div className="vs-score-val">{score.val}</div>
            <div className="vs-score-lbl">{score.lbl}</div>
          </div>
        ))}
      </div>
      <div className="vs-rank-badge">
        <div className="vs-rank-num">{data.rankNum}</div>
        <div className="vs-rank-lbl">{data.rankLbl}</div>
      </div>
    </div>
  );
}
