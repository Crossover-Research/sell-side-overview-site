'use client';
import { EngagementCard } from '../components/EngagementCard';
import { ENGAGEMENT_OPTIONS } from '../lib/data/partner';
import { CONTACT } from '../lib/config/site';

const WITHOUT_WITH = [
  { w: 'Pitch alongside 3–5 identical banks on relationship. No rational basis to choose you.',   c: 'Walk in with customer evidence no competing bank has commissioned. The room is already yours.' },
  { w: 'Build the equity story from market research the operator already discounts.',              c: 'Build the equity story from independent verified customer data. The operator cannot challenge what they did not select.' },
  { w: 'Bury weak spots and hope buyer diligence misses them before close.',                      c: 'Find the gaps first. Surface them with independent research. Close them before diligence begins.' },
  { w: 'Spend diligence defending terrain that should have been fortified before process started.', c: 'Pre-answer every buyer objection with customer-backed evidence before the first meeting.' },
  { w: 'Win on relationship. When a competitor brings independent proof, the relationship loses.', c: 'Independent evidence cannot be replicated on any timeline. Walk in with proof. Walk out with the mandate.' },
];

const PRODUCTS = [
  {
    audience: 'Banker',
    color: 'rgba(130,180,255,.9)',
    title: 'Mandate Pitch Deck',
    desc: 'Customer proof points that no competing bank walks in with. Crossover line of sight gives you the company before competing banks finish reading the teaser.',
    timeline: '48 hrs\u20132w',
    customers: '20\u201330',
    stage: 'Mandate',
    value: 'The banker enters the room knowing exactly what buyers will flag. And exactly how to answer it.',
  },
  {
    audience: 'Operator',
    color: 'var(--amber)',
    title: 'Operator Rebuttal + CIM',
    desc: 'Surfaces weaknesses before buyers find them. Builds customer-backed evidence to close gaps proactively. Then hardens the CIM narrative around what the data actually shows.',
    timeline: '3\u20135w',
    customers: '30\u201360',
    stage: 'Sell-side',
    value: 'Stop reacting to diligence questions. Find the gaps first, close them with evidence, enter the process on offense.',
  },
  {
    audience: 'Investor',
    color: 'var(--green)',
    title: 'Customer Diligence Report',
    desc: 'Build conviction on the asset before the teaser drops. The same primary research \u2014 independent by construction \u2014 that serves the sell-side serves your IC.',
    timeline: '5\u20137w',
    customers: '50\u2013100+',
    stage: 'Diligence',
    value: "Independent evidence the sell-side can't curate. Bid with conviction on your own timeline.",
  },
];

export function PartnerTab() {
  return (
    <div>
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
                <td className="col-w"><span className="ww-x">&#10005;</span>{row.w}</td>
                <td className="col-c"><span className="ww-check">&#10003;</span>{row.c}</td>
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
        Consulting firms charge $100K+ to validate one party&rsquo;s thesis. Crossover prices each stream
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
      <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--t0)', marginBottom: 3 }}>Ian McArdle</div>
          <div style={{ fontSize: 11, color: 'var(--t3)' }}>Head of Strategic Partnerships &middot; Crossover Research</div>
          <a href={`mailto:${CONTACT.email}`} style={{ fontSize: 11, color: 'rgba(130,175,255,.8)', textDecoration: 'none' }}>{CONTACT.email}</a>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href={`mailto:${CONTACT.email}`} className="cta-btn solid" style={{ fontSize: 12 }}>Email Ian</a>
          <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta-btn outline" style={{ fontSize: 12 }}>Book a Meeting</a>
        </div>
      </div>
    </div>
  );
}
