'use client';
import { useState } from 'react';
import {
  IB_TRACK_RECORD, IB_WORKFLOW_STAGES, IB_CAPS, IB_CAP_DATA,
  type IBCap,
} from '../../lib/data/ibCapabilities';

export default function CapabilitiesPage() {
  const [activeCap, setActiveCap] = useState<IBCap>('mandate');
  const cap = IB_CAP_DATA[activeCap];

  return (
    <>
{/* HERO */}
{/* HERO */}
      <section className="ib-hero">
        <div className="ib-inner">
          <div className="ib-eyebrow">Crossover Research · Sell-Side Intelligence Platform</div>
          <h1 className="ib-title">
            The research layer that turns<br />
            <em>mandates into wins.</em>
          </h1>
          <p className="ib-lead">
            Proprietary Voice of Customer intelligence purpose-built for investment banking.
            Independent evidence from verified customers — not management-sourced references,
            not analyst reports, not expert network calls. Primary research that survives
            buyer IC scrutiny because it was never curated by the sell-side.
          </p>

          {/* Track record strip */}
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
              <div className="ib-metric-val">{IB_TRACK_RECORD.avgDeliveryDays}</div>
              <div className="ib-metric-lbl">Days avg. study turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* J.P. MORGAN PROOF */}
      <section className="ib-proof">
        <div className="ib-inner">
          <div className="ib-proof-quote">
            &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.
            The findings from your report were a key part of the equity story materials we presented.&rdquo;
          </div>
          <div className="ib-proof-attr">
            <span className="ib-proof-name">Executive Director, J.P. Morgan</span>
            <span className="ib-proof-sep">·</span>
            <span className="ib-proof-role">Sell-side mandate · $10B transaction</span>
          </div>
        </div>
      </section>


      {/* DIFFERENTIATORS */}
      <section className="ib-section ib-section-dark" id="why">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Why Crossover</div>
          <h2 className="ib-section-title" style={{ color: '#fff' }}>
            Not a Consulting Firm. Not an Expert Network.
          </h2>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.7)' }}>
            Crossover Research is a proprietary intelligence platform built specifically for
            investment decision-making. Every capability exists because the traditional
            research infrastructure fails at the exact moment a transaction process demands it.
          </p>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.55)', marginTop: '-20px' }}>
            More verified respondents, more benchmark dimensions, and more IC-ready structure
            than 30 expert network calls, at a fraction of the cost. Where expert networks
            produce conversation notes, Crossover produces evidence.
          </p>
        </div>
      </section>

      {/* WORKFLOW MAP */}
      <section className="ib-section" id="workflow">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">How We Fit Your Process</div>
          <h2 className="ib-section-title">Six Moments Where Crossover Changes the Outcome</h2>
          <p className="ib-section-desc">
            Intelligence inserted at each critical inflection point in the sell-side mandate —
            from before the pitch to after the LOI.
          </p>
          <div className="ib-workflow">
            {IB_WORKFLOW_STAGES.map((stage, i) => (
              <div key={i} className="ib-stage">
                <div className="ib-stage-num">{stage.num}</div>
                <div className="ib-stage-label">{stage.label}</div>
                <div className="ib-stage-desc">{stage.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ib-section ib-section-alt" id="capabilities">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Intelligence Capabilities</div>
          <h2 className="ib-section-title">Five Integrated Capabilities</h2>
          <p className="ib-section-desc">
            Each capability maps to a moment in the banker workflow where proprietary customer
            intelligence creates asymmetric advantage. They compound — the research built for
            mandate pursuit becomes the CIM evidence, the buyer pre-read, and the management prep.
          </p>

          {/* Capability tabs */}
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

          {/* Capability panel */}
          <div className="ib-cap-panel">
            {/* Problem / Answer framing */}
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

            {/* Header: headline + stats */}
            <div className={cap.stats.length > 0 ? "ib-cap-header" : "ib-cap-header-full"}>
              <div>
                <h3 className="ib-cap-headline">{cap.headline}</h3>
                <p className="ib-cap-body">{cap.body}</p>
              </div>
              {cap.stats.length > 0 && (
                <div className="ib-stat-box">
                  {cap.stats.map((s, i) => (
                    <div key={i} className="ib-stat-row">
                      <span className="ib-stat-label">{s.label}</span>
                      <span className="ib-stat-val">{s.val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6 feature cards */}
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

      {/* DIFFERENTIATORS */}
      <section className="ib-section ib-section-dark" id="why">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Why Crossover</div>
          <h2 className="ib-section-title" style={{ color: '#fff' }}>
            Not a Consulting Firm. Not an Expert Network.
          </h2>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.7)' }}>
            Crossover Research is a proprietary intelligence platform built specifically for
            investment decision-making. Every capability exists because the traditional
            research infrastructure fails at the exact moment a transaction process demands it.
          </p>
          <p className="ib-section-desc" style={{ color: 'rgba(255,255,255,.55)', marginTop: '-20px' }}>
            More verified respondents, more benchmark dimensions, and more IC-ready structure
            than 30 expert network calls, at a fraction of the cost. Where expert networks
            produce conversation notes, Crossover produces evidence.
          </p>
        </div>
      </section>

      {/* SAMPLE RESEARCH LINK */}
      <section className="ib-section" id="samples">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Sample Intelligence</div>
          <h2 className="ib-section-title">See a Crossover Sample Study</h2>
          <p className="ib-section-desc">
            The Red Canary and BlueCat Networks Catalyst studies are live examples of the
            intelligence your deal team receives. The queryable portal, verbatim evidence,
            competitive benchmarking, and IC-ready data — all accessible now.
          </p>
          <div className="ib-samples">
            <a href="/thesis" className="ib-sample-card">
              <div className="ib-sample-type">Catalyst Study</div>
              <div className="ib-sample-name">Red Canary — MDR</div>
              <div className="ib-sample-meta">9-vendor benchmark · 75+ verified respondents · Cybersecurity</div>
              <div className="ib-sample-link">View the Thesis Tab →</div>
            </a>
            <a href="/bluecat" className="ib-sample-card">
              <div className="ib-sample-type">Catalyst Study</div>
              <div className="ib-sample-name">BlueCat Networks — DDI</div>
              <div className="ib-sample-meta">55 verified respondents · Mission-critical infrastructure · Network software</div>
              <div className="ib-sample-link">View the BlueCat Tab →</div>
            </a>
            <a href="/partner" className="ib-sample-card ib-sample-cta">
              <div className="ib-sample-type">Engagement</div>
              <div className="ib-sample-name">Start a Mandate</div>
              <div className="ib-sample-meta">Live mandate · Upcoming pitch · 20-minute walkthrough</div>
              <div className="ib-sample-link">Work With Us →</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ib-cta">
        <div className="ib-inner" style={{ textAlign: 'center' }}>
          <h2 className="ib-cta-title">Ready to see it on your next mandate?</h2>
          <p className="ib-cta-sub">
            Walk through a live intelligence portal and see exactly how Crossover fits
            into your process. We will tell you within 24 hours whether your next target
            is already covered in our Catalyst library.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ian@crossoverresearch.com" className="ib-cta-btn">
              Email Ian McArdle
            </a>
            <a
              href="https://book.crossoverresearch.com/#/crossoverresearch"
              target="_blank"
              rel="noopener noreferrer"
              className="ib-cta-btn ib-cta-btn-ghost"
            >
              Book a 20-Minute Call
            </a>
          </div>
        </div>
      </section>
</>
  );
}
