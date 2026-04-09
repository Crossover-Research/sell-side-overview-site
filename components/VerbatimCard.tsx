import type { CSSProperties } from 'react';
import type { VerbatimCard as VerbatimCardType } from '../lib/types';

interface Props { card: VerbatimCardType; themeStyle?: CSSProperties; }

export function VerbatimCard({ card, themeStyle }: Props) {
  return (
    <div className="verbatim-cell">
      <div className="verbatim-theme">{card.theme}</div>
      <div className="verbatim-text">{card.text}</div>
      <div className="verbatim-attr">{card.attr}</div>
    </div>
  );
}
