'use client';
import { useState } from 'react';
import { CATALYST_ASSETS, type CatalystAsset } from '../../lib/data/catalystAssets';

function StatusBadge({ status }: { status: CatalystAsset['status'] }) {
  const cfg = {
    active:    { bg:'rgba(45,212,160,.12)',color:'#2dd4a0',border:'rgba(45,212,160,.25)',label:'Active' },
    new:       { bg:'rgba(77,144,254,.12)',color:'#7bb8ff',border:'rgba(77,144,254,.25)',label:'● New' },
    transacted:{ bg:'rgba(255,255,255,.06)',color:'rgba(255,255,255,.4)',border:'rgba(255,255,255,.1)',label:'Transacted' },
  }[status];
  return <span style={{ background:cfg.bg,color:cfg.color,border:`1px solid ${cfg.border}`,fontSize:10,fontWeight:700,padding:'2px 8px',letterSpacing:'.06em',textTransform:'uppercase' as const }}>{cfg.label}</span>;
}

function TeaserModal({ asset, onClose, onRequest }: { asset: CatalystAsset; onClose:()=>void; onRequest:()=>void }) {
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:'fixed',inset:0,zIndex:500,background:'rgba(4,9,18,.88)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:780,width:'100%',maxHeight:'90vh',overflowY:'auto',position:'relative' }}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'28px 32px 24px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:14,right:14,background:'rgba(255,255,255,.1)',border:'none',color:'rgba(255,255,255,.7)',width:32,height:32,cursor:'pointer',fontSize:18,lineHeight:'32px',textAlign:'center' }}>×</button>
          <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:10,flexWrap:'wrap' }}>
            <span style={{ background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',padding:'2px 9px',fontSize:10,fontWeight:700,color:'rgba(255,255,255,.45)',letterSpacing:'.1em' }}>COMPANY IDENTITY LOCKED</span>
            <StatusBadge status={asset.status} />
            {asset.bank && <span style={{ fontSize:10,color:'rgba(255,255,255,.3)',letterSpacing:'.06em' }}>BANKED: {asset.bank}</span>}
            {asset.interviews && <span style={{ fontSize:10,color:'rgba(255,255,255,.3)',letterSpacing:'.06em' }}>{asset.interviews} INTERVIEWS</span>}
          </div>
          <div style={{ fontSize:12,fontWeight:700,color:'rgba(130,175,255,.9)',letterSpacing:'.12em',textTransform:'uppercase' as const,marginBottom:6 }}>{asset.code}</div>
          <div style={{ fontSize:20,fontWeight:700,color:'#fff',lineHeight:1.3,marginBottom:4 }}>{asset.subtitle}</div>
          <div style={{ fontSize:12,color:'rgba(255,255,255,.4)',textTransform:'uppercase' as const,letterSpacing:'.06em' }}>{asset.category}</div>
        </div>
        <div style={{ padding:'24px 32px' }}>
          <div style={{ background:'rgba(77,144,254,.1)',border:'1px solid rgba(77,144,254,.2)',padding:'16px 20px',marginBottom:20 }}>
            <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase' as const,color:'rgba(130,175,255,.7)',marginBottom:8 }}>The Investment Hook</div>
            <p style={{ fontSize:13.5,color:'rgba(255,255,255,.88)',lineHeight:1.65,margin:0 }}>{asset.hook}</p>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,marginBottom:20 }}>
            {asset.metrics.map((m,i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',padding:'12px 14px',textAlign:'center' as const }}>
                <div style={{ fontSize:9,fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'.1em',color:'rgba(255,255,255,.4)',marginBottom:6 }}>{m.label}</div>
                <div style={{ fontSize:18,fontWeight:700,color:'rgba(130,175,255,.95)',lineHeight:1,marginBottom:4 }}>{m.value}</div>
                <div style={{ fontSize:10,color:'rgba(255,255,255,.4)' }}>{m.context}</div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.3)',marginBottom:10 }}>Customer Validation</div>
            {asset.quotes.map((q,i) => (
              <div key={i} style={{ borderLeft:'3px solid rgba(77,144,254,.4)',paddingLeft:14,marginBottom:10,fontSize:12.5,color:'rgba(255,255,255,.7)',fontStyle:'italic',lineHeight:1.6 }}>"{q}"</div>
            ))}
          </div>
          <div style={{ background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',padding:'14px 18px',marginBottom:24 }}>
            <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.3)',marginBottom:8 }}>The Moat</div>
            <p style={{ fontSize:12.5,color:'rgba(255,255,255,.6)',lineHeight:1.65,margin:0 }}>{asset.moat}</p>
          </div>
          <div style={{ display:'flex',flexDirection:'column' as const,gap:10,alignItems:'center',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',padding:'20px 24px',textAlign:'center' as const }}>
            <div style={{ fontSize:12,color:'rgba(255,255,255,.5)',marginBottom:4 }}>Full report: verified respondents, competitive scorecard, pricing analysis, IC-ready writeup</div>
            <div style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.06em' }}>$10,000 per report · 30-60 day exclusive window</div>
            <div style={{ display:'flex',gap:10,marginTop:4,flexWrap:'wrap' as const,justifyContent:'center' }}>
              <button onClick={onRequest} style={{ background:'rgba(255,255,255,.95)',color:'#0a1525',border:'none',padding:'10px 24px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Request Full Report →</button>
              <a href="mailto:ian@crossoverresearch.com" style={{ background:'transparent',color:'rgba(255,255,255,.55)',border:'1px solid rgba(255,255,255,.16)',padding:'10px 20px',fontSize:12,fontWeight:500,textDecoration:'none' }}>Email Ian McArdle</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestModal({ onClose }: { onClose:()=>void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ firstName:'',lastName:'',email:'',firm:'',title:'',orgType:'',sectors:[] as string[],mandate:'',pitchDate:'',notes:'' });
  const SECTORS=['Cybersecurity','Infrastructure','Vertical SaaS','Enterprise Software','FinTech','Healthcare IT','Supply Chain','Real Estate Tech'];
  const ORG=['Investment Bank','Private Equity','Growth Equity','Venture Capital','Strategic / Corporate'];
  const set = (k: string, v: unknown) => setForm(f=>({...f,[k]:v}));
  const toggle = (s: string) => set('sectors', form.sectors.includes(s)?form.sectors.filter((x:string)=>x!==s):[...form.sectors,s]);
  const inp: React.CSSProperties = { width:'100%',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.88)',padding:'9px 12px',fontSize:13,outline:'none',boxSizing:'border-box' };
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); try { await fetch('/api/catalyst-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); } catch {} setSent(true); };
  if (sent) return (
    <div style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.92)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',padding:'48px 40px',maxWidth:420,width:'100%',textAlign:'center' as const }}>
        <div style={{ fontSize:32,marginBottom:14,color:'#2dd4a0' }}>✓</div>
        <div style={{ fontSize:18,fontWeight:700,color:'#fff',marginBottom:8 }}>Request Submitted</div>
        <p style={{ fontSize:13,color:'rgba(255,255,255,.5)',lineHeight:1.6,marginBottom:24 }}>We'll confirm coverage within 24 hours. If your target is in the Catalyst library, you'll have access before your next pitch.</p>
        <button onClick={onClose} style={{ background:'rgba(255,255,255,.92)',color:'#0a1525',border:'none',padding:'10px 28px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Done</button>
      </div>
    </div>
  );
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:'fixed',inset:0,zIndex:600,background:'rgba(4,9,18,.92)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#0c1a2e',border:'1px solid rgba(255,255,255,.12)',maxWidth:540,width:'100%',maxHeight:'90vh',overflowY:'auto',position:'relative' }}>
        <div style={{ background:'linear-gradient(135deg,#0f1f38,#162d4a)',padding:'22px 26px',borderBottom:'1px solid rgba(255,255,255,.08)',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:12,right:12,background:'rgba(255,255,255,.1)',border:'none',color:'rgba(255,255,255,.7)',width:28,height:28,cursor:'pointer',fontSize:16,lineHeight:'28px',textAlign:'center' as const }}>×</button>
          <div style={{ fontSize:16,fontWeight:700,color:'#fff',marginBottom:4 }}>Request Catalyst Access</div>
          <p style={{ fontSize:12,color:'rgba(255,255,255,.45)',margin:0 }}>Tell us about your mandate pipeline — we'll confirm coverage within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ padding:'22px 26px' }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:14 }}>
            <div><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>First Name <span style={{ color:'#ff4d5e' }}>*</span></label><input required style={inp} placeholder="Jordan" onChange={e=>set('firstName',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Last Name <span style={{ color:'#ff4d5e' }}>*</span></label><input required style={inp} placeholder="Keller" onChange={e=>set('lastName',e.target.value)} /></div>
          </div>
          <div style={{ marginBottom:14 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Work Email <span style={{ color:'#ff4d5e' }}>*</span></label><input required type="email" style={inp} placeholder="jordan@bank.com" onChange={e=>set('email',e.target.value)} /></div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:14 }}>
            <div><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Firm <span style={{ color:'#ff4d5e' }}>*</span></label><input required style={inp} placeholder="J.P. Morgan" onChange={e=>set('firm',e.target.value)} /></div>
            <div><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Title</label><input style={inp} placeholder="Vice President" onChange={e=>set('title',e.target.value)} /></div>
          </div>
          <div style={{ marginBottom:14 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Organization Type <span style={{ color:'#ff4d5e' }}>*</span></label>
            <select required style={{...inp,appearance:'none'}} onChange={e=>set('orgType',e.target.value)}><option value="">Select...</option>{ORG.map(t=><option key={t}>{t}</option>)}</select>
          </div>
          <div style={{ marginBottom:14 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Active Sectors</label>
            <div style={{ display:'flex',flexWrap:'wrap' as const,gap:6 }}>{SECTORS.map(s=><button key={s} type="button" onClick={()=>toggle(s)} style={{ padding:'5px 10px',fontSize:11,fontWeight:500,cursor:'pointer',border:`1px solid ${form.sectors.includes(s)?'rgba(77,144,254,.5)':'rgba(255,255,255,.12)'}`,background:form.sectors.includes(s)?'rgba(77,144,254,.15)':'transparent',color:form.sectors.includes(s)?'rgba(130,175,255,.9)':'rgba(255,255,255,.45)',transition:'all .12s' }}>{s}</button>)}</div>
          </div>
          <div style={{ marginBottom:14 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Target Company or Current Mandate</label><input style={inp} placeholder="Company name — we'll confirm coverage immediately" onChange={e=>set('mandate',e.target.value)} /></div>
          <div style={{ marginBottom:14 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Next Pitch or Process Date</label><input type="date" style={inp} onChange={e=>set('pitchDate',e.target.value)} /></div>
          <div style={{ marginBottom:20 }}><label style={{ display:'block',fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.4)',marginBottom:5 }}>Anything Else</label><textarea style={{...inp,resize:'vertical'}} rows={2} placeholder="Sectors you're watching, assets you want covered..." onChange={e=>set('notes',e.target.value)} /></div>
          <button type="submit" style={{ width:'100%',background:'rgba(255,255,255,.95)',color:'#0a1525',border:'none',padding:'12px',fontSize:13,fontWeight:700,cursor:'pointer' }}>Submit Request →</button>
          <p style={{ fontSize:10,color:'rgba(255,255,255,.22)',textAlign:'center' as const,marginTop:10,lineHeight:1.5 }}>We'll reach out directly within 24 hours. Coverage confirmation is immediate if your target is in the library.</p>
        </form>
      </div>
    </div>
  );
}

export default function CatalystPage() {
  const [selected, setSelected] = useState<CatalystAsset|null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [filter, setFilter] = useState<'all'|'active'|'transacted'|'new'>('all');
  const filtered = CATALYST_ASSETS.filter(a=>filter==='all'||a.status===filter);
  return (
    <>
      {/* HERO */}
      <section style={{ background:'linear-gradient(168deg,#050d18,#091424 55%,#0d1d36)',padding:'48px 36px 0',borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1140,margin:'0 auto' }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 400px',gap:48,alignItems:'start' }}>
            <div>
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase' as const,color:'rgba(130,175,255,.65)',marginBottom:14 }}>Crossover Catalyst · Deal Intelligence Library</div>
              <h1 style={{ fontSize:30,fontWeight:700,color:'#fff',lineHeight:1.2,letterSpacing:'-.025em',marginBottom:14 }}>Customer intelligence on high-conviction assets.<br /><span style={{ color:'rgba(130,175,255,.6)',fontWeight:300 }}>6-12 months before formal processes begin.</span></h1>
              <p style={{ fontSize:14,color:'rgba(255,255,255,.6)',lineHeight:1.7,maxWidth:520,marginBottom:24 }}>Investment banks commission Crossover to win mandates. We reshape that same primary research into investment-ready intelligence for select funds — before teasers circulate. The same verbatim customer truth. Different strategic framing.</p>
              <div style={{ display:'flex',gap:10,flexWrap:'wrap' as const,marginBottom:8 }}>
                <button onClick={()=>setRequestOpen(true)} style={{ background:'rgba(255,255,255,.95)',color:'#050d18',border:'none',padding:'10px 22px',fontSize:12,fontWeight:700,cursor:'pointer' }}>Check Catalyst Coverage →</button>
                <a href="/partner" style={{ background:'transparent',color:'rgba(255,255,255,.55)',border:'1px solid rgba(255,255,255,.14)',padding:'10px 18px',fontSize:12,fontWeight:500,textDecoration:'none' }}>Sell-Side Intelligence ↗</a>
              </div>
            </div>
            {/* Nerdio proof */}
            <div style={{ background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',padding:'22px 24px',position:'relative',overflow:'hidden' }}>
              <div style={{ position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(77,144,254,.35),transparent)' }} />
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase' as const,color:'rgba(77,144,254,.8)',marginBottom:12 }}>🏆 Proof: Both Sides of $500M</div>
              <p style={{ fontSize:12.5,color:'rgba(255,255,255,.72)',lineHeight:1.65,marginBottom:14 }}>J.P. Morgan commissioned Crossover to differentiate their Nerdio Series C pitch. 30+ customer interviews. J.P. Morgan won the exclusive mandate.</p>
              <p style={{ fontSize:12.5,color:'rgba(255,255,255,.72)',lineHeight:1.65,marginBottom:14 }}>General Atlantic accessed the same research — the verbatim customer truth from those same interviews — and used it as the foundation for their investment thesis. That research anchored their conviction for <strong style={{ color:'#fff' }}>a $500M investment at unicorn valuation.</strong></p>
              <div style={{ borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:10,fontSize:11,color:'rgba(255,255,255,.35)',fontStyle:'italic' }}>One study. Both sides of the same deal. Neither side chose the respondents. The same primary research that won the sell-side mandate anchored the buy-side thesis.</div>
            </div>
          </div>
          {/* Stats */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(5,1fr)',borderTop:'1px solid rgba(255,255,255,.07)',marginTop:28 }}>
            {[['20+','Assets in library'],['60+','Targeting in 2026'],['3,500+','Customer interviews'],['90%','Cost savings vs DIY'],['< 2 hrs','Read time per report']].map(([v,l],i)=>(
              <div key={i} style={{ padding:'14px 18px',borderRight:i<4?'1px solid rgba(255,255,255,.07)':'none' }}>
                <div style={{ fontFamily:'JetBrains Mono,monospace',fontSize:20,fontWeight:700,color:'rgba(255,255,255,.92)',lineHeight:1,marginBottom:4 }}>{v}</div>
                <div style={{ fontSize:10,color:'rgba(255,255,255,.3)',letterSpacing:'.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERBATIM TRUTH LAYER */}
      <section style={{ background:'rgba(255,255,255,.025)',borderBottom:'1px solid rgba(255,255,255,.07)',padding:'24px 36px' }}>
        <div style={{ maxWidth:1140,margin:'0 auto' }}>
          <div style={{ display:'grid',gridTemplateColumns:'240px 1fr',gap:36,alignItems:'start',marginBottom:14 }}>
            <div><div style={{ fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase' as const,color:'rgba(77,144,254,.7)',marginBottom:7 }}>Why This Works</div><h2 style={{ fontSize:17,fontWeight:700,color:'rgba(255,255,255,.9)',margin:0,lineHeight:1.3 }}>The Verbatim Truth Layer</h2></div>
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20 }}>
              {[{who:'For Bankers',what:'Win the mandate with customer evidence no competing bank has.'},{who:'For Operators',what:'Understand your real competitive position before buyers do.'},{who:'For Funds',what:'Build conviction 6-12 months before the teaser drops.'}].map(({who,what},i)=>(
                <div key={i} style={{ borderLeft:`2px solid rgba(77,144,254,${i===0?.7:i===1?.4:.25})`,paddingLeft:14 }}>
                  <div style={{ fontSize:11,fontWeight:700,color:'rgba(130,175,255,.8)',letterSpacing:'.08em',marginBottom:5 }}>{who}</div>
                  <div style={{ fontSize:12,color:'rgba(255,255,255,.55)',lineHeight:1.55 }}>{what}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:'13px 18px',background:'rgba(77,144,254,.06)',border:'1px solid rgba(77,144,254,.14)',fontSize:12.5,color:'rgba(160,200,255,.82)',lineHeight:1.6,fontStyle:'italic' }}>
            "We can't sugarcoat verbatim quotes without changing them, and we won't do that. The same raw customer feedback goes to all parties — banks, sellers, buyers. We just adjust the strategic framing for each audience."
          </div>
        </div>
      </section>

      {/* ASSET TABLE */}
      <section style={{ padding:'32px 36px 56px' }}>
        <div style={{ maxWidth:1140,margin:'0 auto' }}>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,flexWrap:'wrap' as const,gap:12 }}>
            <div>
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase' as const,color:'rgba(255,255,255,.3)',marginBottom:5 }}>Asset Library</div>
              <h2 style={{ fontSize:18,fontWeight:700,color:'rgba(255,255,255,.9)',margin:0 }}>{CATALYST_ASSETS.length} Assets · Company Identity Locked Until Access Granted</h2>
            </div>
            <div style={{ display:'flex',gap:6 }}>
              {(['all','active','new','transacted'] as const).map(f=>(
                <button key={f} onClick={()=>setFilter(f)} style={{ padding:'6px 14px',fontSize:11,fontWeight:600,cursor:'pointer',border:`1px solid ${filter===f?'rgba(77,144,254,.5)':'rgba(255,255,255,.1)'}`,background:filter===f?'rgba(77,144,254,.12)':'transparent',color:filter===f?'rgba(130,175,255,.9)':'rgba(255,255,255,.38)',textTransform:'capitalize' as const,transition:'all .12s',letterSpacing:'.03em' }}>
                  {f==='all'?`All (${CATALYST_ASSETS.length})`:f.charAt(0).toUpperCase()+f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <table style={{ width:'100%',borderCollapse:'collapse',background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.08)' }}>
            <thead>
              <tr style={{ borderBottom:'2px solid rgba(255,255,255,.1)' }}>
                {['Asset','Category','Key Metric','Status',''].map((h,i)=>(
                  <th key={i} style={{ padding:'9px 14px',textAlign:'left' as const,fontSize:9,fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'.1em',color:'rgba(255,255,255,.35)',background:'rgba(255,255,255,.03)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((a,i)=>(
                <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,.06)',cursor:'pointer',transition:'background .12s' }}
                  onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,.04)')}
                  onMouseLeave={e=>(e.currentTarget.style.background='transparent')}
                >
                  <td style={{ padding:'12px 14px' }}>
                    <div style={{ fontSize:14,fontWeight:700,color:'rgba(130,175,255,.9)',letterSpacing:'.06em',marginBottom:2 }}>{a.code}</div>
                    <div style={{ fontSize:11,color:'rgba(255,255,255,.3)',fontStyle:'italic' }}>Company name locked</div>
                  </td>
                  <td style={{ padding:'12px 14px' }}>
                    <div style={{ fontSize:12,color:'rgba(255,255,255,.62)' }}>{a.category}</div>
                    <div style={{ fontSize:11,color:'rgba(255,255,255,.3)' }}>{a.subtitle}</div>
                  </td>
                  <td style={{ padding:'12px 14px',fontSize:12,fontWeight:600,color:'rgba(255,255,255,.72)',fontFamily:'JetBrains Mono,monospace' }}>{a.keyMetric}</td>
                  <td style={{ padding:'12px 14px' }}><StatusBadge status={a.status} /></td>
                  <td style={{ padding:'12px 14px' }}>
                    <button onClick={()=>setSelected(a)} style={{ background:'rgba(255,255,255,.9)',color:'#050d18',border:'none',padding:'6px 14px',fontSize:11,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap' }}>View Teaser →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop:28,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 24px',background:'rgba(77,144,254,.07)',border:'1px solid rgba(77,144,254,.15)',flexWrap:'wrap' as const,gap:14 }}>
            <div>
              <div style={{ fontSize:14,fontWeight:700,color:'rgba(255,255,255,.88)',marginBottom:4 }}>Is your target already covered?</div>
              <div style={{ fontSize:12,color:'rgba(255,255,255,.4)' }}>Same-day delivery if in library · Custom study in 14 days if not · $10,000 per report</div>
            </div>
            <button onClick={()=>setRequestOpen(true)} style={{ background:'rgba(255,255,255,.95)',color:'#050d18',border:'none',padding:'10px 24px',fontSize:12,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap' }}>Check Coverage →</button>
          </div>
        </div>
      </section>

      {selected && <TeaserModal asset={selected} onClose={()=>setSelected(null)} onRequest={()=>{setSelected(null);setRequestOpen(true);}} />}
      {requestOpen && <RequestModal onClose={()=>setRequestOpen(false)} />}
    </>
  );
}
