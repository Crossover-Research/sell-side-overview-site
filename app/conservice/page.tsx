'use client';
import { createElement as h, Fragment, useState } from 'react';
import { ResearchHeader } from '../../components/ResearchHeader';
import { ICAccordion } from '../../components/ICCard';
import { InsightBox } from '../../components/InsightBox';
import { IC_CARDS_CONSERVICE, VERBATIMS_CONSERVICE, STUDY_INTEL_CONSERVICE } from '../../lib/data/conservice';

const SECTIONS = [
  { id: 'thesis', label: 'IC Thesis' },
  { id: 'voice', label: 'Voice' },
  { id: 'intel', label: 'Study Intelligence' },
  ];

export default function ConservicePage() {
  const [active, setActive] = useState('thesis');
  return h(Fragment, null,
           h(ResearchHeader, { tab: 'conservice' }),
           h('div', { className: 'content-inner' },
             h('div', { className: 'rc-section-tabs' },
               SECTIONS.map(function (s) { return h('button', { key: s.id, className: 'rc-section-tab' + (active === s.id ? ' active' : ''), onClick: function () { setActive(s.id); } }, s.label); })),
             active === 'thesis' ? h('div', { className: 'rc-section' }, h(ICAccordion, { cards: IC_CARDS_CONSERVICE, theme: 'green' })) : null,
             active === 'voice' ? h('div', { className: 'rc-section' },
                                    h('div', { className: 'verbatim-grid' },
                                      VERBATIMS_CONSERVICE.map(function (card, i) { return h('div', { key: i, className: 'verbatim-cell' },
                                                                                             h('div', { className: 'verbatim-theme' }, card.theme),
                                                                                             h('div', { className: 'verbatim-text' }, card.text),
                                                                                             h('div', { className: 'verbatim-attr' }, card.attr)); }))) : null,
             active === 'intel' ? h('div', { className: 'rc-section' },
                                    h(InsightBox, null, h('strong', null, 'Thesis verdict: '), STUDY_INTEL_CONSERVICE.thesisVerdict),
                                    h('div', { className: 'advantage-grid', style: { display: 'grid', gap: '1px', background: 'var(--br-lo)', marginTop: 16 } },
                                      h('div', { className: 'advantage-card' }, h('div', { className: 'advantage-title' }, 'Expansion Segments'), h('div', { className: 'advantage-desc' }, STUDY_INTEL_CONSERVICE.expansionSegments)),
                                      h('div', { className: 'advantage-card' }, h('div', { className: 'advantage-title' }, 'Risk Flags'), h('div', { className: 'advantage-desc' }, STUDY_INTEL_CONSERVICE.riskFlags)))) : null));
}
