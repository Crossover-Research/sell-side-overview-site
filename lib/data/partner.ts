import type { EngagementCard } from '../types';



export const ENGAGEMENT_OPTIONS: EngagementCard[] = [
  {
    label: 'Option A',
    type: 'Live Mandate',
    desc: 'You have a company and a process stage. We scope immediately to your diligence timeline and IC questions.',
    steps: [
      'Share company name and current process stage',
      'Immediate delivery if covered in Catalyst library',
      'Custom study scoped to your bid date if not',
      'IC-ready data before first-round bids close',
    ],
    ctaText: 'Start a Mandate',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  },
  {
    label: 'Option B',
    type: 'Upcoming Pitch',
    desc: 'You have a target company and a pitch date. We confirm Catalyst coverage immediately and scope to your window.',
    steps: [
      'Provide company name and pitch date',
      'Immediate Catalyst coverage check',
      'Production timeline confirmed vs. your window',
      'Report in pitch deck is the primary differentiator',
    ],
    ctaText: 'Prep a Pitch',
    ctaHref: '/intelligence?request=1',
    ctaStyle: 'outline',
  }
];;

