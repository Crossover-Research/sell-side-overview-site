/**
 * FT Partners — data layer
 * All copy, stats, and structure for the /ft route.
 */

export const FT_HERO = {
  eyebrow: 'FinTech & PropTech Intelligence',
  partnerBadge: 'For FT Partners',
  headline: 'The data that changes\nhow FinTech deals close.',
  subhead:
    'We run primary Voice of Customer research on FinTech and PropTech software companies. The intelligence surfaces before competing banks arrive — and holds up when buyers push back in diligence.',
  ctaPrimary: {
    label: 'Book 20 Minutes',
    href: 'https://book.crossoverresearch.com/#/crossoverresearch',
  },
  ctaSecondary: {
    label: 'See the Intelligence',
    href: '#intelligence',
  },
} as const;

export const FT_STATS = [
  { val: '$25B+', label: 'Total transaction value supported' },
  { val: '30+', label: 'Sell-side mandates' },
  { val: '60%', label: 'Mandate win rate' },
  { val: '14 days', label: 'Delivery on custom studies' },
] as const;

/** Six insights from the AP & AR Automation brief (Apr 26 / Mar 26 studies) */
export const FT_INSIGHTS = [
  {
    num: '01',
    headline: 'Buyers are not selecting on AI. They are selecting on proof.',
    body:
      'AI/ML capability ranked 6.8 out of 10 in vendor selection — second-to-last among nine factors. Integration depth, ease of use, and production proof ranked highest. AI is the renewal and expansion lever. Stability and proof are the selection drivers. Clients who front-load the AI narrative are speaking past the CFO buyer.',
    stat: '6.8',
    statLabel: 'AI/ML ranked in 9-factor selection study',
    tag: 'Selection Criteria',
  },
  {
    num: '02',
    headline: 'The AI-native disruptor pitch resonates with 4 to 15% of the market.',
    body:
      '96% of CFOs say general LLMs alone are not sufficient for production finance. 85% want to layer AI on existing systems, not rip and replace. 80% want a human in the loop. Incumbency is not a liability — it is the only architecture the market is actually buying.',
    stat: '96%',
    statLabel: 'CFOs who reject LLM-only architecture for production finance',
    tag: 'Market Posture',
  },
  {
    num: '03',
    headline: 'Mission-critical lock-in is structural, not contractual.',
    body:
      'Switching intent among Medius customers scored 1.9 out of 10. Customers described the product as embedded in daily finance operations with no credible alternative. The lock-in is operational, not negotiated — and that distinction holds up under buyer scrutiny in ways that churn modeling alone cannot capture.',
    stat: '1.9',
    statLabel: 'Switching intent score (10 = high)',
    tag: 'Retention',
  },
  {
    num: '04',
    headline: 'The pilot-to-production gap is where vendor narratives collapse.',
    body:
      '71% of CFOs cite inaccuracy as their biggest concern with AI vendors. References and POC results ranked 2.21 points higher than accuracy as a standalone metric — the largest spread in the entire evaluation framework. The market has been oversold on demos. Production references are the decisive proof point.',
    stat: '2.21',
    statLabel: 'Point gap between POC evidence and accuracy claims (CFO study)',
    tag: 'Proof Paradox',
  },
  {
    num: '05',
    headline: 'Board-level pricing pressure is accelerating buy decisions.',
    body:
      'CFOs are under active board mandate to reduce headcount in finance functions. That pressure is converting skeptics into buyers on compressed timelines. For sell-side mandates in AP, AR, and adjacent categories, the macro tailwind is a pricing and urgency story the customer will tell in their own words.',
    stat: '69%',
    statLabel: 'CFOs with pure buy-first, zero internal development strategy',
    tag: 'Buyer Urgency',
  },
  {
    num: '06',
    headline: 'Killer feature discipline separates retention leaders from also-rans.',
    body:
      'Customers who achieve 89%+ touchless processing consistently name a single feature as the reason they stayed. Vendors who try to compete on breadth lose on proof. The sell-side narrative that wins identifies the specific workflow where the product is irreplaceable and lets customers say it in their own words.',
    stat: '89%',
    statLabel: 'Touchless processing rate among mission-critical Medius deployments',
    tag: 'Product Positioning',
  },
] as const;

export const FT_BRIEF = {
  title: 'AP and AR Automation: A Strategic Intelligence Brief',
  description:
    'Built for FinTech IB teams advising AP and AR automation vendors. Combines n=129 CFOs from a March 2026 Office of the CFO engagement with a primary Voice of Customer study on Medius (n=55 verified customers). Six intelligence findings with direct sell-side implications.',
  studies: [
    {
      name: 'AP Automation VoC',
      n: 55,
      description: 'Verified Medius customers. Behavioral: selection criteria, NPS, switching intent, willingness to pay, mission criticality.',
    },
    {
      name: 'Office of the CFO AI Engagement',
      n: 129,
      description: 'CFOs and senior finance leaders, $50M to $5B+ revenue. Strategic: AI adoption pipeline, build vs buy, vendor selection, board mandates.',
    },
  ],
} as const;

export const FT_DEAL_PROOF = [
  {
    logo: '/jpmorgan-logo.svg',
    deal: 'Nerdio — $1B Series C',
    detail: 'Customer interviews won JPM the mandate. Same data alerted select funds. GA invested $500M.',
    type: 'Both sides of the transaction',
  },
  {
    logo: '/jpmorgan-logo.svg',
    deal: 'Red Canary — $675M sale to Zscaler',
    detail: 'VoC research formed the equity narrative. Acquirer used findings in post-close integration planning.',
    type: 'Sell-side mandate',
  },
  {
    logo: '/jpmorgan-logo.svg',
    deal: 'Mobile.de — €10B+ IPO',
    detail: 'Engagement letter signed. VoC pipeline established for roadshow materials.',
    type: 'IPO support',
  },
  {
    logo: '/jpmorgan-logo.svg',
    deal: 'Medius — AP Automation VoC',
    detail: 'n=55 verified customer study. Six intelligence findings built for FinTech IB advisory.',
    type: 'FinTech-adjacent VoC',
  },
] as const;

export const FT_TESTIMONIALS = [
  {
    quote:
      'Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented.',
    attribution: 'Executive Director, J.P. Morgan',
    context: 'Sell-side mandate · $10B transaction',
  },
  {
    quote:
      'Both MRI Software and LoanPro were extremely well-received by clients. We use the reports to extract salient points and put that onto 2-4 summary pages normally to show why our client is better than others and what are the key propositions by which they win in the market.',
    attribution: 'Executive Director, J.P. Morgan',
    context: 'FinTech and PropTech mandates',
  },
  {
    quote:
      'The VOC content was well received during the pitch. The CEO told us we hit all the right points on customer highlights and concerns, and the client thought the work was differentiated and unique.',
    attribution: 'Managing Director, J.P. Morgan',
    context: 'Post-mandate debrief',
  },
] as const;

export const FT_HOW_IT_WORKS = [
  {
    step: '01',
    phase: 'Sector Intel',
    headline: 'Build line of sight before the pitch',
    body: 'We source and interview verified customers of a target FinTech or PropTech company. No company-provided lists. No management contact. Results in 10 to 14 days.',
  },
  {
    step: '02',
    phase: 'Mandate Pitch',
    headline: 'Walk in with customer proof competing banks cannot replicate',
    body: 'Verbatim customer soundbites sourced independently. The operator has never seen this research. Neither has any other bank you are competing against.',
  },
  {
    step: '03',
    phase: 'CIM Enhancement',
    headline: 'Replace assertion with evidence the buyer cannot challenge',
    body: 'Every CIM claim that touches customer quality, retention, or competitive position gets anchored in independently sourced data. Buyers can challenge management projections. They cannot challenge their own peers.',
  },
] as const;
