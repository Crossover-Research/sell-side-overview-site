'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { IB_TRACK_RECORD, IB_CAPS, IB_CAP_DATA, type IBCap } from '../../lib/data/ibCapabilities';
import { ENGAGEMENT_OPTIONS } from '../../lib/data/partner';
import { CONTACT } from '../../lib/config/site';
import { EngagementCard } from '../../components/EngagementCard';

function RequestParamWatcher({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get('request') === '1') onOpen();
  }, [searchParams, onOpen]);
  return null;
}

function RequestModal({ onClose }: { onClose:()=>void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ firstName:'',lastName:'',email:'',firm:'',orgType:'',mandate:'' });
  const ORG = ['Investment Bank','Private Equity','Growth Equity','Venture Capital','Strategic'];
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.88)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
  const set = (k:string,v:string)=>setForm(f=>({...f,[k]:v}));
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
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.92)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:460,width:'100%',position:'relative' }}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'18px 22px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:10,right:10,background:'rgba(255,255,255,.1)',border:'none',color:'rgba(255,255,255,.7)',width:24,height:24,cursor:'pointer',fontSize:14,lineHeight:'24px',textAlign:'center' }}>x</button>
          <div style={{ fontSize:14,fontWeight:700,color:'#fff',marginBottom:2 }}>Start a Mandate</div>
          <p style={{ fontSize:11,color:'rgba(255,255,255,.35)',margin:0 }}>Same-day if covered &middot; 14-day custom if not</p>
        </div>
        <form onSubmit={submit} style={{ padding:'18px 22px',display:'flex',flexDirection:'column',gap:11 }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>First Name *</label><input required style={inp} placeholder="Jordan" onChange={e=>set('firstName',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Last Name *</label><input required style={inp} placeholder="Keller" onChange={e=>set('lastName',e.target.value)} /></div>
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Work Email *</label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e=>set('email',e.target.value)} /></div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:9 }}>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Firm *</label><input required style={inp} placeholder="J.P. Morgan" onChange={e=>set('firm',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Org Type *</label>
              <select required style={{...inp,appearance:'none'}} onChange={e=>set('orgType',e.target.value)}><option value="">Select...</option>{ORG.map(o=><option key={o}>{o}</option>)}</select>
            </div>
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name" onChange={e=>set('mandate',e.target.value)} /></div>
          {error && <div style={{ fontSize:12,color:'#f87171',background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',padding:'8px 12px' }}>{error}</div>}
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}

const WITHOUT_WITH = [
  { w: 'Pitch alongside 3-5 identical banks on relationship. No rational basis to choose you.',    c: 'Walk in with customer evidence no competing bank has commissioned. The room is already yours.' },
  { w: 'Build the equity story from market research the operator already discounts.',               c: 'Build the equity story from independent verified customer data. The operator cannot challenge what they did not select.' },
  { w: 'Bury weak spots and hope buyer diligence misses them before close.',                       c: 'Find the gaps first. Surface them with independent research. Close them before diligence begins.' },
  { w: 'Spend diligence defending terrain that should have been fortified before process started.', c: 'Pre-answer every buyer objection with customer-backed evidence before the first meeting.' },
  { w: 'Win on relationship. When a competitor brings independent proof, the relationship loses.',  c: 'Independent evidence cannot be replicated on any timeline. Walk in with proof. Walk out with the mandate.' },
];

const PRODUCTS = [
  { audience:'Banker', color:'rgba(130,180,255,.9)', title:'Mandate Pitch Deck', desc:'Customer proof points that no competing bank walks in with.', timeline:'48 hrs-2w', customers:'20-30', stage:'Mandate', value:'The banker enters the room knowing exactly what buyers will flag. And exactly how to answer it.' },
  { audience:'Operator', color:'var(--amber)', title:'Operator Rebuttal + CIM', desc:'Surfaces weaknesses before buyers find them. Closes gaps proactively. Hardens the CIM narrative.', timeline:'3-5w', customers:'30-60', stage:'Sell-side', value:'Find the gaps first, close them with evidence, enter the process on offense.' },
  { audience:'Investor', color:'var(--green)', title:'Customer Diligence Report', desc:'Build conviction before the teaser drops. Independent research that serves both sides of the transaction.', timeline:'5-7w', customers:'50-100+', stage:'Diligence', value:"Independent evidence the sell-side can't curate. Bid with conviction on your own timeline." },
];

export default function IntelligencePage() {
  const [activeCap, setActiveCap] = useState<IBCap>('mandate');
  const [requestOpen, setRequestOpen] = useState(false);
  const cap = IB_CAP_DATA[activeCap];

  return (
    <>
      <Suspense fallback={null}><RequestParamWatcher onOpen={() => setRequestOpen(true)} /></Suspense>

      {/* CAPABILITIES */}
      <section className="ib-section ib-section-alt">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Six Capabilities</div>
          <h2 className="ib-section-title" style={{ marginBottom:18 }}>Built for Every Stage of the Transaction</h2>
          <div className="ib-cap-tabs">
            {IB_CAPS.map(c=>(
              <button key={c} onClick={()=>setActiveCap(c)} className={`ib-cap-tab${activeCap===c?' active':''}`}>
                {IB_CAP_DATA[c].label}
              </button>
            ))}
          </div>
          <div className="ib-cap-panel">
            <div className="ib-framing">
              <div className="ib-framing-col">
                <div className="ib-framing-label">The Problem</div>
                <p className="ib-framing-text">{cap.bankerProblem}</p>
              </div>
              <div className="ib-framing-arrow">&rarr;</div>
              <div className="ib-framing-col ib-framing-answer">
                <div className="ib-framing-label">Crossover Answer</div>
                <p className="ib-framing-text">{cap.crossoverAnswer}</p>
              </div>
            </div>
            <div className="ib-cap-header-full">
              <h3 className="ib-cap-headline">{cap.headline}</h3>
            </div>
            <div className="ib-features">
              {cap.features.slice(0,4).map((f,i)=>(
                <div key={i} className="ib-feature">
                  <div className="ib-feature-title">{f.title}</div>
                  <div className="ib-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WITHOUT / WITH */}
      <section className="ib-section">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">The Difference</div>
          <h2 className="ib-section-title" style={{ marginBottom:16 }}>What Changes When You Walk In With Crossover</h2>
          <div className="ww-wrap">
            <table className="ww-table">
              <thead>
                <tr>
                  <th className="col-w" style={{ width:'50%' }}>Without Crossover</th>
                  <th className="col-c" style={{ width:'50%' }}>With Crossover</th>
                </tr>
              </thead>
              <tbody>
                {WITHOUT_WITH.map((row,i)=>(
                  <tr key={i}>
                    <td className="col-w"><span className="ww-x">&#10005;</span>{row.w}</td>
                    <td className="col-c"><span className="ww-check">&#10003;</span>{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="ib-section ib-section-dark">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">What You Get</div>
          <h2 className="ib-section-title" style={{ color:'#fff',marginBottom:20 }}>One Methodology. Three Outputs.</h2>
          <div className="product-grid">
            {PRODUCTS.map((p,i)=>(
              <div key={i} className="product-col" style={{ borderLeft:i>0?'1px solid rgba(255,255,255,.08)':'none' }}>
                <div className="product-audience" style={{ color:p.color }}>{p.audience}</div>
                <div className="product-title">{p.title}</div>
                <div className="product-desc">{p.desc}</div>
                <div className="product-value" style={{ marginTop:'auto',paddingTop:12 }}>{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE STUDIES */}
      <section className="ib-section">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Sample Research</div>
          <h2 className="ib-section-title" style={{ marginBottom:16 }}>Live Catalyst Studies</h2>
          <div className="ib-samples">
            <a href="/redcanary" className="ib-sample-card">
              <div className="ib-sample-type">SENTINEL &middot; Cybersecurity MDR</div>
              <div className="ib-sample-name">Red Canary</div>
              <div className="ib-sample-meta">9.0 NPS &middot; 8.8 replication difficulty &middot; 75+ respondents</div>
              <div className="ib-sample-link">View Study &rarr;</div>
            </a>
            <a href="/bluecat" className="ib-sample-card">
              <div className="ib-sample-type">FORTRESS &middot; Network Infrastructure</div>
              <div className="ib-sample-name">BlueCat Networks</div>
              <div className="ib-sample-meta">9.0 mission criticality &middot; 1.9 switching intent &middot; 55 respondents</div>
              <div className="ib-sample-link">View Study &rarr;</div>
            </a>
            <a href="/catalyst" className="ib-sample-card ib-sample-cta">
              <div className="ib-sample-type">Catalyst Library</div>
              <div className="ib-sample-name">10 Assets Available</div>
              <div className="ib-sample-meta">Same-day if covered &middot; Locked identities &middot; Slide reveal on transacted</div>
              <div className="ib-sample-link">Browse Library &rarr;</div>
            </a>
          </div>
        </div>
      </section>

      {/* ENGAGE */}
      <section className="ib-section ib-section-alt">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Start a Mandate</div>
          <h2 className="ib-section-title" style={{ marginBottom:20 }}>Aligned to Where You Are in the Process</h2>
          <div className="engagement-wrap">
            {ENGAGEMENT_OPTIONS.map((card,i)=>(
              <EngagementCard key={i} card={card} />
            ))}
          </div>
          <div style={{ marginTop:32,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.07)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16 }}>
            <div>
              <div style={{ fontSize:14,fontWeight:700,color:'var(--t0)',marginBottom:3 }}>Ian McArdle</div>
              <div style={{ fontSize:11,color:'var(--t3)',marginBottom:4 }}>Head of Strategic Partnerships &middot; Crossover Research</div>
              <a href={`mailto:${CONTACT.email}`} style={{ fontSize:11,color:'rgba(130,175,255,.8)',textDecoration:'none' }}>{CONTACT.email}</a>
            </div>
            <div style={{ display:'flex',gap:8 }}>
              <a href={`mailto:${CONTACT.email}`} className="cta-btn solid" style={{ fontSize:12 }}>Email Ian</a>
              <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta-btn outline" style={{ fontSize:12 }}>Book a Meeting</a>
            </div>
          </div>
        </div>
      </section>

      {requestOpen && <RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
