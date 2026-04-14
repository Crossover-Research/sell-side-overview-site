import type { EngagementCard } from '../types';

export const ENGAGEMENT_OPTIONS: EngagementCard[] = [
  {
    label: 'Stage 01',
    type: 'Sector Research',
    desc: 'You have a sector thesis. We build a proprietary intelligence base on the companies you are tracking — before any process begins.',
    steps: [
      'Define target sector and shortlist of companies',
      'Crossover maps customer universe from public signals — no management contact',
      'Verified customer interviews surface competitive positioning and operator weaknesses',
      'Deliver sector brief: who to call on, what differentiates each target, where the gaps are',
    ],
    ctaText: 'Start Sector Research',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  },
  {
    label: 'Stage 02',
    type: 'Mandate Pitch',
    desc: 'You have a pitch date. We give you proprietary customer signals and insights no other bank in the room has commissioned.',
    steps: [
      'Share target company and pitch date',
      'Crossover delivers verified customer verbatims and competitive intelligence',
      'Equity story framing built around independent proof points — not management assertions',
      'Walk in with insights that resonate with the operator before competing banks arrive',
    ],
    ctaText: 'Prep a Mandate Pitch',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  },
  {
    label: 'Stage 03',
    type: 'CIM Enhancement',
    desc: 'You have the mandate. We harden the equity story using Crossover\'s intelligence framework so every claim traces to independent customer evidence.',
    steps: [
      'Map every CIM claim that touches customer quality, retention, or competitive position',
      'Replace management-sourced assertions with independently verified customer data',
      'Benchmark NPS, switching difficulty, and mission criticality against 40+ comparable studies',
      'Buyers cannot challenge what they did not select — and cannot replicate it on any timeline',
    ],
    ctaText: 'Enhance the CIM',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  },
];
