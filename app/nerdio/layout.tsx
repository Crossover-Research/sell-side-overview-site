import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdio. Catalyst Study | Crossover Research',
  description: 'Voice of Customer research on Nerdio. 9.0 likelihood to recommend, 8.3 mission criticality, 8.0 competitive differentiation.',
  openGraph: {
    title: 'Nerdio. Catalyst Study',
    description: 9.0 likelihood to recommend. 8.3 mission criticality. 8.0 competitive differentiation.',
  },
};

export default function NerdioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
