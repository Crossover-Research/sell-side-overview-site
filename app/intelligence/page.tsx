'use client';
import { useState } from 'react';
import { AnimatedMetrics } from '../../components/AnimatedMetrics';
import { FlywheelDiagram } from '../../components/FlywheelDiagram';
import { IB_TRACK_RECORD, IB_CAPS, IB_CAP_DATA, type IBCap } from '../../lib/data/ibCapabilities';
import { CATALYST_ASSETS, type CatalystAsset } from '../../lib/data/catalystAssets';

type FilterType = 'all' | 'active' | 'new' | 'transacted';

function TeaserModal({ asset, onClose, onRequest }: { asset: CatalystAsset; onClose:()=>void; onRequest:()=>void }) {
  const displayName = asset.status === 'transacted' && asset.realName ? asset.realName : asset.code;
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:'fixed',inset:0,zIndex:500,background:'rgba(4,9,18,.88)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:700,width:'100%',maxHeight:'88vh',overflowY:'auto',position:'relative' }}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'22px 26px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:11,right:11,background:'rgba(255,255,255,.1)',border:'none',color:'rgba(255,255,255,.7)',width:26,height:26,cursor:'pointer',fontSize:15,lineHeight:'26px',textAlign:'center' }}>x</button>
          <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:4 }}>
            <div style={{ fontSize:10,fontWeight:700,color:'rgba(130,175,255,.75)',letterSpacing:'.1em',textTransform:'uppercase' }}>{asset.code}</div>
            {asset.status==='transacted' && asset.realName && (
              <div style={{ fontSize:10,fontWeight:700,color:'#2dd4a0',letterSpacing:'.06em',textTransform:'uppercase' }}>
                Unblinded: {asset.realName}
              </div>
            )}
          </div>
          <div style={{ fontSize:18,fontWeight:700,color:'#fff',marginBottom:3 }}>{displayName} &mdash; {asset.category}</div>
          <div style={{ fontSize:11,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.06em' }}>{asset.subtitle}{asset.dealNote ? ` · ${asset.dealNote}` : ''}</div>
        </div>
        <div style={{ padding:'20px 26px' }}>
          {asset.status==='transacted' && (
            <div style={{ background:'rgba(45,212,160,.07)',border:'1px solid rgba(45,212,160,.2)',padding:'10px 14px',marginBottom:14,fontSize:12,color:'rgba(45,212,160,.85)',lineHeight:1.5 }}>
              This asset has transacted. Identity unblinded post-close. Funds with active access received the full research brief before the process began.
            </div>
          )}
          <div style={{ background:'rgba(77,144,254,.1)',border:'1px solid rgba(77,144,254,.2)',padding:'13px 16px',marginBottom:16 }}>
            <div style={{ fontSize:9,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:6 }}>Investment Hook</div>
            <p style={{ fontSize:13,color:'rgba(255,255,255,.85)',lineHeight:1.65,margin:0 }}>{asset.hook}</p>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:7,marginBottom:16 }}>
            {asset.metrics.map((m,i)=>(
              <div key={i} style={{ background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.07)',padding:'9px 11px',textAlign:'center' }}>
                <div style={{ fontSize:8,fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'rgba(255,255,255,.3)',marginBottom:4 }}>{m.label}</div>
                <div style={{ fontSize:15,fontWeight:700,color:'rgba(130,175,255,.95)',lineHeight:1,marginBottom:2 }}>{m.value}</div>
                <div style={{ fontSize:9,color:'rgba(255,255,255,.3)' }}>{m.context}</div>
              </div>
            ))}
          </div>
          {asset.quotes.slice(0,2).map((q,i)=>(
            <div key={i} style={{ borderLeft:'2px solid rgba(77,144,254,.3)',paddingLeft:11,marginBottom:9,fontSize:12,color:'rgba(255,255,255,.6)',fontStyle:'italic',lineHeight:1.6 }}>"{q}"</div>
          ))}
          <div style={{ display:'flex',gap:9,marginTop:18,justifyContent:'flex-end' }}>
            {asset.status!=='transacted' && (
              <button onClick={onRequest} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 20px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Request Full Report &rarr;</button>
            )}
            <a href="mailto:ian@crossoverresearch.com" style={{ background:'transparent',color:'rgba(255,255,255,.5)',border:'1px solid rgba(255,255,255,.14)',padding:'9px 16px',fontSize:12,textDecoration:'none' }}>Email Ian</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestModal({ onClose }: { onClose:()=>void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ firstName:'',lastName:'',email:'',firm:'',orgType:'',mandate:'' });
  const ORG = ['Investment Bank','Private Equity','Growth Equity','Venture Capital','Strategic'];
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.88)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
  const set = (k:string,v:string)=>setForm(f=>({...f,[k]:v}));
  const submit = async(e:React.FormEvent)=>{
    e.preventDefault();
    try{await fetch('/api/catalyst-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});}catch{}
    setSent(true);
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
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Firm *</label><input required style={inp} placeholder="J.P. Morgan" onChange={e=>set('firm',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Org Type *</label>
              <select required style={{...inp,appearance:'none'}} onChange={e=>set('orgType',e.target.value)}><option value="">Select...</option>{ORG.map(o=><option key={o}>{o}</option>)}</select>
            </div>
          </div>
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name -- confirm coverage immediately" onChange={e=>set('mandate',e.target.value)} /></div>
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}


const LockIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display:'inline-block',verticalAlign:'middle',marginRight:5 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

function AssetNameCell({ asset }: { asset: CatalystAsset }) {
  const [revealed, setRevealed] = useState(false);
  const isTransacted = asset.status === 'transacted';

  if (!isTransacted) {
    return (
      <div>
        <div style={{ fontSize:13,fontWeight:700,color:'rgba(130,175,255,.72)',marginBottom:3,display:'flex',alignItems:'center' }}>
          <LockIcon />{asset.code}
        </div>
        <div style={{ fontSize:10,color:'rgba(255,255,255,.2)',letterSpacing:'.04em',textTransform:'uppercase' }}>Identity locked</div>
      </div>
    );
  }

  return (
    <div style={{ position:'relative',cursor:'default',userSelect:'none',minWidth:140 }}
      onMouseEnter={()=>setRevealed(true)}
      onMouseLeave={()=>setRevealed(false)}
    >
      <div style={{ position:'relative',height:20,overflow:'hidden',marginBottom:3 }}>
        <div style={{ position:'absolute',top:0,left:0,width:'100%',fontSize:13,fontWeight:700,color:'rgba(130,175,255,.6)',display:'flex',alignItems:'center',transform:revealed?'translateX(-115%)':'translateX(0)',transition:'transform .32s cubic-bezier(.4,0,.2,1)' }}>
          <LockIcon size={10}/>{asset.code}
        </div>
        <div style={{ position:'absolute',top:0,left:0,width:'100%',fontSize:13,fontWeight:700,color:'#2dd4a0',transform:revealed?'translateX(0)':'translateX(115%)',transition:'transform .32s cubic-bezier(.4,0,.2,1)' }}>
          {asset.realName}
        </div>
      </div>
      <div style={{ fontSize:10,letterSpacing:'.04em',color:revealed?'rgba(45,212,160,.55)':'rgba(255,255,255,.2)',transition:'color .2s' }}>
        {revealed && asset.dealNote ? asset.dealNote : 'Hover to reveal'}
      </div>
    </div>
  );
}

export default function IntelligencePage() {
  const [activeCap, setActiveCap] = useState<IBCap>('mandate');
  const [selectedAsset, setSelectedAsset] = useState<CatalystAsset|null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const cap = IB_CAP_DATA[activeCap];
  const filtered = CATALYST_ASSETS.filter(a=>filter==='all'||a.status===filter);

  const statusCfg = {
    active:     { color:'#2dd4a0', bg:'rgba(45,212,160,.1)',  border:'rgba(45,212,160,.25)',  label:'Active' },
    new:        { color:'#7bb8ff', bg:'rgba(77,144,254,.12)', border:'rgba(77,144,254,.25)',  label:'New' },
    transacted: { color:'rgba(255,255,255,.5)', bg:'rgba(255,255,255,.05)', border:'rgba(255,255,255,.12)', label:'Transacted' },
  };

  return (
    <>
      <section className="ib-hero" style={{ paddingBottom: 0 }}>
        <div className="ib-inner">
          <h1 className="ib-title" style={{ marginBottom: 10 }}>
            The research layer that spans<br />
            <em>the full transaction lifecycle.</em>
          </h1>
          <p className="ib-lead" style={{ maxWidth: 560, marginBottom: 20 }}>
            Independent primary research. Wins mandates for bankers, hardens CIMs for operators,
            builds buy-side conviction for funds. Same data. Neither side chose the respondents.
          </p>
          <AnimatedMetrics metrics={[
            { val: IB_TRACK_RECORD.winRateWithCrossover, label: 'Mandate win rate' },
            { val: IB_TRACK_RECORD.jpmEngagements,        label: 'J.P. Morgan engagements' },
            { val: IB_TRACK_RECORD.totalTransactionValue, label: 'Transaction value supported' },
          ]} />
        </div>
      </section>

      <section className="ib-section ib-section-alt">
        <div className="ib-inner">
          <div className="ib-section-eyebrow">Six Capabilities</div>
          <h2 className="ib-section-title" style={{ marginBottom:18 }}>Built for Every Stage</h2>
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
          </div>
        </div>
      </section>

      {/* CATALYST SECTION */}
      <section className="ib-section ib-section-dark">
        <div className="ib-inner">

          {/* Header + Positioning */}
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start',marginBottom:36 }}>
            <div>
              <div className="ib-section-eyebrow">Crossover Catalyst</div>
              <h2 className="ib-section-title" style={{ color:'#fff',fontSize:22,marginBottom:14 }}>
                The first dual-sided intelligence product for banked transactions.
              </h2>
              <p style={{ fontSize:15,fontWeight:300,color:'rgba(255,255,255,.82)',lineHeight:1.7,marginBottom:16,fontStyle:'italic',borderLeft:'3px solid rgba(77,144,254,.5)',paddingLeft:16 }}>
                &ldquo;The same infrastructure that wins mandates for bankers identifies the next great asset for funds.&rdquo;
              </p>
              <p style={{ fontSize:13,color:'rgba(255,255,255,.55)',lineHeight:1.75,marginBottom:20 }}>
                Every sell-side mandate produces primary research that is verticalised into dual-sided intelligence.
                The sell-side deck becomes the baseline for buy-side thesis development.
                The economics distribute across the ecosystem &mdash; no single party pays consulting-firm rates.
              </p>
              <button onClick={()=>setRequestOpen(true)} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 20px',fontSize:12,fontWeight:700,cursor:'pointer' }}>
                Check Coverage &rarr;
              </button>
            </div>

            {/* Dual-sided model steps */}
            <div>
              <div style={{ border:'1px solid rgba(255,255,255,.1)',padding:'20px 22px',marginBottom:10 }}>
                <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(77,144,254,.7)',marginBottom:14 }}>Dual-Sided Intelligence Model</div>
                {[
                  { n:'01', label:'Bank mandates Crossover', sub:'Sell-side deck, mandate differentiation' },
                  { n:'02', label:'Research produces verified customer truth', sub:'Independent respondents, Core 9 methodology' },
                  { n:'03', label:'Intelligence verticalised for each audience', sub:'Banker equity story, operator CIM, fund thesis' },
                  { n:'04', label:'Catalyst resales compound the asset', sub:'Select funds, 6-12 months early, same data' },
                ].map(({n,label,sub},i)=>(
                  <div key={i} style={{ display:'flex',gap:12,alignItems:'flex-start',marginBottom:i<3?12:0 }}>
                    <div style={{ fontSize:9,fontWeight:700,color:'rgba(130,175,255,.4)',fontFamily:'JetBrains Mono,monospace',flexShrink:0,paddingTop:2 }}>{n}</div>
                    <div style={{ flex:1,paddingBottom:i<3?12:0,borderBottom:i<3?'1px solid rgba(255,255,255,.06)':'none' }}>
                      <div style={{ fontSize:12,fontWeight:600,color:'rgba(130,175,255,.7)',marginBottom:2 }}>{label}</div>
                      <div style={{ fontSize:11,color:'rgba(255,255,255,.35)' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:11,color:'rgba(255,255,255,.25)',fontStyle:'italic' }}>
                No single party pays consulting-firm rates because no single party carries the full cost.
              </div>
            </div>
          </div>

          {/* Nerdio flywheel proof */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:28,marginBottom:36 }}>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'start' }}>
              <div>
                <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(77,144,254,.7)',marginBottom:10 }}>Proof &mdash; Both Sides of $500M</div>
                <p style={{ fontSize:13,color:'rgba(255,255,255,.6)',lineHeight:1.7,marginBottom:8 }}>
                  J.P. Morgan engaged Crossover on the Nerdio Series C. Sell-side line of sight revealed a high-conviction asset. Crossover formed a fundamental view and alerted select funds.
                </p>
                <p style={{ fontSize:13,color:'rgba(255,255,255,.6)',lineHeight:1.7 }}>
                  GA took a 30-minute call, commissioned secondary diligence, and it held. <strong style={{ color:'#fff' }}>$500M at $1B+.</strong>
                </p>
              </div>
              <FlywheelDiagram />
            </div>
          </div>

          {/* Asset table */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:28 }}>
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:10 }}>
              <div>
                <div style={{ fontSize:13,fontWeight:600,color:'rgba(255,255,255,.8)',marginBottom:3 }}>
                  {CATALYST_ASSETS.length} assets &mdash; identity locked until access granted
                </div>
                <div style={{ fontSize:11,color:'rgba(255,255,255,.3)' }}>
                  Transacted assets unblinded post-close. Active assets remain code-named.
                </div>
              </div>
              <div style={{ display:'flex',gap:6,alignItems:'center' }}>
                {(['all','active','new','transacted'] as FilterType[]).map(f=>(
                  <button key={f} onClick={()=>setFilter(f)} style={{ padding:'5px 13px',fontSize:11,fontWeight:600,background:filter===f?'rgba(255,255,255,.12)':'transparent',border:'1px solid rgba(255,255,255,.12)',color:filter===f?'rgba(255,255,255,.9)':'rgba(255,255,255,.4)',cursor:'pointer',textTransform:'capitalize' }}>
                    {f==='all' ? `All (${CATALYST_ASSETS.length})` : f==='transacted' ? 'Transacted' : f.charAt(0).toUpperCase()+f.slice(1)}
                  </button>
                ))}
                <button onClick={()=>setRequestOpen(true)} style={{ padding:'5px 14px',fontSize:11,fontWeight:700,background:'rgba(255,255,255,.88)',color:'#050d18',border:'none',cursor:'pointer',marginLeft:4 }}>Check Coverage &rarr;</button>
              </div>
            </div>

            <table style={{ width:'100%',borderCollapse:'collapse',background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.08)' }}>
              <thead>
                <tr style={{ borderBottom:'2px solid rgba(255,255,255,.1)' }}>
                  {['Asset','Category','Key Metric','Status',''].map((h,i)=>(
                    <th key={i} style={{ padding:'9px 14px',textAlign:'left',fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,.3)',whiteSpace:'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((a,i)=>{
                  const s = statusCfg[a.status];
                  const isTransacted = a.status==='transacted';
                  return (
                    <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,.05)',cursor:'pointer',transition:'background .12s' }}
                      onClick={()=>setSelectedAsset(a)}
                      onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,.04)')}
                      onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
                      <td style={{ padding:'12px 14px' }}>
                        <AssetNameCell asset={a} />
                      </td>
                      <td style={{ padding:'12px 14px' }}>
                        <div style={{ fontSize:12,color:'rgba(255,255,255,.6)' }}>{a.category}</div>
                        <div style={{ fontSize:10,color:'rgba(255,255,255,.28)',fontStyle:'italic' }}>{a.subtitle}</div>
                      </td>
                      <td style={{ padding:'12px 14px',fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)',fontFamily:'JetBrains Mono,monospace' }}>{a.keyMetric}</td>
                      <td style={{ padding:'12px 14px' }}>
                        <span style={{ fontSize:9,fontWeight:700,color:s.color,background:s.bg,border:`1px solid ${s.border}`,padding:'3px 9px',letterSpacing:'.06em',textTransform:'uppercase',whiteSpace:'nowrap' }}>
                          {s.label}
                        </span>
                      </td>
                      <td style={{ padding:'12px 14px' }}>
                        <button onClick={e=>{e.stopPropagation();isTransacted?setSelectedAsset(a):setRequestOpen(true);}} style={{ background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.6)',padding:'5px 12px',fontSize:11,cursor:'pointer',whiteSpace:'nowrap' }}>
                          {isTransacted ? 'View Research' : 'Request Access'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{ marginTop:14,padding:'10px 16px',background:'rgba(77,144,254,.06)',border:'1px solid rgba(77,144,254,.12)',fontSize:12,color:'rgba(160,200,255,.7)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10 }}>
              <span>Same-day if covered &middot; 14-day custom if not &middot; $10,000 per report</span>
              <button onClick={()=>setRequestOpen(true)} style={{ background:'transparent',border:'1px solid rgba(130,175,255,.3)',color:'rgba(130,175,255,.8)',padding:'5px 13px',fontSize:11,fontWeight:600,cursor:'pointer' }}>Request Access &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ib-cta">
        <div className="ib-inner" style={{ textAlign:'center' }}>
          <h2 className="ib-cta-title">Ready to see it on your next mandate?</h2>
          <div style={{ display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginTop:16 }}>
            <button onClick={()=>setRequestOpen(true)} className="ib-cta-btn">Check Catalyst Coverage</button>
            <a href="mailto:ian@crossoverresearch.com" className="ib-cta-btn ib-cta-btn-ghost">Email Ian McArdle</a>
          </div>
        </div>
      </section>

      {selectedAsset && <TeaserModal asset={selectedAsset} onClose={()=>setSelectedAsset(null)} onRequest={()=>{setSelectedAsset(null);setRequestOpen(true);}} />}
      {requestOpen && <RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
