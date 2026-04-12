import { notFound, redirect } from 'next/navigation';
import { HeroSection } from '../../components/HeroSection';
import { ChartInit } from '../../components/ChartInit';
import { ResearchSidebar } from '../../components/ResearchSidebar';
import { ResearchHeader } from '../../components/ResearchHeader';
import { BluecatTab } from '../../tabs/BluecatTab';
import type { Tab } from '../../lib/types';

const validTabs: Tab[] = ['bluecat', 'partner'];

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

interface PageProps { params: Promise<{ tab: string }>; }

export default async function TabPage({ params }: PageProps) {
  const { tab } = await params;

  if (['thesis', 'vendor', 'voice'].includes(tab)) redirect('/redcanary');
  if (tab === 'partner') redirect('/intelligence');
  if (!validTabs.includes(tab as Tab)) notFound();

  return (
    <>
      <ResearchHeader tab="bluecat" />
      <div className="research-layout">
        <ResearchSidebar tab="bluecat" />
        <div className="content-inner"><BluecatTab /></div>
      </div>
      <ChartInit />
    </>
  );
}
