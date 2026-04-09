import { notFound } from 'next/navigation';
import { TabNav } from '../../components/TabNav';
import { HeroSection } from '../../components/HeroSection';
import { ChartInit } from '../../components/ChartInit';
import { ThesisTab } from '../../tabs/ThesisTab';
import { VendorTab } from '../../tabs/VendorTab';
import { VoiceTab } from '../../tabs/VoiceTab';
import { BluecatTab } from '../../tabs/BluecatTab';
import { PartnerTab } from '../../tabs/PartnerTab';
import { RED_CANARY_METRICS } from '../../lib/data/redCanary';
import type { Tab } from '../../lib/types';

const validTabs: Tab[] = ['thesis', 'vendor', 'voice', 'bluecat', 'partner'];

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

interface PageProps {
  params: { tab: string };
}

export default function TabPage({ params }: PageProps) {
  const { tab } = params;
  if (!validTabs.includes(tab as Tab)) notFound();
  const typedTab = tab as Tab;

  const isPartner = typedTab === 'partner';

  const content = {
    thesis:  <ThesisTab />,
    vendor:  <VendorTab />,
    voice:   <VoiceTab />,
    bluecat: <BluecatTab />,
    partner: <PartnerTab />,
  }[typedTab];

  return (
    <>
      <HeroSection metrics={RED_CANARY_METRICS} />
      <TabNav activeTab={typedTab} />
      <div className="content-wrap">
        {content}
      </div>
      <ChartInit />
      {isPartner ? (
        <div className="content-wrap">{content}</div>
      ) : (
        // Content tabs render their own content-wrap from the BMO HTML
        content
      )}
    </>
  );
}
