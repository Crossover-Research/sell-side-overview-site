'use client';

import { useEffect, useRef } from 'react';
import { ChartDataset } from '../../lib/types';

interface CostChartProps {
  costData: {
    labels: string[];
    data: number[];
    colors: string[];
  };
}

export function CostChart({ costData }: CostChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (!chartRef.current || typeof window === 'undefined' || !window.Chart) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const dataset: ChartDataset = {
      data: costData.data,
      backgroundColor: costData.colors,
      borderWidth: 0,
      cutout: '68%'
    };

    chartInstance.current = new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: costData.labels,
        datasets: [dataset]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                family: 'var(--font-body)',
                size: 13
              },
              color: 'var(--text-secondary)'
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [costData]);

  return (
    <div style={{ height: '240px', width: '100%' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}