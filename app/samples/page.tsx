export default function SamplesPage() {
  return (
    <section style={{ padding: '64px var(--content-pad)', maxWidth: 'var(--content-max)', margin: '0 auto' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(130,175,255,.6)', marginBottom: 16 }}>Research Samples</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 8, lineHeight: 1.2 }}>Live Catalyst Studies</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,.72)', lineHeight: 1.65, marginBottom: 40 }}>
        Two live examples of the intelligence your deal team receives. Verbatim evidence, competitive benchmarking, IC-ready data, accessible now.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <a href="/redcanary" style={{ display:'flex',flexDirection:'column',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.1)',padding:'28px 32px',textDecoration:'none',minHeight:180 }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:14 }}>SENTINEL &middot; Cybersecurity MDR</div>
          <div style={{ height:32,display:'flex',alignItems:'center',marginBottom:24 }}>
            <img src="/red-canary-logo.svg" alt="Red Canary" style={{ height:28,width:'auto',maxWidth:200 }} />
          </div>
          <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)',marginTop:'auto' }}>View Study &rarr;</div>
        </a>
        <a href="/bluecat" style={{ display:'flex',flexDirection:'column',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.1)',padding:'28px 32px',textDecoration:'none',minHeight:180 }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:14 }}>FORTRESS &middot; Network Infrastructure</div>
          <div style={{ height:32,display:'flex',alignItems:'center',marginBottom:24 }}>
            <img src="/bluecat-logo.svg" alt="BlueCat Networks" style={{ height:22,width:'auto',maxWidth:200,filter:'brightness(0) invert(1)',opacity:.85 }} />
          </div>
          <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)',marginTop:'auto' }}>View Study &rarr;</div>
        </a>
      </div>

      {/* Battery Ventures — Crossover provided the underlying research */}
      <a
        href="https://www.battery.com/blog/first-coding-next-finance-ai-adoption-comes-to-the-cfo-suite/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display:'flex', flexDirection:'column',
          background:'rgba(45,212,160,.03)',
          border:'1px solid rgba(45,212,160,.18)',
          borderLeft:'3px solid rgba(45,212,160,.55)',
          padding:'28px 32px', textDecoration:'none',
        }}
      >
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, marginBottom:16, flexWrap:'wrap' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.88)', background:'rgba(45,212,160,.1)', border:'1px solid rgba(45,212,160,.25)', padding:'3px 10px' }}>
              Crossover Data
            </div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.45)' }}>
              Published by Battery Ventures
            </div>
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.40)', letterSpacing:'.04em' }}>April 2026</div>
        </div>

        <div style={{ fontSize:17, fontWeight:700, color:'rgba(255,255,255,.92)', lineHeight:1.35, marginBottom:10, maxWidth:680 }}>
          First coding, next finance? AI adoption comes to the CFO suite.
        </div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,.62)', lineHeight:1.68, marginBottom:18, maxWidth:640 }}>
          Battery Ventures published this report using customer interview data collected by Crossover Research. The findings — on AI adoption rates, workflow integration, and displacement risk in finance — draw directly from our primary research methodology.
        </div>
        <div style={{ fontSize:12, fontWeight:600, color:'rgba(45,212,160,.85)' }}>Read the Battery Report ↗</div>
      </a>
    </section>
  );
}
