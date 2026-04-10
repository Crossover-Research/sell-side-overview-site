import { TrackRecord } from '../components/TrackRecord';
import { EngagementCard } from '../components/EngagementCard';
import { ContactStrip } from '../components/ContactStrip';
import { TRACK_STATS, ENGAGEMENT_OPTIONS, CONTACT_INFO } from '../lib/data/partner';

const WITHOUT_WITH = [
  { w: 'Pitch alongside 3–5 identical banks. Hope relationship wins.', c: 'Walk in with customer evidence no competing bank has. The room is already yours.' },
  { w: 'Assemble standard deck. Recycle public comps and industry reports.', c: 'Customer-validated equity story no competing bank can replicate.' },
  { w: "Hope buyers don't find the gaps before you do.", c: 'Know every buyer objection before they ask it. Have the answer ready.' },
  { w: 'Win on relationship, not insight.', c: 'Win on substance. Independent evidence cannot be copied overnight.' },
];

const PRODUCTS = [
  { audience: 'Banker', color: 'rgba(130,180,255,.9)', title: 'Mandate Pitch Deck', desc: 'Customer proof points that no competing bank walks in with. Win the mandate on substance.', timeline: '2–3w', customers: '20–30', stage: 'Mandate', value: 'The banker enters the room knowing exactly what buyers will flag. And exactly how to answer it.' },
  { audience: 'Operator', color: 'var(--amber)', title: 'VoC-Enhanced CIM', desc: 'What customers actually think, surfaced before buyers use it against you. Every claim pre-defended.', timeline: '4–5w', customers: '30–50', stage: 'Sell-side', value: 'Stop reacting to diligence questions. Start shaping the conversation before it begins.' },
  { audience: 'Investor', color: 'var(--green)', title: 'Customer Diligence Report', desc: 'Build conviction on the asset before the teaser drops. Arrive already ahead of every other bidder.', timeline: '5–7w', customers: '50–100+', stage: 'Diligence', value: "Independent evidence the sell-side can't curate. Bid with conviction on your own timeline." },
];

export function PartnerTab() {
  return (
    <div>
      <TrackRecord stats={TRACK_STATS} />

      {/* J.P. Morgan quote — open pull quote, no card */}
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

      {/* Nerdio — both sides proof */}
      <div style={{ padding: '0 0 28px', borderBottom: '1px solid var(--br-lo)', marginBottom: '28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--blue)', opacity: .8, marginBottom: 12 }}>
          Proof: Both Sides of $500M — The Nerdio Deal
        </div>
        <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.65, maxWidth: 780, marginBottom: 14 }}>
          J.P. Morgan commissioned Crossover to differentiate their Nerdio Series C pitch.
          30+ customer interviews. J.P. Morgan won the exclusive mandate.
        </p>
        <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.65, maxWidth: 780, marginBottom: 14 }}>
          General Atlantic accessed the same research — the verbatim customer truth from those same
          interviews — and used it as the foundation for their investment thesis. That research
          anchored their conviction for{' '}
          <strong style={{ color: 'var(--t0)' }}>a $500M investment at unicorn valuation.</strong>
        </p>
        <div style={{ fontSize: 12, color: 'var(--t3)', fontStyle: 'italic', borderLeft: '2px solid var(--br-hi)', paddingLeft: 12, maxWidth: 680 }}>
          One study. Both sides of the same deal. Neither side chose the respondents.
          The same primary research that won the sell-side mandate anchored the buy-side thesis.
          No research provider has ever powered both sides of a deal this way — because it only
          works when the data is genuinely independent.
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

      {/* Products — panel grid */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <div className="section-eyebrow">What You Get</div>
        <h2 className="section-title">One Methodology. Three Outputs.</h2>
        <p className="section-lead">Each written in the language its audience trusts. All drawn from the same independent source.</p>
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
        Pricing on request. Flat fee or outcome-based, structured to your transaction milestone.
      </div>

      <div className="divider" />

      {/* Engagement — list style */}
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
