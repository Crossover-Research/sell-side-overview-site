'use client';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { useSearchParams } from 'next/navigation';
import { CATALYST_ASSETS, CATALYST_LIVE_COUNT, CATALYST_LIVE_STATUS } from '../../lib/data/catalystAssets';
import { CONTACT } from '../../lib/config/site';
import { SelectField } from '../../components/SelectField';
import { CapabilitiesEngine } from '../../components/CapabilitiesEngine';
import { EvidenceTable } from '../../components/EvidenceTable';


function RequestParamWatcher({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get('request') === '1') onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  return null;
}

function RequestModal({ onClose }: { onClose:()=>void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [firmOther, setFirmOther] = useState(false);
  const [form, setForm] = useState({ firstName:'',lastName:'',email:'',firm:'',orgType:'Investment Bank',mandate:'' });
  const ORG = ['Investment Bank','Private Equity','Growth Equity','Venture Capital','Strategic'];
  const BANKS = [
    'Goldman Sachs','J.P. Morgan','Morgan Stanley','Bank of America','Citi',
    'Barclays','Deutsche Bank','UBS','Credit Suisse','Lazard',
    'Evercore','Moelis & Company','Jefferies','RBC Capital Markets','Wells Fargo',
    'Other',
  ];
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.90)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
  const set = (k:string,v:string)=>setForm(f=>({...f,[k]:v}));
  const handleFirmSelect = (v:string) => {
    if (v === 'Other') { setFirmOther(true); set('firm',''); }
    else { setFirmOther(false); set('firm', v); }
  };
  const submit = async(e:React.FormEvent)=>{
    e.preventDefault(); setError('');
    try {
      const res = await fetch('/api/catalyst-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      if (!res.ok) throw new Error('failed');
      setSent(true);
    } catch { setError(`Something went wrong. Email ${CONTACT.email} directly.`); }
  };
  if(sent) return(
    <div style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.92)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',padding:'40px 32px',maxWidth:380,width:'100%',textAlign:'center' }}>
        <div style={{ fontSize:26,color:'#5974a0',marginBottom:10 }}>&#10003;</div>
        <div style={{ fontSize:16,fontWeight:700,color:'#fff',marginBottom:7 }}>Request Submitted</div>
        <p style={{ fontSize:12,color:'rgba(255,255,255,.72)',lineHeight:1.6,marginBottom:20 }}>We&rsquo;ll confirm coverage within 24 hours.</p>
        <button onClick={onClose} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 24px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Done</button>
      </div>
    </div>
  );
  return(
    <div style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.75)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }} onClick={onClose}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:460,width:'100%',position:'relative' }} onClick={e=>e.stopPropagation()}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'18px 22px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:12,right:12,background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.18)',color:'rgba(255,255,255,.9)',width:28,height:28,cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>&#215;</button>
          <div style={{ fontSize:14,fontWeight:700,color:'#fff',marginBottom:2 }}>Check Catalyst Coverage</div>
          <p style={{ fontSize:11,color:'rgba(255,255,255,.65)',margin:0 }}>Same-day if covered &middot; 14-day custom if not</p>
        </div>
        <form onSubmit={submit} style={{ padding:'18px 22px',display:'flex',flexDirection:'column',gap:11 }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div><label style={{ display:'block',fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:4 }}>First Name *</label><input required style={inp} placeholder="Jordan" onChange={e=>set('firstName',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:4 }}>Last Name *</label><input required style={inp} placeholder="Keller" onChange={e=>set('lastName',e.target.value)} /></div>
          </div>
          <div><label style={{ display:'block',fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:4 }}>Work Email *</label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e=>set('email',e.target.value)} /></div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div>
              {!firmOther
                ? <SelectField label="Firm" options={BANKS} value={form.firm} onChange={v=>handleFirmSelect(v)} placeholder="Select firm..." required />
                : <div>
                    <label style={{ display:'block',fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:4 }}>Firm *</label>
                    <input required autoFocus style={inp} placeholder="Firm name" onChange={e=>set('firm',e.target.value)} />
                    <button type="button" onClick={()=>setFirmOther(false)} style={{ fontSize:11,color:'rgba(255,255,255,.65)',background:'none',border:'none',cursor:'pointer',marginTop:4,padding:0 }}>Back to list</button>
                  </div>
              }
            </div>
            <SelectField label="Org Type" options={ORG} value={form.orgType} onChange={v=>set('orgType',v)} required />
          </div>
          <div><label style={{ display:'block',fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name" onChange={e=>set('mandate',e.target.value)} /></div>
          {error && <div style={{ fontSize:12,color:'#f87171',background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',padding:'8px 12px' }}>{error}</div>}
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}

/* SampleCard — direct link, logo shown immediately */
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
        fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
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
  const [requestOpen, setRequestOpen] = useState(false);
  const openRequest = useCallback(() => setRequestOpen(true), []);

  return (
    <>
      <HeroSection />
      <Suspense fallback={null}><RequestParamWatcher onOpen={openRequest} /></Suspense>
      <CapabilitiesEngine />
      <EvidenceTable />
      

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
              <div style={{ position:'absolute', top:14, right:14, fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(120,144,178,.95)', background:'rgba(120,144,178,.12)', border:'1px solid rgba(120,144,178,.3)', padding:'2px 8px' }}>
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
              <div style={{ position:'absolute', top:14, right:14, fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(89,116,154,.9)', background:'rgba(89,116,154,.08)', border:'1px solid rgba(89,116,154,.25)', padding:'2px 8px' }}>
                Sample VoC
              </div>
              <div className="ib-sample-type">Research Report</div>
              <div className="ib-sample-logo-wrap" style={{ display:'flex', alignItems:'center', flex:1 }}>
                <div style={{ fontSize:14, fontWeight:700, color:'rgba(255,255,255,.88)', lineHeight:1.35, maxWidth:160 }}>Intelligence Report + GTM Playbook</div>
              </div>
              <div className="ib-sample-link">View Sample Report ↗</div>
            </a>
          </div>

          {/* Catalog strip — full width */}
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
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:4 }}>Catalyst Library</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, color:'rgba(255,255,255,.95)', letterSpacing:'-.02em' }}>
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
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:18, fontWeight:700, color:cfg[s].color, letterSpacing:'-.02em', lineHeight:1 }}>{n}</div>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:cfg[s].color, opacity:.7, marginTop:3 }}>{cfg[s].label}</div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div style={{ fontSize:13, fontWeight:700, color:'rgba(166,183,210,.85)', whiteSpace:'nowrap' }}>
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
                  padding:'13px 28px', fontSize:13, fontWeight:700,
                  textDecoration:'none', whiteSpace:'nowrap',
                  transition:'all .15s',
                }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-1px)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}
              >
                Book a Meeting
              </a>
              <a
                href="/intelligence?request=1"
                style={{
                  display:'inline-flex', alignItems:'center',
                  background:'transparent', color:'rgba(180,210,255,.82)',
                  border:'1px solid rgba(120,144,178,.32)', padding:'13px 28px',
                  fontSize:13, fontWeight:500, textDecoration:'none', whiteSpace:'nowrap',
                  transition:'all .15s',
                }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(120,144,178,.6)';el.style.background='rgba(120,144,178,.09)';}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(120,144,178,.32)';el.style.background='transparent';}}
              >
                Scope a Mandate →
              </a>
            </div>
          </div>
        </div>
      </section>

      {requestOpen && <RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
