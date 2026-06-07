import type { ICCard, VerbatimCard, VendorSpotlightData } from '../types';

// ── IC Cards — Thesis tab ─────────────────────────────────────────────────────
export const IC_CARDS_NERDIO: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or portfolio company replicate this capability in-house?',
    verdict: 'No comparable solution; difficult to replicate',
    stat: { num: '8.0', label: '/ 10 competitive edge' },
    finding: 'Nerdio scores 8.0/10 on competitive differentiation and 8.0/10 on difficulty of operating without it. Across qualitative feedback there was no comparable product for Azure Virtual Desktop management and automation — alternatives cited (native Azure tools, Citrix, VMware, AWS Workspaces, ManageEngine, CloudJumper) were viewed as less robust or only partial. Absent Nerdio, customers expect to scale back VDI usage or rebuild auto-scaling and brokering manually.',
    quote: { text: 'I honestly don’t think there is a comparable solution for this unless we moved our virtualization platform to VMware or Citrix.', cite: 'CIO • Enterprise Customer' },
    pills: [{ label: 'Competitive diff 8.0', win: true }, { label: 'Operating difficulty 8.0' }, { label: 'No direct substitute' }],
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What are switching costs?',
    verdict: 'Mission-critical; embedded as core infrastructure',
    stat: { num: '8.3', label: '/ 10 org. importance' },
    finding: 'Nerdio scores 8.3/10 on organizational importance (“must have” vs. “nice to have”). Customers describe it as a core part of the infrastructure stack — a single pane of glass for AVD and Windows 365 that removes operational overhead and frees IT staff. Switching means rebuilding scaling, scheduling, image and policy management on fragmented native tooling.',
    quote: { text: 'AVD would die on the vine if we didn’t have Nerdio. We needed a single pane of glass to manage the environment and Nerdio does that.', cite: 'Director of Infrastructure • Enterprise Customer' },
    pills: [{ label: 'Mission criticality 8.3', win: true }, { label: 'Recommend 9.0' }, { label: 'Operational impact 8.0' }],
  },
  {
    num: '03',
    question: 'How strong is customer advocacy and satisfaction?',
    verdict: 'Best-in-class; top-tier advocacy',
    stat: { num: '9.0', label: '/ 10 likelihood to recommend' },
    finding: '9.0/10 likelihood to recommend, with the majority of respondents scoring 9 or 10. Customers cite ROI and cost savings, easy scaling and scheduling of machines, breadth of features (image and application management, compliance and security, Azure and Intune integrations) and ease of use. Nerdio is repeatedly described as the “best-in-class” solution for the AVD / Windows 365 stack.',
    quote: { text: 'This is best of the segment product that has matured over the years. The product is also stable and expanded to work cross-platform.', cite: 'Head of Enterprise Architecture • Enterprise Customer' },
    pills: [{ label: 'Recommend 9.0', win: true }, { label: 'Feature strength 8.5' }, { label: 'AVD mgmt 8.9' }],
  },
  {
    num: '04',
    question: 'Are the adoption drivers durable or cyclical?',
    verdict: 'Structural tailwinds: AVD growth and cost pressure',
    stat: { num: '+47%', label: 'projected seat growth, 2024–2025' },
    finding: 'Adoption is driven by structural needs — managing AVD and Windows 365 at scale, optimizing Azure cost through auto-scaling, and replacing fragmented native tooling. Seat counts are projected to grow from 713 (2023) to 949 (2024) to ~1,400 (2025) even as implied price per user falls from $134 to $106 to $84, evidence of expanding usage rather than price-led growth. Microsoft is the leading referral source at 47%.',
    quote: { text: 'We were sold on the fact that the product basically pays for itself after a certain number of users with the efficiencies it provides.', cite: 'Director of Infrastructure • Enterprise Customer' },
    pills: [{ label: 'Seat growth +47%', win: true }, { label: 'MSFT-referred 47%' }, { label: 'Spend +16% ’25' }],
  },
];

// ── Vendor spotlight ──────────────────────────────────────────────────────────
export const VENDOR_SPOTLIGHT_NERDIO: VendorSpotlightData = {
  name: 'Nerdio',
  descriptor: 'Azure Virtual Desktop management & automation • Verified Enterprise & MSP customers',
  scores: [
    { val: '9.0', lbl: 'Recommend' },
    { val: '8.5', lbl: 'Feature Strength' },
    { val: '8.3', lbl: 'Mission Criticality' },
    { val: '8.0', lbl: 'Operational Impact' },
    { val: '8.0', lbl: 'Competitive Diff' },
  ],
  rankNum: '95%',
  rankLbl: 'Run NMA for AVD',
};

// ── Verbatims ─────────────────────────────────────────────────────────────────
export const VERBATIMS_NERDIO: VerbatimCard[] = [
  { theme: 'No Substitute',       text: '“I honestly don’t think there is a comparable solution for this unless we moved our virtualization platform to VMware or Citrix.”',                                                                       attr: 'CIO • Enterprise Customer' },
  { theme: 'Mission Criticality', text: '“AVD would die on the vine if we didn’t have Nerdio. We needed a single pane of glass to manage the environment and Nerdio does that.”',                                                          attr: 'Director of Infrastructure • Enterprise Customer' },
  { theme: 'ROI / Payback',       text: '“We were sold on the fact that the product basically pays for itself after a certain number of users with the efficiencies it provides.”',                                                       attr: 'Director of Infrastructure • Enterprise Customer' },
  { theme: 'Displacing Citrix',   text: '“Nerdio made managing AVD easier than Citrix and we were able to transition off Citrix.”',                                                                                                       attr: 'Chief Information Officer • Enterprise Customer' },
  { theme: 'Automation',          text: '“Nerdio automated things that my team would have to spend hours on (like auto scaling)… so our admins could spend time doing their jobs instead of fighting to create automations for AVD.”', attr: 'VP of Technical Services • Managed Service Provider' },
  { theme: 'Cost & Overhead',     text: '“Nerdio significantly lowers our operational overhead, frees up IT staff to work on other tasks while cost optimization and performance improved significantly.”',                              attr: 'CIO • Enterprise Customer' },
  { theme: 'Best-in-Class',       text: '“Nerdio’s solutions provide a best-in-class solution for enterprise customers. They offer cost-optimized solutions for their AVD/W365 stack.”',                                              attr: 'Field CTO • Managed Service Provider' },
  { theme: 'Pricing Tension',     text: '“Nerdio is a great product. But it’s expensive for what it is… As we grow more accustomed to AVD, we will consider moving VDI out of Nerdio management to control costs.”',                attr: 'Chief Information Officer • Enterprise Customer' },
];

// ── Chart data ────────────────────────────────────────────────────────────────
// 0–10 scale headline dimensions
export const NERDIO_DIMENSIONS_DATA = {
  labels: ['Likelihood to Recommend', 'Feature Strength', 'Mission Criticality', 'Operational Impact', 'Competitive Differentiation'],
  data:   [9.0,                        8.5,               8.3,                   8.0,                  8.0],
};

// 0–10 scale feature / functionality ratings
export const NERDIO_FEATURES_DATA = {
  labels: ['AVD Management', 'Ease of Use / Portal', 'Cost Optimization', 'Monitoring & Reporting', 'Security & Compliance', 'Integrations', 'Application Management', 'Endpoint & W365', 'Image Management'],
  data:   [8.9,              8.7,                    8.6,                 8.6,                      8.5,                     8.3,            8.2,                      8.2,               8.1],
};

// Discovery channels (% of respondents, sums to 100)
export const NERDIO_DISCOVERY_DATA = {
  labels: ['Recommended by Microsoft', 'Recommended by peer / partner', 'Conference / webinar / trade show', 'Social media'],
  data:   [47, 29, 19, 5],
  colors: ['#1C9DB9', '#5974a0', '#7890b2', '#6b7280'],
};

// Respondent mix (%)
export const NERDIO_RESPONDENT_MIX = {
  labels: ['Enterprise', 'MSP'],
  data:   [81, 19],
  colors: ['#1C9DB9', '#5974a0'],
};

// Most important vendor selection factors (% of respondents, multi-select)
export const NERDIO_SELECTION_FACTORS: { label: string; pct: number }[] = [
  { label: 'AVD Management Capabilities', pct: 76 },
  { label: 'Ease of Deployment', pct: 71 },
  { label: 'Ease of Use / End User Portal', pct: 67 },
  { label: 'Cost Optimization', pct: 57 },
  { label: 'Reputation / Product Reviews', pct: 52 },
  { label: 'Image Management', pct: 43 },
  { label: 'Endpoint & Windows 365 Management', pct: 33 },
  { label: 'Security & Compliance', pct: 33 },
  { label: 'Monitoring & Reporting', pct: 33 },
  { label: 'Availability', pct: 29 },
  { label: 'Application Management', pct: 24 },
  { label: 'Integrations', pct: 14 },
];

// ── Study intelligence ────────────────────────────────────────────────────────
export const STUDY_INTEL_NERDIO = {
  thesisVerdict: 'Best-in-class advocacy (9.0/10) and mission-critical status (8.3/10) in a category with no comparable substitute for Azure Virtual Desktop management and automation. Projected seat growth and Microsoft-led referrals point to durable, structurally driven demand. The watch item is pricing sensitivity at scale, where a minority of customers weigh moving steady-state VDI off Nerdio management to control cost.',
  expansionSegments: 'Enterprises and MSPs running Azure Virtual Desktop and Windows 365 at scale, especially those replacing fragmented native tooling, Citrix, VMware or AWS Workspaces. Cost-optimization and auto-scaling needs are strongest in variable-shift and 24/7 workforces and in compliance-heavy sectors such as financial services and regulated enterprise.',
  riskFlags: 'Pricing perceived as high at steady state by some customers, with a few weighing a return to native AVD tooling once teams mature. Demand for stronger support and training resources, deeper AI/ML (Copilot) and security integrations (SIEM, XDR, IAM), and expansion into broader endpoint and device management.',
};
