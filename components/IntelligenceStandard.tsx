'use client';

const PARTIES = [
  {
    label: 'Bankers',
    color: 'rgba(130,100,255,.85)',
    bg: 'rgba(130,100,255,.08)',
    border: 'rgba(130,100,255,.2)',
    output: 'Mandate Pitch Deck',
    hook: 'Walk in with customer proof no competing bank commissioned. The research exists because you engaged Crossover — and it cannot be replicated on any timeline.',
  },
  {
    label: 'Operators',
    color: 'rgba(45,212,160,.85)',
    bg: 'rgba(45,212,160,.08)',
    border: 'rgba(45,212,160,.2)',
    output: 'Preemptive CIM + GTM Playbook',
    hook: 'Surface every weakness before buyers find it. Enter the process with the rebuttal already built. The GTM Playbook tells you exactly which accounts to call the day the deal closes.',
  },
  {
    label: 'Investors',
    color: 'rgba(245,158,11,.85)',
    bg: 'rgba(245,158,11,.08)',
    border: 'rgba(245,158,11,.2)',
    output: 'Customer Diligence Report',
    hook: 'Build conviction 6–12 months before the teaser drops. Evidence the sell-side cannot curate. Arrive at IC with answers, not assumptions.',
  },
];

export function IntelligenceStandard() {
  return (
    <section style={{ padding:'64px 0', background:'rgba(255,255,255,.015)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start', marginBottom:40 }}>
          <div>
            <div className="ib-section-eyebrow">The Standard</div>
            <h2 style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', lineHeight:1.2, marginTop:8, marginBottom:14 }}>
              One evidence base.<br />Every party in the room.
            </h2>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,.5)', lineHeight:1.75 }}>
              In media, advertisers and broadcasters both rely on Nielsen — not because it's required, but because neither side can accept audience data the other produced. Private markets had no equivalent.
            </p>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,.5)', lineHeight:1.75, marginTop:12 }}>
              Crossover is the independent measurement layer all three parties use — because no single party controls it, and the verbatim customer truth cannot be curated after the fact.
            </p>
          </div>
          <div style={{ background:'rgba(77,144,254,.05)', border:'1px solid rgba(77,144,254,.15)', padding:'20px 24px', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(77,144,254,.4),transparent)' }} />
            <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(77,144,254,.7)', marginBottom:12 }}>The Nerdio Proof</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {[
                { party:'J.P. Morgan', role:'Sell-side', result:'Won the mandate' },
                { party:'General Atlantic', role:'Buy-side', result:'$500M at $1B+ valuation' },
                { party:'Nerdio', role:'Operator', result:'Closed Series C on their terms' },
              ].map((p,i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'130px 80px 1fr', gap:8, alignItems:'center', paddingBottom:8, borderBottom: i < 2 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                  <div style={{ fontSize:12.5, fontWeight:600, color:'rgba(255,255,255,.8)' }}>{p.party}</div>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,.3)', letterSpacing:'.04em' }}>{p.role}</div>
                  <div style={{ fontSize:12, color:'rgba(45,212,160,.8)', fontWeight:500 }}>{p.result}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:12, fontSize:11, color:'rgba(255,255,255,.25)', fontStyle:'italic' }}>
              One deal. One evidence base. Three parties. None of them chose the respondents.
            </div>
          </div>
        </div>

        {/* Three-party diagram */}
        <div style={{ position:'relative', marginBottom:1 }}>
          {/* Central node */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginBottom:0 }}>
            <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(77,144,254,.35)', padding:'18px 32px', textAlign:'center', position:'relative', overflow:'hidden', minWidth:320 }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(77,144,254,.5),transparent)' }} />
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(77,144,254,.7)', marginBottom:6 }}>Crossover Research</div>
              <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.92)', marginBottom:4 }}>Independent Evidence Base</div>
              <div style={{ fontSize:11.5, color:'rgba(255,255,255,.4)' }}>Neither side chose the respondents · Neither side can challenge the data</div>
            </div>

            {/* Connector lines */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 2px 1fr', width:'100%', maxWidth:900 }}>
              <div style={{ borderTop:'1px solid rgba(255,255,255,.08)', borderRight:'1px solid rgba(255,255,255,.08)', height:32, marginTop:0 }} />
              <div style={{ borderRight:'1px solid rgba(255,255,255,.08)', height:32 }} />
              <div style={{ borderTop:'1px solid rgba(255,255,255,.08)', height:32 }} />
            </div>
          </div>

          {/* Three party cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'rgba(255,255,255,.06)' }}>
            {PARTIES.map((p, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.95)', padding:'22px 24px', borderTop:`2px solid ${p.color}` }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
                  <span style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:p.color, background:p.bg, border:`1px solid ${p.border}`, padding:'2px 8px' }}>
                    {p.label}
                  </span>
                  <span style={{ fontSize:9, fontWeight:600, color:'rgba(255,255,255,.3)', letterSpacing:'.06em' }}>↓ receives</span>
                </div>
                <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.85)', marginBottom:10 }}>{p.output}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.45)', lineHeight:1.65 }}>{p.hook}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom truth statement */}
        <div style={{ padding:'16px 24px', background:'rgba(6,14,28,.95)', border:'1px solid rgba(255,255,255,.07)', borderTop:'none', textAlign:'center' }}>
          <div style={{ fontSize:13, color:'rgba(255,255,255,.55)', fontStyle:'italic' }}>
            Every party enters the room with the same evidence base. No restarts. No surprises. No retrades at the eleventh hour.
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.25)', marginTop:4 }}>
            Nerdio's $500M round — one evidence base, the bank's mandate, the investor's conviction, the operator's outcome.
          </div>
        </div>

      </div>
    </section>
  );
}
