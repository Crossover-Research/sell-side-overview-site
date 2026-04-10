import type { TrackStatItem, AdvantageCard, EngagementCard, MetricCell } from '../types';

export const PARTNER_METRICS: MetricCell[] = [
  { label: 'Mandate Win Rate',        value: '50%',   delta: 'With Crossover research' },
  { label: 'J.P. Morgan Engagements', value: '22+',   delta: 'Completed' },
  { label: 'Transaction Value',       value: '$25B+',  delta: 'Total supported' },
  { label: 'Catalyst Coverage',       value: '20+',   delta: 'Assets available same day' },
];

export const TRACK_STATS: TrackStatItem[] = [
  { num: '50%',  label: 'Win rate on mandates where Crossover was part of the pitch' },
  { num: '22+',  label: 'Completed engagements with J.P. Morgan alone' },
  { num: '$25B+', label: 'Total transaction value supported' },
  { num: '20+',  label: 'Catalyst assets available same day — PE/GE funds, GA, Battery, Lead Edge & others' },
];

export const ADVANTAGE_CARDS: AdvantageCard[] = [
  {
    title: 'Win the Mandate',
    desc: '4–6 banks compete on every tech mandate. Crossover data is concrete differentiation that competitors cannot replicate on your timeline. It changes the conversation from "trust us" to "here\'s what customers actually said."',
  },
  {
    title: 'Find the Gaps First',
    desc: 'Every asset has weaknesses. Most operators hide them and hope buyers don\'t find them before close. Crossover surfaces them weeks before buyers do — using independent respondents the operator didn\'t handpick — then builds customer-backed evidence to close them proactively.',
  },
  {
    title: 'Anchor the CIM',
    desc: '"84% of verified customers say Red Canary costs less than building in-house" is an independent, third-party claim. It lands in the CIM as sourced evidence, not management narrative. Buyers cannot challenge what they didn\'t produce.',
  },
  {
    title: 'Compress Diligence',
    desc: 'Buyer IC questions about stickiness, replication cost, and moat are answered before they\'re asked. That shortens the diligence window and lets you close on the seller\'s timeline — not the buyer\'s.',
  },
  {
    title: 'The Independent Measurement Layer',
    desc: 'Neither buyers nor sellers can fully trust VoC the other side commissioned. Crossover is the measurement layer both sides use — because neither side chose the respondents. Same data. Different strategic framing. Proof: Nerdio Series C. Both sides. $500M at $1B+.',
  },
  {
    title: 'Built for the Transaction Clock',
    desc: 'Same day if covered in Catalyst. 14 days for a custom study. Pre-pitch snapshot in 48 hours. Every engagement scoped to your process milestones — not a research calendar.',
  },
];

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
