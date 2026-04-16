'use client';
import { useState } from 'react';
import { CONTACT } from '../../lib/config/site';

const CAPABILITY_DIMS = [
  { label: 'Feature Adoption & Daily Utility',   score: 8.9 },
  { label: 'Competitive Differentiation',         score: 8.7 },
  { label: 'Marketing Claims vs. Reality',        score: 8.6 },
  { label: 'Business Differentiation',            score: 8.5 },
  { label: 'Accuracy & Reliability',              score: 8.3 },
  { label: 'Roadmap Confidence',                  score: 8.2 },
  { label: 'Value Quantification & ROI',          score: 8.1 },
  { label: 'AI Sophistication Level',             score: 8.0 },
  { label: 'Implementation Ease',                 score: 7.8 },
  { label: 'Innovation Velocity',                 score: 7.4 },
];

const RESILIENCE_DIMS = [
  { label: 'Data & Workflow Lock-In',       score: 9.1 },
  { label: 'AI Leapfrog Resistance',        score: 9.0 },
  { label: 'AI-Native Replacement Risk',    score: 8.4 },
  { label: 'Pricing Model Defense',         score: 8.2 },
  { label: 'Vendor Strategy Credibility',   score: 8.0 },
];

const PACKAGES = [
  {
    id: 'capability',
    name: 'AI Capability',
    price: '$25–30k',
    timeline: '2–3 weeks',
    desc: 'How good is your AI today? 10 dimensions measuring adoption, value, competitive position, innovation, and accuracy.',
    useCase: 'Marketing proof points · Competitive benchmarking · Pre-pitch positioning',
    dims: 10,
    color: 'rgba(77,144,254,.8)',
    colorBg: 'rgba(77,144,254,.1)',
    colorBorder: 'rgba(77,144,254,.25)',
  },
  {
    id: 'resilience',
    name: 'AI Displacement Risk',
    price: '$25–30k',
    timeline: '2–3 weeks',
    desc: 'Will you survive AI-native competition? 5 dimensions measuring replacement risk, data moats, seat compression, leapfrog potential.',
    useCase: 'M&A diligence prep · Board presentations · Buyer objection pre-emption',
    dims: 5,
    color: 'rgba(245,158,11,.85)',
    colorBg: 'rgba(245,158,11,.08)',
    colorBorder: 'rgba(245,158,11,.25)',
  },
  {
    id: 'complete',
    name: 'Complete Q of AI',
    price: '$40–50k',
    timeline: '3–4 weeks',
    desc: 'The full picture. Dual scorecard showing both current strength and future resilience. AI Fortress quadrant companies command 15–25% valuation premiums.',
    useCase: 'Full sell-side process · CIM enhancement · Premium multiple justification',
    dims: 15,
    color: 'rgba(45,212,160,.9)',
    colorBg: 'rgba(45,212,160,.08)',
    colorBorder: 'rgba(45,212,160,.25)',
    featured: true,
  },
];

const QUADRANTS = [
  {
    id: 'catalyst',
    name: 'AI Catalyst',
    badge: 'Growth Opportunity',
    badgeColor: 'rgba(77,144,254,.9)',
    badgeBg: 'rgba(77,144,254,.12)',
    desc: 'High Resilience + Emerging AI capability. Strong structural moats with untapped AI potential.',
    pos: 'top-left',
  },
  {
    id: 'fortress',
    name: 'AI Fortress',
    badge: 'Premium Asset',
    badgeColor: 'rgba(45,212,160,.95)',
    badgeBg: 'rgba(45,212,160,.12)',
    desc: 'High Capability + High Resilience. Deep moats, advanced AI. Commands premium valuations.',
    pos: 'top-right',
    highlight: true,
  },
  {
    id: 'foundation',
    name: 'AI Foundation',
    badge: 'Rebuild Required',
    badgeColor: 'rgba(255,77,94,.85)',
    badgeBg: 'rgba(255,77,94,.1)',
    desc: 'Emerging AI + Developing Moats. Requires investment in both capability and defensibility.',
    pos: 'bottom-left',
  },
  {
    id: 'accelerator',
    name: 'AI Accelerator',
    badge: 'Moat Investment Needed',
    badgeColor: 'rgba(245,158,11,.9)',
    badgeBg: 'rgba(245,158,11,.1)',
    desc: 'Strong AI + Developing Moats. Needs deeper structural defensibility to sustain positioning.',
    pos: 'bottom-right',
  },
];

const OBJECTIONS = [
  {
    q: '"Won\'t ChatGPT or Claude make this obsolete?"',
    a: 'Counter with 9.1/10 data lock-in score and customer verbatim about failed replacement tests. 18–24 month replication barrier documented from actual users.',
  },
  {
    q: '"Is the company keeping pace with AI-native startups?"',
    a: 'Acknowledge 7.4/10 innovation velocity transparently. Pivot to roadmap credibility (8.0/10) and structural moats that AI-native startups cannot replicate on any timeline.',
  },
  {
    q: '"Why pay a premium multiple?"',
    a: 'AI Fortress quadrant positioning. Only 15–20% of software companies achieve High Capability + High Resilience. Customer-validated, not self-reported.',
  },
  {
    q: '"Can customers easily switch?"',
    a: 'System-of-record status with 8+ integrations per customer. 6+ month migration timeline. 82% daily active usage creates deep dependency that foundation models cannot overcome.',
  },
];

function ScoreBar({ score, color }: { score: number; color: string }) {
  const pct = (score / 10) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,.08)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2, transition: 'width .6s cubic-bezier(.4,0,.2,1)' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.75)', minWidth: 28, textAlign: 'right' }}>
        {score.toFixed(1)}
      </div>
    </div>
  );
}

export default function QofAIPage() {
  const [activePackage, setActivePackage] = useState('complete');

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(168deg,#050e1e 0%,#081526 55%,#0c1e38 100%)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '44px 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 36px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center', paddingBottom: 40 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 9, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(45,212,160,.8)', background: 'rgba(45,212,160,.08)', border: '1px solid rgba(45,212,160,.2)', padding: '3px 10px', marginBottom: 20 }}>
                New Product
              </div>
              <h1 style={{ fontSize: 44, fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-.04em', marginBottom: 18 }}>
                Quality of AI<br />
                <span style={{ color: 'rgba(255,255,255,.68)', fontWeight: 300 }}>Assessment</span>
              </h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: 28 }}>
                Every PE fund and strategic acquirer now leads with: <em style={{ color: 'rgba(255,200,100,.8)', fontStyle: 'normal' }}>"Will this company be displaced by AI-native competition?"</em> Generic "AI-powered" claims create valuation discounts. Customer-validated positioning commands premium multiples.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href={`mailto:${CONTACT.email}`} style={{ background: 'rgba(255,255,255,.95)', color: '#050e1e', border: 'none', padding: '8px 20px', fontSize: 12, fontWeight: 700, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Request Assessment →
                </a>
                <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,.6)', border: '1px solid rgba(255,255,255,.18)', padding: '8px 18px', fontSize: 12, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>
                  Book a Call
                </a>
              </div>
            </div>

            {/* Scorecard preview */}
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(45,212,160,.4),transparent)' }} />
              <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.62)', marginBottom: 3 }}>AI Assessment Scorecard</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.68)' }}>[Company Name] · Enterprise SaaS</div>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(45,212,160,.9)', background: 'rgba(45,212,160,.12)', border: '1px solid rgba(45,212,160,.3)', padding: '3px 10px' }}>
                  AI FORTRESS
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.06)', margin: '0' }}>
                {[
                  { val: '8.3', lbl: 'AI Capability', sub: '10 dimensions', color: 'rgba(77,144,254,.9)' },
                  { val: '8.7', lbl: 'AI Resilience', sub: '5 dimensions', color: 'rgba(45,212,160,.9)' },
                  { val: '82%', lbl: 'Daily AI Adoption', sub: '14.2 hrs/wk saved', color: 'rgba(255,255,255,.85)' },
                  { val: '9.1', lbl: 'Data Lock-In', sub: '18–24 mo barrier', color: 'rgba(245,158,11,.9)' },
                ].map((m, i) => (
                  <div key={i} style={{ background: 'rgba(6,14,28,.9)', padding: '16px 18px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700, color: m.color, lineHeight: 1, letterSpacing: '-.03em', marginBottom: 4 }}>{m.val}</div>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.68)', marginBottom: 3 }}>{m.lbl}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,.70)' }}>{m.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.70)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 8 }}>
                  "We tested ChatGPT and Claude as replacements, but they failed completely without our domain data."
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.70)' }}>VP of Operations · Enterprise Customer (12+ integrations)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUADRANT MATRIX — full width, no separate key */}
      <section style={{ padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 36px' }}>
          <div className="ib-section-eyebrow">AI Resilience Matrix</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginTop: 8, marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', lineHeight: 1.2, margin: 0 }}>
              Four quadrants. One determines valuation.
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.70)', lineHeight: 1.7, margin: 0 }}>
              SaaS valuations down $1.5T as investors reprice structural AI displacement risk. The Q of AI maps every asset against two axes — current AI strength and structural defensibility — into four quadrants with distinct M&A implications.
            </p>
          </div>

          {/* Full-width 2×2 matrix with axis labels */}
          <div style={{ position: 'relative', marginLeft: 32 }}>
            {/* Y-axis label */}
            <div style={{ position: 'absolute', left: -32, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20 }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.70)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', transformOrigin: 'center center' }}>AI CAPABILITY →</div>
            </div>
            {/* X-axis label */}
            <div style={{ textAlign: 'center', fontSize: 8, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.70)', marginBottom: 10 }}>AI RESILIENCE →</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)' }}>
              {/* Top-left: AI Catalyst */}
              <div style={{ background: 'rgba(6,14,28,.95)', padding: '32px 32px', minHeight: 200 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(77,144,254,.8)', background: 'rgba(77,144,254,.1)', padding: '2px 8px', display: 'inline-block', marginBottom: 12 }}>Growth Opportunity</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'rgba(77,144,254,.9)', marginBottom: 10 }}>AI Catalyst</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.65)', lineHeight: 1.6 }}>High Resilience + Emerging AI capability. Strong structural moats with untapped AI potential. Valuation upside depends on AI execution.</div>
              </div>
              {/* Top-right: AI Fortress — highlighted */}
              <div style={{ background: 'rgba(45,212,160,.05)', padding: '32px 32px', minHeight: 200, borderLeft: '2px solid rgba(45,212,160,.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,rgba(45,212,160,.5),transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(45,212,160,.9)', background: 'rgba(45,212,160,.12)', padding: '2px 8px', display: 'inline-block' }}>Premium Asset</div>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(45,212,160,.5)', fontFamily: 'var(--font-mono)' }}>← Target Quadrant</div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'rgba(45,212,160,.95)', marginBottom: 10 }}>AI Fortress</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.68)', lineHeight: 1.6 }}>High Capability + High Resilience. Deep data moats, advanced AI, structural defensibility. Commands 15–25% valuation premium over peers.</div>
              </div>
              {/* Bottom-left: AI Foundation */}
              <div style={{ background: 'rgba(6,14,28,.95)', padding: '32px 32px', minHeight: 200, borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,77,94,.8)', background: 'rgba(255,77,94,.07)', padding: '2px 8px', display: 'inline-block', marginBottom: 12 }}>Rebuild Required</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'rgba(255,77,94,.75)', marginBottom: 10 }}>AI Foundation</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.60)', lineHeight: 1.6 }}>Emerging AI + Developing Moats. Requires investment in both capability and structural defensibility. Valuation discount until trajectory is established.</div>
              </div>
              {/* Bottom-right: AI Accelerator */}
              <div style={{ background: 'rgba(6,14,28,.95)', padding: '32px 32px', minHeight: 200, borderTop: '1px solid rgba(255,255,255,.05)', borderLeft: '1px solid rgba(255,255,255,.05)' }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(245,158,11,.85)', background: 'rgba(245,158,11,.07)', padding: '2px 8px', display: 'inline-block', marginBottom: 12 }}>Moat Investment Needed</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'rgba(245,158,11,.85)', marginBottom: 10 }}>AI Accelerator</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.60)', lineHeight: 1.6 }}>Strong AI capability + Developing Moats. Needs deeper structural defensibility to sustain positioning against AI-native competition long-term.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 DIMENSIONS */}
      <section style={{ padding: '40px 0', background: 'rgba(255,255,255,.015)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 36px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <div>
              <div className="ib-section-eyebrow" style={{ marginBottom: 4 }}>The Framework</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.02em', margin: 0 }}>15 dimensions. Two independent scores.</h2>
            </div>
            <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.68)', lineHeight: 1.65, margin: 0 }}>
              Every score derived from structured customer interviews — not internal benchmarks. Capability alone does not predict valuation resilience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>

            {/* ── Capability Panel ── */}
            <div style={{ background: 'rgba(6,14,28,.98)', border: '1px solid rgba(77,144,254,.18)', overflow: 'hidden' }}>
              <div style={{ background: 'rgba(77,144,254,.06)', borderBottom: '1px solid rgba(77,144,254,.15)', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(77,144,254,.7)', marginBottom: 4 }}>Part I · 10 Dimensions</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.02em' }}>AI Capability Score</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 40, fontWeight: 700, color: 'rgba(77,144,254,.95)', letterSpacing: '-.04em', lineHeight: 1 }}>83</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,.70)', marginTop: 3, letterSpacing: '.06em' }}>OUT OF 100</div>
                </div>
              </div>
              <div>
                {CAPABILITY_DIMS.map((d, i) => (
                  <div key={i} style={{ padding: '11px 24px', borderBottom: i < CAPABILITY_DIMS.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none', display: 'grid', gridTemplateColumns: '1fr 40px', alignItems: 'center', gap: 14 }}>
                    <div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.8)', marginBottom: 6, fontWeight: 500 }}>{d.label}</div>
                      <div style={{ height: 3, background: 'rgba(255,255,255,.08)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${(d.score/10)*100}%`, height: '100%', background: 'linear-gradient(90deg,rgba(77,144,254,.6),rgba(77,144,254,.9))', borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'rgba(77,144,254,.95)', textAlign: 'right' }}>{d.score.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Resilience Panel ── */}
            <div style={{ background: 'rgba(6,14,28,.98)', border: '1px solid rgba(45,212,160,.18)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(45,212,160,.05)', borderBottom: '1px solid rgba(45,212,160,.15)', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(45,212,160,.7)', marginBottom: 4 }}>Part II · 5 Dimensions</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.02em' }}>AI Resilience Score</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 40, fontWeight: 700, color: 'rgba(45,212,160,.95)', letterSpacing: '-.04em', lineHeight: 1 }}>87</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,.70)', marginTop: 3, letterSpacing: '.06em' }}>OUT OF 100</div>
                </div>
              </div>
              <div>
                {RESILIENCE_DIMS.map((d, i) => (
                  <div key={i} style={{ padding: '11px 24px', borderBottom: i < RESILIENCE_DIMS.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none', display: 'grid', gridTemplateColumns: '1fr 40px', alignItems: 'center', gap: 14 }}>
                    <div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.8)', marginBottom: 6, fontWeight: 500 }}>{d.label}</div>
                      <div style={{ height: 3, background: 'rgba(255,255,255,.08)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${(d.score/10)*100}%`, height: '100%', background: 'linear-gradient(90deg,rgba(45,212,160,.6),rgba(45,212,160,.9))', borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'rgba(45,212,160,.95)', textAlign: 'right' }}>{d.score.toFixed(1)}</div>
                  </div>
                ))}
              </div>
              {/* Verdict footer */}
              <div style={{ margin: '0 24px 20px', marginTop: 'auto', paddingTop: 16 }}>
                <div style={{ background: 'rgba(45,212,160,.06)', border: '1px solid rgba(45,212,160,.2)', padding: '12px 16px' }}>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(45,212,160,.6)', marginBottom: 5 }}>Verdict</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(45,212,160,.95)', marginBottom: 3 }}>AI Fortress Quadrant — Premium Asset</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)' }}>Top 15–20% of assessed software companies</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BUYER OBJECTIONS */}
      <section style={{ padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 36px' }}>
          <div className="ib-section-eyebrow">Buyer Objection Handling</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.022em', marginBottom: 6, marginTop: 8 }}>Every IC now has an AI question. You need a customer-backed answer.</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.70)', marginBottom: 32 }}>
            Generic "AI-powered" claims get discounted before the first page turn. The Q of AI produces customer-validated responses to each blocking objection.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,.07)' }}>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: 'rgba(6,14,28,.95)' }}>
                <div style={{ padding: '18px 24px', borderRight: '1px solid rgba(255,255,255,.07)' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,77,94,.6)', marginBottom: 6 }}>Buyer Objection</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', lineHeight: 1.5, fontStyle: 'italic' }}>{o.q}</div>
                </div>
                <div style={{ padding: '18px 24px' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(45,212,160,.7)', marginBottom: 6 }}>Q of AI Answer</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.65 }}>{o.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: '52px 0', background: 'linear-gradient(168deg,#050e1e 0%,#081628 100%)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 36px' }}>
          <div className="ib-section-eyebrow">Engagement Options</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.022em', marginBottom: 6, marginTop: 8 }}>Three packages. One methodology.</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.70)', marginBottom: 32 }}>
            Every package includes a visual scorecard, 25+ slide VoC report, customer verbatims, and CIM-ready positioning language.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.08)', marginBottom: 32 }}>
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                style={{
                  background: pkg.featured ? 'rgba(45,212,160,.05)' : 'rgba(6,14,28,.95)',
                  padding: '28px 28px',
                  cursor: 'pointer',
                  borderTop: pkg.featured ? '2px solid rgba(45,212,160,.5)' : '2px solid transparent',
                  transition: 'background .15s',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div style={{ position: 'absolute', top: 12, right: 14, fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(45,212,160,.9)', background: 'rgba(45,212,160,.12)', padding: '2px 8px' }}>
                    Most Complete
                  </div>
                )}
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: pkg.color, marginBottom: 8 }}>
                  {pkg.dims} Dimension{pkg.dims > 1 ? 's' : ''}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,.92)', marginBottom: 6 }}>{pkg.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: pkg.color, letterSpacing: '-.02em', marginBottom: 4 }}>{pkg.price}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.62)', marginBottom: 16 }}>{pkg.timeline}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.72)', lineHeight: 1.65, marginBottom: 14 }}>{pkg.desc}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.72)', lineHeight: 1.6, fontStyle: 'italic' }}>{pkg.useCase}</div>
              </div>
            ))}
          </div>

          {/* Every package includes */}
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', padding: '20px 28px' }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.62)', marginBottom: 14 }}>Every Package Includes</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {[
                { title: 'Visual Scorecard', desc: 'CIM-ready slides with quantified scores across all dimensions' },
                { title: 'Full VoC Report', desc: '25+ slides: executive summary, benchmarking, verbatim customer quotes' },
                { title: 'AI Resilience Matrix', desc: 'Quadrant positioning: Fortress / Catalyst / Accelerator / Foundation' },
                { title: 'Buyer Objection Pack', desc: 'Customer-backed responses to every standard AI IC objection' },
              ].map((item, i) => (
                <div key={i} style={{ borderLeft: '2px solid rgba(45,212,160,.3)', paddingLeft: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.75)', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.60)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '52px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 36px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(45,212,160,.7)', marginBottom: 16 }}>Get Started</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,.95)', letterSpacing: '-.025em', lineHeight: 1.2, marginBottom: 14 }}>
            Pre-empt the objection.<br />Commission the Q of AI.
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.70)', lineHeight: 1.7, marginBottom: 28 }}>
            Institutional buyers expect this level of diligence. AI Fortress quadrant companies command 15–25% valuation premiums. The research takes 3–4 weeks. Most processes don't give you that window twice.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${CONTACT.email}`} style={{ background: 'rgba(255,255,255,.95)', color: '#050e1e', border: 'none', padding: '10px 24px', fontSize: 12, fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>
              Email Ian →
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,.6)', border: '1px solid rgba(255,255,255,.18)', padding: '10px 20px', fontSize: 12, fontWeight: 500, textDecoration: 'none' }}>
              Book a Call
            </a>
          </div>
          <div style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,.70)' }}>
            {CONTACT.email}
          </div>
        </div>
      </section>
    </>
  );
}
