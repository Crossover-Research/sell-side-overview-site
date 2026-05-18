'use client';
import type { Tab } from '../lib/types';
import { IB_TRACK_RECORD } from '../lib/data/ibCapabilities';
import { CONTACT } from '../lib/config/site';

const METRICS = [
  { val: '$1B+',                               label: 'Single deal outcome'   },
  { val: IB_TRACK_RECORD.mandatesSupported,    label: 'Sell-side mandates'    },
  { val: '60+',                                label: 'Buy-side engagements'  },
  { val: IB_TRACK_RECORD.winRateWithCrossover, label: 'Mandate win rate'      },
];

interface HeroSectionProps { tab?: Tab; }

export function HeroSection({ tab }: HeroSectionProps) {
  if (tab === 'bluecat') return null;

  return (
    <div className="hero" style={{ textAlign:'center', padding:'88px var(--content-pad) 0' }}>
      <div className="hero-inner" style={{ maxWidth:'var(--content-max)', margin:'0 auto' }}>

        {/* Eyebrow */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontSize:13.5, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase',
          color:'rgba(120,144,178,.9)', background:'rgba(120,144,178,.08)',
          border:'1px solid rgba(120,144,178,.22)', padding:'5px 16px',
          marginBottom:32,
        }}>
          Independent Research · Private Markets
        </div>

        {/* Headline — uniform weight, both lines equal */}
        <h1 style={{
          fontSize:'clamp(34px,4.8vw,60px)', fontWeight:800, lineHeight:1.1,
          letterSpacing:'-.04em', color:'rgba(255,255,255,.97)', marginBottom:22,
        }}>
          The only research that powered both sides<br />
          of a $1B transaction.
        </h1>

        {/* Sub-copy */}
        <p style={{
          fontSize:'clamp(15px,1.7vw,18px)', color:'rgba(255,255,255,.68)',
          lineHeight:1.8, maxWidth:640, margin:'0 auto 40px',
        }}>
          J.P. Morgan won the Nerdio mandate using our research.
          General Atlantic used the same research to build conviction &mdash; and invested $500M.
        </p>


        {/* CTAs — Book a Meeting primary, Scope secondary */}
        <div style={{ display:'flex', gap:12, justifyContent:'center', marginBottom:52, flexWrap:'wrap' }}>
          <a
            href={CONTACT.bookingUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,.95)', color:'#060e1c',
              padding:'13px 30px', fontSize:15, fontWeight:700,
              textDecoration:'none', letterSpacing:'.01em', whiteSpace:'nowrap',
              boxShadow:'0 4px 24px rgba(255,255,255,.1)',
              transition:'box-shadow .15s, transform .15s',
            }}
            onMouseEnter={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.transform='translateY(-2px)';
              el.style.boxShadow='0 8px 32px rgba(255,255,255,.18)';
            }}
            onMouseLeave={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.transform='translateY(0)';
              el.style.boxShadow='0 4px 24px rgba(255,255,255,.1)';
            }}
          >
            Book a Meeting
          </a>
          <a
            href="/intelligence?request=1"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'transparent', color:'rgba(180,210,255,.82)',
              border:'1px solid rgba(120,144,178,.32)', padding:'13px 26px',
              fontSize:15, fontWeight:500, textDecoration:'none', whiteSpace:'nowrap',
              transition:'all .15s',
            }}
            onMouseEnter={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor='rgba(120,144,178,.85)';
              el.style.background='rgba(120,144,178,.09)';
              el.style.color='rgba(200,225,255,.95)';
            }}
            onMouseLeave={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor='rgba(120,144,178,.32)';
              el.style.background='transparent';
              el.style.color='rgba(180,210,255,.82)';
            }}
          >
            Scope a Mandate →
          </a>
        </div>

        {/* Metrics strip with qualifiers */}
        <div style={{ display:'flex', borderTop:'1px solid rgba(255,255,255,.07)' }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{
              flex:1,
              borderRight: i < METRICS.length-1 ? '1px solid rgba(255,255,255,.07)' : 'none',
              padding:'24px 0',
              display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.70)' }}>{m.label}</div>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:'clamp(22px,2.6vw,36px)',
                fontWeight:700, color:'rgba(255,255,255,.97)',
                letterSpacing:'-.03em', lineHeight:1,
              }}>{m.val}</div>
              <div style={{ width:16, height:2, background:'rgba(120,144,178,.4)', borderRadius:1 }} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
