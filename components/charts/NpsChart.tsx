'use client';

import { useEffect, useRef } from 'react';
import { ChartDataset } from '../../lib/types';

interface NpsChartProps {
  npsData: {
    labels: string[];
    data: number[];
  };
}

export const NpsChart = ({ npsData }: NpsChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined' || !window.Chart) {
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const backgroundColors = npsData.data.map((value, index) => {
      if (index === 2) return '#e8334a';
      if (value >= 9) return '#1e3a5f';
      return '#d1d5db';
    });

    chartRef.current = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: npsData.labels,
        datasets: [{
          data: npsData.data,
          backgroundColor: backgroundColors,
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#374151',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#6b7280',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            grid: {
              color: '#e5e7eb'
            },
            ticks: {
              color: '#6b7280',
              font: {
                family: 'IBM Plex Sans'
              }
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                family: 'IBM Plex Sans'
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [npsData]);

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};