'use client';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { useSearchParams } from 'next/navigation';
import { CATALYST_ASSETS } from '../../lib/data/catalystAssets';
import { CONTACT } from '../../lib/config/site';
import { SelectField } from '../../components/SelectField';
import { CapabilitiesEngine } from '../../components/CapabilitiesEngine';
import { DealProof } from '../../components/DealProof';
import { MarketProblem } from '../../components/MarketProblem';
import { AudienceWithout } from '../../components/AudienceWithout';

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
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color: 'rgba(255,255,255,.88)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
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
        <div style={{ fontSize:26,color:'#2dd4a0',marginBottom:10 }}>&#10003;</div>
        <div style={{ fontSize:16,fontWeight:700,color:'#fff',marginBottom:7 }}>Request Submitted</div>
        <p style={{ fontSize:12,color: 'rgba(255,255,255,.68)',lineHeight:1.6,marginBottom:20 }}>We&rsquo;ll confirm coverage within 24 hours.</p>
        <button onClick={onClose} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 24px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Done</button>
      </div>
    </div>
  );
  return(
    <div style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.75)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }} onClick={onClose}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:460,width:'100%',position:'relative' }} onClick={e=>e.stopPropagation()}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'18px 22px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:12,right:12,background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.18)',color: 'rgba(255,255,255,.9)',width:28,height:28,cursor:'pointer',fontSize:16,lineHeight:'26px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>&#215;</button>
          <div style={{ fontSize:14,fontWeight:700,color:'#fff',marginBottom:2 }}>Check Catalyst Coverage</div>
          <p style={{ fontSize:11,color: 'rgba(255,255,255,.60)',margin:0 }}>Same-day if covered &middot; 14-day custom if not</p>
        </div>
        <form onSubmit={submit} style={{ padding:'18px 22px',display:'flex',flexDirection:'column',gap:11 }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color: 'rgba(255,255,255,.62)',marginBottom:4 }}>First Name *</label><input required style={inp} placeholder="Jordan" onChange={e=>set('firstName',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color: 'rgba(255,255,255,.62)',marginBottom:4 }}>Last Name *</label><input required style={inp} placeholder="Keller" onChange={e=>set('lastName',e.target.value)} /></div>
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color: 'rgba(255,255,255,.62)',marginBottom:4 }}>Work Email *</label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e=>set('email',e.target.value)} /></div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div>
              {!firmOther
                ? <SelectField label="Firm" options={BANKS} value={form.firm} onChange={v=>handleFirmSelect(v)} placeholder="Select firm..." required />
                : <div>
                    <label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color: 'rgba(255,255,255,.62)',marginBottom:4 }}>Firm *</label>
                    <input required autoFocus style={inp} placeholder="Firm name" onChange={e=>set('firm',e.target.value)} />
                    <button type="button" onClick={()=>setFirmOther(false)} style={{ fontSize:9,color: 'rgba(255,255,255,.62)',background:'none',border:'none',cursor:'pointer',marginTop:4,padding:0 }}>← Back to list</button>
                  </div>
              }
            </div>
            <SelectField label="Org Type" options={ORG} value={form.orgType} onChange={v=>set('orgType',v)} required />
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color: 'rgba(255,255,255,.62)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name" onChange={e=>set('mandate',e.target.value)} /></div>
          {error && <div style={{ fontSize:12,color:'#f87171',background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',padding:'8px 12px' }}>{error}</div>}
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}




function SampleCard({ href, type, badge, logoSrc, logoAlt, logoInvert, cta }: {
  href: string; type: string; badge: string;
  logoSrc: string; logoAlt: string; logoInvert: boolean; cta: string;
}) {
  return (
    <a href={href} className="ib-sample-card" style={{ position:'relative' }}>
      <div style={{
        position:'absolute', top:14, right:14,
        fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
        color:'rgba(77,144,254,.95)', background:'rgba(77,144,254,.12)',
        border:'1px solid rgba(77,144,254,.3)', padding:'2px 8px',
      }}>{badge}</div>
      <div className="ib-sample-type">{type}</div>
      <div className="ib-sample-logo-wrap">
        <img
          src={logoSrc} alt={logoAlt}
          style={{ height:28, width:'auto', maxWidth:200, filter: logoInvert ? 'brightness(0) invert(1)' : 'none', opacity: logoInvert ? .85 : 1 }}
        />
      </div>
      <div className="ib-sample-link" style={{ marginTop:'auto' }}>{cta} &rarr;</div>
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
      <DealProof />
      <CapabilitiesEngine />

      <MarketProblem />
      <AudienceWithout />

      {/* SAMPLE STUDIES */}

      <section id="samples" className="ib-section">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Live Deliverables</div>
          <h2 className="ib-section-title" style={{ marginBottom:4 }}>See exactly what your client receives</h2>

          {/* Deliverable showcase — Volie first, Sample Report second */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(255,255,255,.06)', marginBottom:1 }}>

            {/* Volie — Client Proposal */}
            <a
              href="https://volie.crossoverintelligence.com/"
              target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', flexDirection:'column', textDecoration:'none', background:'rgba(6,14,28,.95)', padding:'22px 26px', position:'relative', overflow:'hidden', transition:'background .15s' }}
              onMouseEnter={e=>(e.currentTarget.style.background='rgba(10,20,40,.95)')}
              onMouseLeave={e=>(e.currentTarget.style.background='rgba(6,14,28,.95)')}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(77,144,254,.35),transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(77,144,254,.9)', background:'rgba(77,144,254,.12)', border:'1px solid rgba(77,144,254,.3)', padding:'2px 8px' }}>Client Proposal</div>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(77,144,254,.7)', padding:'2px 0' }}>Live Portal ↗</div>
              </div>
              <div style={{ fontSize:17, fontWeight:700, color: 'rgba(255,255,255,.92)', marginBottom:8, letterSpacing:'-.02em' }}>Volie</div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:16 }}>
                {['Targeted Outreach','Cortex AI','Operator Intelligence','Shareable'].map((t,i)=>(
                  <span key={i} style={{ fontSize:9, fontWeight:600, color:'rgba(130,175,255,.6)', background:'rgba(77,144,254,.07)', border:'1px solid rgba(77,144,254,.15)', padding:'2px 7px' }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(130,175,255,.8)', marginTop:'auto' }}>View Live Portal ↗</div>
            </a>

            {/* Sample VoC */}
            <a
              href="https://sample.crossoverintelligence.com/"
              target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', flexDirection:'column', textDecoration:'none', background:'rgba(6,14,28,.95)', padding:'22px 26px', position:'relative', overflow:'hidden', transition:'background .15s', borderLeft:'1px solid rgba(255,255,255,.06)' }}
              onMouseEnter={e=>(e.currentTarget.style.background='rgba(10,20,40,.95)')}
              onMouseLeave={e=>(e.currentTarget.style.background='rgba(6,14,28,.95)')}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(45,212,160,.9)', background:'rgba(45,212,160,.08)', border:'1px solid rgba(45,212,160,.25)', padding:'2px 8px' }}>Sample VoC</div>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.70)', padding:'2px 0' }}>Full Report ↗</div>
              </div>
              <div style={{ fontSize:17, fontWeight:700, color: 'rgba(255,255,255,.92)', marginBottom:8, letterSpacing:'-.02em' }}>Intelligence Report + GTM Playbook</div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:16 }}>
                {['Full Report','GTM Playbook','Response Carve-Out','Underlying Data File'].map((t,i)=>(
                  <span key={i} style={{ fontSize:9, fontWeight:600, color: 'rgba(255,255,255,.55)', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)', padding:'2px 7px' }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color: 'rgba(255,255,255,.6)', marginTop:'auto' }}>View Sample Report ↗</div>
            </a>

          </div>

          {/* Study cards */}
          <div className="ib-samples" style={{ marginTop:1 }}>
            <SampleCard
              href="/redcanary"
              type="Cybersecurity MDR"
              badge="Catalyst"
              logoSrc="/red-canary-logo.svg"
              logoAlt="Red Canary"
              logoInvert={false}
              cta="View Study"
            />
            <SampleCard
              href="/bluecat"
              type="Network Infrastructure"
              badge="Catalyst"
              logoSrc="/bluecat-logo.svg"
              logoAlt="BlueCat Networks"
              logoInvert={true}
              cta="View Study"
            />
            <a href="/catalyst" className="ib-sample-card ib-sample-cta">
              <div className="ib-sample-type">Catalyst Library</div>
              <div className="ib-sample-logo-wrap">
                <div className="ib-sample-name">{CATALYST_ASSETS.length} Assets</div>
              </div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:10 }}>
                {(['transacted','active','new'] as const).map(s => {
                  const n = CATALYST_ASSETS.filter(a => a.status === s).length;
                  const cfg = { transacted:{ color:'rgba(180,180,200,.6)', label:'Closed' }, active:{ color:'rgba(45,212,160,.8)', label:'Active' }, new:{ color:'rgba(245,158,11,.8)', label:'New' } };
                  return n > 0 ? <span key={s} style={{ fontSize:9, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' as const, color:cfg[s].color }}>{n} {cfg[s].label}</span> : null;
                })}
              </div>
              <div className="ib-sample-link" style={{ marginTop:'auto' }}>Browse Library &rarr;</div>
            </a>
          </div>
        </div>
      </section>




      {requestOpen && <RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
