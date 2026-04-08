import type { VerbatimCard as VerbatimCardType } from '../lib/types';

interface Props {
  card: VerbatimCardType;
  themeStyle?: React.CSSProperties;
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
