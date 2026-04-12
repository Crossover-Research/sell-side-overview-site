export default function SamplesPage() {
  return (
    <section style={{ padding: '48px var(--content-pad)', maxWidth: 'var(--content-max)', margin: '0 auto' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(130,175,255,.6)', marginBottom: 16 }}>Research Samples</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 8, lineHeight: 1.2 }}>Live Catalyst Studies</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
        Two live examples of the intelligence your deal team receives. Verbatim evidence, competitive benchmarking, IC-ready data — accessible now.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <a href="/redcanary" style={{ display:'block',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.1)',padding:'28px 32px',textDecoration:'none' }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:10 }}>SENTINEL &middot; Cybersecurity MDR</div>
          <div style={{ fontSize:20,fontWeight:700,color:'rgba(255,255,255,.92)',marginBottom:10 }}>Red Canary</div>
          <div style={{ fontSize:12,color:'rgba(255,255,255,.45)',lineHeight:1.6,marginBottom:20 }}>9-vendor benchmark &middot; 75+ verified respondents &middot; 9.0 NPS &middot; 8.8 replication difficulty</div>
          <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)' }}>View Study &rarr;</div>
        </a>
        <a href="/bluecat" style={{ display:'block',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.1)',padding:'28px 32px',textDecoration:'none' }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:10 }}>FORTRESS &middot; Network Infrastructure</div>
          <div style={{ fontSize:20,fontWeight:700,color:'rgba(255,255,255,.92)',marginBottom:10 }}>BlueCat Networks</div>
          <div style={{ fontSize:12,color:'rgba(255,255,255,.45)',lineHeight:1.6,marginBottom:20 }}>55 verified respondents &middot; 9.0 mission criticality &middot; 1.9 switching intent &middot; 98.5% NRR</div>
          <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)' }}>View Study &rarr;</div>
        </a>
      </div>
    </section>
  );
}
