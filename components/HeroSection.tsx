'use client';
import { useState, useEffect } from 'react';
import type { Tab } from '../lib/types';

const PROOF_CARDS = [
  {
    quote: 'Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented.',
    name: 'Executive Director, J.P. Morgan',
    role: 'Sell-side mandate · $10B transaction',
    tag: 'Mandate Win',
  },
  {
    quote: 'J.P. Morgan mandate → Crossover line of sight → original fundamental view → GA 30-min brief → secondary diligence validated → $500M Series C at $1B+ valuation.',
    name: 'The Nerdio Deal',
    role: 'Both sides of the same transaction',
    tag: 'Proof of Flywheel',
  },
  {
    quote: 'Independent by construction. Neither side chose the respondents. The same verbatim customer truth serves the sell-side equity story and the buy-side investment thesis simultaneously.',
    name: 'The Verbatim Truth Layer',
    role: 'Why both sides can rely on it',
    tag: 'Independence',
  },
];

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  const isBluecat = tab === 'bluecat';
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive(a => (a + 1) % PROOF_CARDS.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 250);
  };

  const card = PROOF_CARDS[active];

  return (
    <div className="hero">
      <div className="hero-inner">
        {!isBluecat ? (
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                The gaps in your story<br />
                <span>exist whether you surface them or not.</span>
              </h1>
              <p className="hero-subtitle">
                Crossover finds them first &mdash; using independent respondents nobody handpicked &mdash;
                then builds customer-backed evidence to close them before buyers do.
                The same research wins your mandate, hardens your CIM, and anchors buy-side conviction.
              </p>
              <div className="hero-actions">
                <a href="/partner" className="hero-cta-primary">Work With Us &rarr;</a>
                <a href="/intelligence" className="hero-cta-secondary">Intelligence Platform &rarr;</a>
              </div>
            </div>

            {/* Rotating proof carousel */}
            <div className="hero-proof" style={{ position: 'relative', minHeight: 240 }}>
              {/* Tag */}
              <div style={{
                display: 'inline-block', fontSize: 9, fontWeight: 700,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: 'rgba(77,144,254,.9)', background: 'rgba(77,144,254,.12)',
                border: '1px solid rgba(77,144,254,.25)',
                padding: '3px 10px', marginBottom: 14,
                transition: 'opacity .25s',
                opacity: animating ? 0 : 1,
              }}>
                {card.tag}
              </div>

              {/* Quote */}
              <div className="hero-proof-quote" style={{
                transition: 'opacity .25s, transform .25s',
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(6px)' : 'none',
                marginBottom: 16,
                fontSize: 14,
                fontStyle: 'italic',
              }}>
                &ldquo;{card.quote}&rdquo;
              </div>

              <div className="hero-proof-rule" />

              <div style={{
                marginTop: 10,
                transition: 'opacity .25s',
                opacity: animating ? 0 : 1,
              }}>
                <div className="hero-proof-name">{card.name}</div>
                <div className="hero-proof-role">{card.role}</div>
              </div>

              {/* Dot indicators */}
              <div style={{ display: 'flex', gap: 7, marginTop: 20 }}>
                {PROOF_CARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    style={{
                      width: i === active ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === active ? 'rgba(130,175,255,.85)' : 'rgba(255,255,255,.2)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all .3s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: '4px' }}>
            <div className="hero-eyebrow">Voice of Customer Intelligence &middot; BlueCat Networks</div>
            <h1 className="hero-title" style={{ fontSize: '18px', marginBottom: '0' }}>
              DDI &mdash; Mission-Critical Infrastructure
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
