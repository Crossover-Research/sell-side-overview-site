import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Red Canary. Catalyst Study | Crossover Research',
  description: 'Voice of Customer research on Red Canary MDR. 9-vendor benchmark, 75+ verified respondents, 9.0 NPS, 8.8 replication difficulty.',
  openGraph: {
    title: 'Red Canary MDR. Catalyst Study',
    description: '9-vendor benchmark. 75+ verified respondents. 9.0 NPS. 8.8 replication difficulty.',
  },
};

export default function RedCanaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
