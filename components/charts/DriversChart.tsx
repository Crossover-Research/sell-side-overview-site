'use client';
import type { ChartInstance } from '../../lib/chartTypes';
import { useEffect, useRef } from 'react';

interface DriversChartProps {
  labels: string[];
  redCanaryData: number[];
  avgData: number[];
}

export function DriversChart({ labels, redCanaryData, avgData }: DriversChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef  = useRef<ChartInstance | null>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined' || !window.Chart) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    chartRef.current?.destroy();

    chartRef.current = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Red Canary', data: redCanaryData, backgroundColor: 'rgba(130,175,255,.7)', borderRadius: 3, borderSkipped: false },
          { label: 'All-vendor avg', data: avgData, backgroundColor: 'rgba(255,255,255,.15)', borderRadius: 3, borderSkipped: false },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'start', labels: { font: { size: 11 }, usePointStyle: true, pointStyle: 'rect', boxWidth: 10, color: 'rgba(255,255,255,.55)' } },
          tooltip: { callbacks: { label: (c: { dataset: { label: string }; raw: number }) => ` ${c.dataset.label}: ${c.raw}%` } },
        },
        scales: {
          x: { min: 0, max: 100, grid: { color: 'rgba(255,255,255,.07)' }, ticks: { color: 'rgba(255,255,255,.68)', callback: (v: number | string) => `${v}%` } },
          y: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,.55)', font: { size: 11 } } },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, [labels, redCanaryData, avgData]);

  return <div style={{ height: 280, position: 'relative' }}><canvas ref={canvasRef} /></div>;
}
