'use client';
import { useState } from 'react';
import { AnimatedMetrics } from '../../components/AnimatedMetrics';
import { FlywheelDiagram } from '../../components/FlywheelDiagram';
import { IB_TRACK_RECORD, IB_CAPS, IB_CAP_DATA, type IBCap } from '../../lib/data/ibCapabilities';
import { CATALYST_ASSETS, type CatalystAsset } from '../../lib/data/catalystAssets';

// ── Capability tab pill ──────────────────────────────────────────────────────
function CapTab({ id, label, active, onClick }: { id: IBCap; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`ib-cap-tab${active ? ' active' : ''}`}
    >
      {label}
    </button>
  );
}

// ── Catalyst teaser card ─────────────────────────────────────────────────────
function AssetCard({ asset, onClick }: { asset: CatalystAsset; onClick: () => void }) {
  const statusColor = { active: '#2dd4a0', new: '#7bb8ff', transacted: 'rgba(255,255,255,.35)' }[asset.status];
  return (
    <div
      onClick={onClick}
      style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', padding: '16px 18px', cursor: 'pointer', transition: 'border-color .15s', display: 'flex', flexDirection: 'column', gap: 8 }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(130,175,255,.3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(130,175,255,.9)', letterSpacing: '.06em' }}>{asset.code}</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: statusColor, letterSpacing: '.06em', textTransform: 'uppercase' }}>{asset.status}</span>
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>{asset.subtitle}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.7)', fontFamily: 'JetBrains Mono, monospace' }}>{asset.keyMetric}</div>
    </div>
  );
}

// ── Teaser modal ─────────────────────────────────────────────────────────────
function TeaserModal({ asset, onClose, onRequest }: { asset: CatalystAsset; onClose: () => void; onRequest: () => void }) {
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(4,9,18,.88)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#0c1a2e', border: '1px solid rgba(255,255,255,.12)', maxWidth: 720, width: '100%', maxHeight: '88vh', overflowY: 'auto', position: 'relative' }}>
        <div style={{ background: 'linear-gradient(135deg,#0f1f38,#162d4a)', padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,.08)', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,.1)', border: 'none', color: 'rgba(255,255,255,.7)', width: 28, height: 28, cursor: 'pointer', fontSize: 16, lineHeight: '28px', textAlign: 'center' }}>×</button>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(130,175,255,.8)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>{asset.code} &mdash; Identity Locked</div>
          <div style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{asset.subtitle}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{asset.category}</div>
        </div>
        <div style={{ padding: '22px 28px' }}>
          <div style={{ background: 'rgba(77,144,254,.1)', border: '1px solid rgba(77,144,254,.2)', padding: '14px 18px', marginBottom: 18 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(130,175,255,.6)', marginBottom: 7 }}>Investment Hook</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', lineHeight: 1.65, margin: 0 }}>{asset.hook}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 18 }}>
            {asset.metrics.map((m, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>{m.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(130,175,255,.95)', lineHeight: 1, marginBottom: 3 }}>{m.value}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)' }}>{m.context}</div>
              </div>
            ))}
          </div>
          {asset.quotes.slice(0, 2).map((q, i) => (
            <div key={i} style={{ borderLeft: '2px solid rgba(77,144,254,.35)', paddingLeft: 12, marginBottom: 10, fontSize: 12, color: 'rgba(255,255,255,.65)', fontStyle: 'italic', lineHeight: 1.6 }}>"{q}"</div>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 20, justifyContent: 'flex-end' }}>
            <button onClick={onRequest} style={{ background: 'rgba(255,255,255,.92)', color: '#050d18', border: 'none', padding: '9px 22px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Request Full Report &rarr;</button>
            <a href="mailto:ian@crossoverresearch.com" style={{ background: 'transparent', color: 'rgba(255,255,255,.55)', border: '1px solid rgba(255,255,255,.15)', padding: '9px 18px', fontSize: 12, textDecoration: 'none' }}>Email Ian</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Request modal ────────────────────────────────────────────────────────────
function RequestModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', firm: '', orgType: '', mandate: '' });
  const ORG = ['Investment Bank', 'Private Equity', 'Growth Equity', 'Venture Capital', 'Strategic'];
  const inp: React.CSSProperties = { width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.88)', padding: '9px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' };
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await fetch('/api/catalyst-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }); } catch {}
    setSent(true);
  };
  if (sent) return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 600, background: 'rgba(4,9,18,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#0c1a2e', border: '1px solid rgba(255,255,255,.12)', padding: '44px 36px', maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: '#2dd4a0', marginBottom: 12 }}>✓</div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Request Submitted</div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', lineHeight: 1.6, marginBottom: 22 }}>We&rsquo;ll confirm coverage within 24 hours.</p>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,.9)', color: '#050d18', border: 'none', padding: '9px 26px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Done</button>
      </div>
    </div>
  );
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{ position: 'fixed', inset: 0, zIndex: 600, background: 'rgba(4,9,18,.92)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#0c1a2e', border: '1px solid rgba(255,255,255,.12)', maxWidth: 480, width: '100%', position: 'relative' }}>
        <div style={{ background: 'linear-gradient(135deg,#0f1f38,#162d4a)', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,.08)', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,.1)', border: 'none', color: 'rgba(255,255,255,.7)', width: 26, height: 26, cursor: 'pointer', fontSize: 15, lineHeight: '26px', textAlign: 'center' }}>×</button>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Check Catalyst Coverage</div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', margin: 0 }}>Same-day delivery if covered &middot; 14-day custom study if not</p>
        </div>
        <form onSubmit={submit} style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>First Name *</label><input required style={inp} placeholder="Jordan" onChange={e => set('firstName', e.target.value)} /></div>
            <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>Last Name *</label><input required style={inp} placeholder="Keller" onChange={e => set('lastName', e.target.value)} /></div>
          </div>
          <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>Work Email *</label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e => set('email', e.target.value)} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>Firm *</label><input required style={inp} placeholder="J.P. Morgan" onChange={e => set('firm', e.target.value)} /></div>
            <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>Org Type *</label>
              <select required style={{ ...inp, appearance: 'none' }} onChange={e => set('orgType', e.target.value)}><option value="">Select...</option>{ORG.map(o => <option key={o}>{o}</option>)}</select>
            </div>
          </div>
          <div><label style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 5 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name — we'll confirm coverage immediately" onChange={e => set('mandate', e.target.value)} /></div>
          <button type="submit" style={{ width: '100%', background: 'rgba(255,255,255,.92)', color: '#050d18', border: 'none', padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer', marginTop: 4 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function IntelligencePage() {
  const [activeCap, setActiveCap] = useState<IBCap>('mandate');
  const [activeTab, setActiveTab] = useState<'platform' | 'catalyst'>('platform');
  const [selectedAsset, setSelectedAsset] = useState<CatalystAsset | null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const cap = IB_CAP_DATA[activeCap];

  return (
    <>
      {/* HERO */}
      <section className="ib-hero" style={{ paddingBottom: 0 }}>
        <div className="ib-inner">
          <div className="ib-eyebrow">Crossover Research &middot; Intelligence Platform</div>
          <h1 className="ib-title" style={{ marginBottom: 12 }}>
            The research layer that spans<br />
            <em>the full transaction lifecycle.</em>
          </h1>
          <p className="ib-lead" style={{ maxWidth: 620, marginBottom: 20 }}>
            Independent primary research that wins mandates for bankers, hardens CIMs for operators,
            and builds buy-side conviction for funds. Same data. Different framing. Neither side chose the respondents.
          </p>
          <AnimatedMetrics metrics={[
            { val: IB_TRACK_RECORD.winRateWithCrossover, label: 'Mandate win rate' },
            { val: IB_TRACK_RECORD.jpmEngagements,        label: 'J.P. Morgan engagements' },
            { val: IB_TRACK_RECORD.totalTransactionValue, label: 'Transaction value supported' },
          ]} />

          {/* Page tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(255,255,255,.08)', marginTop: 24 }}>
            {(['platform', 'catalyst'] as const).map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                style={{ padding: '10px 24px', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.04em', textTransform: 'uppercase', color: activeTab === t ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.35)', borderBottom: activeTab === t ? '2px solid rgba(255,255,255,.7)' : '2px solid transparent', marginBottom: -1, transition: 'color .15s' }}
              >
                {t === 'platform' ? 'Intelligence Platform' : 'Catalyst Library'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM TAB ─────────────────────────────────────────────────────── */}
      {activeTab === 'platform' && (
        <>
          {/* Nerdio proof — compact */}
          <section className="ib-section ib-section-dark">
            <div className="ib-inner">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
                <div>
                  <div className="ib-section-eyebrow">Proof of the Model</div>
                  <h2 className="ib-section-title" style={{ color: '#fff', fontSize: 20, marginBottom: 12 }}>Both Sides of $500M</h2>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: 10 }}>
                    J.P. Morgan engaged Crossover on the Nerdio Series C mandate. Sell-side line of sight revealed a high-conviction asset. Crossover formed a fundamental view and alerted select funds.
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
                    General Atlantic took a 30-minute call, commissioned secondary diligence to validate, and the diligence held. <strong style={{ color: '#fff' }}>$500M Series C at $1B+.</strong>
                  </p>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <FlywheelDiagram />
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="ib-section ib-section-alt">
            <div className="ib-inner">
              <div className="ib-section-eyebrow">Six Capabilities</div>
              <h2 className="ib-section-title" style={{ marginBottom: 20 }}>Built for Every Stage of the Transaction</h2>
              <div className="ib-cap-tabs">
                {IB_CAPS.map(c => <CapTab key={c} id={c} label={IB_CAP_DATA[c].label} active={activeCap === c} onClick={() => setActiveCap(c)} />)}
              </div>
              <div className="ib-cap-panel">
                <div className="ib-framing">
                  <div className="ib-framing-col">
                    <div className="ib-framing-label">The Problem</div>
                    <p className="ib-framing-text">{cap.bankerProblem}</p>
                  </div>
                  <div className="ib-framing-arrow">&rarr;</div>
                  <div className="ib-framing-col ib-framing-answer">
                    <div className="ib-framing-label">Crossover Answer</div>
                    <p className="ib-framing-text">{cap.crossoverAnswer}</p>
                  </div>
                </div>
                <div className="ib-cap-header-full">
                  <h3 className="ib-cap-headline">{cap.headline}</h3>
                </div>
                <div className="ib-features">
                  {cap.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="ib-feature">
                      <div className="ib-feature-title">{f.title}</div>
                      <div className="ib-feature-desc">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sample studies */}
          <section className="ib-section">
            <div className="ib-inner">
              <div className="ib-section-eyebrow">Sample Research</div>
              <h2 className="ib-section-title" style={{ marginBottom: 16 }}>Live Catalyst Studies</h2>
              <div className="ib-samples">
                <a href="/redcanary" className="ib-sample-card">
                  <div className="ib-sample-type">SENTINEL &middot; Cybersecurity MDR</div>
                  <div className="ib-sample-name">Red Canary</div>
                  <div className="ib-sample-meta">9.0 NPS &middot; 8.8 replication difficulty &middot; 75+ respondents</div>
                  <div className="ib-sample-link">View Study &rarr;</div>
                </a>
                <a href="/bluecat" className="ib-sample-card">
                  <div className="ib-sample-type">FORTRESS &middot; Network Infrastructure</div>
                  <div className="ib-sample-name">BlueCat Networks</div>
                  <div className="ib-sample-meta">9.0 mission criticality &middot; 1.9 switching intent &middot; 55 respondents</div>
                  <div className="ib-sample-link">View Study &rarr;</div>
                </a>
                <a href="#catalyst" onClick={e => { e.preventDefault(); setActiveTab('catalyst'); }} className="ib-sample-card ib-sample-cta">
                  <div className="ib-sample-type">Catalyst Library</div>
                  <div className="ib-sample-name">20+ Assets</div>
                  <div className="ib-sample-meta">Same-day delivery if covered &middot; Investment hooks &middot; Locked company identities</div>
                  <div className="ib-sample-link">Browse Library &rarr;</div>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CATALYST TAB ─────────────────────────────────────────────────────── */}
      {activeTab === 'catalyst' && (
        <>
          <section className="ib-section ib-section-dark">
            <div className="ib-inner">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>
                <div>
                  <div className="ib-section-eyebrow">Catalyst Library</div>
                  <h2 className="ib-section-title" style={{ color: '#fff', fontSize: 22, marginBottom: 12 }}>
                    Customer intelligence 6-12 months before formal processes begin.
                  </h2>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.7, marginBottom: 16 }}>
                    Investment banks commission Crossover to win mandates. We reshape that same primary research into investment-ready intelligence for select funds &mdash; before teasers circulate. Same verbatim customer truth. Different strategic framing.
                  </p>
                  <button onClick={() => setRequestOpen(true)} style={{ background: 'rgba(255,255,255,.92)', color: '#050d18', border: 'none', padding: '10px 22px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    Check Coverage &rarr;
                  </button>
                </div>
                <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', padding: '20px 22px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(77,144,254,.8)', marginBottom: 10 }}>🏆 Proof: Both Sides of $500M</div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, marginBottom: 10 }}>J.P. Morgan mandate &rarr; Crossover line of sight &rarr; Fundamental view &rarr; GA 30-min brief &rarr; Secondary diligence &rarr; Validated</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>$500M Series C at $1B+</div>
                  <div style={{ marginTop: 10, fontSize: 10, color: 'rgba(255,255,255,.3)', fontStyle: 'italic', lineHeight: 1.55 }}>Sell-side line of sight. Same data. Neither side chose the respondents.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="ib-section">
            <div className="ib-inner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
                <h2 className="ib-section-title" style={{ margin: 0 }}>{CATALYST_ASSETS.length} Assets &mdash; Company Identity Locked</h2>
                <button onClick={() => setRequestOpen(true)} style={{ background: 'rgba(255,255,255,.9)', color: '#050d18', border: 'none', padding: '8px 18px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                  Check Coverage &rarr;
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {CATALYST_ASSETS.map((a, i) => (
                  <AssetCard key={i} asset={a} onClick={() => setSelectedAsset(a)} />
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(77,144,254,.07)', border: '1px solid rgba(77,144,254,.15)', fontSize: 12, color: 'rgba(160,200,255,.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <span>Same-day delivery if covered &middot; Custom study in 14 days if not &middot; $10,000 per report</span>
                <button onClick={() => setRequestOpen(true)} style={{ background: 'transparent', border: '1px solid rgba(130,175,255,.4)', color: 'rgba(130,175,255,.9)', padding: '7px 16px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Request Access &rarr;</button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="ib-cta">
        <div className="ib-inner" style={{ textAlign: 'center' }}>
          <h2 className="ib-cta-title">Ready to see it on your next mandate?</h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <button onClick={() => setRequestOpen(true)} className="ib-cta-btn">Check Catalyst Coverage</button>
            <a href="mailto:ian@crossoverresearch.com" className="ib-cta-btn ib-cta-btn-ghost">Email Ian McArdle</a>
          </div>
        </div>
      </section>

      {selectedAsset && <TeaserModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} onRequest={() => { setSelectedAsset(null); setRequestOpen(true); }} />}
      {requestOpen && <RequestModal onClose={() => setRequestOpen(false)} />}
    </>
  );
}
