'use client';
import { useState } from 'react';
import { FlywheelDiagram } from '../../components/FlywheelDiagram';
import { CATALYST_ASSETS, type CatalystAsset } from '../../lib/data/catalystAssets';
import { CONTACT } from '../../lib/config/site';

type FilterType = 'all' | 'active' | 'new' | 'transacted';

const statusCfg = {
  active:     { color:'#2dd4a0', bg:'rgba(45,212,160,.12)', border:'rgba(45,212,160,.3)',  label:'Active' },
  new:        { color:'#f59e0b', bg:'rgba(245,158,11,.12)', border:'rgba(245,158,11,.3)',  label:'New' },
  transacted: { color:'rgba(180,180,200,.7)', bg:'rgba(255,255,255,.04)', border:'rgba(255,255,255,.15)', label:'Closed' },
};

const LockIcon = ({ size=11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display:'inline-block',verticalAlign:'middle',marginRight:5 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const UnlockIcon = ({ size=11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display:'inline-block',verticalAlign:'middle',marginRight:5 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
  </svg>
);

function AssetNameCell({ asset, isFirst }: { asset: CatalystAsset; isFirst?: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const isTransacted = asset.status === 'transacted';

  /* Fixed-height wrapper so no row ever shifts — all cells 58px tall */
  const cellStyle: React.CSSProperties = { height:58, display:'flex', flexDirection:'column', justifyContent:'center', gap:0 };

  if (!isTransacted) return (
    <div style={cellStyle}>
      <div style={{ fontSize:13,fontWeight:700,color:'rgba(130,175,255,.75)',marginBottom:4,display:'flex',alignItems:'center' }}>
        <LockIcon />{asset.code}
      </div>
      <div style={{ fontSize:10,color:'rgba(255,255,255,.18)',letterSpacing:'.06em',textTransform:'uppercase' }}>Identity locked</div>
    </div>
  );

  return (
    <div
      className={`asset-transacted${revealed?' asset-transacted--revealed':''}`}
      style={cellStyle}
      onMouseEnter={()=>setRevealed(true)}
      onMouseLeave={()=>setRevealed(false)}
      onTouchStart={()=>setRevealed(r=>!r)}
    >
      {/* Slide hint — always in DOM on first transacted, hidden via opacity so no layout shift */}
      <div className="asset-reveal-hint" style={{ visibility:isFirst&&!revealed?'visible':'hidden', opacity:isFirst&&!revealed?1:0, height:18, marginBottom:4 }}>
        <span>slide to reveal</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      {/* Code → Real name slide */}
      <div style={{ position:'relative',height:20,overflow:'hidden',flexShrink:0 }}>
        <div className="asset-code-slide" style={{ transform:revealed?'translateX(-110%)':'translateX(0)' }}>
          <UnlockIcon size={10}/>{asset.code}
        </div>
        <div className="asset-name-slide" style={{ transform:revealed?'translateX(0)':'translateX(110%)' }}>
          {asset.realName}
        </div>
      </div>

      {/* Sub-label — always same height, content swaps via opacity */}
      <div style={{ position:'relative',height:16,marginTop:3,overflow:'hidden' }}>
        <div className="asset-sub" style={{ position:'absolute',top:0,left:0,opacity:revealed?0:1,transition:'opacity .2s' }}>
          <span className="asset-sub-hint">hover to reveal</span>
        </div>
        <div className="asset-sub asset-sub--revealed" style={{ position:'absolute',top:0,left:0,opacity:revealed?1:0,transition:'opacity .2s' }}>
          {asset.dealNote ?? ''}
        </div>
      </div>

      {/* Teal underline */}
      <div className="asset-underline" style={{ marginTop:4 }} />
    </div>
  );
}

function TeaserModal({ asset, onClose, onRequest }: { asset: CatalystAsset; onClose:()=>void; onRequest:()=>void }) {
  const isTransacted = asset.status==='transacted';
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:'fixed',inset:0,zIndex:500,background:'rgba(4,9,18,.88)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:700,width:'100%',maxHeight:'88vh',overflowY:'auto' }}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'22px 26px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:11,right:11,background:'rgba(255,255,255,.1)',border:'none',color:'rgba(255,255,255,.7)',width:26,height:26,cursor:'pointer',fontSize:15,lineHeight:'26px',textAlign:'center' }}>x</button>
          <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:4 }}>
            <div style={{ fontSize:10,fontWeight:700,color:'rgba(130,175,255,.75)',letterSpacing:'.1em',textTransform:'uppercase' }}>{asset.code}</div>
            {isTransacted&&asset.realName&&<div style={{ fontSize:10,fontWeight:700,color:'#2dd4a0' }}>Unblinded: {asset.realName}</div>}
          </div>
          <div style={{ fontSize:18,fontWeight:700,color:'#fff',marginBottom:3 }}>{isTransacted&&asset.realName?asset.realName:asset.code} &mdash; {asset.category}</div>
          <div style={{ fontSize:11,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.06em' }}>{asset.subtitle}{asset.dealNote?` · ${asset.dealNote}`:''}</div>
        </div>
        <div style={{ padding:'20px 26px' }}>
          {isTransacted&&<div style={{ background:'rgba(45,212,160,.07)',border:'1px solid rgba(45,212,160,.2)',padding:'10px 14px',marginBottom:14,fontSize:12,color:'rgba(45,212,160,.85)',lineHeight:1.5 }}>This asset has transacted. Identity unblinded post-close.</div>}
          <div style={{ background:'rgba(77,144,254,.1)',border:'1px solid rgba(77,144,254,.2)',padding:'13px 16px',marginBottom:16 }}>
            <div style={{ fontSize:9,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(130,175,255,.6)',marginBottom:6 }}>Investment Hook</div>
            <p style={{ fontSize:13,color:'rgba(255,255,255,.85)',lineHeight:1.65,margin:0 }}>{asset.hook}</p>
          </div>
          <div className="catalyst-modal-metrics" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:7,marginBottom:16 }}>
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
            {!isTransacted&&<button onClick={onRequest} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 20px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Request Full Report &rarr;</button>}
            <a href={`mailto:${CONTACT.email}`} style={{ background:'transparent',color:'rgba(255,255,255,.5)',border:'1px solid rgba(255,255,255,.14)',padding:'9px 16px',fontSize:12,textDecoration:'none' }}>Email Ian</a>
          </div>
        </div>
      </div>
    </div>
  );
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
      if(!res.ok) throw new Error('failed');
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
          <div><label style={{ display:'block',fontSize:9,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:4 }}>Target Company or Mandate</label><input style={inp} placeholder="Company name" onChange={e=>set('mandate',e.target.value)} /></div>
          {error&&<div style={{ fontSize:12,color:'#f87171',background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)',padding:'8px 12px' }}>{error}</div>}
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'10px',fontSize:13,fontWeight:700,cursor:'pointer',marginTop:2 }}>Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}


function MobileAssetCard({ asset, statusCfg: s, isFirst, onOpen, onRequest }: {
  asset: CatalystAsset;
  statusCfg: { color: string; bg: string; border: string; label: string };
  isFirst: boolean;
  onOpen: () => void;
  onRequest: () => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const isTransacted = asset.status === 'transacted';

  const handleTap = () => {
    if (isTransacted && !revealed) { setRevealed(true); return; }
    onOpen();
  };

  return (
    <div
      className={`mobile-asset-card${isTransacted ? ' mobile-asset-card--transacted' : ''}${revealed ? ' mobile-asset-card--revealed' : ''}`}
      onClick={handleTap}
    >
      {/* Top row: status badge + key metric */}
      <div className="mac-top">
        <span className="mac-status" style={{ color:s.color, background:s.bg, border:`1px solid ${s.border}` }}>{s.label}</span>
        <span className="mac-metric">{asset.keyMetric}</span>
      </div>

      {/* Identity block */}
      <div className="mac-identity">
        {isTransacted ? (
          <>
            {/* Lock icon → unlock icon transition */}
            <div className="mac-lock-wrap">
              <div className={`mac-lock-icon${revealed?' mac-lock-icon--hidden':''}`}>
                <LockIcon size={14} />
              </div>
              <div className={`mac-unlock-icon${revealed?' mac-unlock-icon--visible':''}`}>
                <UnlockIcon size={14} />
              </div>
            </div>
            {/* Code → real name */}
            <div className="mac-name-wrap">
              <div className={`mac-code${revealed?' mac-code--out':''}`}>{asset.code}</div>
              <div className={`mac-realname${revealed?' mac-realname--in':''}`}>{asset.realName}</div>
            </div>
            {/* Tap-to-reveal hint */}
            {!revealed && (
              <div className={`mac-hint${isFirst?' mac-hint--pulse':''}`}>
                {isFirst ? 'tap to reveal →' : 'tap to reveal'}
              </div>
            )}
            {revealed && asset.dealNote && (
              <div className="mac-dealnote">{asset.dealNote}</div>
            )}
          </>
        ) : (
          <>
            <div className="mac-lock-wrap"><LockIcon size={14} /></div>
            <div className="mac-name-wrap">
              <div className="mac-code">{asset.code}</div>
            </div>
            <div className="mac-hint">identity locked</div>
          </>
        )}
      </div>

      {/* Category */}
      <div className="mac-category">{asset.category}<span className="mac-subtitle"> · {asset.subtitle}</span></div>

      {/* CTA row — only shown after reveal or for locked (request access) */}
      <div className="mac-actions">
        {isTransacted && revealed ? (
          <button className="mac-btn mac-btn--primary" onClick={e=>{e.stopPropagation();onOpen();}}>View Research →</button>
        ) : isTransacted ? null : (
          <button className="mac-btn mac-btn--outline" onClick={e=>{e.stopPropagation();onRequest();}}>Request Access →</button>
        )}
      </div>

      {/* Teal reveal bar at bottom */}
      {isTransacted && <div className="mac-reveal-bar" />}
    </div>
  );
}

export default function CatalystPage() {
  const [selectedAsset, setSelectedAsset] = useState<CatalystAsset|null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const filtered = CATALYST_ASSETS
    .filter(a=>filter==='all'||a.status===filter)
    .sort((a,b)=>{
      if(filter!=='all') return 0;
      const order = {active:0,new:1,transacted:2};
      return order[a.status]-order[b.status];
    });

  return (
    <>
      {/* POSITIONING + TABLE — unified dark section */}
      <section id="catalyst" className="ib-section ib-section-dark">
        <div className="ib-inner">

          {/* Header row */}
          <div style={{ marginBottom:36,paddingBottom:32,borderBottom:'1px solid rgba(255,255,255,.07)' }}>
            <div className="ib-section-eyebrow">Crossover Catalyst</div>
            <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:48,flexWrap:'wrap',marginTop:8 }}>
              <h2 style={{ fontSize:30,fontWeight:700,color:'#fff',lineHeight:1.15,letterSpacing:'-.02em',maxWidth:600,margin:0 }}>
                The first dual-sided intelligence product for banked transactions.
              </h2>
              <div style={{ display:'flex',flexDirection:'column',gap:10,alignItems:'flex-end',flexShrink:0 }}>
                <p style={{ fontSize:13,color:'rgba(255,255,255,.45)',lineHeight:1.7,maxWidth:340,textAlign:'right',margin:0 }}>
                  Same independent data. Neither side chose the respondents.
                </p>
                <button onClick={()=>setRequestOpen(true)} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'9px 22px',fontSize:12,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap' }}>
                  Check Coverage &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Nerdio proof */}
          <div style={{ marginBottom:32,border:'1px solid rgba(77,144,254,.15)',background:'rgba(77,144,254,.04)',padding:'28px 32px' }}>
            <div className="catalyst-proof-grid" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start' }}>
              <div>
                <div style={{ fontSize:9,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(77,144,254,.7)',marginBottom:10 }}>Proof &mdash; Both Sides of One Deal</div>
                <p style={{ fontSize:14,fontWeight:300,color:'rgba(255,255,255,.55)',lineHeight:1.75,marginBottom:4,fontStyle:'italic' }}>
                  &ldquo;The same infrastructure that wins mandates for bankers identifies the next great asset for funds. It only works because the data is never curated for either side.&rdquo;
                </p>
                <div style={{ marginTop:16,paddingTop:16,borderTop:'1px solid rgba(77,144,254,.12)' }}>
                  <div style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,.5)',letterSpacing:'.04em',marginBottom:2 }}>THE NERDIO DEAL</div>
                  <div style={{ fontSize:11,color:'rgba(255,255,255,.3)' }}>J.P. Morgan sell-side &middot; General Atlantic buy-side &middot; $500M Series C</div>
                </div>
              </div>
              <FlywheelDiagram />
            </div>
          </div>

          {/* Asset table */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:28 }}>
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:10 }}>
              <div>
                <div style={{ fontSize:13,fontWeight:600,color:'rgba(255,255,255,.8)',marginBottom:3 }}>{CATALYST_ASSETS.length} assets &mdash; identity locked until access granted</div>
                <div style={{ fontSize:11,color:'rgba(255,255,255,.3)' }}>Transacted assets unblinded post-close. Active assets remain code-named.</div>
              </div>
              <div style={{ display:'flex',gap:6,alignItems:'center' }}>
                {(['all','active','new','transacted'] as FilterType[]).map(f=>(
                  <button key={f} onClick={()=>setFilter(f)} style={{ padding:'5px 13px',fontSize:11,fontWeight:600,background:filter===f?'rgba(255,255,255,.12)':'transparent',border:'1px solid rgba(255,255,255,.12)',color:filter===f?'rgba(255,255,255,.9)':'rgba(255,255,255,.4)',cursor:'pointer',textTransform:'capitalize' }}>
                    {f==='all'?`All (${CATALYST_ASSETS.length})`:f==='transacted'?'Transacted':f.charAt(0).toUpperCase()+f.slice(1)}
                  </button>
                ))}
                <button onClick={()=>setRequestOpen(true)} style={{ padding:'5px 14px',fontSize:11,fontWeight:700,background:'rgba(255,255,255,.88)',color:'#050d18',border:'none',cursor:'pointer',marginLeft:4 }}>Check Coverage &rarr;</button>
              </div>
            </div>
            <div className="catalyst-table-wrap">
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
                    const firstTransactedIdx = filtered.findIndex(x=>x.status==='transacted');
                    return (
                      <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,.05)',cursor:'pointer',transition:'background .12s' }}
                        onClick={()=>setSelectedAsset(a)}
                        onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,.04)')}
                        onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
                        <td style={{ padding:'12px 14px' }}><AssetNameCell asset={a} isFirst={i===firstTransactedIdx} /></td>
                        <td style={{ padding:'12px 14px' }}>
                          <div style={{ fontSize:12,color:'rgba(255,255,255,.6)' }}>{a.category}</div>
                          <div style={{ fontSize:10,color:'rgba(255,255,255,.28)',fontStyle:'italic' }}>{a.subtitle}</div>
                        </td>
                        <td style={{ padding:'12px 14px',fontSize:12,fontWeight:600,color:'rgba(130,175,255,.8)',fontFamily:'JetBrains Mono,monospace' }}>{a.keyMetric}</td>
                        <td style={{ padding:'12px 14px' }}>
                          <span style={{ fontSize:9,fontWeight:700,color:s.color,background:s.bg,border:`1px solid ${s.border}`,padding:'3px 9px',letterSpacing:'.06em',textTransform:'uppercase',whiteSpace:'nowrap' }}>{s.label}</span>
                        </td>
                        <td style={{ padding:'12px 14px' }}>
                          <button onClick={e=>{e.stopPropagation();isTransacted?setSelectedAsset(a):setRequestOpen(true);}} style={{ background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.6)',padding:'5px 12px',fontSize:11,cursor:'pointer',whiteSpace:'nowrap' }}>
                            {isTransacted?'View Research':'Request Access'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="catalyst-mobile-cards">
                {filtered.map((a,i)=>{
                  const s = statusCfg[a.status];
                  const isTransacted = a.status==='transacted';
                  const isFirst = i===filtered.findIndex(x=>x.status==='transacted');
                  return (
                    <MobileAssetCard
                      key={i}
                      asset={a}
                      statusCfg={s}
                      isFirst={isFirst}
                      onOpen={()=>setSelectedAsset(a)}
                      onRequest={()=>setRequestOpen(true)}
                    />
                  );
                })}
              </div>
            </div>
            <div style={{ marginTop:14,padding:'10px 16px',background:'rgba(77,144,254,.06)',border:'1px solid rgba(77,144,254,.12)',fontSize:12,color:'rgba(160,200,255,.7)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10 }}>
              <span>Same-day if covered &middot; 14-day custom if not &middot; $10,000 per report</span>
              <button onClick={()=>setRequestOpen(true)} style={{ background:'transparent',border:'1px solid rgba(130,175,255,.3)',color:'rgba(130,175,255,.8)',padding:'5px 13px',fontSize:11,fontWeight:600,cursor:'pointer' }}>Request Access &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {selectedAsset&&<TeaserModal asset={selectedAsset} onClose={()=>setSelectedAsset(null)} onRequest={()=>{setSelectedAsset(null);setRequestOpen(true);}} />}
      {requestOpen&&<RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
