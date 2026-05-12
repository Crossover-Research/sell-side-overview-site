'use client';
import React from 'react';
import {
  FT_HERO,
  FT_STATS,
  FT_INSIGHTS,
  FT_BRIEF,
  FT_DEAL_PROOF,
  FT_TESTIMONIALS,
  FT_HOW_IT_WORKS,
} from '../../lib/data/ftPartners';
import { CONTACT } from '../../lib/config/site';

/* ─── SHARED TOKENS ──────────────────────────────────────── */
const c = {
  bg: '#050d1a',
  surface: '#0b1625',
  surfaceHigh: '#0f1e30',
  border: 'rgba(255,255,255,.08)',
  borderAcc: 'rgba(77,144,254,.28)',
  textPrimary: 'rgba(255,255,255,.95)',
  textSec: 'rgba(255,255,255,.65)',
  textMuted: 'rgba(255,255,255,.38)',
  accent: 'rgba(77,144,254,.9)',
  accentBg: 'rgba(77,144,254,.08)',
  navy: '#1e3a5f',
  gold: 'rgba(255,196,67,.85)',
  goldBg: 'rgba(255,196,67,.06)',
};

/* ─── TOPBAR ─────────────────────────────────────────────── */
function FTTopbar() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      background: 'rgba(5,13,26,.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${c.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: 56,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src="/cr-logo-light.svg" alt="Crossover Research" style={{ height: 18 }} />
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.14em',
          textTransform: 'uppercase', color: c.accent,
          background: c.accentBg, border: `1px solid ${c.borderAcc}`,
          padding: '3px 10px',
        }}>
          For FT Partners
        </span>
      </div>
      <a
        href={CONTACT.bookingUrl}
        target="_blank" rel="noopener noreferrer"
        style={{
          background: 'rgba(255,255,255,.93)', color: '#060e1c',
          padding: '7px 20px', fontSize: 12, fontWeight: 700,
          textDecoration: 'none', letterSpacing: '.02em',
        }}
      >
        Book a Meeting
      </a>
    </div>
  );
}

/* ─── HERO ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      paddingTop: 140, paddingBottom: 96,
      textAlign: 'center', maxWidth: 760, margin: '0 auto', padding: '140px 24px 96px',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
        textTransform: 'uppercase', color: c.accent,
        background: c.accentBg, border: `1px solid ${c.borderAcc}`,
        padding: '5px 16px', marginBottom: 32,
      }}>
        {FT_HERO.eyebrow}
      </div>

      <h1 style={{
        fontSize: 'clamp(36px,5vw,62px)', fontWeight: 800, lineHeight: 1.08,
        letterSpacing: '-.04em', color: c.textPrimary, marginBottom: 24,
        whiteSpace: 'pre-line',
      }}>
        {FT_HERO.headline}
      </h1>

      <p style={{
        fontSize: 'clamp(15px,1.6vw,18px)', color: c.textSec,
        lineHeight: 1.75, maxWidth: 600, margin: '0 auto 44px',
      }}>
        {FT_HERO.subhead}
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href={FT_HERO.ctaPrimary.href}
          target="_blank" rel="noopener noreferrer"
          style={{
            background: 'rgba(255,255,255,.94)', color: '#060e1c',
            padding: '13px 30px', fontSize: 13, fontWeight: 700,
            textDecoration: 'none', letterSpacing: '.02em',
          }}
        >
          {FT_HERO.ctaPrimary.label}
        </a>
        <a
          href={FT_HERO.ctaSecondary.href}
          style={{
            background: 'transparent', color: c.textPrimary,
            padding: '13px 30px', fontSize: 13, fontWeight: 600,
            textDecoration: 'none', letterSpacing: '.02em',
            border: `1px solid ${c.border}`,
          }}
        >
          {FT_HERO.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}

/* ─── STATS BAR ──────────────────────────────────────────── */
function StatsBar() {
  return (
    <section style={{
      borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`,
      display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
    }}>
      {FT_STATS.map((s, i) => (
        <div key={i} style={{
          padding: '28px 24px', textAlign: 'center',
          borderRight: i < FT_STATS.length - 1 ? `1px solid ${c.border}` : 'none',
        }}>
          <div style={{ fontSize: 'clamp(24px,2.8vw,34px)', fontWeight: 800, color: c.textPrimary, letterSpacing: '-.03em' }}>
            {s.val}
          </div>
          <div style={{ fontSize: 11, color: c.textMuted, letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 6, fontFamily: 'var(--font-mono, monospace)' }}>
            {s.label}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─── BRIEF CONTEXT ──────────────────────────────────────── */
function BriefContext() {
  return (
    <section id="intelligence" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px 0' }}>
      <div style={{
        background: c.surface, border: `1px solid ${c.border}`,
        padding: '32px 36px',
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase',
          color: c.accent, marginBottom: 14, fontFamily: 'var(--font-mono, monospace)',
        }}>
          Sample Intelligence Brief · Apr 2026
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: c.textPrimary, marginBottom: 12, letterSpacing: '-.02em' }}>
          {FT_BRIEF.title}
        </h2>
        <p style={{ fontSize: 14, color: c.textSec, lineHeight: 1.7, marginBottom: 24 }}>
          {FT_BRIEF.description}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {FT_BRIEF.studies.map((s, i) => (
            <div key={i} style={{
              background: c.surfaceHigh, border: `1px solid ${c.border}`,
              padding: '16px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: c.accent, letterSpacing: '-.02em' }}>
                  n={s.n}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: c.textPrimary }}>
                  {s.name}
                </span>
              </div>
              <p style={{ fontSize: 12.5, color: c.textSec, lineHeight: 1.55, margin: 0 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INTELLIGENCE GRID ──────────────────────────────────── */
function IntelligenceGrid() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '56px 24px 0' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase',
          color: c.textMuted, marginBottom: 12, fontFamily: 'var(--font-mono, monospace)',
        }}>
          Six Intelligence Findings
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: c.textPrimary, letterSpacing: '-.025em' }}>
          What the data says about FinTech buyers
        </h2>
      </div>

      <div style={{ display: 'grid', gap: 2 }}>
        {FT_INSIGHTS.map((ins, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '88px 1fr 160px',
            background: c.surface, border: `1px solid ${c.border}`,
            borderTop: i > 0 ? 'none' : `1px solid ${c.border}`,
            padding: '24px 28px', gap: 24, alignItems: 'start',
          }}>
            {/* Num + tag */}
            <div>
              <div style={{
                fontSize: 11, fontWeight: 700, color: c.textMuted,
                fontFamily: 'var(--font-mono, monospace)', marginBottom: 8,
              }}>
                {ins.num}
              </div>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '.12em',
                textTransform: 'uppercase', color: c.accent,
                background: c.accentBg, border: `1px solid ${c.borderAcc}`,
                padding: '3px 7px', display: 'inline-block',
              }}>
                {ins.tag}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: c.textPrimary, marginBottom: 10, lineHeight: 1.35, letterSpacing: '-.01em' }}>
                {ins.headline}
              </h3>
              <p style={{ fontSize: 13.5, color: c.textSec, lineHeight: 1.65, margin: 0 }}>
                {ins.body}
              </p>
            </div>

            {/* Stat */}
            <div style={{
              background: c.surfaceHigh, border: `1px solid ${c.border}`,
              padding: '16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: c.textPrimary, letterSpacing: '-.03em', lineHeight: 1 }}>
                {ins.stat}
              </div>
              <div style={{ fontSize: 10.5, color: c.textMuted, marginTop: 8, lineHeight: 1.4 }}>
                {ins.statLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────── */
function Testimonials() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 24px 0' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase',
          color: c.textMuted, marginBottom: 12, fontFamily: 'var(--font-mono, monospace)',
        }}>
          From the field
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: c.textPrimary, letterSpacing: '-.025em' }}>
          What IB teams say
        </h2>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {FT_TESTIMONIALS.map((t, i) => (
          <div key={i} style={{
            background: c.surface, border: `1px solid ${c.border}`,
            padding: '24px 28px',
          }}>
            <p style={{
              fontSize: 14.5, fontStyle: 'italic', color: c.textPrimary,
              lineHeight: 1.65, margin: '0 0 16px', letterSpacing: '-.005em',
            }}>
              "{t.quote}"
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src="/jpmorgan-logo.svg" alt="J.P. Morgan" style={{ height: 14, opacity: 0.7 }} />
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: c.textSec, fontFamily: 'var(--font-mono, monospace)', letterSpacing: '.04em' }}>
                  {t.attribution}
                </span>
                <span style={{ fontSize: 11, color: c.textMuted, fontFamily: 'var(--font-mono, monospace)', marginLeft: 8 }}>
                  {t.context}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ───────────────────────────────────────── */
function HowItWorks() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 24px 0' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase',
          color: c.textMuted, marginBottom: 12, fontFamily: 'var(--font-mono, monospace)',
        }}>
          The engagement model
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: c.textPrimary, letterSpacing: '-.025em' }}>
          Three ways to work together
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
        {FT_HOW_IT_WORKS.map((step, i) => (
          <div key={i} style={{
            background: c.surface, border: `1px solid ${c.border}`,
            borderLeft: i > 0 ? 'none' : `1px solid ${c.border}`,
            padding: '28px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: c.textMuted,
                fontFamily: 'var(--font-mono, monospace)',
              }}>
                {step.step}
              </span>
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
                color: c.accent, background: c.accentBg, border: `1px solid ${c.borderAcc}`,
                padding: '2px 8px',
              }}>
                {step.phase}
              </span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: c.textPrimary, lineHeight: 1.35, marginBottom: 12, letterSpacing: '-.01em' }}>
              {step.headline}
            </h3>
            <p style={{ fontSize: 13, color: c.textSec, lineHeight: 1.65, margin: 0 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA BLOCK ──────────────────────────────────────────── */
function CTABlock() {
  return (
    <section style={{
      maxWidth: 900, margin: '0 auto', padding: '72px 24px 100px',
    }}>
      <div style={{
        background: c.surfaceHigh, border: `1px solid ${c.borderAcc}`,
        padding: '52px 48px', textAlign: 'center',
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase',
          color: c.accent, marginBottom: 20, fontFamily: 'var(--font-mono, monospace)',
        }}>
          Crossover Research
        </div>
        <h2 style={{
          fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: c.textPrimary,
          letterSpacing: '-.03em', marginBottom: 18, lineHeight: 1.15,
        }}>
          Ready when you are.
        </h2>
        <p style={{
          fontSize: 15, color: c.textSec, lineHeight: 1.7,
          maxWidth: 520, margin: '0 auto 36px',
        }}>
          We designed our economics for IB hesitancy to spend pre-mandate. You get a 20-minute brief on what we have in FinTech and PropTech. If there is a match, we move fast.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={CONTACT.bookingUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,.94)', color: '#060e1c',
              padding: '14px 36px', fontSize: 13, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '.02em',
            }}
          >
            Book 20 Minutes with Brad
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{
              background: 'transparent', color: c.textPrimary,
              padding: '14px 36px', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', letterSpacing: '.02em',
              border: `1px solid ${c.border}`,
            }}
          >
            brad@crossoverresearch.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function FTFooter() {
  return (
    <footer style={{
      borderTop: `1px solid ${c.border}`,
      padding: '24px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <img src="/cr-logo-light.svg" alt="Crossover Research" style={{ height: 14, opacity: 0.5 }} />
      <span style={{
        fontSize: 10, color: c.textMuted, letterSpacing: '.08em',
        textTransform: 'uppercase', fontFamily: 'var(--font-mono, monospace)',
      }}>
        Confidential · Prepared for FT Partners · 2026
      </span>
    </footer>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function FTPartnersPage() {
  return (
    <div style={{ background: c.bg, minHeight: '100vh', color: c.textPrimary }}>
      <FTTopbar />
      <Hero />
      <StatsBar />
      <BriefContext />
      <IntelligenceGrid />
      <Testimonials />
      <HowItWorks />
      <CTABlock />
      <FTFooter />
    </div>
  );
}
