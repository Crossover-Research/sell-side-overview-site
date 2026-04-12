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
    ctaHref: 'mailto:ian@crossoverresearch.com',
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
    ctaHref: 'mailto:ian@crossoverresearch.com',
    ctaStyle: 'outline',
  },
  {
    label: 'Option C',
    type: '20-Minute Call',
    desc: 'You want to understand how Crossover fits your process. We walk through sample outputs and coverage options.',
    steps: [
      'Schedule a 20-minute call',
      'See live examples from the Catalyst library',
      'Understand custom study options and timelines',
      'Immediate answer: is your target already covered?',
    ],
    ctaText: 'Book a Call',
    ctaHref: 'https://book.crossoverresearch.com/#/crossoverresearch',
    ctaTarget: '_blank',
  },
];

export const CONTACT_INFO = {
  name: 'Ian McArdle',
  title: 'Head of Strategic Partnerships • Crossover Research',
  email: 'ian@crossoverresearch.com',
};
