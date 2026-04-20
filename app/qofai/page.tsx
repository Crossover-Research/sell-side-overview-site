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

const PACKAGES = [
  {
    id: 'capability',
    name: 'AI Capability',
    price: '$25–30k',
    timeline: '2–3 weeks',
    desc: '10 dimensions measuring adoption, value, competitive position, innovation, and accuracy.',
    useCase: 'Marketing proof points · Competitive benchmarking · Pre-pitch positioning',
    dims: 10,
    color: 'rgba(77,144,254,.95)',
  },
  {
    id: 'resilience',
    name: 'AI Structural Position',
    price: '$25–30k',
    timeline: '2–3 weeks',
    desc: '5 dimensions documenting data moats, integration depth, and structural defensibility — the customer evidence behind your durability story.',
    useCase: 'M&A diligence prep · Board presentations · Durability narrative',
    dims: 5,
    color: 'rgba(245,158,11,.95)',
  },
  {
    id: 'complete',
    name: 'Complete Q of AI',
    price: '$40–50k',
    timeline: '3–4 weeks',
    desc: 'Dual scorecard covering all 15 dimensions. AI Fortress companies command 15–25% valuation premiums.',
    useCase: 'Full sell-side process · CIM enhancement · Premium multiple justification',
    dims: 15,
    color: 'rgba(45,212,160,.95)',
    featured: true,
  },
];

const OBJECTIONS = [
  {
    q: '"Won\'t ChatGPT or Claude make this obsolete?"',
    a: 'Counter with a 9.1/10 data lock-in score and customer verbatims from actual failed replacement tests. 18–24 month replication barrier documented from real users — not internal estimates.',
  },
  {
    q: '"Is the company keeping pace with AI-native startups?"',
    a: 'Acknowledge 7.4/10 innovation velocity transparently. Pivot to roadmap credibility (8.0/10) and structural moats that AI-native startups cannot replicate on any timeline.',
  },
  {
    q: '"Why pay a premium multiple?"',
    a: 'AI Fortress quadrant positioning. Only 15–20% of software companies achieve High Capability + High Resilience. Customer-validated scores, not self-reported claims.',
  },
  {
    q: '"Can customers easily switch?"',
    a: 'System-of-record status with 8+ integrations per customer. 6+ month migration timeline. 82% daily active usage creates deep dependency that foundation models cannot overcome.',
  },
];

export default function QofAIPage() {
  const [selectedQ, setSelectedQ] = useState(0);

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

      {/* ── MATRIX + DIMENSIONS (combined) ──────────────────────────────────── */}
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
                  { name:'AI Catalyst',     badge:'Growth Opportunity', color:'rgba(77,144,254,.95)',  bg:'rgba(77,144,254,.08)',  desc:'High Resilience + Emerging AI. Strong structural moats with untapped AI potential.' },
                  { name:'AI Fortress',     badge:'Premium Asset',       color:'rgba(45,212,160,.97)',  bg:'rgba(45,212,160,.07)',  desc:'High Capability + High Resilience. Commands 15–25% valuation premium.', highlight:true },
                  { name:'AI Foundation',   badge:'AI Growth Story',     color:'rgba(255,77,94,.92)',   bg:'rgba(255,77,94,.06)',   desc:'Early-stage AI with meaningful upside on both axes — a clear growth narrative and value creation roadmap for the right acquirer.' },
                  { name:'AI Accelerator',  badge:'Structural Upside',   color:'rgba(245,158,11,.95)',  bg:'rgba(245,158,11,.07)',  desc:'Strong current AI with near-term opportunity to lock in structural moats — a natural value creation lever for the next owner.' },
                ].map((q, i) => (
                  <div key={i} style={{ background: q.highlight ? 'rgba(45,212,160,.05)' : 'rgba(6,14,28,.95)', padding:'20px 20px', borderTop: q.highlight ? '2px solid rgba(45,212,160,.4)' : '2px solid transparent', position:'relative' }}>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:q.color, background:q.bg, padding:'2px 7px', display:'inline-block', marginBottom:8 }}>{q.badge}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700, color:q.color, marginBottom:6 }}>{q.name}</div>
                    <div style={{ fontSize:11.5, color:'rgba(255,255,255,.72)', lineHeight:1.55 }}>{q.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginTop:8, textAlign:'center' }}>
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

              {/* Capability */}
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

              {/* Resilience */}
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

      {/* ── IC OBJECTION PREP — DROPDOWN ────────────────────────────────────── */}
      <section style={{ padding:'56px 0', background:'rgba(255,255,255,.025)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>

          <div style={{ display:'grid', gridTemplateColumns:'340px 1fr', gap:48, alignItems:'start' }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>IC Objection Prep</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', lineHeight:1.25, marginBottom:12 }}>
                Every IC has an AI question. Walk in with a customer-backed answer.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.72, marginBottom:0 }}>
                Generic "AI-powered" claims get challenged at the first IC. The Q of AI gives you customer-validated language for every question — so management walks in with evidence, not assertions.
              </p>
            </div>

            <div>
              {/* Dropdown question selector */}
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

              {/* Answer panel */}
              <div style={{ background:'rgba(6,14,28,.95)', border:'1px solid rgba(255,255,255,.1)', borderTop:'2px solid rgba(45,212,160,.4)', padding:'20px 22px' }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.88)', marginBottom:10 }}>
                  Prepared Answer
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.88)', lineHeight:1.75 }}>
                  {OBJECTIONS[selectedQ].a}
                </div>
              </div>

              {/* All questions as quick-nav chips */}
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

      {/* ── PACKAGES ────────────────────────────────────────────────────────── */}
      <section style={{ padding:'56px 0', background:'linear-gradient(168deg,#050e1e 0%,#081628 100%)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>

          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap', marginBottom:28 }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>Assessment Packages</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', margin:0, lineHeight:1.25 }}>
                Three scopes. Every score from real customers.
              </h2>
            </div>
            <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', margin:0, maxWidth:380, textAlign:'right', lineHeight:1.6 }}>
              Every package includes a visual scorecard, 25+ slide VoC report, customer verbatims, and CIM-ready positioning language.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'rgba(255,255,255,.09)', marginBottom:28 }}>
            {PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                style={{
                  background: pkg.featured ? 'rgba(45,212,160,.04)' : 'rgba(6,14,28,.95)',
                  padding:'24px 24px',
                  borderTop: pkg.featured ? '2px solid rgba(45,212,160,.5)' : '2px solid transparent',
                  position:'relative',
                }}
              >
                {pkg.featured && (
                  <div style={{ position:'absolute', top:12, right:14, fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.95)', background:'rgba(45,212,160,.12)', padding:'2px 8px' }}>
                    Most Complete
                  </div>
                )}
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:pkg.color, marginBottom:6 }}>
                  {pkg.dims} Dimension{pkg.dims > 1 ? 's' : ''}
                </div>
                <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.95)', marginBottom:6 }}>{pkg.name}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:20, fontWeight:700, color:pkg.color, letterSpacing:'-.02em', marginBottom:3 }}>{pkg.price}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.72)', marginBottom:14 }}>{pkg.timeline}</div>
                <div style={{ fontSize:12.5, color:'rgba(255,255,255,.80)', lineHeight:1.65, marginBottom:12 }}>{pkg.desc}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.68)', lineHeight:1.6, fontStyle:'italic' }}>{pkg.useCase}</div>
              </div>
            ))}
          </div>

          {/* Every package includes */}
          <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.09)', padding:'18px 24px' }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.65)', marginBottom:14 }}>Every Package Includes</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
              {[
                { title:'Visual Scorecard',      desc:'CIM-ready slides with quantified scores across all dimensions' },
                { title:'Full VoC Report',        desc:'25+ slides: executive summary, benchmarking, verbatim customer quotes' },
                { title:'AI Resilience Matrix',   desc:'Quadrant positioning: Fortress / Catalyst / Accelerator / Foundation' },
                { title:'IC Preparation Pack',    desc:'Customer-backed language for every AI question an IC will raise' },
              ].map((item,i) => (
                <div key={i} style={{ borderLeft:'2px solid rgba(45,212,160,.35)', paddingLeft:12 }}>
                  <div style={{ fontSize:12, fontWeight:700, color:'rgba(255,255,255,.85)', marginBottom:4 }}>{item.title}</div>
                  <div style={{ fontSize:11.5, color:'rgba(255,255,255,.72)', lineHeight:1.55 }}>{item.desc}</div>
                </div>
              ))}
            </div>
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
