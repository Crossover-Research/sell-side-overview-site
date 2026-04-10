import { notFound, redirect } from 'next/navigation';
import { HeroSection } from '../../components/HeroSection';
import { ChartInit } from '../../components/ChartInit';
import { ResearchSidebar } from '../../components/ResearchSidebar';
import { ResearchHeader } from '../../components/ResearchHeader';
import { BluecatTab } from '../../tabs/BluecatTab';
import { PartnerTab } from '../../tabs/PartnerTab';
import type { Tab } from '../../lib/types';

const validTabs: Tab[] = ['bluecat', 'partner'];

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

interface PageProps { params: Promise<{ tab: string }>; }

export default async function TabPage({ params }: PageProps) {
  const { tab } = await params;

  // Legacy routes redirect to unified pages
  if (['thesis', 'vendor', 'voice'].includes(tab)) redirect('/redcanary');

  if (!validTabs.includes(tab as Tab)) notFound();
  const typedTab = tab as Tab;
  const isResearch = typedTab === 'bluecat';

  const content = {
    bluecat:  <BluecatTab />,
    partner:  <PartnerTab />,
  }[typedTab];

  return (
    <>
      {!isResearch && <HeroSection tab={typedTab} />}
      {isResearch ? (
        <>
          <ResearchHeader tab="bluecat" />
          <div className="research-layout">
            <ResearchSidebar tab="bluecat" />
            <div className="content-inner">{content}</div>
          </div>
        </>
      ) : (
        <div className="content-wrap">{content}</div>
      )}
      <ChartInit />
    </>
  );
}
