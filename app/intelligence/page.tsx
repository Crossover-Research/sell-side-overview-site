'use client';
import { HeroSection } from '../../components/HeroSection';
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
          {/* 3 equal-width sample cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'rgba(255,255,255,.07)', marginBottom:1 }}>
            <SampleCard href="/redcanary" type="Cybersecurity MDR" badge="Catalyst" logoSrc="/red-canary-logo.svg" logoAlt="Red Canary" logoInvert={false} cta="View Study" />
            <SampleCard href="/bluecat" type="Network Infrastructure" badge="Catalyst" logoSrc="/bluecat-logo.svg" logoAlt="BlueCat Networks" logoInvert={true} cta="View Study" />

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
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.72)' }}>Catalyst Library</div>
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
