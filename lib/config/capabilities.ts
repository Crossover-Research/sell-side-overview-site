/**
 * CAPABILITIES PAGE COPY — all section text for /capabilities.
 * Change text here; components automatically reflect it.
 */

export const HERO_COPY = {
  eyebrow:  'Crossover Research · Sell-Side Intelligence Platform',
  headline: 'The research layer that turns',
  headlineEm: 'mandates into wins.',
  lead: 'Proprietary Voice of Customer intelligence purpose-built for investment banking. Independent evidence from verified customers: not management-sourced references, not analyst reports, not expert network calls. Primary research that survives buyer IC scrutiny because it was never curated by the sell-side.',
} as const;

export const WORKFLOW_COPY = {
  eyebrow: 'How We Fit Your Process',
  title:   'Five Moments Where Crossover Changes the Outcome',
  desc:    'Intelligence inserted at each critical inflection point in the sell-side mandate, from before the pitch to after the LOI.',
} as const;

export const CAPABILITIES_COPY = {
  eyebrow: 'Intelligence Capabilities',
  title:   'Five Integrated Capabilities',
  desc:    'Each capability maps to a moment in the banker workflow where proprietary customer intelligence creates asymmetric advantage. They compound: the research built for mandate pursuit becomes the CIM evidence, the buyer pre-read, and the management prep.',
} as const;

export const WHY_COPY = {
  eyebrow:   'Why Crossover',
  title:     'Not a Consulting Firm. Not an Expert Network.',
  desc:      'Crossover Research is a proprietary intelligence platform built specifically for investment decision-making. Every capability exists because the traditional research infrastructure fails at the exact moment a transaction process demands it.',
  subDesc:   'More verified respondents, more benchmark dimensions, and more IC-ready structure than 30 expert network calls, at a fraction of the cost. Where expert networks produce conversation notes, Crossover produces evidence.',
} as const;

export const SAMPLES_COPY = {
  eyebrow: 'Sample Intelligence',
  title:   'See a Crossover Sample Study',
  desc:    'The Red Canary and BlueCat Networks Catalyst studies are live examples of the intelligence your deal team receives. The queryable portal, verbatim evidence, competitive benchmarking, and IC-ready data: all accessible now.',
} as const;

export const SAMPLE_CARDS = [
  {
    type: 'Catalyst Study',
    name: 'Red Canary — MDR',
    meta: '9-vendor benchmark · 75+ verified respondents · Cybersecurity',
    linkLabel: 'Preview Study →',
    href: '/thesis',
    cta: false,
  },
  {
    type: 'Catalyst Study',
    name: 'BlueCat Networks — DDI',
    meta: '55 verified respondents · Mission-critical infrastructure · Network software',
    linkLabel: 'Preview Study →',
    href: '/bluecat',
    cta: false,
  },
  {
    type: 'Engagement',
    name: 'Start a Mandate',
    meta: 'Live mandate · Upcoming pitch · 20-minute walkthrough',
    linkLabel: 'Work With Us →',
    href: '/partner',
    cta: true,
  },
] as const;

export const CTA_COPY = {
  title:   'Ready to see it on your next mandate?',
  sub:     'Walk through a live intelligence portal and see exactly how Crossover fits into your process. We will tell you within 24 hours whether your next target is already covered in our Catalyst library.',
  emailLabel: 'Email Ian McArdle',
  bookLabel:  'Book a 20-Minute Call',
} as const;
