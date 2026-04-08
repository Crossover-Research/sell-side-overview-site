import type React from 'react';

export interface MetricCell {
  label: string;
  value: string;
  sub?: string;
  delta?: string;
  deltaStyle?: React.CSSProperties;
}

export interface ICCard {
  num: string;
  question: string;
  verdict: string;
  stat: {
    num: string;
    label: string;
  };
  finding: string;
  quote: {
    text: string;
    cite: string;
  };
  pills: Array<{
    label: string;
    win?: boolean;
  }>;
}

export interface VerbatimCard {
  theme: string;
  text: string;
  attr: string;
  themeStyle?: React.CSSProperties;
}

export interface AdvantageCard {
  title: string;
  desc: string;
}

export interface EngagementCard {
  label: string;
  type: string;
  desc: string;
  steps: string[];
  ctaText: string;
  ctaHref: string;
  ctaStyle?: 'outline' | 'solid';
  ctaTarget?: string;
}

export interface CompetitorRow {
  vendor: string;
  securityPosture: number;
  replicationDifficulty: number;
  recommend: number;
  integration: number;
  consolidationPref: number;
  highlight?: boolean;
}

export interface TrackStatItem {
  num: string;
  label: string;
}

export interface ChartDataset {
  label?: string;
  data: number[];
  backgroundColor: string | string[] | ((c: any) => string);
  borderRadius?: number;
  borderSkipped?: boolean | string;
  hoverOffset?: number;
  borderWidth?: number;
  cutout?: string;
}

export type Tab = 'thesis' | 'vendor' | 'voice' | 'bluecat' | 'partner';

export interface VendorSpotlightData {
  name: string;
  descriptor: string;
  scores: Array<{
    val: string;
    lbl: string;
  }>;
  rankNum: string;
  rankLbl: string;
}