'use client';
import { useState } from 'react';
import { ChartInit } from '../../components/ChartInit';
import { ResearchSidebar } from '../../components/ResearchSidebar';
import { ResearchHeader } from '../../components/ResearchHeader';
import { BluecatTab } from '../../tabs/BluecatTab';

export default function BluecatPage() {
  const [activeSection, setActiveSection] = useState('thesis');

  const handleSelect = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(`bc-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <ResearchHeader tab="bluecat" />
      <div className="research-layout">
        <ResearchSidebar tab="bluecat" activeSection={activeSection} onSelect={handleSelect} />
        <div className="content-inner">
          <BluecatTab onSectionVisible={setActiveSection} />
        </div>
      </div>
      <ChartInit />
    </>
  );
}
