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
          display:'block', textDecoration:'none',
          background:'rgba(6,12,26,.98)',
          border:'1px solid rgba(255,255,255,.1)',
          overflow:'hidden',
          position:'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, rgba(45,212,160,.8) 0%, rgba(77,144,254,.6) 50%, transparent 100%)' }} />

        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:32, alignItems:'center', padding:'28px 32px' }}>
          <div>
            {/* Tag row */}
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14, flexWrap:'wrap' }}>
              <div style={{
                fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
                color:'rgba(45,212,160,.92)', background:'rgba(45,212,160,.1)',
                border:'1px solid rgba(45,212,160,.25)', padding:'3px 10px',
              }}>
                Crossover Research Data
              </div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.38)', letterSpacing:'.06em' }}>
                &middot;
              </div>
              <div style={{ fontSize:10, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.45)' }}>
                Published by Battery Ventures
              </div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.28)', letterSpacing:'.04em', marginLeft:'auto' }}>
                April 2026
              </div>
            </div>

            {/* Title */}
            <div style={{ fontSize:18, fontWeight:700, color:'rgba(255,255,255,.95)', lineHeight:1.3, marginBottom:10 }}>
              First coding, next finance? AI adoption comes to the CFO suite.
            </div>

            {/* Descriptor */}
            <div style={{ fontSize:13, color:'rgba(255,255,255,.58)', lineHeight:1.65 }}>
              Battery Ventures published this report using primary customer interview data collected by Crossover Research. The methodology, interview design, and raw findings are ours. Battery provided the distribution.
            </div>
          </div>

          {/* Right: CTA column */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:12, flexShrink:0 }}>
            <div style={{
              fontSize:11, fontWeight:700, letterSpacing:'.04em',
              color:'rgba(45,212,160,.92)', border:'1px solid rgba(45,212,160,.3)',
              padding:'9px 18px', whiteSpace:'nowrap',
              background:'rgba(45,212,160,.06)',
            }}>
              Read Report ↗
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
