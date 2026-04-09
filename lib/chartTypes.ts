/**
 * Local type definitions for CDN-loaded Chart.js
 * Chart.js is loaded via <Script> in app/layout.tsx — no npm dependency needed.
 */

export interface ChartInstance {
  destroy(): void;
  update(): void;
}

export interface ChartCallbackCtx {
  dataIndex: number;
  raw: number;
  dataset: { label?: string };
  label: string;
}
