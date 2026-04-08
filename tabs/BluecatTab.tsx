import { MetricStrip } from '../components/MetricStrip';
import { ICCard } from '../components/ICCard';
import { VerbatimCard } from '../components/VerbatimCard';
import { InsightBox } from '../components/InsightBox';
import { BLUECAT_METRICS, IC_CARDS_BLUECAT, VERBATIMS_BLUECAT, STUDY_INTEL } from '../lib/data/blueCat';

export function BluecatTab() {
  return (
    <div style={{ marginBottom: '64px' }}>
      {/* Header Banner */}
      <div
        style={{
          background: 'linear-gradient(145deg, #0b2416 0%, #103020 60%, #081c10 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px 40px 28px',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
        />
        <div
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#5be4ac',
            marginBottom: '10px'
          }}
        >
          Voice of Customer Intelligence • DNS / DHCP / IPAM (DDI)
        </div>
        <h2
          style={{
            fontSize: '26px',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '-0.01em',
            marginBottom: '6px'
          }}
        >
          BlueCat Networks{' '}
          <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontWeight: '300' }}>
            — VoC Intelligence Report
          </span>
        </h2>
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.55)',
            marginBottom: '32px'
          }}
        >
          CR-2024-006 • Commissioned by J.P. Morgan • IB Sell-Side •{' '}
          <strong style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            55 verified respondents
          </strong>{' '}
          • Thesis: Confirmed
        </p>
        <MetricStrip 
          metrics={BLUECAT_METRICS} 
          variant="green"
        />
      </div>

      {/* Section Header */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--green)',
            marginBottom: '8px'
          }}
        >
          IC Framework • BlueCat Networks
        </div>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}
        >
          Four Questions Every Buyer Will Ask
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            maxWidth: '800px'
          }}
        >
          Independently sourced from 55 verified respondents across BlueCat Networks and Infoblox customers. 
          Data commissioned by J.P. Morgan for IB sell-side process. All findings are third-party sourced.
        </p>
      </div>

      {/* IC Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}
      >
        {IC_CARDS_BLUECAT.map((card, index) => (
          <ICCard key={index} card={card} theme="green" />
        ))}
      </div>

      {/* Section Header - Voice of Customer */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--green)',
            marginBottom: '8px'
          }}
        >
          Voice of Customer • BlueCat Networks
        </div>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}
        >
          Customer Verbatims
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            maxWidth: '800px'
          }}
        >
          Direct quotes from verified BlueCat Networks customers and competitive evaluators. 
          All respondents confirmed via third-party verification process.
        </p>
      </div>

      {/* Verbatim Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}
      >
        {VERBATIMS_BLUECAT.map((verbatim, index) => (
          <VerbatimCard
            key={index}
            card={verbatim}
            themeStyle={{
              borderLeftColor: 'var(--green)',
              backgroundColor: 'var(--green-light)'
            }}
          />
        ))}
      </div>

      {/* Study Intelligence Summary */}
      <div className="card" style={{ marginTop: '8px' }}>
        <div className="card-title">Study Intelligence Summary &bull; CR-2024-006</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--navy)', marginBottom: '8px' }}>Expansion Segments</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{STUDY_INTEL.expansionSegments}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--amber)', marginBottom: '8px' }}>Risk Flags</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{STUDY_INTEL.riskFlags}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--green)', marginBottom: '8px' }}>Thesis Verdict</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}><strong style={{ color: 'var(--green)' }}>Confirmed.</strong> {STUDY_INTEL.thesisVerdict}</div>
          </div>
        </div>
      </div>
    </div>
  );
}