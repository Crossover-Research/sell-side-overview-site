'use client';
import { useState } from 'react';
import {
  IB_TRACK_RECORD, IB_CAPS, IB_CAP_DATA, IB_DIFFERENTIATORS,
  type IBCap,
} from '../../lib/data/ibCapabilities';

export default function CapabilitiesPage() {
  const [activeCap, setActiveCap] = useState<IBCap>('mandate');
  const cap = IB_CAP_DATA[activeCap];

  return (
    <>
      {/* HERO */}
      <section className="ib-hero">
        <div className="ib-inner">
          <div className="ib-eyebrow">Crossover Research · Multi-Sided Intelligence Platform</div>
          <h1 className="ib-title">
            Stockpicking private markets.<br />
            <em>Independent by construction. Compounding by design.</em>
          </h1>
          <p className="ib-lead">
            Crossover uses sell-side line of sight and proprietary primary research to form original fundamental
            views on high-quality assets — then serves every party in the transaction with the same
            independent evidence. Not a consulting firm. Not an expert network. A multi-sided intelligence
            engine that spans the transaction lifecycle because the methodology serves the business,
            not just the deal.
          </p>

          <div className="ib-metrics">
            <div className="ib-metric">
              <div className="ib-metric-val">{IB_TRACK_RECORD.winRateWithCrossover}</div>
              <div className="ib-metric-lbl">Mandate win rate with Crossover</div>
            </div>
            <div className="ib-metric">
              <div className="ib-metric-val">{IB_TRACK_RECORD.jpmEngagements}</div>
              <div className="ib-metric-lbl">J.P. Morgan engagements completed</div>
            </div>
            <div className="ib-metric">
              <div className="ib-metric-val">{IB_TRACK_RECORD.totalTransactionValue}</div>
              <div className="ib-metric-lbl">Transaction value supported</div>
            </div>
            <div className="ib-metric">
              <div className="ib-metric-val" style={{ fontSize: 13 }}>{IB_TRACK_RECORD.avgDeliveryDays}</div>
              <div className="ib-metric-lbl">Delivery — Catalyst vs. custom</div>
            </div>
          </div>

          <div className="ib-inline-quote">
            <div className="ib-inline-quote-text">
              &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.
              The findings from your report were a key part of the equity story materials we presented.&rdquo;
            </div>
            <div className="ib-inline-quote-attr">
              <span className="ib-inline-quote-name">Executive Director, J.P. Morgan</span>
              <span className="ib-inline-quote-sep"> · </span>
              <span className="ib-inline-quote-role">Sell-side mandate · $10B transaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE FLYWHEEL — Nerdio proof of model */}
      <section className="ib-section ib-section-dark" id="flywheel">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Proof of the Model</div>
          <h2 className="ib-section-title" style={{ color: '#fff' }}>
            Both Sides of $500M — The Nerdio Deal
          </h2>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.72)' }}>
            J.P. Morgan engaged Crossover to win the Nerdio Series C mandate. That sell-side engagement gave
            Crossover line of sight into an asset the PE market hadn&rsquo;t yet evaluated. We formed a
            preliminary fundamental view from the primary research: high-conviction story. We alerted select
            funds that fit the thesis profile.
          </p>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.72)', marginTop: '-12px' }}>
            General Atlantic took a 30-minute call. The mandate research briefed them on a fully-formed thesis
            in a single meeting. They commissioned Crossover for secondary diligence to validate the initial
            findings. The diligence held.{' '}
            <strong style={{ color: '#fff' }}>$500M Series C at $1B+ valuation.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 24 }}>
            {[
              { step: '01', label: 'Sell-Side Mandate', desc: 'J.P. Morgan engages Crossover' },
              { step: '02', label: 'Line of Sight',     desc: 'Primary research reveals high-conviction asset' },
              { step: '03', label: 'Fundamental View',  desc: 'Original thesis formed — stockpicker\'s lens' },
              { step: '04', label: 'Buy-Side Match',    desc: 'Select funds alerted · 30-min conviction brief' },
              { step: '05', label: 'Secondary Diligence', desc: 'GA commissions validation · $500M closes' },
            ].map(({ step, label, desc }, i) => (
              <div key={i} style={{ padding: '16px 18px', borderRight: i < 4 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: 'rgba(130,175,255,.5)', marginBottom: 6 }}>STEP {step}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.85)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: '13px 18px', background: 'rgba(255,255,255,.05)', borderLeft: '3px solid rgba(130,175,255,.35)', fontSize: 12, color: 'rgba(255,255,255,.55)', fontStyle: 'italic', lineHeight: 1.6 }}>
            Sell-side line of sight. Proprietary primary research. Original fundamental view. Buy-side match.
            The same infrastructure that wins mandates for bankers identifies the next great asset for funds.
            It only works because the data is never curated for either side.
          </div>
        </div>
      </section>

      {/* WHY CROSSOVER — differentiators */}
      <section className="ib-section" id="why">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Why Crossover</div>
          <h2 className="ib-section-title">Not a Consulting Firm. Not an Expert Network.</h2>
          <p className="ib-section-desc">
            In media, advertisers and networks both rely on Nielsen because neither can accept audience data the
            other produced. Private markets had no equivalent. Crossover is the independent measurement layer
            both sides of a transaction can use — because neither side chooses the respondents and verbatim
            quotes cannot be curated without being changed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 24 }}>
            {IB_DIFFERENTIATORS.map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', padding: '20px 22px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: 'rgba(130,175,255,.6)', marginBottom: 8 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.88)', marginBottom: 8, lineHeight: 1.3 }}>{d.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>{d.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: '14px 20px', background: 'rgba(77,144,254,.06)', border: '1px solid rgba(77,144,254,.14)', fontSize: 13, color: 'rgba(160,200,255,.8)', lineHeight: 1.65, fontStyle: 'italic' }}>
            &ldquo;Most research firms confirm the thesis. Crossover surfaces the gaps — using independent respondents who
            weren&rsquo;t handpicked, findings that include the friction and the complaints. Research that includes
            limitations is the highest-credibility format available in private markets.&rdquo;
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ib-section ib-section-alt" id="capabilities">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Intelligence Capabilities</div>
          <h2 className="ib-section-title">Six Integrated Capabilities</h2>
          <p className="ib-section-desc">
            Each capability maps to a moment where independent customer intelligence creates asymmetric advantage.
            They compound: mandate pitch research becomes the CIM evidence, the Operator Rebuttal closes the gaps,
            the buyer mapping pre-screens conviction, and the AI management meetings simulate the IC before it happens.
          </p>

          <div className="ib-cap-tabs">
            {IB_CAPS.map(c => (
              <button
                key={c}
                className={`ib-cap-tab${activeCap === c ? ' active' : ''}`}
                onClick={() => setActiveCap(c)}
              >
                {IB_CAP_DATA[c].label}
              </button>
            ))}
          </div>

          <div className="ib-cap-panel">
            <div className="ib-framing">
              <div className="ib-framing-col">
                <div className="ib-framing-label">The Problem</div>
                <p className="ib-framing-text">{cap.bankerProblem}</p>
              </div>
              <div className="ib-framing-arrow">→</div>
              <div className="ib-framing-col ib-framing-answer">
                <div className="ib-framing-label">Crossover Answer</div>
                <p className="ib-framing-text">{cap.crossoverAnswer}</p>
              </div>
            </div>
            <div className="ib-cap-header-full">
              <h3 className="ib-cap-headline">{cap.headline}</h3>
              <p className="ib-cap-body">{cap.body}</p>
            </div>
            <div className="ib-features">
              {cap.features.map((f, i) => (
                <div key={i} className="ib-feature">
                  <div className="ib-feature-title">{f.title}</div>
                  <div className="ib-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE RESEARCH */}
      <section className="ib-section" id="samples">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Sample Intelligence</div>
          <h2 className="ib-section-title">See a Crossover Study Live</h2>
          <p className="ib-section-desc">
            Red Canary and BlueCat Networks are live Catalyst studies — the same format your deal team receives.
            Verbatim evidence, competitive benchmarking, IC-ready data, queryable portal. All accessible now.
          </p>
          <div className="ib-samples">
            <a href="/redcanary" className="ib-sample-card">
              <div className="ib-sample-type">Catalyst Study · SENTINEL</div>
              <div className="ib-sample-name">Red Canary — MDR</div>
              <div className="ib-sample-meta">9-vendor benchmark · 75+ verified respondents · 9.0 NPS · 8.8 replication difficulty</div>
              <div className="ib-sample-link">Preview Study →</div>
            </a>
            <a href="/bluecat" className="ib-sample-card">
              <div className="ib-sample-type">Catalyst Study · FORTRESS</div>
              <div className="ib-sample-name">BlueCat Networks — DDI</div>
              <div className="ib-sample-meta">55 verified respondents · 9.0 mission criticality · 1.9 switching intent · 98.5% NRR</div>
              <div className="ib-sample-link">Preview Study →</div>
            </a>
            <a href="/catalyst" className="ib-sample-card ib-sample-cta">
              <div className="ib-sample-type">Catalyst Library</div>
              <div className="ib-sample-name">20+ Assets Available</div>
              <div className="ib-sample-meta">Same-day delivery if covered · Investment hooks, metrics, verbatims, moat analysis</div>
              <div className="ib-sample-link">Browse Library →</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ib-cta">
        <div className="ib-inner" style={{ textAlign: 'center' }}>
          <h2 className="ib-cta-title">Ready to see it on your next mandate?</h2>
          <p className="ib-cta-sub">
            Walk through a live intelligence portal and see exactly how Crossover fits your process.
            We will confirm within 24 hours whether your next target is already covered in Catalyst.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ian@crossoverresearch.com" className="ib-cta-btn">Email Ian McArdle</a>
            <a href="https://book.crossoverresearch.com/#/crossoverresearch" target="_blank" rel="noopener noreferrer" className="ib-cta-btn ib-cta-btn-ghost">Book a 20-Minute Call</a>
          </div>
        </div>
      </section>
    </>
  );
}
