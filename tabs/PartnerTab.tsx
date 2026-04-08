import { TrackRecord } from '../components/TrackRecord';
import { AdvantageCard } from '../components/AdvantageCard';
import { EngagementCard } from '../components/EngagementCard';
import { ContactStrip } from '../components/ContactStrip';
import { TRACK_STATS, ADVANTAGE_CARDS, ENGAGEMENT_OPTIONS, CONTACT_INFO } from '../lib/data/partner';

export function PartnerTab() {
  return (
    <div>
      <TrackRecord stats={TRACK_STATS} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {ADVANTAGE_CARDS.map((card, i) => (
          <AdvantageCard key={i} card={card} />
        ))}
      </div>

      <div className="divider" />

      <div className="section-header">
        <div className="section-eyebrow">Three Ways to Start</div>
        <h3 className="section-title" style={{ fontSize: '18px' }}>Aligned to Where You Are in the Process</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {ENGAGEMENT_OPTIONS.map((card, i) => (
          <EngagementCard key={i} card={card} />
        ))}
      </div>

      <ContactStrip name={CONTACT_INFO.name} title={CONTACT_INFO.title} email={CONTACT_INFO.email} />
    </div>
  );
}
