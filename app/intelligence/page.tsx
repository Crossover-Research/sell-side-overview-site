'use client';
import { HeroSection } from '../../components/HeroSection';
import { CATALYST_LIVE_COUNT, CATALYST_LIVE_STATUS } from '../../lib/data/catalystAssets';
import { CONTACT } from '../../lib/config/site';
import { CapabilitiesEngine } from '../../components/CapabilitiesEngine';
import { EvidenceTable } from '../../components/EvidenceTable';
import { DealProof } from '../../components/DealProof';

/* SampleCard. direct link, logo shown immediately */
function SampleCard({ href, type, badge, logoSrc, logoAlt, logoInvert, cta }: {
  href: string; type: string; badge: string;
  logoSrc: string; logoAlt: string; logoInvert: boolean; cta: string;
}) {
  return (
    <a
      href={href}
      className="ib-sample-card"
      style={{ position:'relative', display:'flex', flexDirection:'column', justifyContent:'space-between', textDecoration:'none' }}
    >
      {/* Badge */}
      <div style={{
        position:'absolute', top:14, right:14,
        fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
        color:'rgba(120,144,178,.95)', background:'rgba(120,144,178,.12)',
        border:'1px solid rgba(120,144,178,.3)', padding:'2px 8px',
      }}>{badge}</div>

      {/* Type label */}
      <div className="ib-sample-type">{type}</div>

      {/* Logo */}
      <div className="ib-sample-logo-wrap" style={{ display:'flex', alignItems:'center', flex:1 }}>
        <img
          src={logoSrc} alt={logoAlt}
          style={{ height:28, width:'auto', maxWidth:180, filter: logoInvert ? 'brightness(0) invert(1)' : 'none', opacity: logoInvert ? .85 : 1 }}
        />
      </div>

      {/* CTA */}
      <div className="ib-sample-link">{cta} &rarr;</div>
    </a>
  );
}

export default function IntelligencePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesEngine />
      <EvidenceTable />
      <DealProof />
      

      {/* SAMPLE STUDIES */}
      <section id="samples" className="ib-section">
        <div className="ib-inner">
          <h2 className="ib-section-title" style={{ marginBottom:16 }}>See exactly what your client receives</h2>

          {/* 4 equal-width sample cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:'rgba(255,255,255,.07)', marginBottom:1 }}>
            <SampleCard href="/redcanary" type="Cybersecurity MDR" badge="Catalyst" logoSrc="/red-canary-logo.svg" logoAlt="Red Canary" logoInvert={false} cta="View Study" />
            <SampleCard href="/bluecat" type="Network Infrastructure" badge="Catalyst" logoSrc="/bluecat-logo.svg" logoAlt="BlueCat Networks" logoInvert={true} cta="View Study" />

            {/* Volie card */}
            <a
              href="https://volie.crossoverintelligence.com/"
              target="_blank" rel="noopener noreferrer"
              className="ib-sample-card"
              style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', textDecoration:'none', position:'relative' }}
            >
              <div style={{ position:'absolute', top:14, right:14, fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(120,144,178,.95)', background:'rgba(120,144,178,.12)', border:'1px solid rgba(120,144,178,.3)', padding:'2px 8px' }}>
                Live Portal
              </div>
              <div className="ib-sample-type">Client Proposal</div>
              <div className="ib-sample-logo-wrap" style={{ display:'flex', alignItems:'center', flex:1 }}>
                <div style={{ fontSize:20, fontWeight:700, color:'rgba(255,255,255,.92)', letterSpacing:'-.02em' }}>Volie</div>
              </div>
              <div className="ib-sample-link">View Live Portal ↗</div>
            </a>

            {/* Intelligence Report card */}
            <a
              href="https://sample.crossoverintelligence.com/"
              target="_blank" rel="noopener noreferrer"
              className="ib-sample-card"
              style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', textDecoration:'none', position:'relative' }}
            >
              <div style={{ position:'absolute', top:14, right:14, fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(89,116,154,.9)', background:'rgba(89,116,154,.08)', border:'1px solid rgba(89,116,154,.25)', padding:'2px 8px' }}>
                Sample VoC
              </div>
              <div className="ib-sample-type">Research Report</div>
              <div className="ib-sample-logo-wrap" style={{ display:'flex', alignItems:'center', flex:1 }}>
                <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.88)', lineHeight:1.35, maxWidth:160 }}>Intelligence Report + GTM Playbook</div>
              </div>
              <div className="ib-sample-link">View Sample Report ↗</div>
            </a>
          </div>

          {/* Catalog strip. full width */}
          <a href="/catalyst" style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            background:'rgba(6,14,28,.97)', border:'1px solid rgba(255,255,255,.07)',
            padding:'18px 24px', textDecoration:'none', gap:20,
            transition:'background .15s',
          }}
          onMouseEnter={e=>(e.currentTarget.style.background='rgba(10,20,40,.95)')}
          onMouseLeave={e=>(e.currentTarget.style.background='rgba(6,14,28,.97)')}
          >
            <div style={{ display:'flex', alignItems:'center', gap:24 }}>
              <div>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.72)', marginBottom:4 }}>Catalyst Library</div>
                <div style={{ fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.02em' }}>
                  {CATALYST_LIVE_COUNT} Assets
                </div>
              </div>
              <div style={{ width:1, height:36, background:'rgba(255,255,255,.08)' }} />
              <div style={{ display:'flex', gap:16 }}>
                {(['transacted','active','new'] as const).map(s => {
                  const n = CATALYST_LIVE_STATUS[s];
                  const cfg = { transacted:{ color:'rgba(180,180,200,.72)' as const, label:'Closed' }, active:{ color:'rgba(89,116,154,.88)' as const, label:'Active' }, new:{ color:'rgba(245,158,11,.88)' as const, label:'New' } };
                  return n > 0 ? (
                    <div key={s} style={{ textAlign:'center' }}>
                      <div style={{ fontSize:20, fontWeight:700, color:cfg[s].color, letterSpacing:'-.02em', lineHeight:1 }}>{n}</div>
                      <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:cfg[s].color, opacity:.7, marginTop:3 }}>{cfg[s].label}</div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div style={{ fontSize:15, fontWeight:700, color:'rgba(166,183,210,.85)', whiteSpace:'nowrap' }}>
              Browse Library &rarr;
            </div>
          </a>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{
        padding:'64px var(--content-pad)',
        background:'rgba(6,12,24,.95)',
        borderTop:'1px solid rgba(255,255,255,.08)',
        position:'relative',
        overflow:'hidden',
      }}>
        <div style={{ maxWidth:'var(--content-max)', margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{
            border:'1px solid rgba(255,255,255,.1)',
            background:'rgba(255,255,255,.025)',
            padding:'40px 48px',
            display:'grid',
            gridTemplateColumns:'1fr auto',
            gap:48,
            alignItems:'center',
          }}>
            <div>
              <h2 style={{
                fontSize:'clamp(22px,3vw,36px)', fontWeight:800, lineHeight:1.15,
                letterSpacing:'-.03em', color:'rgba(255,255,255,.97)', marginBottom:14,
              }}>
                The next $1B deal starts with<br />
                <span style={{ color:'rgba(166,183,210,.88)' }}>the right customer intelligence.</span>
              </h2>

            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12, alignItems:'flex-end', flexShrink:0 }}>
              <a
                href={CONTACT.bookingUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center',
                  background:'rgba(255,255,255,.95)', color:'#060e1c',
                  padding:'13px 28px', fontSize:15, fontWeight:700,
                  textDecoration:'none', whiteSpace:'nowrap',
                  transition:'all .15s',
                }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-1px)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
