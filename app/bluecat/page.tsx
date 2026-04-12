import { ResearchHeader } from '../../components/ResearchHeader';
import { ChartInit } from '../../components/ChartInit';
import { BluecatContent } from '../../tabs/BluecatTab';

export default function BluecatPage() {
  return (
    <>
      <ResearchHeader tab="bluecat" />
      <div className="content-inner">
        <BluecatContent />
      </div>
      <ChartInit />
    </>
  );
}
