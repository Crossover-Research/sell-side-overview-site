'use client';
import { useState } from 'react';
import { CONTACT } from '../../lib/config/site';

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

const FEATURES = [
  { label: 'AI Capability Score (10 dims)',  capability: true,  structural: false, complete: true  },
  { label: 'AI Resilience Score (5 dims)',   capability: false, structural: true,  complete: true  },
  { label: 'AI Fortress Matrix',             capability: false, structural: true,  complete: true  },
  { label: 'Visual Scorecard (CIM-ready)',   capability: true,  structural: true,  complete: true  },
  { label: 'VoC Report (25+ slides)',        capability: true,  structural: true,  complete: true  },
  { label: 'Customer verbatims',             capability: true,  structural: true,  complete: true  },
  { label: 'IC Preparation Pack',           capability: false, structural: false, complete: true  },
  { label: 'Competitor benchmarking',       capability: true,  structural: false, complete: true  },
  { label: 'CIM positioning language',      capability: true,  structural: true,  complete: true  },
];

const OBJECTIONS = [
  {
    q: '"Won\'t ChatGPT or Claude make this obsolete?"',
    a: 'Lead with the 9.1/10 data lock-in score and the 18–24 month documented replication barrier from actual customer interviews — not analyst projections. Customers in the study report that ChatGPT and Claude fail without the domain-specific training data this company has accumulated over years of operation. Then pivot: foundation models actually validate the moat, because every integration that makes the product more intelligent widens the barrier. Quote verbatims from customers who tested alternatives and couldn\'t replicate functionality. The objection answers itself when buyers hear it from users.',
  },
  {
    q: '"Is the company keeping pace with AI-native startups?"',
    a: 'Acknowledge the 7.4/10 innovation velocity score directly — it demonstrates the data is real and uncoached, which builds credibility for everything else. Then reframe what innovation velocity actually measures: feature release cadence, not structural position. AI-native startups are building on generic infrastructure. This company has 8.9/10 feature adoption, 8+ integrations per customer, and years of domain-specific usage patterns creating proprietary data loops that cannot be replicated from scratch. The relevant comparison isn\'t how fast each side ships features — it\'s how defensible their positions are once you\'re embedded. Roadmap credibility at 8.0/10 means customers believe the company knows what to build next and why.',
  },
  {
    q: '"Why pay a premium multiple?"',
    a: 'Only 15–20% of software companies assessed achieve AI Fortress positioning — High Capability combined with High Resilience. Present the AI Resilience Matrix as independent benchmarking, not a self-assessment: these scores come from the company\'s actual customers, collected without management present or briefed, using the same methodology applied across 50+ mandates. That independence is what justifies a 15–25% premium over peer comps. The ask isn\'t to trust management\'s AI narrative. It\'s to trust 30+ independent customer voices who had no stake in the valuation outcome.',
  },
  {
    q: '"Can customers easily switch?"',
    a: 'Eight or more integrations per customer means migration is not a switching decision — it\'s a 6+ month cross-functional re-platforming project that requires executive sponsorship and carries significant operational risk. The 9.1/10 data lock-in score reflects customers\' own assessment of how embedded the product is in their daily workflows. 82% daily active usage means it\'s in the critical path of everyday operations, not a peripheral tool. Layer on the 18–24 month barrier for any competitor to replicate domain-specific training data, and the switching economics break down entirely. A foundation model cannot replace a system-of-record without the entire historical decision log, integration layer, and institutional knowledge that defines it.',
  },
  {
    q: '"How do we know the AI claims aren\'t marketing?"',
    a: 'The 8.6/10 Marketing Claims vs. Reality dimension specifically measures this: do customers experience what the company says publicly? It is the single most powerful answer to this objection, because the evaluation is done by buyers, not the seller. Every score in the Q of AI is derived from structured interviews with the company\'s own customers — collected by Crossover independently, without management present, briefed, or given advance sight of the questions. A high score here is customer-validated proof that the company\'s AI positioning is grounded in actual product experience, not aspirational marketing language.',
  },
  {
    q: '"What happens if a larger vendor acquires a competing AI provider?"',
    a: 'The 9.0/10 AI Leapfrog Resistance score documents how vulnerable customers perceive the product to be against a competitive leapfrog — and the answer is: not very. The company\'s AI advantage is not dependent on any single foundational model. It is built on years of domain-specific usage patterns, proprietary workflows, and integrations that cannot be replicated by acquiring a generic AI infrastructure provider. Customers who attempted to replicate functionality with alternative AI providers report an 18–24 month replication barrier. The moat is in the data and the context, not the underlying model — which means a vendor acquisition of an AI layer doesn\'t change the competitive calculus.',
  },
];

export default function QofAIPage() {
  const [selectedQ, setSelectedQ] = useState(0);

  const check = (val: boolean) => (
    <span style={{ fontSize:14, color: val ? 'rgba(45,212,160,.95)' : 'rgba(255,255,255,.18)', lineHeight:1 }}>
      {val ? '✓' : '—'}
    </span>
  );

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'44px 0 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 400px', gap:52, alignItems:'center', paddingBottom:36 }}>

            <div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(45,212,160,.9)', background:'rgba(45,212,160,.09)', border:'1px solid rgba(45,212,160,.25)', padding:'3px 12px', marginBottom:18 }}>
                New Product
              </div>
              <h1 style={{ fontSize:42, fontWeight:700, color:'rgba(255,255,255,.97)', lineHeight:1.1, letterSpacing:'-.04em', marginBottom:16 }}>
                Quality of AI<br />
                <span style={{ color:'rgba(255,255,255,.60)', fontWeight:300 }}>Assessment</span>
              </h1>
              <p style={{ fontSize:14, color:'rgba(255,255,255,.80)', lineHeight:1.78, marginBottom:24 }}>
                Every PE fund and strategic acquirer now opens with the same question:{' '}
                <em style={{ color:'rgba(255,200,100,.92)', fontStyle:'normal', fontWeight:500 }}>"How durable is this company's AI advantage?"</em>{' '}
                Generic claims get challenged at first IC. Scores derived from actual customers — collected independently, uncoached — give you the language to justify a premium.
              </p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <a href={`mailto:${CONTACT.email}`} style={{ background:'rgba(255,255,255,.95)', color:'#050e1e', padding:'9px 22px', fontSize:12, fontWeight:700, textDecoration:'none', display:'inline-flex', alignItems:'center' }}>
                  Request Assessment →
                </a>
                <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.85)', border:'1px solid rgba(255,255,255,.25)', padding:'9px 18px', fontSize:12, fontWeight:500, textDecoration:'none' }}>
                  Book a Call
                </a>
              </div>
            </div>

            {/* Scorecard preview */}
            <div style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.12)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(45,212,160,.4),transparent)' }} />
              <div style={{ padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,.08)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.68)', marginBottom:2 }}>Sample Scorecard</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,.68)' }}>Enterprise SaaS · Anonymised</div>
                </div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.95)', background:'rgba(45,212,160,.13)', border:'1px solid rgba(45,212,160,.3)', padding:'3px 10px' }}>
                  AI FORTRESS
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(255,255,255,.07)' }}>
                {[
                  { val:'8.3', lbl:'AI Capability',    sub:'10 dimensions',     color:'rgba(77,144,254,.95)'  },
                  { val:'8.7', lbl:'AI Resilience',     sub:'5 dimensions',      color:'rgba(45,212,160,.95)'  },
                  { val:'82%', lbl:'Daily AI Adoption', sub:'14.2 hrs/wk saved', color:'rgba(255,255,255,.90)' },
                  { val:'9.1', lbl:'Data Lock-In',      sub:'18–24 mo barrier',  color:'rgba(245,158,11,.95)'  },
                ].map((m,i) => (
                  <div key={i} style={{ background:'rgba(6,14,28,.92)', padding:'14px 16px' }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:26, fontWeight:700, color:m.color, lineHeight:1, letterSpacing:'-.03em', marginBottom:4 }}>{m.val}</div>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'rgba(255,255,255,.78)', marginBottom:2 }}>{m.lbl}</div>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,.68)' }}>{m.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding:'12px 18px' }}>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.75)', fontStyle:'italic', lineHeight:1.6, marginBottom:6 }}>
                  "We tested ChatGPT and Claude as replacements, but they failed completely without our domain data."
                </div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,.65)' }}>VP of Operations · Enterprise Customer (12+ integrations)</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MATRIX + DIMENSIONS ─────────────────────────────────────────────── */}
      <section style={{ padding:'56px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>

            {/* Left: Quadrant matrix */}
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>AI Resilience Matrix</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', marginBottom:12, lineHeight:1.25 }}>
                Map the AI position. Build the case before buyers define it.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.7, marginBottom:22 }}>
                The Q of AI gives you a customer-validated framework to position the asset's AI story before the process opens — and the language to justify a premium multiple when it does.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.09)' }}>
                {[
                  { name:'AI Catalyst',    badge:'Growth Opportunity', color:'rgba(77,144,254,.95)',  bg:'rgba(77,144,254,.08)',  desc:'High Resilience + Emerging AI. Strong structural moats with untapped AI potential.' },
                  { name:'AI Fortress',    badge:'Premium Asset',       color:'rgba(45,212,160,.97)',  bg:'rgba(45,212,160,.07)',  desc:'High Capability + High Resilience. Commands 15–25% valuation premium.', highlight:true },
                  { name:'AI Foundation',  badge:'AI Growth Story',     color:'rgba(255,77,94,.92)',   bg:'rgba(255,77,94,.06)',   desc:'Early-stage AI with meaningful upside on both axes — a clear growth narrative for the right acquirer.' },
                  { name:'AI Accelerator', badge:'Structural Upside',   color:'rgba(245,158,11,.95)',  bg:'rgba(245,158,11,.07)',  desc:'Strong current AI with near-term opportunity to lock in structural moats — a value creation lever for the next owner.' },
                ].map((q, i) => (
                  <div key={i} style={{ background: q.highlight ? 'rgba(45,212,160,.05)' : 'rgba(6,14,28,.95)', padding:'20px 20px', borderTop: q.highlight ? '2px solid rgba(45,212,160,.4)' : '2px solid transparent' }}>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:q.color, background:q.bg, padding:'2px 7px', display:'inline-block', marginBottom:8 }}>{q.badge}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700, color:q.color, marginBottom:6 }}>{q.name}</div>
                    <div style={{ fontSize:11.5, color:'rgba(255,255,255,.72)', lineHeight:1.55 }}>{q.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.38)', marginTop:8, textAlign:'center' }}>
                X: AI Resilience → &nbsp;&nbsp; Y: AI Capability →
              </div>
            </div>

            {/* Right: 15 dimensions */}
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>The Framework</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', marginBottom:12, lineHeight:1.25 }}>
                15 dimensions. Two independent scores.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.7, marginBottom:16 }}>
                Every score derived from structured customer interviews — not internal benchmarks.
              </p>
              <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(77,144,254,.2)', overflow:'hidden', marginBottom:2 }}>
                <div style={{ background:'rgba(77,144,254,.07)', borderBottom:'1px solid rgba(77,144,254,.15)', padding:'12px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(77,144,254,.85)', marginBottom:2 }}>Part I · 10 Dimensions</div>
                    <div style={{ fontSize:14, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.02em' }}>AI Capability Score</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:32, fontWeight:700, color:'rgba(77,144,254,.97)', letterSpacing:'-.04em', lineHeight:1 }}>83</div>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,.68)', letterSpacing:'.06em' }}>/ 100</div>
                  </div>
                </div>
                {CAPABILITY_DIMS.map((d,i) => (
                  <div key={i} style={{ padding:'8px 18px', borderBottom: i < CAPABILITY_DIMS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none', display:'grid', gridTemplateColumns:'1fr 32px', alignItems:'center', gap:12 }}>
                    <div>
                      <div style={{ fontSize:11.5, color:'rgba(255,255,255,.82)', marginBottom:5, fontWeight:500 }}>{d.label}</div>
                      <div style={{ height:2, background:'rgba(255,255,255,.08)', borderRadius:1, overflow:'hidden' }}>
                        <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'rgba(77,144,254,.8)' }} />
                      </div>
                    </div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:'rgba(77,144,254,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                  </div>
                ))}
              </div>
              <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(45,212,160,.2)', overflow:'hidden' }}>
                <div style={{ background:'rgba(45,212,160,.05)', borderBottom:'1px solid rgba(45,212,160,.15)', padding:'12px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.85)', marginBottom:2 }}>Part II · 5 Dimensions</div>
                    <div style={{ fontSize:14, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.02em' }}>AI Resilience Score</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:32, fontWeight:700, color:'rgba(45,212,160,.97)', letterSpacing:'-.04em', lineHeight:1 }}>87</div>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,.68)', letterSpacing:'.06em' }}>/ 100</div>
                  </div>
                </div>
                {RESILIENCE_DIMS.map((d,i) => (
                  <div key={i} style={{ padding:'8px 18px', borderBottom: i < RESILIENCE_DIMS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none', display:'grid', gridTemplateColumns:'1fr 32px', alignItems:'center', gap:12 }}>
                    <div>
                      <div style={{ fontSize:11.5, color:'rgba(255,255,255,.82)', marginBottom:5, fontWeight:500 }}>{d.label}</div>
                      <div style={{ height:2, background:'rgba(255,255,255,.08)', borderRadius:1, overflow:'hidden' }}>
                        <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'rgba(45,212,160,.8)' }} />
                      </div>
                    </div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:'rgba(45,212,160,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                  </div>
                ))}
                <div style={{ margin:'0 18px 14px', paddingTop:12 }}>
                  <div style={{ background:'rgba(45,212,160,.07)', border:'1px solid rgba(45,212,160,.22)', padding:'10px 14px' }}>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.85)', marginBottom:3 }}>Verdict</div>
                    <div style={{ fontSize:12, fontWeight:700, color:'rgba(45,212,160,.97)', marginBottom:2 }}>AI Fortress — Premium Asset</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,.72)' }}>Top 15–20% of assessed software companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IC PREP — DROPDOWN ──────────────────────────────────────────────── */}
      <section style={{ padding:'56px 0', background:'rgba(255,255,255,.025)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'340px 1fr', gap:48, alignItems:'start' }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>IC Preparation</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', lineHeight:1.25, marginBottom:12 }}>
                Every IC has an AI question. Walk in with a customer-backed answer.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.72, marginBottom:0 }}>
                Generic "AI-powered" claims get challenged at the first IC. The Q of AI gives you customer-validated language for every question — so management walks in with evidence, not assertions.
              </p>
            </div>

            <div>
              <div style={{ marginBottom:16 }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:8 }}>
                  Select an IC question
                </div>
                <div style={{ position:'relative' }}>
                  <select
                    value={selectedQ}
                    onChange={e => setSelectedQ(Number(e.target.value))}
                    style={{
                      width:'100%', background:'rgba(6,14,28,.95)',
                      border:'1px solid rgba(255,255,255,.18)',
                      color:'rgba(255,255,255,.92)', padding:'12px 40px 12px 16px',
                      fontSize:13, fontWeight:500, appearance:'none',
                      cursor:'pointer', outline:'none',
                      fontFamily:'var(--font-body)',
                    }}
                  >
                    {OBJECTIONS.map((o, i) => (
                      <option key={i} value={i}>{o.q}</option>
                    ))}
                  </select>
                  <div style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', pointerEvents:'none', color:'rgba(255,255,255,.55)', fontSize:12 }}>▾</div>
                </div>
              </div>

              <div style={{ background:'rgba(6,14,28,.95)', border:'1px solid rgba(255,255,255,.1)', borderTop:'2px solid rgba(45,212,160,.4)', padding:'20px 22px' }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.88)', marginBottom:10 }}>
                  Prepared Answer
                </div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,.85)', lineHeight:1.8 }}>
                  {OBJECTIONS[selectedQ].a}
                </div>
              </div>

              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:12 }}>
                {OBJECTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedQ(i)}
                    style={{
                      fontSize:11, fontWeight:600, padding:'4px 12px',
                      background: selectedQ === i ? 'rgba(45,212,160,.12)' : 'rgba(255,255,255,.04)',
                      border: `1px solid ${selectedQ === i ? 'rgba(45,212,160,.35)' : 'rgba(255,255,255,.1)'}`,
                      color: selectedQ === i ? 'rgba(45,212,160,.95)' : 'rgba(255,255,255,.65)',
                      cursor:'pointer', transition:'all .12s',
                    }}
                  >
                    Q{i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ───────────────────────────────────────────────────── */}
      <section style={{ padding:'56px 0', background:'linear-gradient(168deg,#050e1e 0%,#081628 100%)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>

          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap', marginBottom:32 }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>Assessment Packages</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', margin:0, lineHeight:1.25 }}>
                Three scopes. Every score from real customers.
              </h2>
            </div>
            <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', margin:0, maxWidth:380, textAlign:'right', lineHeight:1.6 }}>
              Commission the full assessment or individual modules. All scores from independent customer interviews.
            </p>
          </div>

          {/* Pricing comparison table */}
          <div style={{ border:'1px solid rgba(255,255,255,.1)', overflow:'hidden', marginBottom:24 }}>

            {/* Header row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 160px 160px 200px', background:'rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.1)' }}>
              <div style={{ padding:'14px 20px' }} />
              {[
                { name:'AI Capability', price:'$25–30k', time:'2–3 wks', color:'rgba(77,144,254,.95)',  featured:false },
                { name:'AI Structural', price:'$25–30k', time:'2–3 wks', color:'rgba(245,158,11,.95)',  featured:false },
                { name:'Complete Q of AI', price:'$40–50k', time:'3–4 wks', color:'rgba(45,212,160,.97)', featured:true },
              ].map((col, i) => (
                <div key={i} style={{
                  padding:'14px 18px',
                  borderLeft:'1px solid rgba(255,255,255,.08)',
                  borderTop: col.featured ? `2px solid ${col.color}` : '2px solid transparent',
                  background: col.featured ? 'rgba(45,212,160,.04)' : 'transparent',
                  position:'relative',
                }}>
                  {col.featured && (
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.9)', background:'rgba(45,212,160,.12)', padding:'2px 7px', display:'inline-block', marginBottom:6 }}>Recommended</div>
                  )}
                  <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.92)', marginBottom:4 }}>{col.name}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:18, fontWeight:700, color:col.color, letterSpacing:'-.02em', marginBottom:2 }}>{col.price}</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,.52)' }}>{col.time}</div>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 160px 160px 200px', borderBottom: i < FEATURES.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none', background:'rgba(6,14,28,.95)' }}>
                <div style={{ padding:'11px 20px', fontSize:12.5, color:'rgba(255,255,255,.78)', display:'flex', alignItems:'center' }}>{f.label}</div>
                <div style={{ padding:'11px 18px', borderLeft:'1px solid rgba(255,255,255,.05)', display:'flex', alignItems:'center' }}>{check(f.capability)}</div>
                <div style={{ padding:'11px 18px', borderLeft:'1px solid rgba(255,255,255,.05)', display:'flex', alignItems:'center' }}>{check(f.structural)}</div>
                <div style={{ padding:'11px 18px', borderLeft:'1px solid rgba(255,255,255,.05)', background:'rgba(45,212,160,.025)', display:'flex', alignItems:'center' }}>{check(f.complete)}</div>
              </div>
            ))}

            {/* CTA row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 160px 160px 200px', background:'rgba(255,255,255,.03)', borderTop:'1px solid rgba(255,255,255,.08)' }}>
              <div style={{ padding:'14px 20px', fontSize:12, color:'rgba(255,255,255,.52)', display:'flex', alignItems:'center' }}>
                Commission a scope →
              </div>
              {[false, false, true].map((featured, i) => (
                <div key={i} style={{ padding:'12px 18px', borderLeft:'1px solid rgba(255,255,255,.08)', background: featured ? 'rgba(45,212,160,.04)' : 'transparent', display:'flex', alignItems:'center' }}>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      fontSize:11, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap',
                      color: featured ? 'rgba(45,212,160,.97)' : 'rgba(255,255,255,.65)',
                      background: featured ? 'rgba(45,212,160,.12)' : 'rgba(255,255,255,.06)',
                      border: `1px solid ${featured ? 'rgba(45,212,160,.3)' : 'rgba(255,255,255,.1)'}`,
                      padding:'6px 14px',
                      display:'inline-block',
                    }}
                  >
                    Get started →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <div style={{ fontSize:12, color:'rgba(255,255,255,.45)', textAlign:'center' }}>
            All packages include visual scorecard, 25+ slide VoC report, customer verbatims, and CIM-ready positioning language.
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section style={{ padding:'52px 0', textAlign:'center' }}>
        <div style={{ maxWidth:680, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(45,212,160,.85)', marginBottom:14 }}>Commission the Q of AI</div>
          <h2 style={{ fontSize:28, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.025em', lineHeight:1.2, marginBottom:12 }}>
            Pre-empt the objection.<br />Commission the Q of AI.
          </h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.75, marginBottom:28 }}>
            Institutional buyers are pricing AI capability and defensibility into every bid. Companies that arrive with customer-validated evidence don't just answer the question — they set the terms. AI Fortress positioning: 15–25% valuation premium. Three to four weeks. Real customers. Independent collection.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:18 }}>
            <a href={`mailto:${CONTACT.email}`} style={{ background:'rgba(255,255,255,.95)', color:'#050e1e', padding:'11px 26px', fontSize:13, fontWeight:700, textDecoration:'none' }}>
              Email Ian →
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.82)', border:'1px solid rgba(255,255,255,.25)', padding:'11px 20px', fontSize:13, fontWeight:500, textDecoration:'none' }}>
              Book a Call
            </a>
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.68)' }}>{CONTACT.email}</div>
        </div>
      </section>
    </>
  );
}
