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


const QUESTIONS = [
  {
    part: 'I', num: 'Q1', label: 'Feature Adoption & Daily Utility',
    rating: 'On a scale of 1-10, how frequently do you use AI-powered features in [Software Name]? (1 = Never, 5 = Occasionally, 10 = Multiple times daily)',
    open: 'Which specific AI features do you use most often, and what tasks do they help you accomplish? Please be as specific as possible.',
    why: 'Separates AI marketing from actual adoption. The open-ended response reveals which features have sticky usage versus which are ignored.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q2', label: 'Value Quantification & ROI',
    rating: 'Rate the business impact of AI features in [Software Name]. (1 = No measurable impact, 5 = Moderate value, 10 = Mission-critical)',
    open: 'Can you quantify the value you get from AI features? Examples: hours saved per week, cost reductions, revenue enabled, errors prevented.',
    why: 'Forces respondents to articulate ROI in concrete terms. Produces the executive soundbites needed for pitch materials.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q3', label: 'Competitive Differentiation',
    rating: "Compared to alternatives you've evaluated, how would you rate [Software Name]\'s AI capabilities? (1 = Significantly behind, 5 = On par, 10 = Clear market leader)",
    open: "Which specific AI capabilities set [Software Name] apart from competitors? Please name specific competing products if possible.",
    why: 'Direct competitive positioning data. Reveals the actual battleground features and which competitors are winning on AI.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q4', label: 'Innovation Velocity',
    rating: 'How would you rate [Software Name]'s pace of AI innovation and new feature releases? (1 = Stagnant, 5 = Keeping pace, 10 = Leading edge)',
    open: 'What recent AI improvements have impressed you, or what AI capabilities have you been waiting for that haven't been delivered?',
    why: 'Assesses innovation velocity and roadmap execution. Reveals whether the company is actually shipping or just promising.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q5', label: 'Accuracy & Reliability',
    rating: 'Rate the accuracy and reliability of AI-generated outputs in [Software Name]. (1 = Frequently inaccurate, 5 = Generally reliable, 10 = Consistently accurate)',
    open: 'Describe any instances where AI outputs were inaccurate. How often does this happen, and does it impact your trust in the system?',
    why: "Critical for risk assessment. AI that doesn't work creates massive churn risk and kills valuation stories.",
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q6', label: 'Marketing Claims vs. Reality',
    rating: 'How well do [Software Name]'s actual AI capabilities match what was promised during the sales process? (1 = Significantly overpromised, 5 = Mostly aligned, 10 = Exceeded expectations)',
    open: 'Were there AI features that were promised but underdelivered, or capabilities that turned out to be more valuable than expected?',
    why: 'Exposes AI washing and credibility issues. Creates a reality check on whether the AI story is real or aspirational.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q7', label: 'Implementation Ease',
    rating: 'How easy was it to implement and get value from AI features in [Software Name]? (1 = Extremely difficult, 5 = Moderate effort, 10 = Worked immediately)',
    open: 'What obstacles did you encounter when implementing AI features, and what training was required to get your team using them effectively?',
    why: 'Time-to-value is critical for expansion and retention. Reveals onboarding friction that limits market expansion.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q8', label: 'Business Differentiation',
    rating: 'Rate how much [Software Name]'s AI capabilities help differentiate your business or improve your competitive position. (1 = No competitive advantage, 10 = Significant strategic advantage)',
    open: 'How have AI features changed how your team works or enabled new capabilities you couldn't achieve before?',
    why: 'Measures stickiness and strategic value. Produces case study material demonstrating moat and switching costs.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q9', label: 'Roadmap Confidence',
    rating: "Based on what you've seen so far, how confident are you that [Software Name] will continue to lead with AI innovation? (1 = Not confident, 10 = Extremely confident, committed long-term)",
    open: 'What would need to happen with AI capabilities for you to consider switching to a competitor?',
    why: 'Forward-looking retention indicator. Reveals competitive vulnerabilities and moat defensibility.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'I', num: 'Q10', label: 'AI Sophistication Level',
    rating: 'Rate the overall sophistication and maturity of AI technology in [Software Name]. (1 = Basic automation, 5 = Smart ML features, 10 = Cutting-edge AI, generative capabilities)',
    open: 'Which AI capabilities feel truly advanced versus basic automation relabeled as 'AI'? What specific AI technologies do you see being used?',
    why: 'Distinguishes real AI from rebranded if/then logic. Provides technical validation from actual users.',
    color: 'rgba(77,144,254,.9)',
  },
  {
    part: 'II', num: 'Q11', label: 'AI-Native Replacement Risk',
    rating: 'Have you evaluated AI-native tools (e.g., ChatGPT, Claude, Gemini, vertical AI agents) as a partial or full replacement? (1 = Actively replacing; 10 = Never considered, no viable alternative)',
    open: 'If you explored AI-native alternatives, what tasks did you test? What was the result — did the AI tool perform comparably, and what stopped you from switching?',
    why: 'The single most valuable displacement question. Directly measures whether customers are already testing the replacement thesis.',
    color: 'rgba(45,212,160,.9)',
  },
  {
    part: 'II', num: 'Q12', label: 'Data & Workflow Lock-In',
    rating: 'How deeply is [Software Name] embedded in your organization's data infrastructure and workflows? (1 = Standalone tool, easily replaceable; 10 = Deeply embedded, major restructuring required)',
    open: 'Describe the integrations, data dependencies, and workflow automations connecting [Software Name] to your tech stack. Could you replicate this with an AI-native tool?',
    why: 'Measures the structural moat. AI displacement is easiest for standalone tools and hardest for deeply integrated systems serving as the data layer.',
    color: 'rgba(45,212,160,.9)',
  },
  {
    part: 'II', num: 'Q13', label: 'Pricing Model Defense',
    rating: 'If [Software Name] switched from per-seat to outcome-based pricing, would that change how you evaluate it versus AI-native alternatives? (1 = Makes no difference; 10 = Would significantly increase commitment)',
    open: 'How many seats does your organization pay for? What percentage are active power users? If AI could do the work of 3-5 seats, would you reduce licenses?',
    why: 'Probes the pricing model vulnerability that IDC predicts will force 70% of vendors to restructure by 2028.',
    color: 'rgba(45,212,160,.9)',
  },
  {
    part: 'II', num: 'Q14', label: 'AI Leapfrog Resistance',
    rating: 'Could a new AI-first company build a better version of [Software Name] from scratch using current AI technology? (1 = Absolutely, inevitable; 10 = Impossible, domain expertise too specialized)',
    open: 'What aspects of [Software Name] would be hardest for an AI-native startup to replicate? What parts would be easiest? Consider data complexity, regulatory requirements, domain expertise, integration depth.',
    why: 'Customers understand their domain better than any analyst. Produces the exact defensibility map buyers need at IC.',
    color: 'rgba(45,212,160,.9)',
  },
  {
    part: 'II', num: 'Q15', label: 'Vendor Strategy Credibility',
    rating: 'How confident are you that [Software Name]'s leadership understands and is effectively responding to the AI transformation of your industry? (1 = Clueless; 10 = Leading the charge)',
    open: 'What has [Software Name]'s leadership communicated about their AI strategy? Have you seen evidence of foundational AI investment versus just adding chatbot wrappers?',
    why: 'Management credibility on AI is the leading indicator of whether a company will navigate or be disrupted by the transition.',
    color: 'rgba(45,212,160,.9)',
  },
];

const OBJECTIONS = [
  {
    tag: 'Foundation model risk',
    q: 'What stops a foundation model from replacing this in 12 months?',
    stat: { label: 'Data Lock-In Score', val: '9.1/10' },
    answer: "Lead with the 9.1/10 data lock-in score and the 18-24 month replication barrier documented from actual customer interviews, not analyst projections. Customers tested ChatGPT and Claude as alternatives and failed — the product requires domain-specific training data accumulated over years. Pivot: foundation models validate the moat, because every new integration makes the product more intelligent and the barrier wider. Quote verbatims from customers who attempted to migrate. The objection answers itself when buyers hear it from the company"s own users.",
    close: "Foundation models don't replace domain data. They expose how much of it this company has.",
  },
  {
    tag: "AI-native competition',
    q: 'Why can\'t a well-funded AI-native startup take this market?',
    stat: { label: 'Feature Adoption Score', val: '8.9/10" },
    answer: "Acknowledge the 7.4/10 innovation velocity score directly — transparency builds credibility for every other number. Then reframe the question: AI-native startups are building on generic infrastructure. This company has 8.9/10 feature adoption, 8+ integrations per customer, and years of domain-specific usage patterns creating proprietary data loops no startup can replicate from scratch. They can ship faster. They cannot replicate the data. Roadmap credibility at 8.0/10 means customers believe this company knows what to build next — the comparison isn't feature cadence, it"s defensibility once embedded.",
    close: "They can copy the features. They can't copy the data.",
  },
  {
    tag: 'Valuation premium',
    q: 'What justifies paying above the peer comp set?',
    stat: { label: 'AI Fortress rate (all assessed cos.)', val: '15-20%" },
    answer: "Only 15-20% of software companies assessed achieve AI Fortress positioning: High Capability combined with High Resilience. Present the AI Resilience Matrix as third-party benchmarking, not self-assessment. These scores come from actual customers collected by Crossover without management present or briefed, using the same methodology across 50+ mandates. That independence is what supports a 15-25% premium over peer comps. The ask isn't to trust management"s narrative. It's to trust 30+ customer voices who had no stake in the outcome.",
    close: "Customer-validated AI Fortress positioning supports 15-25% above peer comps.",
  },
  {
    tag: 'Customer retention',
    q: 'What\'s the realistic cost and timeline to migrate off this platform?',
    stat: { label: 'Data Lock-In Score', val: '9.1/10" },
    answer: "Eight or more integrations per customer means migration isn't a switching decision — it"s a 6+ month cross-functional re-platforming project requiring executive sponsorship and carrying real operational risk. The 9.1/10 data lock-in score reflects customers' own assessment of how embedded the product is. 82% daily active usage places it in the critical path of everyday operations. Layer on the 18-24 month barrier to replicate domain-specific training data and the economics collapse. A foundation model cannot replace a system-of-record without its entire historical decision log.",
    close: "Migration requires board approval. Switching is not the right frame.",
  },
  {
    tag: 'Claim validation',
    q: 'How do you prove the AI performance claims are real, not marketing?',
    stat: { label: 'Marketing Claims vs. Reality', val: '8.6/10' },
    answer: "The 8.6/10 Marketing Claims vs. Reality dimension specifically measures this: do customers experience what the company says publicly? This is the most powerful answer in the room because the verdict comes from buyers — the company's own customers — not the seller. Every score in the Q of AI is derived from structured interviews collected by Crossover without management present or given advance sight of the questions. A high score here is proof the AI positioning is grounded in actual product experience, not aspirational copy.",
    close: "The customers scored it. Not the company. That's what makes it defensible.",
  },
  {
    tag: 'Competitive disruption',
    q: 'What happens if OpenAI or Google enters this market directly?',
    stat: { label: 'AI Leapfrog Resistance', val: '9.0/10' },
    answer: "The 9.0/10 AI Leapfrog Resistance score documents customers' own assessment of vulnerability to competitive leapfrog — and the answer is: low. This company"s AI advantage is not dependent on any single foundational model. It is built on years of domain-specific usage patterns, proprietary workflows, and integrations that cannot be replicated by any new entrant, regardless of capital or brand. Customers who tested alternative AI providers report an 18-24 month replication barrier. OpenAI entering the market doesn't change the competitive calculus — the moat is in the data, not the model.",
    close: "The moat is domain data and institutional context. Not the model on top of it.",
  },
];

export default function QofAIPage() {
  const [selectedQ, setSelectedQ] = useState(0);
  const [tierIdx, setTierIdx] = useState(2); // default: Full Assessment
  const [scoreTab, setScoreTab] = useState<"capability'|'resilience'>('capability');
  const [openQ, setOpenQ] = useState<number|null>(null);

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

              {/* Side-by-side scorecard panels */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2 }}>

                {/* Capability panel */}
                <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(77,144,254,.18)', overflow:'hidden' }}>
                  <div style={{ background:'rgba(77,144,254,.06)', borderBottom:'1px solid rgba(77,144,254,.15)', padding:'14px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(77,144,254,.7)', marginBottom:3 }}>Part I · 10 Dimensions</div>
                      <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.92)' }}>AI Capability</div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:32, fontWeight:700, color:'rgba(77,144,254,.97)', letterSpacing:'-.04em', lineHeight:1 }}>83</div>
                      <div style={{ fontSize:9, color:'rgba(255,255,255,.42)', letterSpacing:'.06em' }}>OUT OF 100</div>
                    </div>
                  </div>
                  {CAPABILITY_DIMS.map((d,i) => (
                    <div key={i} style={{ padding:'9px 18px', borderBottom: i < CAPABILITY_DIMS.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none', display:'grid', gridTemplateColumns:'1fr 36px', alignItems:'center', gap:10 }}>
                      <div>
                        <div style={{ fontSize:11.5, color:'rgba(255,255,255,.82)', marginBottom:5, fontWeight:500 }}>{d.label}</div>
                        <div style={{ height:3, background:'rgba(255,255,255,.07)', borderRadius:2, overflow:'hidden' }}>
                          <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'linear-gradient(90deg,rgba(77,144,254,.5),rgba(77,144,254,.9))', borderRadius:2 }} />
                        </div>
                      </div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:'rgba(77,144,254,.97)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                </div>

                {/* Resilience panel */}
                <div style={{ background:'rgba(6,14,28,.98)', border:'1px solid rgba(45,212,160,.18)', overflow:'hidden', display:'flex', flexDirection:'column' }}>
                  <div style={{ background:'rgba(45,212,160,.05)', borderBottom:'1px solid rgba(45,212,160,.15)', padding:'14px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(45,212,160,.7)', marginBottom:3 }}>Part II · 5 Dimensions</div>
                      <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.92)' }}>AI Resilience</div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:32, fontWeight:700, color:'rgba(45,212,160,.97)', letterSpacing:'-.04em', lineHeight:1 }}>87</div>
                      <div style={{ fontSize:9, color:'rgba(255,255,255,.42)', letterSpacing:'.06em' }}>OUT OF 100</div>
                    </div>
                  </div>
                  {RESILIENCE_DIMS.map((d,i) => (
                    <div key={i} style={{ padding:'9px 18px', borderBottom: i < RESILIENCE_DIMS.length-1 ? '1px solid rgba(255,255,255,.05)' : 'none', display:'grid', gridTemplateColumns:'1fr 36px', alignItems:'center', gap:10 }}>
                      <div>
                        <div style={{ fontSize:11.5, color:'rgba(255,255,255,.82)', marginBottom:5, fontWeight:500 }}>{d.label}</div>
                        <div style={{ height:3, background:'rgba(255,255,255,.07)', borderRadius:2, overflow:'hidden' }}>
                          <div style={{ width:`${(d.score/10)*100}%`, height:'100%', background:'linear-gradient(90deg,rgba(45,212,160,.5),rgba(45,212,160,.9))', borderRadius:2 }} />
                        </div>
                      </div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:'rgba(45,212,160,.97)', textAlign:'right' }}>{d.score.toFixed(1)}</div>
                    </div>
                  ))}
                  <div style={{ padding:'12px 18px', marginTop:'auto' }}>
                    <div style={{ background:'rgba(45,212,160,.06)', border:'1px solid rgba(45,212,160,.2)', padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <div style={{ fontSize:11, fontWeight:700, color:'rgba(45,212,160,.95)' }}>AI Fortress — Premium Asset</div>
                      <div style={{ fontSize:10, color:'rgba(255,255,255,.55)' }}>Top 15–20% assessed</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* THE 15 QUESTIONS */}
      <section style={{ padding:'56px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:36 }}>
            <div className="ib-section-eyebrow" style={{ marginBottom:8 }}>The Research Instrument</div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap' }}>
              <h2 style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.022em', lineHeight:1.25, margin:0 }}>
                15 questions. Every score sourced from verbatim customer responses.
              </h2>
              <p style={{ fontSize:13, color:'rgba(255,255,255,.68)', margin:0, maxWidth:380, textAlign:'right', lineHeight:1.65 }}>
                No management briefing. No internal benchmarks. Customers are interviewed independently — the scores reflect what they actually said.
              </p>
            </div>
          </div>

          {/* Part headers */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, marginBottom:2 }}>
            <div style={{ background:'rgba(77,144,254,.06)', border:'1px solid rgba(77,144,254,.15)', padding:'10px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(77,144,254,.8)' }}>Part I — AI Capability</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.45)' }}>Questions 1–10</div>
            </div>
            <div style={{ background:'rgba(45,212,160,.05)', border:'1px solid rgba(45,212,160,.15)', padding:'10px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(45,212,160,.8)' }}>Part II — AI Displacement Risk</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.45)' }}>Questions 11–15</div>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ border:'1px solid rgba(255,255,255,.08)', overflow:'hidden' }}>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ borderBottom: i < QUESTIONS.length-1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <button
                  onClick={() => setOpenQ(openQ === i ? null : i)}
                  style={{
                    all:'unset', cursor:'pointer', width:'100%', display:'flex', alignItems:'center',
                    padding:'14px 20px', gap:16, background: openQ === i ? 'rgba(255,255,255,.03)' : 'rgba(6,14,28,.97)',
                    transition:'background .12s',
                  }}
                >
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color: q.part === 'I' ? 'rgba(77,144,254,.7)' : 'rgba(45,212,160,.7)', flexShrink:0, width:28 }}>{q.num}</div>
                  <div style={{ flex:1, fontSize:13, fontWeight:600, color:'rgba(255,255,255,.88)', textAlign:'left' }}>{q.label}</div>
                  <div style={{ fontSize:11, color: q.part === 'I' ? 'rgba(77,144,254,.6)' : 'rgba(45,212,160,.6)', flexShrink:0, fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase' }}>Part {q.part}</div>
                  <div style={{ color:'rgba(255,255,255,.35)', flexShrink:0, fontSize:14, transform: openQ === i ? 'rotate(180deg)' : 'none', transition:'transform .2s' }}>↓</div>
                </button>
                {openQ === i && (
                  <div style={{ padding:'0 20px 20px 64px', background:'rgba(6,14,28,.97)' }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:14 }}>
                      <div>
                        <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color: q.part === 'I' ? 'rgba(77,144,254,.6)' : 'rgba(45,212,160,.6)', marginBottom:6 }}>Rating prompt</div>
                        <div style={{ fontSize:12, color:'rgba(255,255,255,.72)', lineHeight:1.7 }}>{q.rating}</div>
                      </div>
                      <div>
                        <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color: q.part === 'I' ? 'rgba(77,144,254,.6)' : 'rgba(45,212,160,.6)', marginBottom:6 }}>Open-ended prompt</div>
                        <div style={{ fontSize:12, color:'rgba(255,255,255,.72)', lineHeight:1.7 }}>{q.open}</div>
                      </div>
                    </div>
                    <div style={{ borderLeft:`1px solid ${q.part === 'I' ? 'rgba(77,144,254,.3)' : 'rgba(45,212,160,.3)'}`, paddingLeft:12 }}>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:4 }}>Why it matters</div>
                      <div style={{ fontSize:12, color:'rgba(255,255,255,.65)', lineHeight:1.65, fontStyle:'italic' }}>{q.why}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
      <section style={{ padding:'56px 0', background:'linear-gradient(168deg,#040c1a 0%,#060f22 50%,#040c1a 100%)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
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
                color: 'rgba(130,175,255,.95)',
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
                color: 'rgba(168,130,255,.95)',
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
            ];

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
                      <div style={{ fontSize:13, color:'rgba(255,255,255,.68)', lineHeight:1.5 }}>{tier.weeks}</div>
                      <div style={{ fontSize:13, color:'rgba(255,255,255,.68)' }}>{tier.dims} dimensions</div>
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
                        background: `linear-gradient(90deg, rgba(130,175,255,.6), ${tier.color})`,
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
                            width:18, height:18, borderRadius:3,
                            background: i < (tier.dims as number)
                              ? (i < 5 ? 'rgba(45,212,160,.75)' : 'rgba(77,144,254,.75)')
                              : 'rgba(255,255,255,.06)',
                            transition:'all .2s',
                            transitionDelay: `${i * 0.015}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ display:'flex', gap:16, marginTop:8 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:10, color:'rgba(45,212,160,.85)' }}>
                        <div style={{ width:8, height:8, background:'rgba(45,212,160,.75)', borderRadius:1 }} />
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
                  background: `linear-gradient(160deg, rgba(6,14,36,.98) 0%, rgba(10,20,48,.95) 100%)`,
                  borderLeft: `2px solid ${tier.color}`,
                  padding:'32px 28px',
                  display:'flex', flexDirection:'column', gap:20,
                  transition:'all .2s',
                  position:'relative',
                  overflow:'hidden',
                }}>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:`linear-gradient(90deg, ${tier.color}, transparent)`, opacity:.5 }} />
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
          <p style={{ fontSize:13, color:'rgba(255,255,255,.72)", lineHeight:1.78, marginBottom:28 }}>
            Institutional buyers are pricing AI capability and defensibility into every bid. Companies that arrive with customer-validated evidence don't just answer the question. They set the terms.
          </p>
          <div style={{ display:"flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:18 }}>
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
