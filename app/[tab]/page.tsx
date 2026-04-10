import { notFound } from 'next/navigation';
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
  if (!validTabs.includes(tab as Tab)) notFound();
  // Consolidated: thesis/vendor/voice now live at /redcanary
  if (['thesis', 'vendor', 'voice'].includes(tab)) {
    redirect('/redcanary');
  }
  const typedTab = tab as Tab;
  const isResearch = typedTab === 'bluecat';

  const content = {
    bluecat: <BluecatTab />,
    partner: <PartnerTab />,
  }[typedTab];

  return (
    <>
      <HeroSection tab={typedTab} />
      {isResearch ? (
        <>
          <ResearchHeader tab={typedTab} />
          <div className="research-layout">
            <ResearchSidebar tab={typedTab} />
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
