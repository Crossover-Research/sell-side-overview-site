'use client';

import { useEffect, useRef } from 'react';

interface RepChartProps {
  repData: {
    labels: string[];
    data: number[];
  };
}

export function RepChart({ repData }: RepChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined' || !(window as any).Chart) return;

    const Chart = (window as any).Chart;
    const ctx = canvasRef.current.getContext('2d');

    const backgroundColors = repData.data.map((value, index) => {
      if (index === 2) return 'var(--red)';
      if (value >= 9) return 'var(--navy)';
      return 'var(--slate-300)';
    });

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: repData.labels,
        datasets: [{
          data: repData.data,
          backgroundColor: backgroundColors,
          borderRadius: 4,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            ticks: {
              stepSize: 2
            },
            grid: {
              color: 'var(--slate-300)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }, [repData]);

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}