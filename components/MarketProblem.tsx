'use client';

const ROWS = [
  {
    audience: 'Bankers',
    audienceColor: 'rgba(77,144,254,.9)',
    audienceBg: 'rgba(77,144,254,.12)',
    what: 'Walk in with desk research and management interviews. Coach operators to minimize weaknesses. Hope buyers don\'t ask the right questions.',
    cost: 'Lose mandates to incumbents. When buyers surface gaps the bank never saw, there\'s no answer ready.',
    costBold: 'The deal stalls or reprices. The bank takes the blame.',
  },
  {
    audience: 'Operators',
    audienceColor: 'rgba(45,212,160,.9)',
    audienceBg: 'rgba(45,212,160,.12)',
    what: 'Told to glorify the story. No way to find weaknesses before buyers do. Enter diligence hoping nobody looks too hard.',
    cost: 'Blindsided in management presentations. Weaknesses become buyer leverage.',
    costBold: 'The operator had no chance to respond — and no one told them to prepare.',
  },
  {
    audience: 'Investors',
    audienceColor: 'rgba(168,130,255,.9)',
    audienceBg: 'rgba(168,130,255,.12)',
    what: 'Assume everything is curated. Restart diligence from scratch. Find the gaps late — and use them to reprice.',
    cost: 'Months rebuilding diligence the sell-side already ran. Conviction built on curated data.',
    costBold: 'Retrades at IC. Value destroyed at the moment it should be captured.',
  },
];

export function MarketProblem() {
  return (
    <section style={{ padding:'64px 0', background:'rgba(255,255,255,.015)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:'clamp(20px,3vw,30px)', fontWeight:700, color:'rgba(255,255,255,.92)', letterSpacing:'-.025em', lineHeight:1.2, marginBottom:10 }}>
            Private markets are structurally broken.<br />
            <span style={{ color:'rgba(255,255,255,.45)', fontWeight:400 }}>Everyone knows it. Nobody wants to admit it.</span>
          </h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,.35)', lineHeight:1.7 }}>
            Bankers coach operators to glorify. Investors assume everything is curated.<br />
            Every party enters the room working from a different version of the truth.
          </p>
        </div>

        {/* Table */}
        <div style={{ border:'1px solid rgba(255,255,255,.1)', overflow:'hidden' }}>
          {/* Header row */}
          <div style={{ display:'grid', gridTemplateColumns:'120px 1fr 1fr', background:'rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
            <div style={{ padding:'10px 20px' }} />
            <div style={{ padding:'10px 20px', fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', borderLeft:'1px solid rgba(255,255,255,.06)' }}>What They Do</div>
            <div style={{ padding:'10px 20px', fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', borderLeft:'1px solid rgba(255,255,255,.06)' }}>What It Costs</div>
          </div>

          {ROWS.map((row, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'120px 1fr 1fr', borderBottom: i < ROWS.length-1 ? '1px solid rgba(255,255,255,.06)' : 'none', background:'rgba(6,14,28,.95)' }}>
              <div style={{ padding:'22px 20px', display:'flex', alignItems:'flex-start' }}>
                <span style={{ fontSize:9, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:row.audienceColor, background:row.audienceBg, padding:'3px 10px', display:'inline-block' }}>
                  {row.audience}
                </span>
              </div>
              <div style={{ padding:'22px 20px', borderLeft:'1px solid rgba(255,255,255,.06)', fontSize:12.5, color:'rgba(255,255,255,.55)', lineHeight:1.7 }}>
                {row.what}
              </div>
              <div style={{ padding:'22px 20px', borderLeft:'1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize:12.5, color:'rgba(255,255,255,.45)', lineHeight:1.7, marginBottom:8 }}>{row.cost}</div>
                <div style={{ fontSize:12.5, fontWeight:600, color:'rgba(245,158,11,.85)', lineHeight:1.6 }}>{row.costBold}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div style={{ textAlign:'center', marginTop:20, fontSize:13, color:'rgba(255,255,255,.3)', fontStyle:'italic' }}>
          Every party works from a different version of the truth. Crossover is the verbatim record they all share.
        </div>

      </div>
    </section>
  );
}
