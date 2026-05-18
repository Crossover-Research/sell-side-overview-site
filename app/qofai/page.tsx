'use client';
import { useState } from 'react';
import { CONTACT, BRAND } from '../../lib/config/site';

/**
 * Voice of Customer · The Crossover Intelligence Suite
 *
 * Banker-facing suite page. One independent evidence base, four
 * deliverables across the transaction lifecycle. Q of AI as a
 * premium-defense add-on. Pricing slider aligned to milestones.
 */

type DeliverableId = 'sector' | 'mandate' | 'cim' | 'diligence';

const DELIVERABLES: {
  id: DeliverableId;
  stage: string;
  audience: string;
  name: string;
  oneLine: string;
  detail: string;
  timeline: string;
  customers: string;
  idealFor: string;
  bullets: string[];
}[] = [
  {
    id: 'sector',
    stage: 'Pipeline',
    audience: 'For the banker · pre-mandate',
    name: 'Sector Research',
    oneLine:
      'Build pipeline before competitors know the market is in play.',
    detail:
      'Independent customer evidence across a sector — no management contact required. Identify the assets buyers will want before they enter formal process and arrive at the operator with a thesis already built.',
    timeline: '3–6 weeks',
    customers: '40–80',
    idealFor: 'Pipeline build',
    bullets: [
      'Sector-wide customer interview base',
      'Competitive positioning and switching dynamics',
      'No management contact required',
      'Two to three named conviction assets',
    ],
  },
  {
    id: 'mandate',
    stage: 'Mandate',
    audience: 'For the banker · pitch window',
    name: 'Mandate Pitch Deck',
    oneLine:
      'Walk into the pitch with customer evidence no competing bank can replicate.',
    detail:
      'Independent verbatims and benchmark scores delivered in time for the pitch. Three to five proof points your competitors do not have. The mandate is won on substance, not relationship.',
    timeline: '2–3 weeks',
    customers: '20–30',
    idealFor: 'Mandate pursuit',
    bullets: [
      'Customer-validated equity story',
      'Three to five mandate-winning proof points',
      'Comparable benchmarks from 40+ prior studies',
      'Banker-ready slides; no analyst rework',
    ],
  },
  {
    id: 'cim',
    stage: 'CIM',
    audience: 'For the operator · sell-side launch',
    name: 'VoC-Enhanced CIM',
    oneLine:
      'Every weak claim in the CIM pre-validated before buyers find it.',
    detail:
      'The CIM is built on independent customer evidence, not management assertions. Vulnerable claims are surfaced internally first so the rebuttal is already in the deck when buyers raise it in diligence.',
    timeline: '4–5 weeks',
    customers: '30–50',
    idealFor: 'Sell-side process launch',
    bullets: [
      'Every claim mapped to independent customer evidence',
      'Pre-emptive rebuttal for every buyer objection',
      'NPS, criticality, switching difficulty benchmarked',
      'Operators shape the conversation before it begins',
    ],
  },
  {
    id: 'diligence',
    stage: 'Diligence',
    audience: 'For the buyer · pre-process',
    name: 'Customer Diligence Report',
    oneLine:
      'Conviction before the teaser drops. Bid with evidence, not assumptions.',
    detail:
      'Independent commercial diligence delivered ahead of the formal process. The buyer arrives at the first management call already ahead of every other fund and pre-empts the auction timeline.',
    timeline: '5–7 weeks',
    customers: '50–100+',
    idealFor: 'Pre-process conviction',
    bullets: [
      'Independent customer interviews at scale',
      'Pricing elasticity and TAM validation',
      'Competitive displacement and switching risk',
      'IC-ready evidence, no curated references',
    ],
  },
];

const PROOF_POINTS = [
  {
    label: 'Nerdio · Series C',
    value: '$500M',
    sub: 'JP Morgan mandate + General Atlantic conviction',
    note: 'Customer interviews won the mandate; same research built General Atlantic’s thesis in a 30-minute call.',
  },
  {
    label: 'Mobile.de · Sell-side',
    value: '$10B',
    sub: 'Mandate pitch differentiator',
    note: 'VoC report cited as the reason the bank was selected to lead the process.',
  },
  {
    label: 'Red Canary · Exit',
    value: '$675M',
    sub: 'Acquired by Zscaler',
    note: 'CIM built on independent customer evidence rather than management assertions.',
  },
];

const Q_OF_AI_DIMS = [
  { name: 'AI Capability', count: 10, hint: 'Adoption · ROI · Differentiation · Roadmap · Accuracy' },
  { name: 'AI Displacement Risk', count: 5, hint: 'Lock-in · Leapfrog resistance · Replacement risk · Pricing defense' },
];

// Pricing tiers — by module + N count. Fees scale with the number of
// customer interviews, not engagement type.
const PRICE_TIERS = [
  {
    name: 'Mandate Pitch Deck',
    nCount: '20–30',
    range: '$25K – 35K',
    weeks: '2–3 weeks',
    milestone: 'Mandate pursuit',
    desc: 'Customer verbatims and benchmark scores in time for the pitch window. The volume most mandate pitches land at.',
  },
  {
    name: 'VoC-Enhanced CIM',
    nCount: '30–50',
    range: '$40K – 65K',
    weeks: '4–5 weeks',
    milestone: 'Sell-side process launch',
    desc: 'Wider customer base inside the CIM. Every weak claim pre-validated; every objection mapped to a rebuttal.',
  },
  {
    name: 'Sector Research',
    nCount: '40–80',
    range: '$50K – 90K',
    weeks: '3–6 weeks',
    milestone: 'Pipeline build · pre-mandate',
    desc: 'Sector-wide customer intelligence. No management contact. Arrives at the operator with a thesis already built.',
  },
  {
    name: 'Customer Diligence Report',
    nCount: '50–100+',
    range: '$85K – 150K',
    weeks: '5–7 weeks',
    milestone: 'Pre-process · IC prep',
    desc: 'Full commercial diligence at scale. IC-ready evidence; fee aligned to the bid milestone.',
  },
];

// Shared spec rail label/value typography (kills the awful mono on numbers)
const SPEC_LABEL: React.CSSProperties = {
  fontSize: 12, fontWeight: 700, letterSpacing: '.12em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', marginBottom: 8,
};
const SPEC_VALUE_LARGE: React.CSSProperties = {
  fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,.97)',
  letterSpacing: '-.01em', lineHeight: 1.2,
};

export default function QofAIPage() {
  const [activeDeliverable, setActiveDeliverable] = useState<DeliverableId>('mandate');
  const [priceIdx, setPriceIdx] = useState<number>(0);
  const active = DELIVERABLES.find(d => d.id === activeDeliverable)!;
  const price = PRICE_TIERS[priceIdx];

  return (
    <>
      {/* HERO */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'56px 0 48px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', fontSize:13, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.10)', border:'1px solid rgba(166,183,210,.35)', padding:'5px 14px', marginBottom:22 }}>
            Voice of Customer · The Intelligence Suite
          </div>
          <h1 style={{ fontSize:'clamp(34px, 5vw, 52px)', fontWeight:700, color:'rgba(255,255,255,.98)', lineHeight:1.08, letterSpacing:'-.035em', margin:'0 0 18px', maxWidth:980 }}>
            One independent evidence base.<br />
            <span style={{ color:'rgba(166,183,210,.95)' }}>Four deliverables across the transaction.</span>
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.90)', lineHeight:1.7, maxWidth:760, margin:'0 0 30px' }}>
            Crossover enters before the pitch and stays through the CIM. Every output is built on raw customer verbatims — collected independently, uncoached, sourced from the operator&rsquo;s actual customers. No competing bank walks in with the same evidence.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:40 }}>
            <a href={`mailto:${CONTACT.email}?subject=Scope%20a%20mandate`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 26px', fontSize:15, fontWeight:700, textDecoration:'none', display:'inline-flex', alignItems:'center', borderRadius:2 }}>
              Scope a Mandate →
            </a>
            <a href={BRAND.demoUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 22px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              See a live Catalyst report →
            </a>
          </div>

          {/* Stat strip */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:1, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.10)' }}>
            {[
              { v: '$11B+', l: 'Combined transaction value' },
              { v: '30+',   l: 'Sell-side mandates supported' },
              { v: '60+',   l: 'Buy-side engagements' },
              { v: '70%',   l: 'Mandate win rate' },
            ].map((s, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'20px 22px' }}>
                <div style={{ fontSize:30, fontWeight:600, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1, marginBottom:8 }}>{s.v}</div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.82)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SUITE */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:36 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The Suite
            </div>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:820 }}>
              Four deliverables. One methodology. Deployed across the deal.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:720, margin:0 }}>
              The same independent customer evidence powers the pipeline build, the pitch, the CIM, and the diligence. Pick the entry point that matches the stage of the deal.
            </p>
          </div>

          {/* Stage tabs */}
          <div style={{ display:'flex', gap:8, marginBottom:24, flexWrap:'wrap' }}>
            {DELIVERABLES.map(d => {
              const isActive = activeDeliverable === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDeliverable(d.id)}
                  style={{
                    all:'unset', cursor:'pointer',
                    padding:'10px 20px',
                    fontSize:13.5, fontWeight:600,
                    background: isActive ? 'rgba(120,144,178,.20)' : 'rgba(255,255,255,.04)',
                    border:`1px solid ${isActive ? 'rgba(166,183,210,.65)' : 'rgba(255,255,255,.20)'}`,
                    color: isActive ? 'rgba(230,240,252,.97)' : 'rgba(255,255,255,.85)',
                    transition:'all .15s ease',
                  }}
                >
                  {d.stage} · {d.name}
                </button>
              );
            })}
          </div>

          {/* Active deliverable detail */}
          <div style={{ display:'grid', gridTemplateColumns:'1.45fr 1fr', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
            {/* Left: copy */}
            <div style={{ background:'rgba(6,14,28,.97)', padding:'32px 36px' }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:8 }}>
                {active.audience}
              </div>
              <h3 style={{ fontSize:26, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', margin:'0 0 14px' }}>
                {active.name}
              </h3>
              <p style={{ fontSize:17, fontWeight:500, color:'rgba(255,255,255,.95)', lineHeight:1.55, margin:'0 0 16px' }}>
                {active.oneLine}
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.85)', lineHeight:1.75, margin:'0 0 22px' }}>
                {active.detail}
              </p>

              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
                {active.bullets.map((b, i) => (
                  <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontSize:14.5, color:'rgba(255,255,255,.92)', lineHeight:1.6 }}>
                    <span aria-hidden="true" style={{ color:'rgba(166,183,210,.95)', flexShrink:0, marginTop:1 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: spec — no mono font */}
            <div style={{ background:'rgba(6,14,28,.97)', padding:'32px 32px', display:'flex', flexDirection:'column', gap:22 }}>
              <div>
                <div style={SPEC_LABEL}>Timeline</div>
                <div style={SPEC_VALUE_LARGE}>{active.timeline}</div>
              </div>
              <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
              <div>
                <div style={SPEC_LABEL}>Customers interviewed</div>
                <div style={SPEC_VALUE_LARGE}>{active.customers}</div>
              </div>
              <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
              <div>
                <div style={SPEC_LABEL}>Ideal for</div>
                <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.92)' }}>{active.idealFor}</div>
              </div>

              <div style={{ marginTop:'auto', paddingTop:14 }}>
                <a
                  href={`mailto:${CONTACT.email}?subject=Scope%20a%20${encodeURIComponent(active.name)}`}
                  style={{
                    alignSelf:'flex-start',
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    padding:'8px 16px', fontSize:13, fontWeight:600, textDecoration:'none',
                    background:'rgba(120,144,178,.92)', color:'rgba(255,255,255,.98)',
                    border:'1px solid rgba(166,183,210,.55)',
                    transition:'background .15s', whiteSpace:'nowrap',
                  }}
                >
                  Scope this engagement →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ padding:'68px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                The methodology
              </div>
              <h2 style={{ fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', lineHeight:1.2, margin:'0 0 16px' }}>
                Raw customer feedback. Independently sourced. No coaching.
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:'0 0 16px' }}>
                Every Catalyst report is built on raw verbatims — not curated, not management-supplied, not the operator&rsquo;s reference list. Customers are interviewed independently and answer freely.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:0 }}>
                The same independent evidence is the foundation of every deliverable in the suite — the banker&rsquo;s pitch, the operator&rsquo;s CIM, the investor&rsquo;s diligence. No restarts. No surprises.
              </p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                {
                  title: 'No management list',
                  body: 'Respondents are sourced independently. The operator does not pick who we call. The reference list is not the evidence base.',
                },
                {
                  title: 'No coaching, no script bias',
                  body: 'Interview structure is fixed across studies. The same questions every time. Scores are comparable to 40+ prior engagements.',
                },
                {
                  title: 'Banker-ready output',
                  body: 'Verbatims arrive in slide-ready form: quoted, attributed, scored, mapped to the proof points your pitch needs to win.',
                },
              ].map((c, i) => (
                <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', borderLeft:'3px solid rgba(166,183,210,.6)', padding:'18px 22px' }}>
                  <div style={{ fontSize:14, fontWeight:700, color:'rgba(230,240,252,.97)', marginBottom:6 }}>{c.title}</div>
                  <div style={{ fontSize:14, color:'rgba(255,255,255,.85)', lineHeight:1.65 }}>{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Q OF AI — premium defense framing */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:52, alignItems:'start' }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                Specialty module · Q of AI
              </div>
              <h2 style={{ fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', lineHeight:1.18, margin:'0 0 18px' }}>
                Buyers price AI defensibility into every bid.<br />
                <span style={{ color:'rgba(166,183,210,.95)' }}>The Q of AI gives management the language — customer-validated — to defend the premium.</span>
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:'0 0 16px' }}>
                Every PE fund and strategic acquirer now opens with the same diligence question:{' '}
                <em style={{ fontStyle:'italic', color:'rgba(245,200,140,.95)', fontWeight:500 }}>&ldquo;How durable is this company&rsquo;s AI advantage?&rdquo;</em>{' '}
                Generic claims get challenged at first IC and the multiple compresses.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:'0 0 20px' }}>
                The Q of AI module turns the AI story into a defendable score — 15 customer-validated dimensions across capability and displacement risk. Management walks in with the evidence to hold the premium, not hope for it.
              </p>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
                {[
                  { v: '15', l: 'Customer-validated dimensions' },
                  { v: '+2 wks', l: 'On top of any deliverable' },
                  { v: '40+', l: 'Benchmark comparables' },
                ].map((s, i) => (
                  <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'16px 18px' }}>
                    <div style={{ fontSize:22, fontWeight:600, color:'rgba(255,255,255,.97)', letterSpacing:'-.015em', lineHeight:1.1, marginBottom:6 }}>{s.v}</div>
                    <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.78)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'26px 30px' }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.78)', marginBottom:18 }}>
                What it covers
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:20 }}>
                {Q_OF_AI_DIMS.map((d, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'baseline', gap:14 }}>
                    <div style={{ fontSize:24, fontWeight:600, color:'rgba(166,183,210,.95)', minWidth:42, letterSpacing:'-.01em' }}>{d.count}</div>
                    <div>
                      <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.97)', marginBottom:3 }}>{d.name}</div>
                      <div style={{ fontSize:13.5, color:'rgba(255,255,255,.82)', lineHeight:1.6 }}>{d.hint}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop:'1px solid rgba(255,255,255,.10)', paddingTop:14, fontSize:13.5, color:'rgba(255,255,255,.82)', lineHeight:1.65 }}>
                The Q of AI plugs into any suite deliverable — Mandate Pitch Deck, VoC-Enhanced CIM, or Customer Diligence Report. Two extra weeks of fieldwork; delivered with the parent engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — milestone-aligned slider */}
      <section style={{ padding:'72px 0', background:'linear-gradient(168deg,#040c1a 0%,#060f22 50%,#040c1a 100%)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap', marginBottom:32 }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                Pricing
              </div>
              <h2 style={{ fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', margin:0, lineHeight:1.2 }}>
                Priced by module and customer N.
              </h2>
            </div>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,.82)', margin:0, maxWidth:400, textAlign:'right', lineHeight:1.65 }}>
              Fee scales with the number of customer interviews. Flat fee or outcome-based, aligned to your transaction milestone.
            </p>
          </div>

          {/* Slider */}
          <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'30px 34px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:36, alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.78)', marginBottom:8 }}>
                  Module
                </div>
                <div style={{ fontSize:22, fontWeight:600, color:'rgba(255,255,255,.97)', letterSpacing:'-.01em', marginBottom:18 }}>
                  {price.name}
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:16, flexWrap:'wrap', marginBottom:14 }}>
                  <div style={{ fontSize:38, fontWeight:600, color:'rgba(166,183,210,.97)', letterSpacing:'-.02em', lineHeight:1 }}>
                    {price.range}
                  </div>
                  <div style={{ fontSize:14, color:'rgba(255,255,255,.78)' }}>
                    based on <strong style={{ color:'rgba(230,240,252,.97)', fontWeight:600 }}>{price.nCount} customer interviews</strong>
                  </div>
                </div>
                <div style={{ fontSize:14.5, color:'rgba(255,255,255,.92)', lineHeight:1.65, marginBottom:24 }}>
                  {price.desc}
                </div>

                {/* Slider track */}
                <div style={{ position:'relative', height:30, display:'flex', alignItems:'center' }}>
                  <div style={{ position:'absolute', left:0, right:0, height:3, background:'rgba(255,255,255,.10)', borderRadius:2 }} />
                  <div style={{ position:'absolute', left:0, width:`${(priceIdx / (PRICE_TIERS.length - 1)) * 100}%`, height:3, background:'rgba(166,183,210,.85)', borderRadius:2, transition:'width .2s' }} />
                  {PRICE_TIERS.map((_, i) => {
                    const pct = (i / (PRICE_TIERS.length - 1)) * 100;
                    const isActive = i === priceIdx;
                    return (
                      <div
                        key={i}
                        onClick={() => setPriceIdx(i)}
                        style={{
                          position:'absolute',
                          left:`${pct}%`, transform:'translateX(-50%)',
                          width: isActive ? 18 : 12, height: isActive ? 18 : 12,
                          borderRadius:'50%',
                          background: isActive ? 'rgba(166,183,210,.95)' : 'rgba(255,255,255,.20)',
                          border: isActive ? '2px solid rgba(220,232,250,.95)' : 'none',
                          boxShadow: isActive ? '0 0 12px rgba(166,183,210,.55)' : 'none',
                          cursor:'pointer', zIndex:2,
                          transition:'all .2s',
                        }}
                      />
                    );
                  })}
                  <input
                    type="range" min={0} max={PRICE_TIERS.length - 1} step={1} value={priceIdx}
                    onChange={e => setPriceIdx(Number(e.target.value))}
                    style={{ position:'absolute', left:0, right:0, width:'100%', opacity:0, height:30, margin:0, padding:0, cursor:'pointer', zIndex:3 }}
                  />
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:12 }}>
                  {PRICE_TIERS.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setPriceIdx(i)}
                      style={{
                        all:'unset', cursor:'pointer',
                        fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase',
                        color: i === priceIdx ? 'rgba(230,240,252,.97)' : 'rgba(255,255,255,.65)',
                        transition:'color .15s',
                        textAlign: i === 0 ? 'left' : i === PRICE_TIERS.length - 1 ? 'right' : 'center',
                        maxWidth: 200,
                      }}
                    >
                      {t.name.split(' / ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:20, paddingLeft:32, borderLeft:'1px solid rgba(255,255,255,.10)' }}>
                <div>
                  <div style={SPEC_LABEL}>Customer N</div>
                  <div style={SPEC_VALUE_LARGE}>{price.nCount}</div>
                </div>
                <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
                <div>
                  <div style={SPEC_LABEL}>Timeline</div>
                  <div style={SPEC_VALUE_LARGE}>{price.weeks}</div>
                </div>
                <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
                <div>
                  <div style={SPEC_LABEL}>Milestone</div>
                  <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.95)' }}>{price.milestone}</div>
                </div>
                <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
                <div>
                  <div style={SPEC_LABEL}>Structure</div>
                  <div style={{ fontSize:14, color:'rgba(255,255,255,.88)', lineHeight:1.65 }}>
                    Flat fee or outcome-based. Cost scoped to the milestone, not the hour.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize:13, color:'rgba(255,255,255,.72)', textAlign:'center', marginTop:18 }}>
            Customer N is the primary fee driver. Company size, data availability, and timeline tune it. We&rsquo;ll lock the final number before kickoff and align it to your transaction milestone.
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:30 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The Track Record
            </div>
            <h2 style={{ fontSize:'clamp(24px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 12px', maxWidth:820 }}>
              Voice of Customer intelligence that drives outcomes.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:720, margin:0 }}>
              Three proof points. $11B+ in combined transaction value.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14 }}>
            {PROOF_POINTS.map((p, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'26px 28px' }}>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                  {p.label}
                </div>
                <div style={{ fontSize:32, fontWeight:600, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1, marginBottom:10 }}>
                  {p.value}
                </div>
                <div style={{ fontSize:14, fontWeight:600, color:'rgba(255,255,255,.92)', marginBottom:12 }}>{p.sub}</div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.82)', lineHeight:1.65 }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding:'72px 0' }}>
        <div style={{ maxWidth:780, margin:'0 auto', padding:'0 36px', textAlign:'center' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:14 }}>
            Name an asset.
          </div>
          <h2 style={{ fontSize:'clamp(28px, 3vw, 36px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 14px' }}>
            Tell us what you&rsquo;re working on. We&rsquo;ll show you what we&rsquo;d find.
          </h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, margin:'0 0 26px' }}>
            Walk into the next pitch knowing exactly what customers say — and exactly how to answer the questions buyers will ask.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`mailto:${CONTACT.email}?subject=Scope%20a%20mandate`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 28px', fontSize:15, fontWeight:700, textDecoration:'none', borderRadius:2 }}>
              Scope a Mandate →
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 24px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
