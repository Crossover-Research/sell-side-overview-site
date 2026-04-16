'use client';
import type { ChartInstance } from '../../lib/chartTypes';
import { useEffect, useRef } from 'react';

interface NpsChartProps {
  labels: string[];
  data: number[];
  highlightIndex?: number;
}

export function NpsChart({ labels, data, highlightIndex = 2 }: NpsChartProps) {
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
        datasets: [{
          data,
          backgroundColor: data.map((_, i) =>
            i === highlightIndex ? 'rgba(255,77,94,.85)' : i < 3 ? 'rgba(130,175,255,.6)' : 'rgba(255,255,255,.12)'
          ),
          borderRadius: 3,
          borderSkipped: false,
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c: { raw: number }) => ` ${c.raw.toFixed(1)} / 10` } },
        },
        scales: {
          x: { min: 0, max: 10, grid: { color: 'rgba(255,255,255,.07)' }, ticks: { color: 'rgba(255,255,255,.68)', font: { family: "'JetBrains Mono',monospace", size: 11 } } },
          y: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,.55)', font: { size: 12 } } },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, [labels, data, highlightIndex]);

  return <div style={{ height: 280, position: 'relative' }}><canvas ref={canvasRef} /></div>;
}
