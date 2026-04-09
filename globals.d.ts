import type { ChartInstance } from './lib/chartTypes';

declare global {
  interface Window {
    Chart: {
      new (ctx: CanvasRenderingContext2D, config: object): ChartInstance;
      defaults: {
        font: { family: string };
        color: string;
        plugins: { legend: { display: boolean } };
      };
    };
    __crossoverChartsInit?: boolean;
  }
}

export {};
