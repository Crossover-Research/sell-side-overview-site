import { notFound } from 'next/navigation';
import { TabNav } from '../../components/TabNav';
import { ThesisTab } from '../../tabs/ThesisTab';
import { VendorTab } from '../../tabs/VendorTab';
import { VoiceTab } from '../../tabs/VoiceTab';
import { BluecatTab } from '../../tabs/BluecatTab';
import { PartnerTab } from '../../tabs/PartnerTab';
import { Tab } from '../../lib/types';

const validTabs: Tab[] = ['thesis', 'vendor', 'voice', 'bluecat', 'partner'];

export function generateStaticParams() {
  return validTabs.map((tab) => ({
    tab,
  }));
}

interface PageProps {
  params: {
    tab: string;
  };
}

export default function TabPage({ params }: PageProps) {
  const { tab } = params;

  if (!validTabs.includes(tab as Tab)) {
    notFound();
  }

  const typedTab = tab as Tab;

  const renderTabContent = () => {
    switch (typedTab) {
      case 'thesis':
        return <ThesisTab />;
      case 'vendor':
        return <VendorTab />;
      case 'voice':
        return <VoiceTab />;
      case 'bluecat':
        return <BluecatTab />;
      case 'partner':
        return <PartnerTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <TabNav activeTab={typedTab} />
      {renderTabContent()}
    </>
  );
}