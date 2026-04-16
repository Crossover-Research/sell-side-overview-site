import type { EngagementCard } from '../types';

export const ENGAGEMENT_OPTIONS: EngagementCard[] = [
  {
    label: 'Stage 01',
    type: 'Sector Research',
    desc: 'Demonstrate sector expertise and use the underlying work to solicit operators and improve pipeline conversion.',
    steps: [
      'Define target sector and shortlist of companies',
      'Crossover builds proprietary intelligence base from public signals — no management contact',
      'Customer interviews surface competitive positioning and operator weaknesses',
      'Deliver sector brief: who to call on, what differentiates each target, where the gaps are',
    ],
    ctaText: 'Start Sector Research',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  },
  {
    label: 'Stage 02',
    type: 'Mandate Pitch',
    desc: 'Win RFPs by bringing proprietary customer insights that show management teams you know the story better than competitors.',
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
    desc: "The bank's pitch deck serves as the basis for CIM development — Crossover helps operators get customer-backed proof points to counter the weakest elements of the story.",
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
