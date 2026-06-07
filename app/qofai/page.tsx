'use client';
import { useState } from 'react';
import { CONTACT } from '../../lib/config/site';

/**
 * Voice of Customer: The Methodology
 *
 * Methodology-focused page. No products or pricing here (those live
 * on /intelligence). The job of this page is to convince a banker
 * the Crossover methodology is one of one and that management-sourced
 * customer references cannot substitute for it.
 */

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

const MGMT_FAILURE_REASONS = [
  {
    title: 'The operator picks the happy ones',
    body: 'Reference lists are curated. The customers who would not return calls do not appear. The unhappy customer is precisely the diligence risk buyers will find.',
  },
  {
    title: 'Sophisticated buyers already discount it',
    body: 'PE diligence teams treat operator-supplied reference calls as marketing input, not evidence. The data is scored down before the call even happens.',
  },
  {
    title: 'The list runs out',
    body: 'After five reference calls, buyers source their own customers via LinkedIn, expert networks, and ex-employees. They find what the curated list excluded.',
  },
  {
    title: 'The risk lives in what was excluded',
    body: 'Recent churn, failed pilots, contract downgrades. These are the findings that compress the multiple. Independent sourcing surfaces them first so the operator can address them in the deck.',
  },
];

// Crossover Core 9 - the standardized methodology
const CORE_9 = [
  { num: '01', name: 'Net Promoter Score',           body: 'Customer loyalty benchmarked against 40+ comparable studies in the database.' },
  { num: '02', name: 'Renewal Intent',               body: 'Forward-looking signal of retention risk. The cleanest predictor of churn.' },
  { num: '03', name: 'Switching Difficulty',         body: 'Hard-to-leave is the moat. Quantified directly from customers, not management estimates.' },
  { num: '04', name: 'Mission Criticality',          body: 'Does the product survive cost-cutting cycles. The recession test buyers run mentally.' },
  { num: '05', name: 'Competitive Advantage',        body: 'Where the asset truly differentiates against the alternatives customers actually evaluate.' },
  { num: '06', name: 'Replication Cost',             body: 'How hard would a well-funded competitor be to build from scratch. The build-vs-buy answer.' },
  { num: '07', name: 'Pricing Power',                body: 'Headroom for price increases without elevated churn. Van Westendorp pricing where the deal warrants.' },
  { num: '08', name: 'Management Quality',           body: 'How customers perceive operator strategy, communication, and execution discipline.' },
  { num: '09', name: 'Growth Driver Durability',     body: 'What will still be working in three to five years. Roadmap conviction sourced from buyers, not sellers.' },
];

const WALKTHROUGH = [
  {
    num: '01', step: 'Source',
    body: 'Independent panel infrastructure. No operator-supplied list. Customers are screened blind on role, tenure, deployment size, and recency. The pool is 100x larger than any reference list.',
  },
  {
    num: '02', step: 'Interview',
    body: 'Every customer answers the same fixed instrument. Closed-ended ratings on the Crossover Core 9 plus open-ended follow-ups. Same questions every time. Results are comparable across 40+ prior studies.',
  },
  {
    num: '03', step: 'Score',
    body: 'Aggregated scores benchmarked against the comparable library. Outliers flagged. Verbatims attributed by segment, tenure, and role. The scorecard renders the evidence base, not an interpretation of it.',
  },
  {
    num: '04', step: 'Deliver',
    body: 'Slide-ready verbatims, the scorecard itself, a rebuttal map for every weak claim, and an IC-ready data appendix. Two to seven weeks depending on N count. No analyst rework on the banker side.',
  },
];

const ARTIFACTS = [
  { title: 'Customer verbatims',         body: 'Independently sourced, attributed, slide-ready. Drop directly into the pitch.' },
  { title: 'Crossover Core 9 scorecard',     body: 'Nine standardized dimensions scored against 40+ comparable studies. Benchmarks every claim.' },
  { title: 'Rebuttal map',                   body: 'Every weak claim in the equity story paired with the customer evidence that defends it.' },
  { title: 'IC-ready data appendix',         body: 'Raw transcripts, segment-level scoring, full audit trail. Survives the toughest buyer diligence.' },
];

export default function VoiceOfCustomerPage() {
  const [openQ, setOpenQ] = useState<number>(0);

  return (
    <>
      {/* HERO: methodology angle */}
      <section style={{ background:'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom:'1px solid rgba(255,255,255,.07)', padding:'68px 0 56px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', fontSize:13, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', background:'rgba(120,144,178,.10)', border:'1px solid rgba(166,183,210,.35)', padding:'5px 14px', marginBottom:22 }}>
            Voice of Customer &middot; The Methodology
          </div>
          <h1 style={{ fontSize:'clamp(34px, 5vw, 52px)', fontWeight:700, color:'rgba(255,255,255,.98)', lineHeight:1.08, letterSpacing:'-.035em', margin:'0 0 18px', maxWidth:1040 }}>
            Management references get discounted.
            <span style={{ display:'block', color:'rgba(166,183,210,.95)' }}>Independent research gets underwritten.</span>
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.90)', lineHeight:1.7, maxWidth:820, margin:'0 0 30px' }}>
            Customers sourced independently. Screened blind to the operator. Scored on a fixed nine-dimension instrument.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <a href={`mailto:${CONTACT.email}?subject=Sample%20Crossover%20Voice%20of%20Customer%20report`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 26px', fontSize:15, fontWeight:700, textDecoration:'none', display:'inline-flex', alignItems:'center', borderRadius:2 }}>
              See a sample report →
            </a>
            <a href="/intelligence" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 22px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              See the Intelligence Suite →
            </a>
          </div>
        </div>
      </section>

      {/* WHY MGMT-SOURCED CUSTOMERS FAIL */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The problem
            </div>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:880 }}>
              Why a management-sourced reference list does not survive diligence.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:760, margin:0 }}>
              Curated references are how most CIMs back their customer claims. Every sophisticated buyer knows it. Here is what actually happens when those references hit the diligence team.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14 }}>
            {MGMT_FAILURE_REASONS.map((r, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', borderLeft:'3px solid rgba(245,158,11,.7)', padding:'22px 26px' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:10 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:'rgba(245,158,11,.95)', letterSpacing:'.06em', minWidth:24 }}>0{i + 1}</div>
                  <div style={{ fontSize:17, fontWeight:700, color:'rgba(255,255,255,.97)' }}>{r.title}</div>
                </div>
                <div style={{ fontSize:14.5, color:'rgba(255,255,255,.85)', lineHeight:1.7, paddingLeft:38 }}>{r.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE 9 FRAMEWORK */}
      <section style={{ padding:'72px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The framework
            </div>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:880 }}>
              The Crossover Core 9.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:780, margin:0 }}>
              Every study scores the same nine dimensions. Same instrument across 40+ prior engagements. Same rating prompt plus open-ended follow-up for every customer. Comparable benchmarks every time.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.10)' }}>
            {CORE_9.map((d, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'22px 24px' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:8 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:'rgba(166,183,210,.95)', letterSpacing:'.06em' }}>{d.num}</div>
                  <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.97)' }}>{d.name}</div>
                </div>
                <div style={{ fontSize:13.5, color:'rgba(255,255,255,.84)', lineHeight:1.6 }}>{d.body}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:18, fontSize:13, color:'rgba(255,255,255,.78)', lineHeight:1.65 }}>
            Each dimension carries a closed-ended rating prompt plus an open-ended follow-up. Both are part of the deliverable, both are attributed by segment, tenure, and role. Verbatims sit next to scores.
          </div>
        </div>
      </section>

      {/* WALKTHROUGH: Source / Interview / Score / Deliver */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:32 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              How an engagement runs
            </div>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 34px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 14px', maxWidth:880 }}>
              Four phases. No black box.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:780, margin:0 }}>
              Sourcing through delivery. Same shape on every engagement. The fee scales with N. The methodology does not change.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:1, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.10)' }}>
            {WALKTHROUGH.map((p, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', padding:'26px 24px' }}>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:8 }}>
                  Phase {p.num}
                </div>
                <div style={{ fontSize:20, fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.015em', marginBottom:12 }}>
                  {p.step}
                </div>
                <div style={{ fontSize:14, color:'rgba(255,255,255,.85)', lineHeight:1.7 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE SCORECARD */}
      <section style={{ padding:'72px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              A live deliverable
            </div>
            <h2 style={{ fontSize:'clamp(24px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 14px', maxWidth:820 }}>
              Sample Q of AI Scorecard. Anonymised.
            </h2>
            <p style={{ fontSize:14, color:'rgba(255,255,255,.78)' }}>
              Enterprise SaaS &middot; benchmarked against 41 prior studies. This is what arrives in your inbox.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:18 }}>
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

          <div style={{ fontSize:13.5, color:'rgba(255,255,255,.82)' }}>
            Composite verdict: <strong style={{ color:'rgba(166,183,210,.97)', fontWeight:600 }}>AI Fortress</strong>. Top 15&ndash;20% of assets we have scored.
          </div>
        </div>
      </section>

      {/* THE 15-QUESTION INSTRUMENT (carousel) */}
      <section style={{ padding:'72px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              The instrument
            </div>
            <h2 style={{ fontSize:'clamp(24px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 14px', maxWidth:820 }}>
              Fifteen questions. Every score sourced from verbatim customer responses.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.7, maxWidth:760, margin:0 }}>
              The Q of AI extension on top of the Core 9. Ten dimensions of AI capability plus five of displacement risk. Every customer answers all fifteen on the same instrument.
            </p>
          </div>

          {(() => {
            const q = QUESTIONS[openQ];
            const partColor = q.part === 'I' ? 'rgba(166,183,210,.95)' : 'rgba(140,160,196,.95)';
            const partAccent = q.part === 'I' ? 'rgba(120,144,178,.55)' : 'rgba(89,116,154,.55)';
            const prev = () => setOpenQ((openQ - 1 + QUESTIONS.length) % QUESTIONS.length);
            const next = () => setOpenQ((openQ + 1) % QUESTIONS.length);

            return (
              <div>
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
        </div>
      </section>

      {/* ARTIFACTS: what ships */}
      <section style={{ padding:'72px 0', background:'rgba(255,255,255,.018)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:10 }}>
              What ships
            </div>
            <h2 style={{ fontSize:'clamp(24px, 2.8vw, 30px)', fontWeight:700, color:'rgba(255,255,255,.97)', letterSpacing:'-.025em', lineHeight:1.2, margin:'0 0 12px', maxWidth:820 }}>
              Four artifacts. Banker-ready, no analyst rework.
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14 }}>
            {ARTIFACTS.map((a, i) => (
              <div key={i} style={{ background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.10)', padding:'22px 26px' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:8 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:'rgba(166,183,210,.95)', letterSpacing:'.06em', minWidth:24 }}>0{i + 1}</div>
                  <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,.97)' }}>{a.title}</div>
                </div>
                <div style={{ fontSize:14, color:'rgba(255,255,255,.85)', lineHeight:1.7, paddingLeft:38 }}>{a.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE CALLOUT */}
      <section style={{ padding:'56px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 36px' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:18 }}>
            Why not expert networks, desk research, or the operator&rsquo;s reference list
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:1, background:'rgba(255,255,255,.10)', border:'1px solid rgba(255,255,255,.10)' }}>
            {[
              { kind: 'Operator reference list', detail: 'Five to ten curated customers. Buyers know to discount the calls before they happen. The unhappy customer is never on the list.', muted: true },
              { kind: 'Expert networks',         detail: 'What one expert thinks. One voice. One bias. No score, no benchmark. No way to properly screen the right voices. Hours wasted on calls that do not hold up in diligence.', muted: true },
              { kind: 'Desk research',           detail: 'What is already public. The same comps and headlines every other bank is reading. No customer evidence at all.', muted: true },
              { kind: 'Crossover',               detail: 'What the target&rsquo;s actual customers said, sourced independently, scored on a fixed nine-dimension instrument, benchmarked against 40+ prior studies. Attributed, slide-ready, IC-grade.', muted: false },
            ].map((c, i) => (
              <div key={i} style={{
                background: c.muted ? 'rgba(6,14,28,.97)' : 'rgba(120,144,178,.10)',
                padding:'22px 24px',
                borderLeft: !c.muted ? '3px solid rgba(166,183,210,.6)' : 'none',
              }}>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color: c.muted ? 'rgba(255,255,255,.82)' : 'rgba(166,183,210,.95)', marginBottom:10 }}>
                  {c.kind}
                </div>
                <div style={{ fontSize:13.5, color: c.muted ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.94)', fontWeight: c.muted ? 400 : 500, lineHeight:1.65 }} dangerouslySetInnerHTML={{ __html: c.detail }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'80px 0' }}>
        <div style={{ maxWidth:820, margin:'0 auto', padding:'0 36px', textAlign:'center' }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(166,183,210,.95)', marginBottom:18 }}>
            See the methodology in practice
          </div>
          <h2 style={{ fontSize:'clamp(30px, 3.4vw, 40px)', fontWeight:700, color:'rgba(255,255,255,.98)', letterSpacing:'-.025em', lineHeight:1.15, margin:'0 0 18px' }}>
            Ask for a sample report.
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.90)', lineHeight:1.75, margin:'0 0 14px' }}>
            Email <a href={`mailto:${CONTACT.email}`} style={{ color:'rgba(230,240,252,.98)', textDecoration:'underline', textDecorationColor:'rgba(166,183,210,.5)', textUnderlineOffset:'3px' }}>{CONTACT.email}</a> and we will send a redacted Voice of Customer report. Same instrument, real verbatims, real scores, no asset attribution.
          </p>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.84)', lineHeight:1.75, margin:'0 0 32px' }}>
            See what arrives in the deck before you scope an engagement.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`mailto:${CONTACT.email}?subject=Sample%20Crossover%20Voice%20of%20Customer%20report`} style={{ background:'rgba(255,255,255,.96)', color:'#050e1e', padding:'12px 28px', fontSize:15, fontWeight:700, textDecoration:'none', borderRadius:2 }}>
              Email Ian for a sample →
            </a>
            <a href="/intelligence" style={{ background:'transparent', color:'rgba(255,255,255,.92)', border:'1px solid rgba(255,255,255,.30)', padding:'12px 24px', fontSize:15, fontWeight:500, textDecoration:'none', borderRadius:2 }}>
              See the Intelligence Suite →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
