'use client';
import { useState, useRef, useEffect } from 'react';

interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function SelectField({ label, options, value, onChange, placeholder = 'Select...', required }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const lbl: React.CSSProperties = { display:'block', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', marginBottom:4 };

  return (
    <div ref={ref} style={{ position:'relative' }}>
      <label style={lbl}>{label}{required && ' *'}</label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width:'100%', background:'rgba(255,255,255,.05)', border:`1px solid ${open ? 'rgba(77,144,254,.5)' : 'rgba(255,255,255,.12)'}`,
          color: value ? 'rgba(255,255,255,.88)' : 'rgba(255,255,255,.28)',
          padding:'9px 32px 9px 12px', fontSize:13, outline:'none', boxSizing:'border-box',
          textAlign:'left', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between',
          transition:'border-color .15s',
        }}
      >
        <span>{value || placeholder}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ flexShrink:0, transition:'transform .15s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M1 1l4 4 4-4" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position:'absolute', top:'calc(100% + 3px)', left:0, right:0, zIndex:800,
          background:'#0d1e38', border:'1px solid rgba(77,144,254,.25)',
          boxShadow:'0 12px 32px rgba(0,0,0,.6)', maxHeight:220, overflowY:'auto',
        }}>
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              style={{
                padding:'9px 14px', fontSize:12.5, cursor:'pointer',
                color: opt === value ? 'rgba(130,200,255,.95)' : 'rgba(255,255,255,.7)',
                background: opt === value ? 'rgba(77,144,254,.12)' : 'transparent',
                borderLeft: opt === value ? '2px solid rgba(77,144,254,.6)' : '2px solid transparent',
                transition:'background .1s',
                display:'flex', alignItems:'center', justifyContent:'space-between',
              }}
              onMouseEnter={e => { if (opt !== value) (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.05)'; }}
              onMouseLeave={e => { if (opt !== value) (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
            >
              {opt}
              {opt === value && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="rgba(77,144,254,.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
