interface SectionHeaderProps {
  eyebrow?: string
  title: string
  lead?: string
  eyebrowStyle?: React.CSSProperties
}

export function SectionHeader({ eyebrow, title, lead, eyebrowStyle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow && <div className="section-eyebrow" style={eyebrowStyle}>{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
