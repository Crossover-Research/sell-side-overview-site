import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conservice. Catalyst Study | Crossover Research',
    description: 'Voice of Customer research on Conservice utility management. 8.3 likelihood to recommend, 8.2 renewal intent, 72% mission critical.',
};

export default function ConserviceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
