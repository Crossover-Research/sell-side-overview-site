'use client';
import { useState } from 'react';
import { CONTACT, BRAND } from '../../lib/config/site';

/**
 * Voice of Customer · The Sell-Side Intelligence Suite
 *
 * MD-grade landing page. Pain-naming hero, proof up front,
 * banker testimonial moment, suite as 4-row grid, deliverable
 * preview, competitive callout, premium-defense Q of AI,
 * module + N-count pricing slider, explicit closing CTA.
 */

type DeliverableId = 'sector' | 'mandate' | 'cim' | 'diligence';

const DELIVERABLES: {
  id: DeliverableId;
  stage: string;
  name: string;
  oneLine: string;
  timeline: string;
  customers: string;
  idealFor: string;
  bullets: string[];
}[] = [
  {
    id: 'sector',
    stage: 'Pipeline',
    name: 'Sector Research',
    oneLine: 'Build pipeline before competitors know the market is in play.',
    timeline: '3–6 weeks',
    customers: '40–80',
    idealFor: 'Pre-mandate · pipeline build',
    bullets: [
      'Sector-wide independent interview base',
      'No management contact required',
      'Two to three named conviction assets',
    ],
  },
  {
    id: 'mandate',
    stage: 'Mandate',
    name: 'Mandate Pitch Deck',
    oneLine: 'Walk into the pitch with customer evidence no competing bank can replicate.',
    timeline: '2–3 weeks',
    customers: '20–30',
    idealFor: 'Mandate pursuit · pitch window',
    bullets: [
      'Customer-validated equity story',
      'Three to five mandate-winning proof points',
      'Banker-ready slides; no analyst rework',
    ],
  },
  {
    id: 'cim',
    stage: 'CIM',
    name: 'VoC-Enhanced CIM',
    oneLine: 'Every weak claim in the CIM pre-validated before buyers find it.',
    timeline: '4–5 weeks',
    customers: '30–50',
    idealFor: 'Sell-side process launch',
    bullets: [
      'Every claim mapped to independent customer evidence',
      'Pre-emptive rebuttal for every buyer objection',
      'NPS, criticality, switching difficulty benchmarked',
    ],
  },
  {
    id: 'diligence',
    stage: 'Diligence',
    name: 'Customer Diligence Report',
    oneLine: 'Conviction before the teaser drops. Bid with evidence, not assumptions.',
    timeline: '5–7 weeks',
    customers: '50–100+',
    idealFor: 'Pre-process · IC prep',
    bullets: [
      'Independent customer interviews at scale',
      'Pricing elasticity and TAM validation',
      'IC-ready evidence, no curated references',
    ],
  },
];

const PROOF_POINTS = [
  {
    label: 'Nerdio · Series C',
    value: '$500M',
    sub: 'J.P. Morgan mandate + General Atlantic conviction',
    note: 'Customer interviews won the mandate; same research built General Atlantic&rsquo;s thesis for the round.',
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

const ARTIFACTS = [
  {
    title: '30+ customer verbatims',
    body: 'Independently sourced, attributed, slide-ready. Drop directly into the pitch.',
  },
  {
    title: 'Crossover Core 9 scorecard',
    body: 'Nine standardized dimensions scored against 40+ comparable studies. Benchmarks every claim.',
  },
  {
    title: 'Rebuttal map',
    body: 'Every weak claim in the equity story paired with the customer evidence that defends it.',
  },
  {
    title: 'IC-ready data appendix',
    body: 'Raw transcripts, segment-level scoring, full audit trail. Survives the toughest buyer diligence.',
  },
];

// Sample scorecard preview (anonymized. visual proof of the artifact)
const SAMPLE_SCORES = [
  { label: 'Customer Adoption',        score: 8.4, accent: 'rgba(166,183,210,.85)' },
  { label: 'Switching Difficulty',     score: 9.1, accent: 'rgba(166,183,210,.85)' },
  { label: 'Mission Criticality',      score: 8.2, accent: 'rgba(166,183,210,.85)' },
  { label: 'Pricing Power',            score: 7.6, accent: 'rgba(166,183,210,.85)' },
  { label: 'Competitive Displacement', score: 6.3, accent: 'rgba(245,158,11,.85)' },
];

const CAPABILITY_DIMS = [
  { label: 'Feature Adoption & Daily Utility',  score: 8.9 },
  { label: 'Competitive Differentiation',        score: 8.7 },
  { label: 'Marketing Claims vs. Reality',       score: 8.6 },
  { label: 'Business Differentiation',           score: 8.5 },
  { label: 'Accuracy & Reliability',             score: 8.3 },
  { label: 'Roadmap Confidence',                 score: 8.2 },
  { label: 'Value Quantification & ROI',         score: 8.1 },
  { label: 'AI Sophistication Level',            score: 8.0 },
  { label: 'Implementation Ease',                score: 7.8 },
  { label: 'Innovation Velocity',                score: 7.4 },
];

const RESILIENCE_DIMS = [
  { label: 'Data & Workflow Lock-In',      score: 9.1 },
  { label: 'AI Leapfrog Resistance',       score: 9.0 },
  { label: 'AI-Native Replacement Risk',   score: 8.4 },
  { label: 'Pricing Model Defense',        score: 8.2 },
  { label: 'Vendor Strategy Credibility',  score: 8.0 },
];

const QUESTIONS = [
  { part: 'I', num: 'Q1',  label: 'Feature Adoption & Daily Utility',
    rating: 'How often do you use AI features in [product]? (1=Never, 5=Occasionally, 10=Daily)',
    open: 'Which AI features do you use day to day, and which do you ignore?',
    why: 'Separates marketing claims from real adoption. The first question every buyer asks.' },
  { part: 'I', num: 'Q2',  label: 'Value Quantification & ROI',
    rating: 'How much time or cost does [product]\'s AI save you per week? (1=None, 10=10+ hours)',
    open: 'Quantify the ROI in your own words.',
    why: 'ROI without numbers reads as hype. The dollar figure defends the multiple.' },
  { part: 'I', num: 'Q3',  label: 'Competitive Differentiation',
    rating: 'How clearly does [product]\'s AI beat the next-best alternative? (1=Identical, 10=No comparable)',
    open: 'What does the next-best alternative do, and where does [product] beat it?',
    why: 'Differentiation is the moat. Customers know the alternatives better than management does.' },
  { part: 'I', num: 'Q4',  label: 'Innovation Velocity',
    rating: 'How quickly does [product] ship new AI capability vs competitors? (1=Slower, 10=Far faster)',
    open: 'When was the last meaningful AI release? Has the cadence changed?',
    why: 'Roadmap pace tells buyers whether the asset will outrun AI-native entrants.' },
  { part: 'I', num: 'Q5',  label: 'Accuracy & Reliability',
    rating: 'How accurate is [product]\'s AI in production use? (1=Unusable, 10=Flawless)',
    open: 'Where does it get things wrong? How do you work around it?',
    why: 'Customer-reported failure modes surface diligence risk before buyers do.' },
  { part: 'I', num: 'Q6',  label: 'Marketing Claims vs. Reality',
    rating: 'How well does [product]\'s real AI match the marketing pitch? (1=Far worse, 10=As good or better)',
    open: 'Where is the gap between the pitch and the product?',
    why: 'Most operators inflate. Customers are the only honest test.' },
  { part: 'I', num: 'Q7',  label: 'Implementation Ease',
    rating: 'How easy was rolling out [product]\'s AI features? (1=Painful, 10=Frictionless)',
    open: 'What slowed you down? How long did time to value take?',
    why: 'Adoption friction shows up in churn data. Buyers know to look.' },
  { part: 'I', num: 'Q8',  label: 'Business Differentiation',
    rating: 'How much does [product]\'s AI change how your business operates? (1=Nothing, 10=Transformational)',
    open: 'What can you do now that you could not before?',
    why: 'Strategic value beats feature value. This is the M&A story.' },
  { part: 'I', num: 'Q9',  label: 'Roadmap Confidence',
    rating: 'How confident are you that [product] will out-innovate competitors over the next 24 months? (1=None, 10=Total)',
    open: 'What gives you confidence, or worry?',
    why: 'Forward-looking. Roadmap conviction supports the growth premium.' },
  { part: 'I', num: 'Q10', label: 'AI Sophistication Level',
    rating: 'How sophisticated is [product]\'s AI vs general-purpose tools like ChatGPT or Copilot? (1=Less, 10=Materially more)',
    open: 'What does [product]\'s AI do that general-purpose tools cannot?',
    why: 'The why-not-just-ChatGPT question. Customers know best.' },
  { part: 'II', num: 'Q11', label: 'AI-Native Replacement Risk',
    rating: 'How realistic is it that an AI-native startup replaces [product] in 18 months? (1=No risk, 10=Imminent)',
    open: 'Have you evaluated AI-native alternatives? What stopped you?',
    why: 'The bear case. Customer answers are the only credible defense.' },
  { part: 'II', num: 'Q12', label: 'Data & Workflow Lock-In',
    rating: 'How embedded is [product] in your daily workflow and data systems? (1=Easy to swap, 10=Cannot extract)',
    open: 'What would it take to leave?',
    why: 'Lock-in is the AI-era moat. Direct from the customer.' },
  { part: 'II', num: 'Q13', label: 'Pricing Model Defense',
    rating: 'If [product] shifted from per-seat to outcome-based pricing, would that change your commitment? (1=No difference, 10=Significantly)',
    open: 'How do you think about pricing fairness?',
    why: 'IDC predicts 70% of vendors restructure pricing by 2028. This probes survival.' },
  { part: 'II', num: 'Q14', label: 'AI Leapfrog Resistance',
    rating: 'How likely is it that a new AI model release makes [product] obsolete? (1=Highly likely, 10=Impossible)',
    open: 'What does [product] do that a new model alone cannot?',
    why: 'The commoditization question. Customer answers reveal real moat depth.' },
  { part: 'II', num: 'Q15', label: 'Vendor Strategy Credibility',
    rating: 'How clearly does [product] communicate its AI strategy? (1=Unclear, 10=Crystal clear)',
    open: 'What does the AI roadmap look like? Do you believe it?',
    why: 'If customers do not understand the strategy, buyers will not either.' },
];

const Q_OF_AI_DIMS = [
  { name: 'AI Capability',         count: 10, hint: 'Adoption · ROI · Differentiation · Roadmap · Accuracy' },
  { name: 'AI Displacement Risk',  count: 5,  hint: 'Lock-in · Leapfrog resistance · Replacement risk · Pricing defense' },
];

// Pricing tiers. by module + N count. Mandate Pitch baseline 25-35K.
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

// Shared spec rail label/value typography (no mono)
const SPEC_LABEL: React.CSSProperties = {
  fontSize: 12, fontWeight: 700, letterSpacing: '.12em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', marginBottom: 8,
};
const SPEC_VALUE_LARGE: React.CSSProperties = {
  fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,.97)',
  letterSpacing: '-.01em', lineHeight: 1.2,
};

export default function QofAIPage() {
  const [priceIdx, setPriceIdx] = useState<number>(0);
  const [openQ, setOpenQ] = useState<number>(0);
  const price = PRICE_TIERS[priceIdx];

  return (
    <>
      {/* HERO. Option 1: pain hook + independence + Nerdio proof */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'68px 0 56px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', fontSize:13, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.10)', border:'1px solid rgba(166,183,210,.35)', padding:'5px 14px', marginBottom:22 }}>
            The Sell-Side Intelligence Suite
          </div>
          <h1 style={{ fontSize:'clamp(34px, 5vw, 52px)', fontWeight:700, color:'rgba(255,255,255,.98)', lineHeight:1.05, letterSpacing:'-.035em', margin:'0 0 14px', maxWidth:1040 }}>
            Five banks. Same comps. Same management quotes.
          </h1>
          <h2 style={{ fontSize:'clamp(20px, 2.4vw, 26px)', fontWeight:400, color:'rgba(166,183,210,.95)', lineHeight:1.3, letterSpacing:'-.015em', margin:'0 0 22px', maxWidth:920 }}>
            Be the one with 30+ independent customer interviews in the deck.
          </h2>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.90)', lineHeight:1.7, maxWidth:820, margin:'0 0 30px' }}>
            Crossover is the only research provider independent of the bank, the buyer, and the operator. J.P. Morgan won the Nerdio Series C mandate with it. General Atlantic used the same evidence to build conviction. <strong style={{ color:'rgba(255,255,255,.97)', fontWeight:600 }}>$500M closed at unicorn valuation. 70% mandate win rate</strong> for banks who walk in with it.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:44 }}>
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

      {/* PROOF POINTS. lifted under hero */}
      <section style={{ padding:'64px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:28 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              Track Record · $11B+ Transacted
            </div>
            <h2 style={{ fontSize:'clamp(24px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 10px', maxWidth:820 }}>
              Voice of Customer intelligence that drives outcomes.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:720, margin:0 }}>
              Three named transactions. Different stages of the deal. Same independent customer evidence base.
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

      {/* BANKER TESTIMONIAL. its own moment */}
      <section style={{ padding:'72px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:920, margin:'0 auto', padding:'0 36px', textAlign:'center' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:26 }}>
            From the pitch room
          </div>
          <blockquote style={{
            fontFamily:'var(--font-serif, Georgia, "Times New Roman", serif)',
            fontSize:'clamp(22px, 2.8vw, 32px)', fontWeight:400, fontStyle:'italic',
            color:'rgba(255,255,255,.97)', lineHeight:1.35, letterSpacing:'-.005em',
            margin:'0 0 28px', maxWidth:780, marginLeft:'auto', marginRight:'auto',
          }}>
            &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.&rdquo;
          </blockquote>
          <div style={{ fontSize:14, fontWeight:600, color:'rgba(166,183,210,.95)', letterSpacing:'.04em' }}>
            EXECUTIVE DIRECTOR · J.P. MORGAN
          </div>
        </div>
      </section>

      {/* THE SUITE. 4 horizontal rows (no tabs) */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The Suite
            </div>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:820 }}>
              One evidence base. Four entry points across the deal.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:760, margin:0 }}>
              The same independent customer interviews power the pipeline build, the pitch, the CIM, and the diligence. Pick the entry point that matches the stage of the mandate.
            </p>
          </div>

          {/* 4-row grid */}
          <div style={{ display:'flex', flexDirection:'column', border:'1px solid rgba(255,255,255,.10)' }}>
            {DELIVERABLES.map((d, i) => (
              <div key={d.id} style={{
                display:'grid', gridTemplateColumns:'200px 1fr 180px',
                borderBottom: i < DELIVERABLES.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none',
                background:'rgba(6,14,28,.97)',
                transition:'background .15s',
              }}>
                {/* Left: stage + name + specs */}
                <div style={{ padding:'24px 22px', borderRight:'1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ display:'inline-block', fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.14)', border:'1px solid rgba(166,183,210,.3)', padding:'3px 9px', marginBottom:12 }}>
                    {d.stage}
                  </div>
                  <div style={{ fontSize:17, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.01em', lineHeight:1.3, marginBottom:14 }}>
                    {d.name}
                  </div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,.82)', lineHeight:1.55 }}>
                    <div style={{ marginBottom:4 }}><span style={{ color:'rgba(255,255,255,.62)' }}>Timeline:</span> {d.timeline}</div>
                    <div><span style={{ color:'rgba(255,255,255,.62)' }}>Customers:</span> {d.customers}</div>
                  </div>
                </div>

                {/* Middle: one-line + bullets */}
                <div style={{ padding:'24px 26px', borderRight:'1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize:16, fontWeight:600, color:'rgba(255,255,255,.95)', lineHeight:1.5, marginBottom:14 }}>
                    {d.oneLine}
                  </div>
                  <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6 }}>
                    {d.bullets.map((b, bi) => (
                      <li key={bi} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:14, color:'rgba(255,255,255,.85)', lineHeight:1.55 }}>
                        <span aria-hidden="true" style={{ color:'rgba(166,183,210,.95)', flexShrink:0, marginTop:1 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CTA */}
                <div style={{ padding:'24px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:14 }}>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:6 }}>
                      Ideal for
                    </div>
                    <div style={{ fontSize:13.5, color:'rgba(255,255,255,.88)', lineHeight:1.5 }}>
                      {d.idealFor}
                    </div>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}?subject=Scope%20a%20${encodeURIComponent(d.name)}`}
                    style={{
                      alignSelf:'flex-start',
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      padding:'8px 14px', fontSize:13, fontWeight:600, textDecoration:'none',
                      background:'rgba(120,144,178,.92)', color:'rgba(255,255,255,.98)',
                      border:'1px solid rgba(166,183,210,.55)',
                      whiteSpace:'nowrap',
                    }}
                  >
                    Scope this →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU ACTUALLY GET. artifacts + sample scorecard */}
      <section style={{ padding:'72px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              What you actually get
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, alignItems:'start' }}>
            {/* Left: 4-bullet artifacts */}
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {ARTIFACTS.map((a, i) => (
                <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'20px 24px' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:8 }}>
                    <div style={{ fontSize:13, fontWeight:700, color:'rgba(166,183,210,.95)', letterSpacing:'.04em', minWidth:18 }}>
                      0{i + 1}
                    </div>
                    <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,.97)' }}>
                      {a.title}
                    </div>
                  </div>
                  <div style={{ fontSize:14, color:'rgba(255,255,255,.84)', lineHeight:1.65, paddingLeft:32 }}>
                    {a.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sample scorecard preview */}
            <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'24px 28px', position:'sticky', top:24 }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,.10)' }}>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:4 }}>
                    Sample Deliverable
                  </div>
                  <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.95)' }}>Mandate Pitch Scorecard</div>
                </div>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.14)', border:'1px solid rgba(166,183,210,.3)', padding:'3px 10px' }}>
                  Anonymised
                </div>
              </div>

              <div style={{ fontSize:13, color:'rgba(255,255,255,.78)', marginBottom:18 }}>
                Enterprise SaaS · 27 customer interviews · benchmarked against 41 prior studies
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:20 }}>
                {SAMPLE_SCORES.map((s, i) => (
                  <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 36px', gap:14, alignItems:'center' }}>
                    <div>
                      <div style={{ fontSize:13, color:'rgba(255,255,255,.88)', marginBottom:6, fontWeight:500 }}>{s.label}</div>
                      <div style={{ height:6, background:'rgba(255,255,255,.08)', borderRadius:1 }}>
                        <div style={{ height:'100%', width:`${(s.score / 10) * 100}%`, background:s.accent, borderRadius:1, transition:'width .3s' }} />
                      </div>
                    </div>
                    <div style={{ fontSize:15, fontWeight:700, color:s.accent, textAlign:'right' }}>{s.score.toFixed(1)}</div>
                  </div>
                ))}
              </div>

              <div style={{ background:'rgba(6,14,28,.6)', borderLeft:'3px solid rgba(166,183,210,.6)', padding:'14px 16px' }}>
                <div style={{ fontSize:14, fontStyle:'italic', color:'rgba(255,255,255,.92)', lineHeight:1.6, marginBottom:8 }}>
                  &ldquo;We&rsquo;ve never seriously evaluated a replacement. It&rsquo;s too embedded in our reporting workflows.&rdquo;
                </div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.72)', fontWeight:500 }}>
                  VP Operations · Enterprise customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY. banker-relevant callouts */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
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
                Every Catalyst report is built on raw verbatims. not curated, not management-supplied, not the operator&rsquo;s reference list. Customers are interviewed independently and answer freely.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:0 }}>
                The same independent evidence is the foundation of every deliverable in the suite. the pitch, the CIM, the buyer&rsquo;s diligence. No restarts. No surprises.
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
                  body: 'Interview structure is fixed across studies. Same questions every time. Scores comparable to 40+ prior engagements.',
                },
                {
                  title: 'Banker-ready output',
                  body: 'Verbatims arrive in slide-ready form: quoted, attributed, scored, mapped to the proof points the pitch needs to win.',
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

      {/* COMPETITIVE CALLOUT. single line, three columns */}
      <section style={{ padding:'56px 0', background:'rgba(255,255,255,.025)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:18 }}>
            Why not expert networks or desk research
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
            {[
              {
                kind: 'Expert networks',
                detail: 'What one expert thinks. One voice. One bias. No score, no benchmark. No way to properly screen the right voices. Hours wasted on calls that do not hold up in diligence.',
                muted: true,
              },
              {
                kind: 'Desk research',
                detail: 'What is already public. The same comps and headlines every other bank is reading.',
                muted: true,
              },
              {
                kind: 'Crossover',
                detail: 'What 30+ of the target&rsquo;s actual customers said. attributed, scored, benchmarked, slide-ready.',
                muted: false,
              },
            ].map((c, i) => (
              <div key={i} style={{
                background: c.muted ? 'rgba(6,14,28,.97)' : 'rgba(120,144,178,.10)',
                padding:'22px 26px',
                borderLeft: !c.muted ? '3px solid rgba(166,183,210,.6)' : 'none',
              }}>
                <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color: c.muted ? 'rgba(255,255,255,.62)' : 'rgba(166,183,210,.95)', marginBottom:10 }}>
                  {c.kind}
                </div>
                <div style={{ fontSize:15, color: c.muted ? 'rgba(255,255,255,.80)' : 'rgba(255,255,255,.95)', fontWeight: c.muted ? 400 : 500, lineHeight:1.6 }} dangerouslySetInnerHTML={{ __html: c.detail }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q OF AI. premium defense + sample scorecard + 15Q carousel */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>

          {/* Header */}
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:48, alignItems:'start', marginBottom:48 }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
                Specialty module &middot; Q of AI
              </div>
              <h2 style={{ fontSize:30, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.02em', lineHeight:1.18, margin:'0 0 18px' }}>
                Buyers price AI defensibility into every bid.<br />
                <span style={{ color:'rgba(166,183,210,.95)' }}>The Q of AI gives management the customer-validated language to defend the premium.</span>
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:'0 0 14px' }}>
                Every PE fund and strategic acquirer now opens with the same diligence question:{' '}
                <em style={{ fontStyle:'italic', color:'rgba(245,200,140,.95)', fontWeight:500 }}>&ldquo;How durable is this company&rsquo;s AI advantage?&rdquo;</em>{' '}
                Generic claims get challenged at first IC and the multiple compresses.
              </p>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.75, margin:0 }}>
                The Q of AI module turns the AI story into a defendable score. 15 customer-validated dimensions across capability and displacement risk. Management walks in with the evidence to hold the premium, not hope for it.
              </p>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
              {[
                { v: '15', l: 'Customer-validated dimensions' },
                { v: '+2 wks', l: 'On top of any deliverable' },
                { v: '40+', l: 'Benchmark comparables' },
              ].map((s, i) => (
                <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'18px 18px' }}>
                  <div style={{ fontSize:24, fontWeight:600, color:'rgba(255,255,255,.97)', letterSpacing:'-.015em', lineHeight:1.1, marginBottom:6 }}>{s.v}</div>
                  <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.78)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample scorecard preview */}
          <div style={{ marginBottom:48 }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', flexWrap:'wrap', gap:14, marginBottom:18 }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.78)' }}>
                Sample Q of AI Scorecard
              </div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,.72)' }}>
                Enterprise SaaS &middot; 27 customer interviews &middot; benchmarked against 41 prior studies
              </div>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {/* AI Capability */}
              <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'22px 24px' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,.10)' }}>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:3 }}>Part I &middot; 10 Dimensions</div>
                    <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,.97)' }}>AI Capability</div>
                  </div>
                  <div style={{ fontSize:32, fontWeight:600, color:'rgba(166,183,210,.97)', letterSpacing:'-.025em', lineHeight:1 }}>8.3</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  {CAPABILITY_DIMS.map((d, i) => (
                    <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 32px', gap:12, alignItems:'center' }}>
                      <div>
                        <div style={{ fontSize:12.5, color:'rgba(255,255,255,.85)', marginBottom:4 }}>{d.label}</div>
                        <div style={{ height:5, background:'rgba(255,255,255,.06)' }}>
                          <div style={{ height:'100%', width:`${(d.score/10)*100}%`, background:'rgba(166,183,210,.85)' }} />
                        </div>
                      </div>
                      <div style={{ fontSize:13, fontWeight:700, color:'rgba(166,183,210,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Resilience */}
              <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'22px 24px' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,.10)' }}>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(140,160,196,.95)', marginBottom:3 }}>Part II &middot; 5 Dimensions</div>
                    <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,.97)' }}>AI Displacement Risk</div>
                  </div>
                  <div style={{ fontSize:32, fontWeight:600, color:'rgba(140,160,196,.97)', letterSpacing:'-.025em', lineHeight:1 }}>8.7</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  {RESILIENCE_DIMS.map((d, i) => (
                    <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 32px', gap:12, alignItems:'center' }}>
                      <div>
                        <div style={{ fontSize:12.5, color:'rgba(255,255,255,.85)', marginBottom:4 }}>{d.label}</div>
                        <div style={{ height:5, background:'rgba(255,255,255,.06)' }}>
                          <div style={{ height:'100%', width:`${(d.score/10)*100}%`, background:'rgba(140,160,196,.85)' }} />
                        </div>
                      </div>
                      <div style={{ fontSize:13, fontWeight:700, color:'rgba(140,160,196,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop:14, fontSize:13, color:'rgba(255,255,255,.72)' }}>
              Composite verdict: <strong style={{ color:'rgba(166,183,210,.95)', fontWeight:600 }}>AI Fortress</strong>. Top 15&ndash;20% of assets we have scored.
            </div>
          </div>

          {/* 15-question carousel */}
          {(() => {
            const q = QUESTIONS[openQ];
            const partColor = q.part === 'I' ? 'rgba(166,183,210,.95)' : 'rgba(140,160,196,.95)';
            const partAccent = q.part === 'I' ? 'rgba(120,144,178,.55)' : 'rgba(89,116,154,.55)';
            const prev = () => setOpenQ((openQ - 1 + QUESTIONS.length) % QUESTIONS.length);
            const next = () => setOpenQ((openQ + 1) % QUESTIONS.length);

            return (
              <div>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', flexWrap:'wrap', gap:14, marginBottom:16 }}>
                  <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.78)' }}>
                    The 15-question instrument
                  </div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,.72)' }}>
                    Every score sourced from verbatim customer responses.
                  </div>
                </div>

                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, marginBottom:14, flexWrap:'wrap' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                    <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.06em', color:'rgba(255,255,255,.85)' }}>
                      {String(openQ + 1).padStart(2,'0')} <span style={{ color:'rgba(255,255,255,.55)' }}>/ {QUESTIONS.length}</span>
                    </div>
                    <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:partColor, background:`${partAccent.replace(',.55',',.14')}`, border:`1px solid ${partAccent}`, padding:'4px 10px', borderRadius:3 }}>
                      Part {q.part}
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <button aria-label="Previous question" onClick={prev} style={{ all:'unset', cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center', width:38, height:38, borderRadius:999, border:'1px solid rgba(166,183,210,.35)', background:'rgba(120,144,178,.10)', color:'rgba(220,232,250,.95)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <button aria-label="Next question" onClick={next} style={{ all:'unset', cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center', width:38, height:38, borderRadius:999, border:'1px solid rgba(166,183,210,.35)', background:'rgba(120,144,178,.10)', color:'rgba(220,232,250,.95)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                  </div>
                </div>

                <div style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', borderLeft:`3px solid ${partAccent}`, padding:'26px 30px', marginBottom:16 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:18 }}>
                    <div style={{ fontSize:13, fontWeight:700, color:partColor }}>{q.num}</div>
                    <h3 style={{ fontSize:20, fontWeight:700, color:'rgba(255,255,255,.97)', margin:0, letterSpacing:'-.015em', lineHeight:1.3 }}>{q.label}</h3>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:22, marginBottom:18 }}>
                    <div>
                      <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:partColor, marginBottom:8 }}>Rating prompt</div>
                      <div style={{ fontSize:14, color:'rgba(255,255,255,.92)', lineHeight:1.7 }}>{q.rating}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:partColor, marginBottom:8 }}>Open-ended prompt</div>
                      <div style={{ fontSize:14, color:'rgba(255,255,255,.92)', lineHeight:1.7 }}>{q.open}</div>
                    </div>
                  </div>
                  <div style={{ borderTop:'1px solid rgba(255,255,255,.10)', paddingTop:14 }}>
                    <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:6 }}>Why it matters</div>
                    <div style={{ fontSize:13.5, color:'rgba(255,255,255,.86)', lineHeight:1.7, fontStyle:'italic' }}>{q.why}</div>
                  </div>
                </div>

                <div style={{ display:'flex', gap:6, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
                  {QUESTIONS.map((qi, i) => {
                    const isActive = i === openQ;
                    const partA = qi.part === 'I';
                    const dotColor = partA ? 'rgba(166,183,210,1)' : 'rgba(140,160,196,1)';
                    return (
                      <button key={i} aria-label={`Go to question ${i + 1}`} onClick={() => setOpenQ(i)}
                        style={{
                          all:'unset', cursor:'pointer',
                          minWidth: isActive ? 44 : 28, height:28, padding:'0 8px',
                          display:'inline-flex', alignItems:'center', justifyContent:'center',
                          borderRadius:999, fontSize:11, fontWeight:700,
                          color: isActive ? 'rgba(10,18,32,.95)' : 'rgba(255,255,255,.78)',
                          background: isActive ? dotColor : 'rgba(255,255,255,.06)',
                          border: `1px solid ${isActive ? dotColor : 'rgba(255,255,255,.14)'}`,
                          transition:'all .15s ease',
                        }}>
                        {qi.num}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Footnote */}
          <div style={{ marginTop:24, fontSize:13, color:'rgba(255,255,255,.78)', lineHeight:1.65, textAlign:'center' }}>
            Plugs into any suite deliverable. Two extra weeks of fieldwork. Delivered with the parent engagement.
          </div>
        </div>
      </section>

      {/* PRICING. milestone-aligned slider, by module + N count */}
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
                      {t.name.split(' ')[0]}
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

      {/* FINAL CTA. explicit ask, explicit response, explicit cadence */}
      <section style={{ padding:'80px 0' }}>
        <div style={{ maxWidth:820, margin:'0 auto', padding:'0 36px', textAlign:'center' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:18 }}>
            How to start
          </div>
          <h2 style={{ fontSize:'clamp(30px, 3.4vw, 40px)', fontWeight:700, color:'rgba(255,255,255,.98)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 18px' }}>
            Name an asset.
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.90)', lineHeight:1.75, margin:'0 0 14px' }}>
            Reply to <a href={`mailto:${CONTACT.email}`} style={{ color:'rgba(230,240,252,.98)', textDecoration:'underline', textDecorationColor:'rgba(166,183,210,.5)', textUnderlineOffset:'3px' }}>{CONTACT.email}</a> with the company name and your pitch date.
          </p>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.84)', lineHeight:1.75, margin:'0 0 32px' }}>
            We&rsquo;ll send back a 1-page Catalyst preview by end of week. what we&rsquo;d find, what proof points we&rsquo;d surface, and what the full scope would look like.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`mailto:${CONTACT.email}?subject=Catalyst%20preview%20request`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 28px', fontSize:15, fontWeight:700, textDecoration:'none', borderRadius:2 }}>
              Email Ian →
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 24px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              Book a 20-min call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
