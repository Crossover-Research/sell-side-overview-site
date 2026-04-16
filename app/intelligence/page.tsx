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
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.88)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
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
        <p style={{ fontSize:12,color:'rgba(255,255,255,.4)',lineHeight:1.6,marginBottom:20 }}>We&rsquo;ll confirm coverage within 24 hours.</p>
        <button onClick={onClose} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 24px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Done</button>
      </div>
    </div>
  );
  return(
    <div style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.75)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }} onClick={onClose}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:460,width:'100%',position:'relative' }} onClick={e=>e.stopPropagation()}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'18px 22px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:12,right:12,background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.18)',color:'rgba(255,255,255,.9)',width:28,height:28,cursor:'pointer',fontSize:16,lineHeight:'26px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>&#215;</button>
          <div style={{ fontSize:14,fontWeight:700,color:'#fff',marginBottom:2 }}>Check Catalyst Coverage</div>
          <p style={{ fontSize:11,color:'rgba(255,255,255,.35)',margin:0 }}>Same-day if covered &middot; 14-day custom if not</p>
        </div>
        <form onSubmit={submit} style={{ padding:'18px 22px',display:'flex',flexDirection:'column',gap:11 }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>First Name *</label><input required style={inp} placeholder="Jordan" onChange={e=>set('firstName',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Last Name *</label><input required style={inp} placeholder="Keller" onChange={e=>set('lastName',e.target.value)} /></div>
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Work Email *</label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e=>set('email',e.target.value)} /></div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div>
              {!firmOther
                ? <SelectField label="Firm" options={BANKS} value={form.firm} onChange={v=>handleFirmSelect(v)} placeholder="Select firm..." required />
                : <div>
                    <label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Firm *</label>
                    <input required autoFocus style={inp} placeholder="Firm name" onChange={e=>set('firm',e.target.value)} />
                    <button type="button" onClick={()=>setFirmOther(false)} style={{ fontSize:9,color:'rgba(255,255,255,.3)',background:'none',border:'none',cursor:'pointer',marginTop:4,padding:0 }}>← Back to list</button>
                  </div>
              }
            </div>
            <SelectField label="Org Type" options={ORG} value={form.orgType} onChange={v=>set('orgType',v)} required />
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name" onChange={e=>set('mandate',e.target.value)} /></div>
          {error && <div style={{ fontSize:12,color:'#f87171',background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',padding:'8px 12px' }}>{error}</div>}
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}




function SampleCard({ href, type, codeName, badge, logoSrc, logoAlt, logoInvert, cta }: {
  href: string; type: string; codeName: string; badge: string;
  logoSrc: string; logoAlt: string; logoInvert: boolean; cta: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="ib-sample-card"
      style={{ position:'relative' }}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      {/* Badge — top right corner */}
      <div style={{
        position:'absolute', top:14, right:14,
        fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
        color:'rgba(77,144,254,.95)', background:'rgba(77,144,254,.12)',
        border:'1px solid rgba(77,144,254,.3)', padding:'2px 8px',
        animation:'hint-pulse 2.4s ease-in-out infinite',
      }}>{badge}</div>

      {/* Sector — no code name */}
      <div className="ib-sample-type">{type}</div>

      <div className="ib-sample-logo-wrap" style={{ position:'relative', overflow:'hidden' }}>
        {/* Code name — slides out up on hover */}
        <div style={{
          position:'absolute', top:0, left:0, width:'100%',
          display:'flex', alignItems:'center', height:'100%',
          transform: hovered ? 'translateY(-100%)' : 'translateY(0)',
          opacity: hovered ? 0 : 1,
          transition: 'transform .3s cubic-bezier(.4,0,.2,1), opacity .2s',
        }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:22, fontWeight:700, letterSpacing:'.06em', color:'rgba(255,255,255,.5)' }}>
            {codeName}
          </span>
        </div>
        {/* Logo — slides in from below on hover */}
        <div style={{
          position:'absolute', top:0, left:0, width:'100%',
          display:'flex', alignItems:'center', height:'100%',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
          opacity: hovered ? 1 : 0,
          transition: 'transform .3s cubic-bezier(.4,0,.2,1), opacity .2s .05s',
        }}>
          <img
            src={logoSrc} alt={logoAlt}
            style={{ height:24, width:'auto', maxWidth:200, filter: logoInvert ? 'brightness(0) invert(1)' : 'none', opacity: logoInvert ? .85 : 1 }}
          />
        </div>
      </div>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.25)', marginBottom:16 }}>
        Hover to reveal
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
          <p style={{ fontSize:13, color:'var(--t2)', marginBottom:20, lineHeight:1.6 }}>
            Every engagement delivers a live portal with Cortex AI embedded — not a PDF. The GTM Playbook turns VoC data into a tiered account list with named targets, renewal windows, and displacement signals your sales team can act on immediately.
          </p>

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
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.3)' }}>Client Proposal</div>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(77,144,254,.9)', background:'rgba(77,144,254,.12)', border:'1px solid rgba(77,144,254,.3)', padding:'2px 8px', animation:'hint-pulse 2.4s ease-in-out infinite' }}>Live Portal</div>
              </div>
              <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.92)', marginBottom:6 }}>Volie</div>
              <div style={{ fontSize:12, color:'var(--t2)', lineHeight:1.65, marginBottom:16 }}>
                Purpose-built operator outreach. Our intelligence engine identifies the right targets, surfaces the pain, and produces proposals that strike a nerve before competitors know the process is live.
              </div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:18 }}>
                {['Targeted Outreach','Cortex AI','Operator Intelligence','Shareable'].map((t,i)=>(
                  <span key={i} style={{ fontSize:9, fontWeight:600, color:'rgba(130,175,255,.6)', background:'rgba(77,144,254,.07)', border:'1px solid rgba(77,144,254,.15)', padding:'2px 7px' }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(130,175,255,.8)', marginTop:'auto' }}>View Live Portal ↗</div>
            </a>

            {/* Sample Report */}
            <a
              href="https://sample.crossoverintelligence.com/"
              target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', flexDirection:'column', textDecoration:'none', background:'rgba(6,14,28,.95)', padding:'22px 26px', position:'relative', overflow:'hidden', transition:'background .15s', borderLeft:'1px solid rgba(255,255,255,.06)' }}
              onMouseEnter={e=>(e.currentTarget.style.background='rgba(10,20,40,.95)')}
              onMouseLeave={e=>(e.currentTarget.style.background='rgba(6,14,28,.95)')}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.3)' }}>Sample Report</div>
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(245,158,11,.9)', background:'rgba(245,158,11,.1)', border:'1px solid rgba(245,158,11,.25)', padding:'2px 8px' }}>Operator</div>
              </div>
              <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,.92)', marginBottom:6 }}>Intelligence Report + GTM Playbook</div>
              <div style={{ fontSize:12, color:'var(--t2)', lineHeight:1.65, marginBottom:16 }}>
                Competitive displacement scorecards, tiered account targets with renewal windows, and a GTM playbook your sales team can execute the day the deal closes.
              </div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:18 }}>
                {['Full Report','GTM Playbook','Response Carve-Out','Underlying Data File'].map((t,i)=>(
                  <span key={i} style={{ fontSize:9, fontWeight:600, color:'rgba(255,255,255,.4)', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)', padding:'2px 7px' }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.55)', marginTop:'auto' }}>View Sample Report ↗</div>
            </a>

          </div>

          {/* Study cards */}
          <div className="ib-samples" style={{ marginTop:1 }}>
            <SampleCard
              href="/redcanary"
              type="Cybersecurity MDR"
              codeName="SENTINEL"
              badge="Catalyst"
              logoSrc="/red-canary-logo.svg"
              logoAlt="Red Canary"
              logoInvert={false}
              cta="View Study"
            />
            <SampleCard
              href="/bluecat"
              type="Network Infrastructure"
              codeName="FORTRESS"
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
