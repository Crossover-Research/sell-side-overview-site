/**
 * SITE CONFIG — single source of truth for all values that could change.
 * Never hardcode these values anywhere else in the codebase.
 * Import from this file wherever brand, contact, URL, or legal copy is needed.
 */

export const BRAND = {
  name:    'Crossover Research',
  nameMarkup: { base: 'CROSSOVER', accent: ' RESEARCH' },
  tagline: 'Voice of Customer Intelligence',
  logoUrl: '/cr-logo-light.svg',
  demoUrl: 'https://catalyst.crossoverresearch.com/demo',
} as const;

export const CONTACT = {
  name:         'Ian McArdle',
  title:        'Head of Strategic Partnerships',
  email:        'ian@crossoverresearch.com',
  bookingUrl:   'https://book.crossoverresearch.com/#/crossoverresearch',
  bookingLabel: 'Book a Meeting',
} as const;

export const LEGAL = {
  year:         2026,
  entity:       'Crossover Research LLC',
  confidential: 'Confidential — Not for Distribution',
  badgeLabel:   'Confidential',
} as const;

export const ROUTES = {
  home:         '/',
  partner:      '/partner',
  capabilities: '/capabilities',
  redcanary:    '/redcanary',
  bluecat:      '/bluecat',
  thesis:       '/thesis',
} as const;

export const NAV_LABELS = {
  workWithUs:    'Work With Us',
  platform:      'Intelligence Platform',
  samples:       'Research Samples',
  submitRequest: 'Submit a Request',
} as const;

export const PROOF_QUOTE = {
  text: 'Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented.',
  name: 'Executive Director, J.P. Morgan',
  role: 'Sell-side mandate · $10B transaction',
} as const;
