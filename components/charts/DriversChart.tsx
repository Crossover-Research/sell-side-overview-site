'use client';

import React, { useRef, useEffect } from 'react';

interface DriversChartProps {
  driversData: {
    labels: string[];
    redCanaryData: number[];
    avgData: number[];
  };
}

export function DriversChart({ driversData }: DriversChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined' || !window.Chart) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: driversData.labels,
        datasets: [
          {
            label: 'Red Canary',
            data: driversData.redCanaryData,
            backgroundColor: 'var(--navy)',
            borderRadius: 4,
          },
          {
            label: 'All-vendor average',
            data: driversData.avgData,
            backgroundColor: 'var(--slate-300)',
            borderRadius: 4,
          }
        ]
      },
      options: {
        indexAxis: 'y' as const,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
            align: 'start' as const,
            labels: {
              font: {
                family: 'IBM Plex Sans',
                size: 14
              },
              usePointStyle: true,
              pointStyle: 'rect',
              boxWidth: 12,
              boxHeight: 12
            }
          }
        },
        scales: {
          x: {
            min: 0,
            max: 100,
            grid: {
              color: 'var(--border)'
            },
            ticks: {
              font: {
                family: 'IBM Plex Sans',
                size: 12
              },
              color: 'var(--text-secondary)',
              callback: function(value: any) {
                return value + '%';
              }
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'IBM Plex Sans',
                size: 12
              },
              color: 'var(--text-primary)'
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [driversData]);

  return (
    <div style={{ height: '320px', position: 'relative' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}