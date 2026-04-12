import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ tab: string }> }): Promise<Metadata> {
  const { tab } = await params;
  if (tab === 'bluecat') {
    return {
      title: 'BlueCat Networks — Catalyst Study | Crossover Research',
      description: 'Voice of Customer research on BlueCat Networks DDI. 55 verified enterprise respondents, 9.0 mission criticality, 1.9 switching intent, 98.5% NRR.',
      openGraph: { title: 'BlueCat Networks DDI — Catalyst Study', description: '55 verified respondents. 9.0 mission criticality. Near-zero churn.' },
    };
  }
  return {
    title: 'Work With Us — Crossover Research',
    description: 'Win mandates with customer evidence no competing bank has commissioned. Independent primary research for investment bankers.',
    openGraph: { title: 'Work With Us — Crossover Research', description: 'The research layer that wins mandates before competing banks build their pitch.' },
  };
}

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
