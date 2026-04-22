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

      {/* Battery Ventures research */}
      <a
        href="https://www.battery.com/blog/first-coding-next-finance-ai-adoption-comes-to-the-cfo-suite/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display:'flex',flexDirection:'column',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.1)',padding:'28px 32px',textDecoration:'none',minHeight:120 }}
      >
        <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:24,marginBottom:14 }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(130,175,255,.6)' }}>
            Battery Ventures &middot; External Research
          </div>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(45,212,160,.8)',background:'rgba(45,212,160,.08)',border:'1px solid rgba(45,212,160,.2)',padding:'2px 8px',whiteSpace:'nowrap',flexShrink:0 }}>
            April 2026
          </div>
        </div>
        <div style={{ fontSize:16,fontWeight:700,color:'rgba(255,255,255,.92)',lineHeight:1.35,marginBottom:10,maxWidth:680 }}>
          First coding, next finance? AI adoption comes to the CFO suite.
        </div>
        <div style={{ fontSize:13,color:'rgba(255,255,255,.58)',lineHeight:1.6,marginBottom:16,maxWidth:640 }}>
          Battery Ventures research on AI adoption across knowledge-work functions, with finance emerging as the next major wave. Relevant context for any mandate involving AI-enabled software in the office of the CFO.
        </div>
        <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)',marginTop:'auto' }}>Read Research ↗</div>
      </a>
    </section>
  );
}
