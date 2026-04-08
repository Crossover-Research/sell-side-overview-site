interface TopbarProps {
  title: string;
  subtitle: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img
          src="https://www.crossoverresearch.com/logos/CrossoverResearchLogo.svg"
          alt="Crossover Research"
          className="topbar-logo-img"
        />
        <div className="topbar-divider" />
        <div className="topbar-title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="topbar-right">
        <div className="badge-confidential">Confidential</div>
      </div>
    </div>
  );
}
