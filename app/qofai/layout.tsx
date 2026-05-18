import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice of Customer. Crossover Research',
  description: 'The Crossover methodology. Independent customer sourcing, fixed nine-dimension instrument, 40+ comparable studies. One of one in the market for sell-side mandates.',
};

export default function VoiceOfCustomerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
