import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinTech & PropTech Intelligence | Crossover Research for FT Partners',
  description:
    'Primary Voice of Customer research for FinTech and PropTech IB mandates. 30+ sell-side engagements, 60% mandate win rate, 14-day delivery.',
};

export default function FTLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
