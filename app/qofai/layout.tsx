import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Q of AI Assessment — Crossover Research',
  description: 'Customer-validated AI positioning for sell-side M&A. Quantify AI capability and displacement resilience before buyers raise the objection.',
};

export default function QofAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
