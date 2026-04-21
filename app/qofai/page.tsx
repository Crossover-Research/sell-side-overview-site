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

const OBJECTIONS = [
  {
    tag: 'Foundation model risk',
    q: "Won't ChatGPT or Claude make this obsolete?",
    stat: { label: 'Data Lock-In Score', val: '9.1/10' },
    answer: "Lead with the 9.1/10 data lock-in score and the documented 18-24 month replication barrier from actual customer interviews, not analyst projections. Customers in the study report that ChatGPT and Claude fail without the domain-specific training data this company has built over years. Then pivot: foundation models validate the moat, because every integration that makes the product more intelligent deepens the barrier. Quote verbatims from customers who tested alternatives and couldn't replicate functionality. The objection answers itself when buyers hear it from the company's own users.",
    close: "Foundation models don't replace domain data. They expose how much of it this company has.",
  },
  {
    tag: 'Innovation velocity',
    q: 'Is the company keeping pace with AI-native startups?',
    stat: { label: 'Feature Adoption Score', val: '8.9/10' },
    answer: "Acknowledge the 7.4/10 innovation velocity score directly. Transparency here builds credibility for every other number. Then reframe what innovation velocity measures: feature cadence, not structural position. AI-native startups are building on generic infrastructure. This company has 8.9/10 feature adoption, 8+ integrations per customer, and years of domain-specific usage patterns creating proprietary data loops no startup can replicate from scratch. Roadmap credibility at 8.0/10 means customers believe the company knows what to build next and why. The comparison isn't speed. It's defensibility once embedded.",
    close: "The question isn't who ships faster. It's who can't be replaced once you're in.",
  },
  {
    tag: 'Multiple justification',
    q: 'Why pay a premium multiple?',
    stat: { label: 'AI Fortress rate across assessed cos.', val: '15-20%' },
    answer: "Only 15-20% of software companies assessed achieve AI Fortress positioning: High Capability combined with High Resilience. Present the AI Resilience Matrix as independent benchmarking, not a self-assessment. These scores come from actual customers, collected by Crossover without management present or briefed, using the same methodology across 50+ mandates. That independence is what supports a 15-25% premium over peer comps. The ask isn't to trust management's AI narrative. It's to trust 30+ customer voices who had no stake in the valuation outcome and still said what they said.",
    close: "Customer-validated scores support a 15-25% premium over peer comps.",
  },
  {
    tag: 'Switching risk',
    q: 'Can customers easily switch?',
    stat: { label: 'Data Lock-In Score', val: '9.1/10' },
    answer: "Eight or more integrations per customer means migration isn't a switching decision. It's a 6+ month cross-functional re-platforming project requiring executive sponsorship. The 9.1/10 data lock-in score reflects customers' own assessment of how embedded the product is in their workflows. 82% daily active usage places it in the critical path of everyday operations. Layer on the 18-24 month barrier to replicate domain-specific training data, and the switching economics collapse. A foundation model cannot replace a system-of-record without the historical decision log, integration layer, and institutional knowledge that define it.",
    close: "Migration is a board-level project. Switching is not the right frame.",
  },
  {
    tag: 'Claim credibility',
    q: "How do we know the AI claims aren't just marketing?",
    stat: { label: 'Marketing Claims vs. Reality', val: '8.6/10' },
    answer: "The 8.6/10 Marketing Claims vs. Reality dimension specifically measures this: do customers experience what the company says publicly? This is the most powerful answer to the objection because the assessment is done by the company's own customers, not the seller. Every score in the Q of AI is derived from structured interviews collected by Crossover without management present, briefed, or given advance sight of the questions. A high score here is customer-validated proof that the AI positioning is grounded in actual product experience, not aspirational copy.",
    close: "The customers scored it. Not the company. That's the point.",
  },
  {
    tag: 'Competitive leapfrog',
    q: 'What if a larger vendor acquires a competing AI provider?',
    stat: { label: 'AI Leapfrog Resistance', val: '9.0/10' },
    answer: "The 9.0/10 AI Leapfrog Resistance score documents customer perception of vulnerability to competitive leapfrog. The answer is: low. The AI advantage here is not dependent on any single foundational model. It is built on years of domain-specific usage patterns, proprietary workflows, and integrations that cannot be replicated by acquiring a generic AI infrastructure layer. Customers who tested alternative AI providers report an 18-24 month replication barrier. The moat is in the data and the context, not the underlying model. A vendor acquisition of an AI layer doesn't change the competitive calculus.",
    close: "The moat is domain data and context. Not which model sits on top of it.",
  },
];

export default function QofAIPage() {
  const [selectedQ, setSelectedQ] = useState(0);
  const [tierIdx, setTierIdx] = useState(2); // default: Full Assessment
  const [scoreTab, setScoreTab] = useState<'capability'|'resilience'>('capability');

  return (
    <>
      {/* HERO */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'44px 0 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 400px', gap:52, alignItems:'center', paddingBottom:36 }}>
            <div>
              <div style={{ display:'inline-flex', alignItems:'center', fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(45,212,160,.9)', background:'rgba(45,212,160,.09)', border:'1px solid rgba(45,212,160,.25)', padding:'3px 12px', marginBottom:18 }}>
                New Product
              </div>
              <h1 style={{ fontSize:42, fontWeight:700, color:'rgba(255,255,255,.97)', lineHeight:1.1, letterSpacing:'-.04em', marginBottom:16 }}>
                Quality of AI<br />
                <span style={{ color:'rgba(255,255,255,.55)', fontWeight:300 }}>Assessment</span>
              </h1>
              <p style={{ fontSize:14, color:'rgba(255,255,255,.82)', lineHeight:1.78, marginBottom:24 }}>
                Every PE fund and strategic acquirer now opens with the same question:{' '}
                <em style={{ color:'rgba(255,200,100,.92)', fontStyle:'normal', fontWeight:500 }}>"How durable is this company's AI advantage?"</em>{' '}
                Generic claims get challenged at first IC. Scores derived from actual customers, collected independently, uncoached, give you the language to justify a premium.
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
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:2 }}>Sample Scorecard</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,.65)' }}>Enterprise SaaS · Anonymised</div>
                </div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.95)', background:'rgba(45,212,160,.13)', border:'1px solid rgba(45,212,160,.3)', padding:'3px 10px' }}>AI FORTRESS</div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(255,255,255,.07)' }}>
                {[
                  { val:'8.3', lbl:'AI Capability',    sub:'10 dimensions',     color:'rgba(77,144,254,.95)'  },
                  { val:'8.7', lbl:'AI Resilience',     sub:'5 dimensions',      color:'rgba(45,212,160,.95)'  },
                  { val:'82%', lbl:'Daily AI Adoption', sub:'14.2 hrs/wk saved', color:'rgba(255,255,255,.92)' },
                  { val:'9.1', lbl:'Data Lock-In',      sub:'18-24 mo barrier',  color:'rgba(245,158,11,.95)'  },
                ].map((m,i) => (
                  <div key={i} style={{ background:'rgba(6,14,28,.92)', padding:'14px 16px' }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:26, fontWeight:700, color:m.color, lineHeight:1, letterSpacing:'-.03em', marginBottom:4 }}>{m.val}</div>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'rgba(255,255,255,.82)', marginBottom:2 }}>{m.lbl}</div>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,.68)' }}>{m.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding:'12px 18px' }}>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.78)', fontStyle:'italic', lineHeight:1.6, marginBottom:6 }}>
                  "We tested ChatGPT and Claude as replacements, but they failed completely without our domain data."
                </div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,.60)' }}>VP of Operations · Enterprise Customer (12+ integrations)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATRIX + DIMENSIONS */}
      <section style={{ padding:'40px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>
            <div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', marginBottom:18, lineHeight:1.25 }}>
                Map the AI position. Build the case before buyers define it.
              </h2>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.09)' }}>
                {[
                  { name:'AI Catalyst',    badge:'Growth Opportunity', color:'rgba(77,144,254,.95)',  bg:'rgba(77,144,254,.08)',  desc:'High Resilience, emerging AI capability. Strong moats with untapped upside.' },
                  { name:'AI Fortress',    badge:'Premium Asset',       color:'rgba(45,212,160,.97)',  bg:'rgba(45,212,160,.07)',  desc:'High Capability + High Resilience. Top 15-20% of all companies assessed.', highlight:true },
                  { name:'AI Foundation',  badge:'AI Growth Story',     color:'rgba(255,77,94,.92)',   bg:'rgba(255,77,94,.06)',   desc:'Early-stage AI with upside on both axes. A growth narrative for the right acquirer.' },
                  { name:'AI Accelerator', badge:'Structural Upside',   color:'rgba(245,158,11,.95)',  bg:'rgba(245,158,11,.07)',  desc:'Strong AI capability. Near-term opportunity to lock in structural defensibility.' },
                ].map((q, i) => (
                  <div key={i} style={{ background: (q as any).highlight ? 'rgba(45,212,160,.05)' : 'rgba(6,14,28,.95)', padding:'20px', borderTop: (q as any).highlight ? '2px solid rgba(45,212,160,.4)' : '2px solid transparent' }}>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:q.color, background:q.bg, padding:'2px 7px', display:'inline-block', marginBottom:8 }}>{q.badge}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700, color:q.color, marginBottom:6 }}>{q.name}</div>
                    <div style={{ fontSize:11.5, color:'rgba(255,255,255,.75)', lineHeight:1.55 }}>{q.desc}</div>
                  </div>
                ))}
              </div>

            </div>

            <div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', marginBottom:14, lineHeight:1.25 }}>
                15 dimensions. Two independent scores.
              </h2>

              {/* Score tab selector */}
              <div style={{ display:'flex', gap:1, background:'rgba(255,255,255,.07)', marginBottom:2 }}>
                {([
                  { id:'capability' as const, label:'AI Capability', sub:'10 dimensions', score:83, color:'rgba(77,144,254,.95)', bg:'rgba(77,144,254,.07)' },
                  { id:'resilience' as const, label:'AI Resilience', sub:'5 dimensions', score:87, color:'rgba(45,212,160,.97)', bg:'rgba(45,212,160,.05)' },
                ] as const).map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setScoreTab(tab.id)}
                    style={{
                      all:'unset', cursor:'pointer', flex:1, padding:'12px 16px',
                      background: scoreTab === tab.id ? tab.bg : 'rgba(6,14,28,.95)',
                      borderBottom: `2px solid ${scoreTab === tab.id ? tab.color : 'transparent'}`,
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      transition:'all .12s',
                    }}
                  >
                    <div>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color: scoreTab === tab.id ? tab.color : 'rgba(255,255,255,.45)', marginBottom:2 }}>{tab.label}</div>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,.55)' }}>{tab.sub}</div>
                    </div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:24, fontWeight:700, color: scoreTab === tab.id ? tab.color : 'rgba(255,255,255,.35)', letterSpacing:'-.03em' }}>{tab.score}</div>
                  </button>
                ))}
              </div>

              {/* Capability dimensions */}
              {scoreTab === 'capability' && (
                <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(77,144,254,.2)', overflow:'hidden' }}>
                  {CAPABILITY_DIMS.map((d,i) => (
                    <div key={i} style={{ padding:'7px 16px', borderBottom: i < CAPABILITY_DIMS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none', display:'grid', gridTemplateColumns:'1fr 32px', alignItems:'center', gap:12 }}>
                      <div>
                        <div style={{ fontSize:11, color:'rgba(255,255,255,.82)', marginBottom:4, fontWeight:500 }}>{d.label}</div>
                        <div style={{ height:2, background:'rgba(255,255,255,.08)', borderRadius:1, overflow:'hidden' }}>
                          <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'rgba(77,144,254,.8)' }} />
                        </div>
                      </div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color:'rgba(77,144,254,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Resilience dimensions */}
              {scoreTab === 'resilience' && (
                <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(45,212,160,.2)', overflow:'hidden' }}>
                  {RESILIENCE_DIMS.map((d,i) => (
                    <div key={i} style={{ padding:'7px 16px', borderBottom: i < RESILIENCE_DIMS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none', display:'grid', gridTemplateColumns:'1fr 32px', alignItems:'center', gap:12 }}>
                      <div>
                        <div style={{ fontSize:11, color:'rgba(255,255,255,.82)', marginBottom:4, fontWeight:500 }}>{d.label}</div>
                        <div style={{ height:2, background:'rgba(255,255,255,.08)', borderRadius:1, overflow:'hidden' }}>
                          <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'rgba(45,212,160,.8)' }} />
                        </div>
                      </div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color:'rgba(45,212,160,.95)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                  <div style={{ margin:'0 16px 12px', paddingTop:10 }}>
                    <div style={{ background:'rgba(45,212,160,.07)', border:'1px solid rgba(45,212,160,.2)', padding:'8px 12px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <div style={{ fontSize:11, fontWeight:700, color:'rgba(45,212,160,.97)' }}>AI Fortress: Premium Asset</div>
                      <div style={{ fontSize:10, color:'rgba(255,255,255,.65)' }}>Top 15-20% of assessed cos.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* IC PREP */}
      <section style={{ padding:'56px 0', background:'rgba(255,255,255,.025)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>IC Preparation</div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap' }}>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', lineHeight:1.25, margin:0 }}>
                Every IC has an AI question. Walk in with a customer-backed answer.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.68)', margin:0, maxWidth:360, textAlign:'right', lineHeight:1.65 }}>
                The Q of AI gives you customer-validated language for every question. Management walks in with evidence, not assertions.
              </p>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(255,255,255,.07)' }}>
            <div style={{ background:'rgba(6,14,28,.98)', display:'flex', flexDirection:'column' }}>
              {OBJECTIONS.map((o, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedQ(i)}
                  style={{
                    all:'unset', cursor:'pointer',
                    padding:'16px 22px',
                    borderBottom: i < OBJECTIONS.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none',
                    borderLeft: `2px solid ${selectedQ === i ? 'rgba(45,212,160,.6)' : 'transparent'}`,
                    background: selectedQ === i ? 'rgba(45,212,160,.05)' : 'transparent',
                    transition:'all .12s',
                    display:'block',
                    textAlign:'left',
                  }}
                  onMouseEnter={e => { if (selectedQ !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.02)'; }}
                  onMouseLeave={e => { if (selectedQ !== i) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color: selectedQ === i ? 'rgba(45,212,160,.85)' : 'rgba(255,255,255,.45)', marginBottom:5 }}>
                    {o.tag}
                  </div>
                  <div style={{ fontSize:12.5, fontWeight:500, color: selectedQ === i ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.72)', lineHeight:1.5 }}>
                    "{o.q}"
                  </div>
                </button>
              ))}
            </div>

            <div style={{ background:'rgba(6,14,28,.95)', padding:'28px 28px', display:'flex', flexDirection:'column', gap:20 }}>
              <div style={{ display:'flex', alignItems:'center', gap:16, padding:'14px 18px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:28, fontWeight:700, color:'rgba(45,212,160,.97)', letterSpacing:'-.03em', lineHeight:1, flexShrink:0 }}>
                  {OBJECTIONS[selectedQ].stat.val}
                </div>
                <div style={{ width:1, height:32, background:'rgba(255,255,255,.1)', flexShrink:0 }} />
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.65)' }}>
                  {OBJECTIONS[selectedQ].stat.label}
                </div>
              </div>

              <div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.85)', marginBottom:10 }}>
                  How to answer
                </div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,.85)', lineHeight:1.82 }}>
                  {OBJECTIONS[selectedQ].answer}
                </div>
              </div>

              <div style={{ borderLeft:'2px solid rgba(45,212,160,.4)', paddingLeft:14 }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:6 }}>
                  Close with
                </div>
                <div style={{ fontSize:13, fontWeight:600, color:'rgba(45,212,160,.95)', lineHeight:1.55, fontStyle:'italic' }}>
                  "{OBJECTIONS[selectedQ].close}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — interactive scope slider */}
      <section style={{ padding:'56px 0', background:'linear-gradient(168deg,#050e1e 0%,#081628 100%)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>

          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap', marginBottom:40 }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>Pricing</div>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', margin:0, lineHeight:1.25 }}>
                One assessment. Scope it to fit the mandate.
              </h2>
            </div>
            <p style={{ fontSize:13, color:'rgba(255,255,255,.68)', margin:0, maxWidth:360, textAlign:'right', lineHeight:1.6 }}>
              Every scope includes a visual scorecard, 25+ slide VoC report, customer verbatims, and CIM-ready positioning language.
            </p>
          </div>

          {/* Slider widget */}
          {(() => {
            const TIERS = [
              {
                dims: 5,
                label: 'AI Structural',
                name: 'AI Structural Position',
                price: 25,
                weeks: '2 weeks',
                color: 'rgba(245,158,11,.95)',
                features: [
                  'AI Resilience Score (5 dimensions)',
                  'Data moat analysis',
                  'Leapfrog resistance score',
                  'Defensibility map',
                  'Visual scorecard + VoC report',
                ],
              },
              {
                dims: 10,
                label: 'AI Capability',
                name: 'AI Capability',
                price: 30,
                weeks: '2 weeks',
                color: 'rgba(77,144,254,.95)',
                features: [
                  'AI Capability Score (10 dimensions)',
                  'Adoption, accuracy & ROI scoring',
                  'Competitive differentiation',
                  'Roadmap credibility',
                  'Visual scorecard + VoC report',
                ],
              },
              {
                dims: 15,
                label: 'Full Assessment',
                name: 'Full Assessment',
                price: 35,
                weeks: '3 weeks',
                color: 'rgba(200,220,255,.92)',
                features: [
                  'AI Capability Score (10 dimensions)',
                  'AI Resilience Score (5 dimensions)',
                  'AI Fortress Resilience Matrix',
                  'Visual scorecard + VoC report',
                  'CIM-ready positioning language',
                ],
              },
              {
                dims: 15 as number,
                dimsDisplay: '15+',
                label: 'Complete',
                name: 'Complete Q of AI',
                price: 40,
                weeks: '3-4 weeks',
                color: 'rgba(45,212,160,.97)',
                recommended: true,
                features: [
                  'Everything in Full Assessment',
                  'IC Preparation Pack (6 objections)',
                  'Competitor benchmarking',
                  'Extended CIM language',
                ],
              },
            ] as const;

            const tier = TIERS[tierIdx];
            const pct = (tierIdx / (TIERS.length - 1)) * 100;

            return (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', gap:2, background:'rgba(255,255,255,.08)', alignItems:'stretch' }}>

                {/* LEFT: Slider */}
                <div style={{ background:'rgba(6,14,28,.97)', padding:'32px 36px', display:'flex', flexDirection:'column', gap:28 }}>

                  {/* Price display */}
                  <div style={{ display:'flex', alignItems:'flex-end', gap:16 }}>
                    <div>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:6 }}>Starting from</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:52, fontWeight:700, color:tier.color, letterSpacing:'-.04em', lineHeight:1 }}>
                        ${tier.price}k
                      </div>
                    </div>
                    <div style={{ paddingBottom:8 }}>
                      <div style={{ fontSize:12, color:'rgba(255,255,255,.52)', lineHeight:1.5 }}>{tier.weeks}</div>
                      <div style={{ fontSize:12, color:'rgba(255,255,255,.52)' }}>{tier.dims} dimensions</div>
                    </div>
                  </div>

                  {/* Slider track */}
                  <div>
                    <div style={{ position:'relative', height:28, display:'flex', alignItems:'center', marginBottom:8 }}>
                      {/* Track background */}
                      <div style={{ position:'absolute', left:0, right:0, height:3, background:'rgba(255,255,255,.1)', borderRadius:2 }} />
                      {/* Track fill */}
                      <div style={{ position:'absolute', left:0, width:`${pct}%`, height:3, background:tier.color, borderRadius:2, transition:'all .2s' }} />
                      {/* Tick marks */}
                      {TIERS.map((t, i) => {
                        const tickPct = (i / (TIERS.length - 1)) * 100;
                        const isActive = i <= tierIdx;
                        return (
                          <div
                            key={i}
                            style={{
                              position:'absolute',
                              left:`${tickPct}%`,
                              transform:'translateX(-50%)',
                              width: i === tierIdx ? 14 : 8,
                              height: i === tierIdx ? 14 : 8,
                              borderRadius:'50%',
                              background: isActive ? tier.color : 'rgba(255,255,255,.15)',
                              border: i === tierIdx ? `2px solid ${tier.color}` : 'none',
                              boxShadow: i === tierIdx ? `0 0 12px ${tier.color}` : 'none',
                              transition:'all .2s',
                              cursor:'pointer',
                              zIndex:2,
                            }}
                            onClick={() => setTierIdx(i)}
                          />
                        );
                      })}
                      {/* Invisible range input for drag */}
                      <input
                        type="range" min={0} max={3} step={1} value={tierIdx}
                        onChange={e => setTierIdx(Number(e.target.value))}
                        style={{
                          position:'absolute', left:0, right:0, width:'100%',
                          opacity:0, cursor:'pointer', height:28, margin:0, padding:0,
                          zIndex:3,
                        }}
                      />
                    </div>

                    {/* Tier labels */}
                    <div style={{ display:'flex', justifyContent:'space-between' }}>
                      {TIERS.map((t, i) => (
                        <div
                          key={i}
                          onClick={() => setTierIdx(i)}
                          style={{
                            fontSize:10, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase',
                            color: i === tierIdx ? tier.color : 'rgba(255,255,255,.35)',
                            cursor:'pointer',
                            transition:'color .2s',
                            textAlign: i === 0 ? 'left' : i === TIERS.length-1 ? 'right' : 'center',
                          }}
                        >
                          {t.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price scale bar */}
                  <div>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'rgba(255,255,255,.38)', marginBottom:6, fontFamily:'var(--font-mono)' }}>
                      <span>$25k</span>
                      <span style={{ color:'rgba(255,255,255,.22)' }}>$30k</span>
                      <span style={{ color:'rgba(255,255,255,.22)' }}>$35k</span>
                      <span>$40k</span>
                    </div>
                    <div style={{ height:4, background:'rgba(255,255,255,.07)', borderRadius:2, overflow:'hidden' }}>
                      <div style={{
                        height:'100%',
                        width:`${pct}%`,
                        background: `linear-gradient(90deg, rgba(245,158,11,.8), ${tier.color})`,
                        borderRadius:2,
                        transition:'all .3s ease',
                      }} />
                    </div>
                  </div>

                  {/* Dimension bar */}
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.40)', marginBottom:8 }}>
                      Dimensions included
                    </div>
                    <div style={{ display:'flex', gap:3, flexWrap:'wrap' }}>
                      {Array.from({ length: 15 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            width:16, height:16, borderRadius:2,
                            background: i < (tier.dims as number)
                              ? (i < 5 ? 'rgba(245,158,11,.7)' : 'rgba(77,144,254,.7)')
                              : 'rgba(255,255,255,.06)',
                            transition:'all .2s',
                            transitionDelay: `${i * 0.015}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ display:'flex', gap:16, marginTop:8 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:10, color:'rgba(245,158,11,.75)' }}>
                        <div style={{ width:8, height:8, background:'rgba(245,158,11,.7)', borderRadius:1 }} />
                        Resilience (5)
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:10, color:'rgba(77,144,254,.75)' }}>
                        <div style={{ width:8, height:8, background:'rgba(77,144,254,.7)', borderRadius:1 }} />
                        Capability (10)
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: What's included */}
                <div style={{
                  background: (tier as any).recommended ? 'rgba(45,212,160,.04)' : 'rgba(255,255,255,.02)',
                  borderLeft: `2px solid ${tier.color}`,
                  padding:'32px 28px',
                  display:'flex', flexDirection:'column', gap:20,
                  transition:'all .2s',
                }}>
                  <div>
                    {(tier as any).recommended && (
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.9)', background:'rgba(45,212,160,.1)', padding:'2px 8px', display:'inline-block', marginBottom:8 }}>
                        Recommended for sell-side
                      </div>
                    )}
                    <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,.95)', marginBottom:4, letterSpacing:'-.01em' }}>{tier.name}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:24, fontWeight:700, color:tier.color, letterSpacing:'-.03em' }}>
                      ${tier.price}k
                    </div>
                  </div>

                  <div style={{ height:1, background:'rgba(255,255,255,.07)' }} />

                  <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.42)', marginBottom:2 }}>
                      Included
                    </div>
                    {tier.features.map((f, i) => (
                      <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:12.5, color:'rgba(255,255,255,.82)', lineHeight:1.45 }}>
                        <span style={{ color:tier.color, flexShrink:0, marginTop:1 }}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      fontSize:12, fontWeight:700, textDecoration:'none', padding:'11px 20px',
                      color: (tier as any).recommended ? '#050e1e' : 'rgba(255,255,255,.9)',
                      background: (tier as any).recommended ? 'rgba(45,212,160,.92)' : 'rgba(255,255,255,.08)',
                      border: (tier as any).recommended ? 'none' : `1px solid rgba(255,255,255,.18)`,
                      transition:'all .15s',
                    }}
                  >
                    Commission this scope →
                  </a>
                </div>
              </div>
            );
          })()}

          <div style={{ fontSize:11, color:'rgba(255,255,255,.42)', textAlign:'center', marginTop:16 }}>
            Exact pricing depends on company size, data availability, and timeline.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'52px 0', textAlign:'center' }}>
        <div style={{ maxWidth:640, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(45,212,160,.88)', marginBottom:14 }}>Commission the Q of AI</div>
          <h2 style={{ fontSize:28, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, marginBottom:12 }}>
            Pre-empt the objection.<br />Commission the Q of AI.
          </h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,.72)', lineHeight:1.78, marginBottom:28 }}>
            Institutional buyers are pricing AI capability and defensibility into every bid. Companies that arrive with customer-validated evidence don't just answer the question. They set the terms.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:18 }}>
            <a href={`mailto:${CONTACT.email}`} style={{ background:'rgba(255,255,255,.95)', color:'#050e1e', padding:'11px 26px', fontSize:13, fontWeight:700, textDecoration:'none' }}>
              Email Ian →
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:'rgba(255,255,255,.82)', border:'1px solid rgba(255,255,255,.25)', padding:'11px 20px', fontSize:13, fontWeight:500, textDecoration:'none' }}>
              Book a Call
            </a>
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,.55)' }}>{CONTACT.email}</div>
        </div>
      </section>
    </>
  );
}
