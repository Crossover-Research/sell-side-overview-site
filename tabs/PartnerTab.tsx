import { TrackRecord } from '../components/TrackRecord';
import { AdvantageCard } from '../components/AdvantageCard';
import { EngagementCard } from '../components/EngagementCard';
import { ContactStrip } from '../components/ContactStrip';
import { TRACK_STATS, ADVANTAGE_CARDS, ENGAGEMENT_OPTIONS, CONTACT_INFO } from '../lib/data/partner';

// ── J.P. Morgan quote ─────────────────────────────────────────────────────────
function JPMorganQuote() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 48px',
      marginBottom: '40px',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '22px',
        fontWeight: 300,
        color: '#fff',
        lineHeight: 1.55,
        fontStyle: 'italic',
        marginBottom: '24px',
        maxWidth: '820px',
      }}>
        &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.
        The findings from your report were a key part of the equity story materials we presented.&rdquo;
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,.4)' }} />
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '.04em' }}>
            Executive Director, J.P. Morgan
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.5)', marginTop: '2px', letterSpacing: '.04em', textTransform: 'uppercase' as const }}>
            Sell-side mandate &bull; $10B transaction
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Without / With comparison table ─────────────────────────────────────────
const WITHOUT_WITH_ROWS = [
  {
    without: 'Pitch alongside 3-5 identical banks. Hope relationship wins.',
    with: 'Walk in with customer evidence no competing bank has. The room is already yours.',
  },
  {
    without: 'Assemble standard deck. Recycle public comps and industry reports.',
    with: 'Customer-validated equity story no competing bank can replicate.',
  },
  {
    without: "Hope buyers don't find the gaps before you do.",
    with: 'Know every buyer objection before they ask it. Have the answer ready.',
  },
  {
    without: 'Win on relationship, not insight.',
    with: 'Win on substance. Independent evidence cannot be copied overnight.',
  },
];

function WithoutWithTable() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div className="section-header" style={{ marginBottom: '24px' }}>
        <div className="section-eyebrow">The Difference</div>
        <h2 className="section-title">What Changes When You Walk In With Crossover</h2>
        <p className="section-lead">From underprepared and reactive to evidence-backed and already ahead.</p>
      </div>

      {/* Column headers */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '2px', marginBottom: '2px',
      }}>
        <div style={{
          background: 'var(--slate-100)',
          borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
          padding: '12px 20px',
          fontSize: '12px', fontWeight: 700, letterSpacing: '.08em',
          textTransform: 'uppercase' as const, color: 'var(--slate-500)',
        }}>
          Without Crossover
        </div>
        <div style={{
          background: 'var(--navy)',
          borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
          padding: '12px 20px',
          fontSize: '12px', fontWeight: 700, letterSpacing: '.08em',
          textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.85)',
        }}>
          With Crossover
        </div>
      </div>

      {/* Rows */}
      {WITHOUT_WITH_ROWS.map((row, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '2px', marginBottom: '2px',
        }}>
          {/* Without cell */}
          <div style={{
            background: i % 2 === 0 ? '#fafafa' : 'var(--white)',
            border: '1px solid var(--border)',
            borderRight: 'none',
            padding: '18px 20px',
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            ...(i === WITHOUT_WITH_ROWS.length - 1 ? { borderRadius: '0 0 0 var(--radius-sm)' } : {}),
          }}>
            <span style={{
              flexShrink: 0, marginTop: '2px',
              width: '18px', height: '18px',
              borderRadius: '50%',
              background: 'rgba(232,51,74,.08)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', color: 'var(--red)', fontWeight: 700,
            }}>✕</span>
            <span style={{ fontSize: '14px', color: 'var(--slate-500)', lineHeight: 1.6 }}>
              {row.without}
            </span>
          </div>
          {/* With cell */}
          <div style={{
            background: i % 2 === 0 ? 'rgba(30,58,95,.03)' : 'var(--white)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--navy)',
            padding: '18px 20px',
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            ...(i === WITHOUT_WITH_ROWS.length - 1 ? { borderRadius: '0 0 var(--radius-sm) 0' } : {}),
          }}>
            <span style={{
              flexShrink: 0, marginTop: '2px',
              width: '18px', height: '18px',
              borderRadius: '50%',
              background: 'var(--green-light)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', color: 'var(--green)', fontWeight: 700,
            }}>✓</span>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.6 }}>
              {row.with}
            </span>
          </div>
        </div>
      ))}

      {/* Callout */}
      {/* Bordered table container */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{
            background: 'var(--slate-100)',
            padding: '14px 24px',
            fontSize: '11px', fontWeight: 700, letterSpacing: '.1em',
            textTransform: 'uppercase' as const, color: 'var(--slate-500)',
            borderBottom: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
          }}>
            Without Crossover
          </div>
          <div style={{
            background: 'var(--navy)',
            padding: '14px 24px',
            fontSize: '11px', fontWeight: 700, letterSpacing: '.1em',
            textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.75)',
            borderBottom: '1px solid rgba(255,255,255,.1)',
          }}>
            With Crossover
          </div>
        </div>

        {/* Rows */}
        {WITHOUT_WITH_ROWS.map((row, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: i < WITHOUT_WITH_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            {/* Without cell */}
            <div style={{
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: i % 2 === 1 ? 'var(--slate-100)' : 'var(--white)',
              borderRight: '1px solid var(--border)',
            }}>
              <div style={{
                flexShrink: 0,
                width: '20px', height: '20px', marginTop: '1px',
                borderRadius: '50%',
                background: 'rgba(232,51,74,.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', color: 'var(--red)', fontWeight: 900,
                lineHeight: 1,
              }}>✕</div>
              <span style={{
                fontSize: '14px',
                color: 'var(--slate-500)',
                lineHeight: 1.6,
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(107,114,128,.3)',
              }}>
                {row.without}
              </span>
            </div>

            {/* With cell */}
            <div style={{
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: i % 2 === 1 ? 'rgba(30,58,95,.04)' : 'var(--white)',
            }}>
              <div style={{
                flexShrink: 0,
                width: '20px', height: '20px', marginTop: '1px',
                borderRadius: '50%',
                background: 'var(--green-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', color: 'var(--green)', fontWeight: 900,
                lineHeight: 1,
              }}>✓</div>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-primary)',
                fontWeight: 500,
                lineHeight: 1.6,
              }}>
                {row.with}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 50% callout */}
      <div className="insight" style={{ marginTop: '16px' }}>
        <div className="insight-icon" />
        <div className="insight-text">
          <strong>50% sell-side mandate win rate.</strong> Not because of better relationships.
          Because Crossover-backed pitches are built from what customers actually say, not what
          management wants them to hear. No competing bank can walk in with that.
        </div>
      </div>
    </div>
  );
}

// ── Product timelines ─────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    audience: 'Banker',
    audienceColor: 'var(--navy)',
    title: 'Mandate Pitch Deck',
    desc: 'Customer proof points that no competing bank walks in with. Win the mandate on substance.',
    timeline: '2-3 weeks',
    customers: '20-30',
    idealFor: 'Mandate pursuit',
    value: 'The banker enters the room knowing exactly what buyers will flag. And exactly how to answer it.',
  },
  {
    audience: 'Operator',
    audienceColor: 'var(--amber)',
    title: 'VoC-Enhanced CIM',
    desc: 'What customers actually think, surfaced before buyers use it against you. Every vulnerable claim pre-defended.',
    timeline: '4-5 weeks',
    customers: '30-50',
    idealFor: 'Sell-side process',
    value: 'Operators stop reacting to diligence questions and start shaping the conversation before it begins.',
  },
  {
    audience: 'Investor',
    audienceColor: 'var(--green)',
    title: 'Customer Diligence Report',
    desc: 'Build conviction on the asset before the teaser drops. Arrive at the first call already ahead of every other bidder.',
    timeline: '5-7 weeks',
    customers: '50-100+',
    idealFor: 'Investment diligence',
    value: "Independent evidence the sell-side can't curate. Bid with conviction, not on the same compressed timeline as everyone else.",
  },
];

function ProductTimelines() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div className="section-header">
        <div className="section-eyebrow">What You Get</div>
        <h2 className="section-title">One Methodology. Three Outputs.</h2>
        <p className="section-lead">Each written in the language its audience trusts. All drawn from the same independent source.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {PRODUCTS.map((p, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '10px', fontWeight: 700, letterSpacing: '.1em',
                textTransform: 'uppercase' as const,
                padding: '3px 10px', borderRadius: 'var(--radius-sm)',
                background: p.audienceColor === 'var(--navy)' ? 'var(--navy-surface)' : p.audienceColor === 'var(--amber)' ? 'var(--amber-light)' : 'var(--green-light)',
                color: p.audienceColor,
                marginBottom: '12px',
              }}>
                {p.audience}
              </span>
              <div className="card-title" style={{ marginBottom: '8px' }}>{p.title}</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{p.desc}</div>
            </div>
            {/* Timeline metrics */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              gap: '12px', padding: '16px', marginBottom: '16px',
              background: 'var(--slate-100)', borderRadius: 'var(--radius)',
            }}>
              {[
                { label: 'Timeline', value: p.timeline },
                { label: 'Customers', value: p.customers },
                { label: 'Ideal For', value: p.idealFor },
              ].map((stat, j) => (
                <div key={j} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase' as const, color: 'var(--slate-500)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Value proposition */}
            <div style={{ fontSize: '13px', color: 'var(--slate-700)', lineHeight: 1.6, fontStyle: 'italic', marginTop: 'auto' }}>
              {p.value}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
        Pricing available on request. Flat fee or outcome-based, structured around your transaction milestone.
      </div>
    </div>
  );
}

// ── Main tab ──────────────────────────────────────────────────────────────────
export function PartnerTab() {
  return (
    <div>
      <TrackRecord stats={TRACK_STATS} />

      <JPMorganQuote />

      <WithoutWithTable />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {ADVANTAGE_CARDS.map((card, i) => (
          <AdvantageCard key={i} card={card} />
        ))}
      </div>

      <ProductTimelines />

      <div className="divider" />

      <div className="section-header">
        <div className="section-eyebrow">Three Ways to Start</div>
        <h3 className="section-title" style={{ fontSize: '18px' }}>Aligned to Where You Are in the Process</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px', alignItems: 'stretch' }}>
        {ENGAGEMENT_OPTIONS.map((card, i) => (
          <EngagementCard key={i} card={card} />
        ))}
      </div>

      <ContactStrip name={CONTACT_INFO.name} title={CONTACT_INFO.title} email={CONTACT_INFO.email} />
    </div>
  );
}
