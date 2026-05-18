import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligence Platform. Crossover Research',
  description: 'Six capabilities spanning the full transaction lifecycle. Mandate pitch, CIM narrative, buyer mapping, operator rebuttal, AI management meetings, and Cortex research.',
  openGraph: {
    title: 'Intelligence Platform. Crossover Research',
    description: 'The research layer that spans the full transaction lifecycle.',
  },
};

export default function IntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
