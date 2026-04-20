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

        {/* Eyebrow pill */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase',
          color:'rgba(77,144,254,.9)', background:'rgba(77,144,254,.08)',
          border:'1px solid rgba(77,144,254,.22)', padding:'5px 16px',
          marginBottom:32,
        }}>
          Independent Research · Private Markets
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize:'clamp(38px,5.5vw,68px)', fontWeight:800, lineHeight:1.06,
          letterSpacing:'-.04em', color:'rgba(255,255,255,.97)', marginBottom:22,
        }}>
          The only research that powered<br />
          <span style={{ color:'rgba(130,175,255,.88)', fontWeight:700 }}>
            both sides of a $1B transaction.
          </span>
        </h1>

        {/* Sub-copy */}
        <p style={{
          fontSize:'clamp(15px,1.7vw,18px)', color:'rgba(255,255,255,.62)',
          lineHeight:1.8, maxWidth:680, margin:'0 auto 40px',
        }}>
          J.P. Morgan won the Nerdio mandate using our research.
          General Atlantic used the same data to invest $500M.{' '}
          <span style={{ color:'rgba(255,255,255,.88)', fontWeight:500 }}>
            One independent evidence base. Neither side chose the respondents.
          </span>
        </p>

        {/* CTAs */}
        <div style={{ display:'flex', gap:12, justifyContent:'center', marginBottom:52, flexWrap:'wrap' }}>
          <a
            href="/intelligence?request=1"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,.95)', color:'#060e1c',
              padding:'13px 30px', fontSize:13, fontWeight:700,
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
            Scope a Mandate →
          </a>
          <a
            href={CONTACT.bookingUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'transparent', color:'rgba(180,210,255,.82)',
              border:'1px solid rgba(77,144,254,.32)', padding:'13px 26px',
              fontSize:13, fontWeight:500, textDecoration:'none', whiteSpace:'nowrap',
              transition:'all .15s',
            }}
            onMouseEnter={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor='rgba(77,144,254,.6)';
              el.style.background='rgba(77,144,254,.09)';
              el.style.color='rgba(200,225,255,.95)';
            }}
            onMouseLeave={e=>{
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor='rgba(77,144,254,.32)';
              el.style.background='transparent';
              el.style.color='rgba(180,210,255,.82)';
            }}
          >
            Book a Meeting
          </a>
        </div>

        {/* Metrics strip */}
        <div style={{ display:'flex', borderTop:'1px solid rgba(255,255,255,.07)' }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{
              flex:1,
              borderRight: i < METRICS.length-1 ? '1px solid rgba(255,255,255,.07)' : 'none',
              padding:'26px 0',
              display:'flex', flexDirection:'column', alignItems:'center', gap:6,
            }}>
              <div style={{
                fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase',
                color:'rgba(255,255,255,.45)',
              }}>{m.label}</div>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:'clamp(24px,2.8vw,40px)',
                fontWeight:700, color:'rgba(255,255,255,.97)',
                letterSpacing:'-.03em', lineHeight:1,
              }}>{m.val}</div>
              <div style={{ width:20, height:2, background:'rgba(77,144,254,.4)', borderRadius:1 }} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
