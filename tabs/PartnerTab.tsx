import { TrackRecord } from '../components/TrackRecord';
import { EngagementCard } from '../components/EngagementCard';
import { ContactStrip } from '../components/ContactStrip';
import { TRACK_STATS, ENGAGEMENT_OPTIONS, CONTACT_INFO } from '../lib/data/partner';

const WITHOUT_WITH = [
  { w: 'Pitch alongside 3–5 identical banks. Hope relationship wins.',           c: 'Walk in with customer evidence no competing bank has. The room is already yours.' },
  { w: 'Assemble standard deck. Recycle public comps and industry reports.',      c: 'Customer-validated equity story built from verified respondents the buyer didn\'t select.' },
  { w: 'Hope buyers don\'t find the gaps before you do.',                         c: 'Find the gaps first. Surface weaknesses with independent research. Close them before buyers do.' },
  { w: 'CIM claims that sophisticated buyers discount before the first page turn.', c: 'Every retention claim, NPS benchmark, and moat assertion traces to verified respondents. Assertion becomes evidence.' },
  { w: 'Win on relationship, not insight.',                                        c: 'Win on substance. Independent evidence cannot be copied overnight.' },
];

const PRODUCTS = [
  {
    audience: 'Banker',
    color: 'rgba(130,180,255,.9)',
    title: 'Mandate Pitch Deck',
    desc: 'Customer proof points that no competing bank walks in with. Crossover line of sight gives you the company before competing banks finish reading the teaser.',
    timeline: '48 hrs – 2w',
    customers: '20–30',
    stage: 'Mandate',
    value: 'The banker enters the room knowing exactly what buyers will flag. And exactly how to answer it.',
  },
  {
    audience: 'Operator',
    color: 'var(--amber)',
    title: 'Operator Rebuttal + CIM',
    desc: 'Surfaces weaknesses before buyers find them. Builds customer-backed evidence to close gaps proactively. Then hardens the CIM narrative around what the data actually shows.',
    timeline: '3–5w',
    customers: '30–60',
    stage: 'Sell-side',
    value: 'Stop reacting to diligence questions. Find the gaps first, close them with evidence, enter the process on offense.',
  },
  {
    audience: 'Investor',
    color: 'var(--green)',
    title: 'Customer Diligence Report',
    desc: 'Build conviction on the asset before the teaser drops. The same primary research — independent by construction — that serves the sell-side serves your IC.',
    timeline: '5–7w',
    customers: '50–100+',
    stage: 'Diligence',
    value: "Independent evidence the sell-side can't curate. Bid with conviction on your own timeline.",
  },
];

export function PartnerTab() {
  return (
    <div>
      <TrackRecord stats={TRACK_STATS} />

      {/* J.P. Morgan proof */}
      <div style={{ padding: '28px 0 24px', borderBottom: '1px solid var(--br-lo)', marginBottom: '28px' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--t1)', lineHeight: 1.6, fontStyle: 'italic', maxWidth: 760, marginBottom: 16 }}>
          &ldquo;Having a Voice of Customer document was seen as a differentiator by the client.
          The findings from your report were a key part of the equity story materials we presented.&rdquo;
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 24, height: 1, background: 'var(--br-hi)' }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--t0)', letterSpacing: '.04em' }}>Executive Director, J.P. Morgan</div>
            <div style={{ fontSize: 10, color: 'var(--t3)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.04em' }}>Sell-side mandate · $10B transaction</div>
          </div>
        </div>
      </div>

      {/* Nerdio flywheel */}
      <div style={{ padding: '0 0 28px', borderBottom: '1px solid var(--br-lo)', marginBottom: '28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--blue)', opacity: .8, marginBottom: 12 }}>
          Proof of the Flywheel — The Nerdio Deal
        </div>
        <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.65, maxWidth: 780, marginBottom: 10 }}>
          J.P. Morgan engaged Crossover to win the Nerdio Series C mandate. That engagement gave Crossover
          line of sight into an asset the PE market hadn&rsquo;t yet evaluated. We formed a preliminary
          fundamental view from the primary research: high-conviction story. We alerted select funds that fit
          the thesis profile.
        </p>
        <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.65, maxWidth: 780, marginBottom: 14 }}>
          General Atlantic took a 30-minute call. The mandate research briefed them on a fully-formed thesis
          in a single meeting — early positioning before the formal process began. They commissioned Crossover
          to run the secondary diligence stream to validate the initial findings. The diligence held.{' '}
          <strong style={{ color: 'var(--t0)' }}>$500M Series C at $1B+ valuation.</strong>
        </p>
        <div style={{ fontSize: 12, color: 'var(--t3)', fontStyle: 'italic', borderLeft: '2px solid var(--br-hi)', paddingLeft: 12, maxWidth: 700 }}>
          Sell-side line of sight. Proprietary primary research. Original fundamental view. Buy-side match.
          The same infrastructure that wins mandates for bankers identifies the next great asset for funds.
          It only works because the data is never curated for either side.
        </div>
      </div>

      {/* Multi-sided model explainer */}
      <div style={{ padding: '0 0 28px', borderBottom: '1px solid var(--br-lo)', marginBottom: '28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 12 }}>
          Why This Works — The Multi-Sided Model
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { who: 'For Bankers', what: 'Win the mandate. Own the equity narrative. The research you commission becomes the proof layer that survives buyer IC.' },
            { who: 'For Operators', what: 'Find the gaps before buyers do. Build customer-backed evidence to close them. Enter the process on offense, not defense.' },
            { who: 'For Funds', what: "Build conviction before the teaser drops. The same independent research the sell-side uses — neither side chose the respondents, so both sides can rely on it." },
          ].map(({ who, what }, i) => (
            <div key={i} style={{ borderLeft: '2px solid var(--br-hi)', paddingLeft: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t0)', letterSpacing: '.06em', marginBottom: 6 }}>{who}</div>
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.6 }}>{what}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(255,255,255,.03)', borderLeft: '3px solid rgba(255,255,255,.15)', fontSize: 12, color: 'var(--t3)', lineHeight: 1.6, fontStyle: 'italic' }}>
          Crossover monetizes across the full transaction lifecycle — mandate fee, CIM enhancement, Catalyst resales, secondary diligence.
          No single party extraction means no single party&rsquo;s agenda can corrupt the research.
          This is the structural answer to the conflict-of-interest question.
        </div>
      </div>

      {/* Without / With */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <div className="section-eyebrow">The Difference</div>
        <h2 className="section-title">What Changes When You Walk In With Crossover</h2>
      </div>
      <div className="ww-wrap">
        <table className="ww-table">
          <thead>
            <tr>
              <th className="col-w" style={{ width: '50%' }}>Without Crossover</th>
              <th className="col-c" style={{ width: '50%' }}>With Crossover</th>
            </tr>
          </thead>
          <tbody>
            {WITHOUT_WITH.map((row, i) => (
              <tr key={i}>
                <td className="col-w"><span className="ww-x">✕</span>{row.w}</td>
                <td className="col-c"><span className="ww-check">✓</span>{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider" />

      {/* Products */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <div className="section-eyebrow">What You Get</div>
        <h2 className="section-title">One Methodology. Three Outputs.</h2>
        <p className="section-lead">Same independent source. Different framing for the audience that needs it.</p>
      </div>
      <div className="product-grid" style={{ marginBottom: 8 }}>
        {PRODUCTS.map((p, i) => (
          <div key={i} className="product-col" style={{ borderLeft: i > 0 ? '1px solid var(--br-lo)' : 'none' }}>
            <div className="product-audience" style={{ color: p.color }}>{p.audience}</div>
            <div className="product-title">{p.title}</div>
            <div className="product-desc">{p.desc}</div>
            <div className="product-meta">
              <div className="pm-item"><div className="pm-val">{p.timeline}</div><div className="pm-lbl">Timeline</div></div>
              <div className="pm-item"><div className="pm-val">{p.customers}</div><div className="pm-lbl">Customers</div></div>
              <div className="pm-item"><div className="pm-val">{p.stage}</div><div className="pm-lbl">Stage</div></div>
            </div>
            <div className="product-value">{p.value}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--t3)', marginBottom: 'var(--sp-6)' }}>
        Pricing: flat fee or outcome-based, structured to your transaction milestone.
        Consulting firms charge $100K+ to validate your thesis for one party. Crossover prices each stream
        separately because each stream is independent.
      </div>

      <div className="divider" />

      {/* Engagement */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <div className="section-eyebrow">Three Ways to Start</div>
        <h3 className="section-title" style={{ fontSize: 16 }}>Aligned to Where You Are in the Process</h3>
      </div>
      <div className="engagement-wrap">
        {ENGAGEMENT_OPTIONS.map((card, i) => (
          <EngagementCard key={i} card={card} />
        ))}
      </div>

      <div className="divider" />

      <ContactStrip name={CONTACT_INFO.name} title={CONTACT_INFO.title} email={CONTACT_INFO.email} />
    </div>
  );
}
