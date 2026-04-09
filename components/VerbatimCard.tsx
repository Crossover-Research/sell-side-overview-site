import type { VerbatimCard as VerbatimCardType } from '../lib/types';
import type { CSSProperties } from 'react';

interface Props {
  card: VerbatimCardType;
  themeStyle?: CSSProperties;
}

export function VerbatimCard({ card, themeStyle }: Props) {
  return (
    <div className="verbatim-card">
      <span className="verbatim-theme" style={themeStyle || card.themeStyle}>{card.theme}</span>
      <div className="verbatim-text">{card.text}</div>
      <div className="verbatim-attr">{card.attr}</div>
    </div>
  );
}
