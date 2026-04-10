'use client';
import { useEffect, useRef } from 'react';

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach(item => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
