import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'BlueCat Networks — Catalyst Study | Crossover Research',
  description: 'Voice of Customer research on BlueCat Networks DDI. 55 verified enterprise respondents, 9.0 mission criticality, 1.9 switching intent, 98.5% NRR.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
