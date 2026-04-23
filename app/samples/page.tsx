export default function SamplesPage() {
  return (
    <section style={{ padding: '64px var(--content-pad)', maxWidth: 'var(--content-max)', margin: '0 auto' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(130,175,255,.6)', marginBottom: 16 }}>Research Samples</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 8, lineHeight: 1.2 }}>Live Catalyst Studies</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,.72)', lineHeight: 1.65, marginBottom: 40 }}>
        Two live examples of the intelligence your deal team receives. Verbatim evidence, competitive benchmarking, IC-ready data, accessible now.
      </p>

      {/* All three cards in the same grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>

        <a href="/redcanary" style={{ display:'flex', flexDirection:'column', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.1)', padding:'28px 32px', textDecoration:'none', minHeight:220 }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(130,175,255,.6)', marginBottom:14 }}>SENTINEL &middot; Cybersecurity MDR</div>
          <div style={{ flex:1, display:'flex', alignItems:'center' }}>
            <img src="/red-canary-logo.svg" alt="Red Canary" style={{ height:28, width:'auto', maxWidth:200 }} />
          </div>
          <div style={{ fontSize:12, fontWeight:600, color:'rgba(130,175,255,.8)', marginTop:16 }}>View Study &rarr;</div>
        </a>

        <a href="/bluecat" style={{ display:'flex', flexDirection:'column', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.1)', padding:'28px 32px', textDecoration:'none', minHeight:220 }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(130,175,255,.6)', marginBottom:14 }}>FORTRESS &middot; Network Infrastructure</div>
          <div style={{ flex:1, display:'flex', alignItems:'center' }}>
            <img src="/bluecat-logo.svg" alt="BlueCat Networks" style={{ height:22, width:'auto', maxWidth:200, filter:'brightness(0) invert(1)', opacity:.85 }} />
          </div>
          <div style={{ fontSize:12, fontWeight:600, color:'rgba(130,175,255,.8)', marginTop:16 }}>View Study &rarr;</div>
        </a>

        {/* Battery Ventures card — same structure, Crossover as data source */}
        <a
          href="https://www.battery.com/blog/first-coding-next-finance-ai-adoption-comes-to-the-cfo-suite/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:'flex', flexDirection:'column', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.1)', padding:'28px 32px', textDecoration:'none', minHeight:220, position:'relative' }}
        >
          {/* Subtle teal top accent to signal "different type" without breaking grid */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, rgba(45,212,160,.5) 0%, transparent 60%)' }} />

          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.7)', marginBottom:14 }}>
            Crossover Research Data &middot; Battery Ventures
          </div>

          <div style={{ flex:1 }}>
            <div style={{ fontSize:14, fontWeight:700, color:'rgba(255,255,255,.88)', lineHeight:1.4, marginBottom:8 }}>
              First coding, next finance?
            </div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,.52)', lineHeight:1.6 }}>
              AI adoption comes to the CFO suite. Our data. Their publication.
            </div>
          </div>

          <div style={{ fontSize:12, fontWeight:600, color:'rgba(45,212,160,.8)', marginTop:16 }}>Read Report ↗</div>
        </a>

      </div>
    </section>
  );
}
