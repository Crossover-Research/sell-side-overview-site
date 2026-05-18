'use client';
import { useState } from 'react';

type Audience = 'bankers' | 'operators' | 'investors';

const AUDIENCES: { id: Audience; label: string; color: string; bg: string }[] = [
  { id:'bankers',   label:'Bankers',   color:'rgba(120,144,178,.9)',  bg:'rgba(120,144,178,.07)'  },
  { id:'operators', label:'Operators', color:'rgba(89,116,154,.9)',  bg:'rgba(89,116,154,.06)'  },
  { id:'investors', label:'Investors', color:'rgba(140,151,178,.9)', bg:'rgba(140,151,178,.06)' },
];

const ROWS: {
  label: string;
  without: Record<Audience, string>;
  withText: Record<Audience, string>;
  withBold: Record<Audience, string>;
  cost: Record<Audience, string>;
}[] = [
  {
    label: 'Mandate / Entry',
    without: {
      bankers:   'Pitch alongside 3–5 identical banks. Hope relationship wins.',
      operators: 'Told to glorify the story. No way to find weaknesses before buyers do.',
      investors: 'Teaser arrives. Restart diligence from zero.',
    },
    withText: {
      bankers:   'Walk in with customer evidence no competing bank has.',
      operators: 'Every weakness found',
      investors: 'Catalyst report arrives',
    },
    withBold: {
      bankers:   'The room is already yours.',
      operators: 'before buyers find it for you.',
      investors: 'before the teaser does.',
    },
    cost: {
      bankers:   'Lose mandates to incumbents. The bank takes the blame.',
      operators: 'Blindsided in diligence. Too late to respond.',
      investors: 'Compressed timeline. Same disadvantage as every other fund.',
    },
  },
  {
    label: 'Story / CIM',
    without: {
      bankers:   'Assemble standard deck. Recycle public comps and industry reports.',
      operators: 'CIM built on curated references buyers already discount.',
      investors: 'Assume the CIM is curated. Rerun diligence anyway.',
    },
    withText: {
      bankers:   'Customer-validated equity story',
      operators: 'CIM backed by evidence',
      investors: "Evidence base the sell-side can't curate.",
    },
    withBold: {
      bankers:   'no competing bank can replicate.',
      operators: "buyers can't dismiss as operator spin.",
      investors: "You're not starting from suspicion. You're starting from proof.",
    },
    cost: {
      bankers:   'Generic deck. No differentiation.',
      operators: 'Buyers discount everything. Narrative collapses.',
      investors: 'Weeks rebuilding diligence the sell-side already ran.',
    },
  },
  {
    label: 'Intel / Prep',
    without: {
      bankers:   "Hope buyers don't find the gaps before you do.",
      operators: 'Blindsided in management presentations. Scrambling to respond.',
      investors: 'Commission expert calls. Wait weeks. Compress timeline.',
    },
    withText: {
      bankers:   'Know every buyer objection before they ask it.',
      operators: 'Every hard question pre-answered.',
      investors: 'Customer data already in hand.',
    },
    withBold: {
      bankers:   'Have the answer ready.',
      operators: 'You already fixed what buyers will flag.',
      investors: 'Weeks of work compressed into hours.',
    },
    cost: {
      bankers:   'Deal stalls or reprices. Bank takes the blame.',
      operators: 'Weaknesses become buyer leverage.',
      investors: 'Bad conviction. Late reprice or pass.',
    },
  },
  {
    label: 'Valuation / Edge',
    without: {
      bankers:   'Win on relationship, not insight.',
      operators: 'Sit at the mercy of the bidding process. Hope valuation holds.',
      investors: 'Compete on the same compressed timeline as every other fund.',
    },
    withText: {
      bankers:   '',
      operators: 'Set the valuation narrative.',
      investors: 'Build conviction',
    },
    withBold: {
      bankers:   "Independent evidence can't be copied overnight.",
      operators: 'Negotiate from evidence, not hope.',
      investors: '6–12 months before the process opens.',
    },
    cost: {
      bankers:   'Relationship advantage erodes. Evidence lasts.',
      operators: 'PE fund sets the terms. Operator reacts.',
      investors: 'Arrive at IC with assumptions. Reprice or pass.',
    },
  },
  {
    label: 'IC / Close',
    without: {
      bankers:   'Lose mandates when buyers surface gaps the bank never saw.',
      operators: 'PE fund defines the value-creation plan. Operator reacts.',
      investors: 'Arrive at IC with assumptions. Reprice or pass at the eleventh hour.',
    },
    withText: {
      bankers:   'Every gap pre-empted.',
      operators: 'Operator sets the baseline.',
      investors: 'Arrive at IC with answers.',
    },
    withBold: {
      bankers:   '70% sell-side mandate win rate. Not relationship. Evidence.',
      operators: "The fund's plan starts from your roadmap.",
      investors: 'Pre-emptive bid wins.',
    },
    cost: {
      bankers:   'Deal stalls or reprices. The bank takes the blame.',
      operators: 'The operator had no chance to respond.',
      investors: 'Retrades at IC. Value destroyed at the moment it should be captured.',
    },
  },
];

const OUTCOME: Record<Audience, { stat: string; statLabel: string; desc: string }> = {
  bankers:   { stat:'70%',    statLabel:'Win Rate',  desc:'70% sell-side mandate win rate. Not because of better relationships. Pitches built from what customers actually say.' },
  operators: { stat:'',       statLabel:'',          desc:"Operators who surface uncomfortable truths early don't just close faster. They set the terms." },
  investors: { stat:'6–12mo', statLabel:'Ahead',     desc:'Customer evidence in hand before the process begins means you arrive at IC with proof, not assumptions.' },
};

export function EvidenceTable() {
  const [active, setActive] = useState<Audience>('bankers');
  const aud = AUDIENCES.find(a => a.id === active)!;
  const outcome = OUTCOME[active];

  return (
    <section style={{ padding:'80px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', padding:'0 var(--content-pad)' }}>

        {/* Header */}
        <div style={{ marginBottom:36 }}>
          <div className="ib-section-eyebrow" style={{ marginBottom:10 }}>With vs. Without Crossover</div>
          <div style={{ marginBottom:24 }}>
            <h2 style={{ fontSize:'clamp(22px,3vw,34px)', fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.03em', margin:0, lineHeight:1.15 }}>
              Every party works from a different version<br />of the truth. Customer Voice fixes that.
            </h2>
          </div>

          {/* Audience tabs */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {AUDIENCES.map(a => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                style={{
                  fontSize:15, fontWeight:600, padding:'10px 26px', cursor:'pointer',
                  background: active===a.id ? a.bg : 'rgba(255,255,255,.03)',
                  border: `1px solid ${active===a.id ? a.color : 'rgba(255,255,255,.18)'}`,
                  color: active===a.id ? a.color : 'rgba(255,255,255,.78)',
                  transition:'all .15s',
                }}
              >{a.label}</button>
            ))}
          </div>
        </div>

        {/* Unified 4-column table */}
        <div style={{ border:'1px solid rgba(255,255,255,.1)', overflow:'hidden' }}>

          {/* Column headers */}
          <div style={{ display:'grid', gridTemplateColumns:'200px 1fr 36px 1fr', background:'rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.09)' }}>
            <div style={{ padding:'12px 18px' }} />
            <div style={{ padding:'12px 18px', fontSize:13.5, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.78)', borderLeft:'1px solid rgba(255,255,255,.07)' }}>
              Without Crossover
            </div>
            <div />
            <div style={{ padding:'12px 18px', fontSize:13.5, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:aud.color, borderLeft:'1px solid rgba(255,255,255,.07)', transition:'color .2s' }}>
              With Crossover
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              style={{
                display:'grid', gridTemplateColumns:'200px 1fr 36px 1fr',
                borderBottom: i < ROWS.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none',
                background:'rgba(6,14,28,.97)',
              }}
            >
              {/* Row label */}
              <div style={{ padding:'20px 14px', display:'flex', alignItems:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                <span style={{ fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.88)', background:'rgba(255,255,255,.10)', padding:'4px 10px', whiteSpace:'nowrap' }}>
                  {row.label}
                </span>
              </div>

              {/* Without */}
              <div style={{ padding:'20px 20px', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                <div style={{ fontSize:15, color:'rgba(255,255,255,.85)', lineHeight:1.75, marginBottom:8 }}>
                  {row.without[active]}
                </div>
                <div style={{ fontSize:15, fontWeight:600, color:'rgba(245,158,11,.95)', lineHeight:1.5 }}>
                  {row.cost[active]}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                <span style={{ fontSize:15, color:aud.color, opacity:.5 }}>→</span>
              </div>

              {/* With */}
              <div style={{ padding:'20px 20px' }}>
                <div style={{ fontSize:15, color:'rgba(255,255,255,.92)', lineHeight:1.75 }}>
                  {row.withText[active]}{row.withText[active] ? ' ' : ''}
                  <strong style={{ color:aud.color, fontWeight:600 }}>{row.withBold[active]}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome strip */}
        <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(255,255,255,.08)', borderTop:`2px solid ${aud.color}`, padding:'22px 28px', display:'flex', alignItems:'center', gap:28, transition:'border-color .2s' }}>
          {outcome.stat && (
            <>
              <div style={{ flexShrink:0, textAlign:'center', minWidth:80 }}>
                <div style={{ fontSize:30, fontWeight:700, color:aud.color, lineHeight:1, letterSpacing:'-.02em', marginBottom:4 }}>{outcome.stat}</div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.75)' }}>{outcome.statLabel}</div>
              </div>
              <div style={{ width:1, height:44, background:'rgba(255,255,255,.08)', flexShrink:0 }} />
            </>
          )}
          <div style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75 }}>{outcome.desc}</div>
        </div>

      </div>
    </section>
  );
}
