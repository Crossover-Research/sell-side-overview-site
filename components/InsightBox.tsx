import type { ReactNode, CSSProperties } from 'react';

interface InsightBoxProps { children: ReactNode; style?: CSSProperties; }

export function InsightBox({ children, style }: InsightBoxProps) {
  return (
    <div className="insight" style={style}>
      <div className="insight-icon" />
      <div className="insight-text">{children}</div>
    </div>
  );
}
