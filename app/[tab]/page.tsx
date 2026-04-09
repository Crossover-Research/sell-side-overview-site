import { notFound } from 'next/navigation';
import { TabNav } from '../../components/TabNav';
import { HeroSection } from '../../components/HeroSection';
import { ChartInit } from '../../components/ChartInit';
import { ResearchSidebar } from '../../components/ResearchSidebar';
import { ResearchHeader } from '../../components/ResearchHeader';
import { ThesisTab } from '../../tabs/ThesisTab';
import { VendorTab } from '../../tabs/VendorTab';
import { VoiceTab } from '../../tabs/VoiceTab';
import { BluecatTab } from '../../tabs/BluecatTab';
import { PartnerTab } from '../../tabs/PartnerTab';
import { RED_CANARY_METRICS } from '../../lib/data/redCanary';
import { BLUECAT_METRICS } from '../../lib/data/blueCat';
import { PARTNER_METRICS } from '../../lib/data/partner';
import type { Tab } from '../../lib/types';

const validTabs: Tab[] = ['thesis', 'vendor', 'voice', 'bluecat', 'partner'];

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

const METRICS_BY_TAB = {
  thesis:  RED_CANARY_METRICS,
  vendor:  RED_CANARY_METRICS,
  voice:   RED_CANARY_METRICS,
  bluecat: BLUECAT_METRICS,
  partner: PARTNER_METRICS,
};

interface PageProps { params: Promise<{ tab: string }>; }

export default async function TabPage({ params }: PageProps) {
  const { tab } = await params;
  if (!validTabs.includes(tab as Tab)) notFound();
  const typedTab = tab as Tab;
  const isResearch = typedTab !== 'partner';

  const content = {
    thesis:  <ThesisTab />,
    vendor:  <VendorTab />,
    voice:   <VoiceTab />,
    bluecat: <BluecatTab />,
    partner: <PartnerTab />,
  }[typedTab];

  return (
    <>
      <HeroSection metrics={METRICS_BY_TAB[typedTab]} tab={typedTab} />
      <TabNav activeTab={typedTab} />
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
