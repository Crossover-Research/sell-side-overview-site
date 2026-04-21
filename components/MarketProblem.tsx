'use client';

const ROWS = [
  {
    audience: 'Bankers',
    audienceColor: 'rgba(77,144,254,.9)',
    audienceBg: 'rgba(77,144,254,.12)',
    what: 'Walk in with desk research and management interviews. Coach operators to minimize weaknesses. Hope buyers don\'t ask the right questions.',
    cost: '',
    costBold: 'The deal stalls or reprices. The bank takes the blame.',
  },
  {
    audience: 'Operators',
    audienceColor: 'rgba(45,212,160,.9)',
    audienceBg: 'rgba(45,212,160,.12)',
    what: 'Told to glorify the story. No way to find weaknesses before buyers do. Enter diligence hoping nobody looks too hard.',
    cost: '',
    costBold: 'The operator had no chance to respond. No one told them to prepare.',
  },
  {
    audience: 'Investors',
    audienceColor: 'rgba(168,130,255,.9)',
    audienceBg: 'rgba(168,130,255,.12)',
    what: 'Assume everything is curated. Restart diligence from scratch. Find the gaps late. Use them to reprice.',
    cost: '',
    costBold: 'Retrades at IC. Value destroyed at the moment it should be captured.',
  },
];

export function MarketProblem() {
  return (
    <section style={{ padding:'80px 0', background:'rgba(255,255,255,.025)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ marginBottom:40 }}>
          <h2 style={{
            fontSize:'clamp(22px,3vw,32px)', fontWeight:700,
            color:'rgba(255,255,255,.92)', letterSpacing:'-.025em', lineHeight:1.2, marginBottom:12,
          }}>
            Every party in a private markets deal<br />
            works from a different version of the truth.
          </h2>
          <p style={{ fontSize:14, color:'rgba(255,255,255,.60)', lineHeight:1.75, maxWidth:680 }}>
            Bankers coach operators to glorify. Operators hope no one looks too hard.
            Investors assume everything is curated and restart diligence anyway.
          </p>
        </div>

        {/* Table */}
        <div style={{ border:'1px solid rgba(255,255,255,.1)', overflow:'hidden', marginBottom:24 }}>
          {/* Header row */}
          <div style={{ display:'grid', gridTemplateColumns:'130px 1fr 1fr', background:'rgba(255,255,255,.05)', borderBottom:'1px solid rgba(255,255,255,.1)' }}>
            <div style={{ padding:'13px 20px' }} />
            <div style={{ padding:'13px 20px', fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.85)', borderLeft:'1px solid rgba(255,255,255,.08)' }}>What They Do</div>
            <div style={{ padding:'13px 20px', fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.85)', borderLeft:'1px solid rgba(255,255,255,.08)' }}>What It Costs</div>
          </div>

          {ROWS.map((row, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'130px 1fr 1fr', borderBottom: i < ROWS.length-1 ? '1px solid rgba(255,255,255,.07)' : 'none', background:'rgba(6,14,28,.95)' }}>
              <div style={{ padding:'26px 20px', display:'flex', alignItems:'flex-start' }}>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:row.audienceColor, background:row.audienceBg, padding:'3px 10px', display:'inline-block' }}>
                  {row.audience}
                </span>
              </div>
              <div style={{ padding:'26px 22px', borderLeft:'1px solid rgba(255,255,255,.06)', fontSize:13, color:'rgba(255,255,255,.75)', lineHeight:1.8 }}>
                {row.what}
              </div>
              <div style={{ padding:'26px 22px', borderLeft:'1px solid rgba(255,255,255,.06)' }}>
                {row.cost && <div style={{ fontSize:13, color:'rgba(255,255,255,.75)', lineHeight:1.8, marginBottom:10 }}>{row.cost}</div>}
                <div style={{ fontSize:13, fontWeight:600, color:'rgba(245,158,11,.9)', lineHeight:1.6 }}>{row.costBold}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Positioning callout */}
        <div style={{
          display:'flex', alignItems:'center', gap:20,
          background:'rgba(77,144,254,.05)', border:'1px solid rgba(77,144,254,.15)',
          padding:'18px 24px',
        }}>
          <div style={{
            width:3, height:40, background:'rgba(77,144,254,.5)',
            flexShrink:0, borderRadius:2,
          }} />
          <p style={{ fontSize:13.5, color:'rgba(200,220,255,.85)', lineHeight:1.7, margin:0, fontStyle:'italic' }}>
            Crossover Research is the only record in the room that none of them produced, and the only one all of them can rely on.
          </p>
        </div>

      </div>
    </section>
  );
}
