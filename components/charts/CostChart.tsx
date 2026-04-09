'use client';
import type { ChartInstance } from '../../lib/chartTypes';
import { useEffect, useRef } from 'react';

interface CostChartProps {
  labels: string[];
  data: number[];
  colors: string[];
}

export function CostChart({ labels, data, colors }: CostChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef  = useRef<ChartInstance | null>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined' || !window.Chart) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    chartRef.current?.destroy();

    chartRef.current = new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: { display: true, position: 'bottom', labels: { font: { size: 11 }, padding: 12, boxWidth: 10, usePointStyle: true, color: 'rgba(255,255,255,.55)' } },
          tooltip: { callbacks: { label: (c: { label: string; raw: number }) => ` ${c.label}: ${c.raw}%` } },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, [labels, data, colors]);

  return <div style={{ height: 280, position: 'relative' }}><canvas ref={canvasRef} /></div>;
}
