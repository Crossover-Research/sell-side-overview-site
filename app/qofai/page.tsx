'use client';
import { useState } from 'react';
import { CONTACT, BRAND } from '../../lib/config/site';

/**
 * The Crossover Intelligence Suite
 *
 * Banker-facing suite page. One independent evidence base, three
 * deliverables across the transaction lifecycle. Q of AI compressed
 * into a single section.
 */

type DeliverableId = 'mandate' | 'cim' | 'diligence';

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
    id: 'mandate',
    stage: 'Mandate',
    audience: 'For the banker',
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
    audience: 'For the operator',
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
    audience: 'For the buyer',
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
    note: 'Customer interviews won the mandate; deeper diligence won the round.',
  },
  {
    label: 'Mobile.de · Sell-side',
    value: '$10B',
    sub: 'Mandate pitch differentiator',
    note: 'VoC report cited as the reason the bank was selected.',
  },
  {
    label: 'Red Canary · Exit',
    value: '$675M',
    sub: 'Acquired by Zscaler',
    note: 'CIM built on independent customer evidence rather than management assertions.',
  },
];

const PROBLEM_ROWS = [
  {
    label: 'Mandate',
    without: 'Pitch alongside 3–5 identical banks. Hope relationship wins.',
    cost: 'Lose to incumbents. The bank takes the blame.',
    withCrossover: 'Walk in with customer evidence no competing bank has.',
    withBold: 'The room is already yours.',
  },
  {
    label: 'Story',
    without: 'Assemble standard deck. Recycle public comps and industry reports.',
    cost: 'Generic deck. No differentiation.',
    withCrossover: 'Customer-validated equity story',
    withBold: 'no competing bank can replicate.',
  },
  {
    label: 'Intel',
    without: 'Hope buyers do not find the gaps before you do.',
    cost: 'Deal stalls or reprices. The bank takes the blame.',
    withCrossover: 'Know every buyer objection before they ask it.',
    withBold: 'Have the answer ready.',
  },
  {
    label: 'IC / Close',
    without: 'Lose mandates when buyers surface gaps the bank never saw.',
    cost: 'Deal stalls or reprices. Bank takes the blame.',
    withCrossover: 'Every gap pre-empted.',
    withBold: '70% sell-side mandate win rate. Not relationship. Evidence.',
  },
];

const Q_OF_AI_DIMS = [
  { name: 'AI Capability', count: 10, hint: 'Adoption · ROI · Differentiation · Roadmap · Accuracy' },
  { name: 'AI Displacement Risk', count: 5, hint: 'Lock-in · Leapfrog resistance · Replacement risk · Pricing defense' },
];

export default function QofAIPage() {
  const [activeDeliverable, setActiveDeliverable] = useState<DeliverableId>('mandate');
  const active = DELIVERABLES.find(d => d.id === activeDeliverable)!;

  return (
    <>
      {/* HERO */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'56px 0 48px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', fontSize:13.5, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.10)', border:'1px solid rgba(166,183,210,.35)', padding:'5px 14px', marginBottom:22 }}>
            The Intelligence Suite
          </div>
          <h1 style={{ fontSize:'clamp(34px, 5vw, 52px)', fontWeight:700, color:'rgba(255,255,255,.98)', lineHeight:1.08, letterSpacing:'-.035em', margin:'0 0 18px', maxWidth:980 }}>
            One independent evidence base.<br />
            <span style={{ color:'rgba(166,183,210,.95)' }}>Three deliverables across the transaction.</span>
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:760, margin:'0 0 30px' }}>
            Crossover enters before the pitch and stays through the CIM. Every output is built on raw customer verbatims — collected independently, uncoached, sourced from the operator&apos;s actual customers. No competing bank walks in with the same evidence.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:40 }}>
            <a href={`mailto:${CONTACT.email}?subject=Scope%20a%20mandate`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 26px', fontSize:15, fontWeight:700, textDecoration:'none', display:'inline-flex', alignItems:'center', borderRadius:2 }}>
              Scope a Mandate →
            </a>
            <a href={BRAND.demoUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 22px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              See a live Catalyst report →
            </a>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:1, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.10)' }}>
            {[
              { v: '$11B+', l: 'Combined transaction value' },
              { v: '30+',   l: 'Sell-side mandates supported' },
              { v: '60+',   l: 'Buy-side engagements' },
              { v: '70%',   l: 'Mandate win rate' },
            ].map((s, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'20px 22px' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1, marginBottom:8 }}>{s.v}</div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.82)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE THREE DELIVERABLES */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:36 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The Suite
            </div>
            <h2 style={{ fontSize:'clamp(24px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:820 }}>
              Three deliverables. One methodology. Deployed across the mandate.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.85)', lineHeight:1.7, maxWidth:720, margin:0 }}>
              The same independent customer evidence powers the pitch, the CIM, and the diligence. Pick the entry point that matches the stage of the deal.
            </p>
          </div>

          <div style={{ display:'flex', gap:8, marginBottom:24, flexWrap:'wrap' }}>
            {DELIVERABLES.map(d => {
              const isActive = activeDeliverable === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDeliverable(d.id)}
                  style={{
                    all:'unset', cursor:'pointer',
                    padding:'10px 22px',
                    fontSize:13.5, fontWeight:600,
                    background: isActive ? 'rgba(120,144,178,.18)' : 'rgba(255,255,255,.04)',
                    border:`1px solid ${isActive ? 'rgba(166,183,210,.6)' : 'rgba(255,255,255,.18)'}`,
                    color: isActive ? 'rgba(230,240,252,.97)' : 'rgba(255,255,255,.82)',
                    transition:'all .15s ease',
                  }}
                >
                  {d.stage} · {d.name}
                </button>
              );
            })}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
            <div style={{ background:'rgba(6,14,28,.97)', padding:'32px 36px' }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:8 }}>
                {active.audience}
              </div>
              <h3 style={{ fontSize:26, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', margin:'0 0 14px' }}>
                {active.name}
              </h3>
              <p style={{ fontSize:17, fontWeight:500, color:'rgba(255,255,255,.94)', lineHeight:1.6, margin:'0 0 16px' }}>
                {active.oneLine}
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.82)', lineHeight:1.75, margin:'0 0 22px' }}>
                {active.detail}
              </p>

              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
                {active.bullets.map((b, i) => (
                  <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontSize:15, color:'rgba(255,255,255,.90)', lineHeight:1.6 }}>
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

            <div style={{ background:'rgba(6,14,28,.97)', padding:'32px 32px', display:'flex', flexDirection:'column', gap:22 }}>
              <div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:8 }}>Timeline</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em' }}>{active.timeline}</div>
              </div>
              <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
              <div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:8 }}>Customers interviewed</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em' }}>{active.customers}</div>
              </div>
              <div style={{ height:1, background:'rgba(255,255,255,.08)' }} />
              <div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:8 }}>Ideal for</div>
                <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.92)' }}>{active.idealFor}</div>
              </div>

              <div style={{ marginTop:'auto', paddingTop:14 }}>
                <a
                  href={`mailto:${CONTACT.email}?subject=Scope%20a%20${encodeURIComponent(active.name)}`}
                  style={{
                    alignSelf:'flex-start',
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    padding:'8px 16px', fontSize:13.5, fontWeight:600, textDecoration:'none',
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

          <div style={{ marginTop:18, fontSize:13.5, color:'rgba(255,255,255,.72)', textAlign:'center' }}>
            Pricing available on request. Flat fee or outcome-based, structured around your transaction milestones.
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
              <p style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.75, margin:'0 0 16px' }}>
                Every Catalyst report is built on raw verbatims — not curated, not management-supplied, not the operator&apos;s reference list. Customers are interviewed independently and answer freely.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.75, margin:0 }}>
                The same independent evidence is the foundation of every deliverable in the suite — the banker&apos;s pitch, the operator&apos;s CIM, the investor&apos;s diligence. No restarts. No surprises.
              </p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', borderLeft:'3px solid rgba(166,183,210,.6)', padding:'20px 24px' }}>
                <div style={{ fontSize:15, fontStyle:'italic', color:'rgba(255,255,255,.92)', lineHeight:1.7, marginBottom:10 }}>
                  &ldquo;We have never had an outside provider push back on an investment.&rdquo;
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.78)', fontWeight:500 }}>
                  Investor on unfiltered truth
                </div>
              </div>
              <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', borderLeft:'3px solid rgba(166,183,210,.6)', padding:'20px 24px' }}>
                <div style={{ fontSize:15, fontStyle:'italic', color:'rgba(255,255,255,.92)', lineHeight:1.7, marginBottom:10 }}>
                  &ldquo;Every advisory firm validates why to deploy. No one tells us why to avoid.&rdquo;
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.78)', fontWeight:500 }}>
                  Investor on systematic bias in research
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:30 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The Banker Lens
            </div>
            <h2 style={{ fontSize:'clamp(22px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 12px', maxWidth:780 }}>
              What changes when you walk in with Crossover.
            </h2>
          </div>

          <div style={{ border:'1px solid rgba(255,255,255,.10)' }}>
            <div style={{ display:'grid', gridTemplateColumns:'180px 1fr 36px 1fr', background:'rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.09)' }}>
              <div style={{ padding:'14px 18px' }} />
              <div style={{ padding:'14px 18px', fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.82)', borderLeft:'1px solid rgba(255,255,255,.07)' }}>
                Without Crossover
              </div>
              <div />
              <div style={{ padding:'14px 18px', fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', borderLeft:'1px solid rgba(255,255,255,.07)' }}>
                With Crossover
              </div>
            </div>

            {PROBLEM_ROWS.map((row, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'180px 1fr 36px 1fr', borderBottom: i < PROBLEM_ROWS.length-1 ? '1px solid rgba(255,255,255,.06)' : 'none', background:'rgba(6,14,28,.97)' }}>
                <div style={{ padding:'22px 16px', display:'flex', alignItems:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                  <span style={{ fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.88)', background:'rgba(255,255,255,.10)', padding:'4px 10px', whiteSpace:'nowrap' }}>
                    {row.label}
                  </span>
                </div>
                <div style={{ padding:'22px 22px', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.75, marginBottom:8 }}>{row.without}</div>
                  <div style={{ fontSize:13.5, fontWeight:600, color:'rgba(245,158,11,.95)', lineHeight:1.5 }}>{row.cost}</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', borderRight:'1px solid rgba(255,255,255,.05)' }}>
                  <span style={{ fontSize:15, color:'rgba(166,183,210,.55)' }}>→</span>
                </div>
                <div style={{ padding:'22px 22px' }}>
                  <div style={{ fontSize:15, color:'rgba(255,255,255,.92)', lineHeight:1.75 }}>
                    {row.withCrossover}{' '}
                    <strong style={{ color:'rgba(166,183,210,.95)', fontWeight:600 }}>{row.withBold}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q OF AI */}
      <section style={{ padding:'68px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                Specialty module · Q of AI
              </div>
              <h2 style={{ fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', lineHeight:1.2, margin:'0 0 16px' }}>
                Every IC has an AI question. Walk in with a customer-backed answer.
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.75, margin:'0 0 16px' }}>
                Every PE fund and strategic acquirer now opens with the same question:{' '}
                <em style={{ fontStyle:'italic', color:'rgba(245,200,140,.95)', fontWeight:500 }}>&ldquo;How durable is this company&rsquo;s AI advantage?&rdquo;</em>{' '}
                Generic claims get challenged at first IC.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.75, margin:0 }}>
                The Q of AI module adds a 15-question diagnostic on top of any suite deliverable. Scores derived from actual customers — collected independently, uncoached — give management the language to justify a premium.
              </p>
            </div>

            <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'24px 28px' }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:14 }}>
                What it covers
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:18 }}>
                {Q_OF_AI_DIMS.map((d, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'baseline', gap:14 }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:20, fontWeight:700, color:'rgba(166,183,210,.95)', minWidth:42, letterSpacing:'-.02em' }}>{d.count}</div>
                    <div>
                      <div style={{ fontSize:15, fontWeight:600, color:'rgba(255,255,255,.95)', marginBottom:2 }}>{d.name}</div>
                      <div style={{ fontSize:13.5, color:'rgba(255,255,255,.78)', lineHeight:1.6 }}>{d.hint}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop:'1px solid rgba(255,255,255,.10)', paddingTop:14, fontSize:13.5, color:'rgba(255,255,255,.78)', lineHeight:1.65 }}>
                Add-on to any Mandate Pitch Deck, VoC-Enhanced CIM, or Customer Diligence Report. Two extra weeks of fieldwork; delivered with the parent engagement.
              </div>
            </div>
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
            <h2 style={{ fontSize:'clamp(22px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 12px', maxWidth:820 }}>
              Voice of Customer intelligence that drives outcomes.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.85)', lineHeight:1.7, maxWidth:720, margin:0 }}>
              Three proof points. $11B+ in combined transaction value.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14 }}>
            {PROOF_POINTS.map((p, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'24px 26px' }}>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                  {p.label}
                </div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:32, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.03em', lineHeight:1, marginBottom:8 }}>
                  {p.value}
                </div>
                <div style={{ fontSize:13.5, fontWeight:600, color:'rgba(255,255,255,.88)', marginBottom:12 }}>{p.sub}</div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.78)', lineHeight:1.65 }}>{p.note}</div>
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
          <h2 style={{ fontSize:'clamp(26px, 3vw, 36px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 14px' }}>
            Tell us what you&rsquo;re working on. We&rsquo;ll show you what we&rsquo;d find.
          </h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,.86)', lineHeight:1.7, margin:'0 0 26px' }}>
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
