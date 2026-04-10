/**
 * Catalyst Asset Library — sell-side facing
 * Shows investment hooks + metrics for free.
 * Company identity revealed on engagement.
 */

export interface CatalystAsset {
  code: string;
  category: string;
  subtitle: string;
  status: 'active' | 'new' | 'transacted';
  keyMetric: string;
  hook: string;
  metrics: { label: string; value: string; context: string }[];
  quotes: string[];
  moat: string;
  bank?: string;
  interviews?: number;
  realName?: string;
  dealNote?: string;
}

export const CATALYST_ASSETS: CatalystAsset[] = [
  {
    code: 'PRIME',
    category: 'Compliance & Risk Management',
    subtitle: 'Contractor Compliance',
    status: 'active',
    keyMetric: '9.4/10 Renewal',
    hook: "When 90% of bidders are already pre-approved in your system before the RFP hits the street, you don't have a software company. You have category ownership — a two-sided network that powers contractor verification across capital-intensive industries.",
    metrics: [
      { label: 'Renewal Intent', value: '9.4/10', context: 'Highest in portfolio' },
      { label: 'Mission Critical', value: '8.4/10', context: '41% extremely critical' },
      { label: 'Network Advantage', value: '60% vs 0%', context: 'Vs nearest competitor' },
      { label: 'Decision Height', value: 'C-Suite', context: '10% CEO-level' },
    ],
    quotes: [
      'This is the industry default. Any time we tender a capital project, 90% of bidders are already greenlit in the system.',
      'This platform took our audit prep from 10 days to less than 48 hours.',
    ],
    moat: 'Proprietary two-sided network built over 15+ years containing tens of thousands of pre-vetted contractor relationships embedded in audit processes. Competitors cannot replicate without massive capital investment. As regulatory pressure intensifies, switching costs increase.',
    bank: 'J.P. Morgan',
    interviews: 35,
  },
  {
    code: 'SENTINEL',
    category: 'Cybersecurity MDR',
    subtitle: 'Managed Detection & Response',
    status: 'transacted',
    realName: 'Red Canary',
    dealNote: 'Acquired by OpenText · MDR category leader',
    keyMetric: '9.0/10 NPS',
    hook: "When customers run real-malware competitive bake-offs and you detect threats faster with 67% cost savings versus building in-house, you're not competing on features. You're providing operational necessity for mid-market security teams.",
    metrics: [
      { label: 'NPS / Advocacy', value: '9.0/10', context: 'Top-tier MDR' },
      { label: 'Replication Difficulty', value: '8.8/10', context: 'Build "unrealistic"' },
      { label: 'Security Posture', value: '8.6/10', context: 'Measurable improvement' },
      { label: 'Cost vs In-House', value: '67%', context: 'Savings vs internal SOC' },
    ],
    quotes: [
      'We ran an extensive bake-off with real malware against multiple vendors. They won on detection speed and escalation time.',
      'Their expertise in threat research, deep integration with our stack, and competitive pricing made the decision clear.',
    ],
    moat: 'Mid-market organizations face impossible economics: hiring 10-15 FTEs for 24/7 SOC costs $2-3M annually plus recruitment challenges. This platform solves it for 67% less.',
    bank: 'J.P. Morgan',
    interviews: 42,
  },
  {
    code: 'FORTRESS',
    category: 'Enterprise Network Infrastructure',
    subtitle: 'DDI — DNS/DHCP/IPAM',
    status: 'active',
    keyMetric: '8.7 vs 7.6 Satisfaction vs. Incumbent',
    hook: "Network teams describe this as their 'single pane of glass' for foundational services where failure shuts down the entire organization. One customer migrated 1,000+ retail locations with zero end-user impact, ahead of schedule, using 40 fewer servers.",
    metrics: [
      { label: 'Satisfaction Gap', value: '8.7 vs 7.6', context: 'Vs incumbent' },
      { label: 'Mission Criticality', value: '8.7/10', context: 'Failure = shutdown' },
      { label: 'Cost Advantage', value: '15-25%', context: 'Cheaper + superior' },
      { label: 'AI Demand', value: '81%', context: 'Would pay for automation' },
    ],
    quotes: [
      'We migrated over 1,000 locations with zero user impact. Delivered ahead of schedule with 40 fewer servers required.',
      'If DDI fails, nothing works. This has become our single source of truth.',
    ],
    moat: 'API-first design becomes increasingly defensible as hybrid and multi-cloud deployments accelerate. Competitors with legacy architectures cannot match ecosystem integration (ServiceNow, Terraform, Azure, AWS) without complete rebuilds.',
  },
  {
    code: 'TITAN',
    category: 'Vertical SaaS — Real Estate',
    subtitle: 'Property Management Platform',
    status: 'active',
    keyMetric: '8.9/10 Mission Critical — Highest in Portfolio',
    hook: "8.9/10 mission criticality — the highest score across the entire research portfolio — because operators literally cannot function without it. Yet satisfaction sits at 7.0/10 due to UI/UX challenges. Locked-in customers who are dissatisfied: the rarest value creation setup in software.",
    metrics: [
      { label: 'Mission Criticality', value: '8.9/10', context: 'Highest in portfolio' },
      { label: 'Satisfaction', value: '7.0/10', context: 'UI/UX opportunity' },
      { label: 'Revenue', value: '$700M+', context: '56.5% EBITDA margins' },
      { label: 'NRR', value: '110%', context: 'Net revenue retention' },
    ],
    quotes: [
      "This is the backbone of our operations. We can't run properties without it, but the interface needs serious modernization.",
      "Switching would be catastrophic. But updates are complex and the UX hasn't kept pace.",
    ],
    moat: 'Embedded in accounting, leasing, compliance, and operational workflows for institutional portfolios. Switching requires 12-18 months of data migration, staff retraining, and workflow reconstruction.',
  },
  {
    code: 'BRIDGE',
    category: 'Enterprise GRC',
    subtitle: 'Board Management & Governance',
    status: 'active',
    keyMetric: '96% Board Penetration',
    hook: "96% of customers use this for board management, and 86% use it as their single governance vendor. Yet only 29% have extended into GRC modules — massive white space for wallet expansion without a single new customer.",
    metrics: [
      { label: 'Board Penetration', value: '96%', context: 'Installed base standard' },
      { label: 'Single Vendor', value: '86%', context: 'Deeply embedded' },
      { label: 'GRC Penetration', value: '29%', context: 'Massive white space' },
      { label: 'Avg Spend', value: '$50K', context: 'Upsell path to $75-100K' },
    ],
    quotes: [
      "96% of our usage is for board meetings — it's deeply embedded in our governance workflows.",
      "The GRC modules look interesting, but we haven't expanded yet.",
    ],
    moat: 'Board members learn the interface, historical meeting minutes are stored in the system, compliance audit trails depend on continuity. Switching requires board-level retraining and compliance recertification.',
  },
  {
    code: 'PRISM',
    category: 'Enterprise Productivity',
    subtitle: 'Presentation Intelligence Software',
    status: 'active',
    keyMetric: '3-5x Pricing Headroom',
    hook: "86% of customers cite time savings as the primary value driver. The software has achieved 'gold standard' positioning in consulting and finance — and customers validate 3-5x willingness to pay over current pricing.",
    metrics: [
      { label: 'Time Savings', value: '86%', context: 'Primary value driver' },
      { label: 'Peer-Driven Adoption', value: '45%', context: 'No formal evaluation' },
      { label: 'Pricing Headroom', value: '3-5x', context: 'Willingness to pay' },
      { label: 'Market Position', value: 'Gold Std', context: 'Consulting & finance' },
    ],
    quotes: [
      'This tool is non-negotiable for anyone building complex slides regularly. The time savings justify 3-5x the current price.',
      "We teach this to new analysts on day one. It's the industry standard.",
    ],
    moat: "Users develop muscle memory, build template libraries, and train junior colleagues — creating organizational knowledge that persists through employee turnover.",
  },
  {
    code: 'APOLLO',
    category: 'Vertical SaaS — Education',
    subtitle: 'Parent Engagement Platform',
    status: 'new',
    keyMetric: '$13.3M ARR · 94% GRR · 23-26% Growth',
    hook: "$13.3M ARR with 94% GRR and 23-26% growth as a bootstrapped, founder-funded business. 450 colleges and 5M parents. 40% of customers describe it as critical to operations — and the founders have never taken outside capital.",
    metrics: [
      { label: 'ARR', value: '$13.3M', context: 'June 2025' },
      { label: 'Gross Revenue Retention', value: '94%', context: 'Exceptional' },
      { label: 'Growth', value: '23-26%', context: 'YoY' },
      { label: 'EBITDA', value: '12%', context: 'Profitable bootstrap' },
    ],
    quotes: [
      '40% of customers describe this as critical to operations.',
      "This is the system of record for everything parent-related: communications, events, giving, volunteer management.",
    ],
    moat: 'Once colleges have migrated parent data, trained staff, and integrated giving campaigns, switching requires operational disruption during critical enrollment and fundraising cycles.',
  },
  {
    code: 'VANGUARD',
    category: 'Enterprise SaaS',
    subtitle: 'Emergency Mass Communication',
    status: 'active',
    keyMetric: '8.8/10 Mission Critical · Revenue 2x YoY',
    hook: "8.8/10 mission criticality because organizations cannot execute emergency response without reliable mass communication. 50% demand AI/automation capabilities TODAY — double the rate of competitors. Revenue doubling year-over-year.",
    metrics: [
      { label: 'Mission Criticality', value: '8.8/10', context: 'Essential for ER' },
      { label: 'AI Demand', value: '50%', context: '2x competitor rate' },
      { label: 'Growth', value: '2x YoY', context: 'Revenue doubling' },
      { label: 'Market Position', value: 'Standard', context: 'Industry default' },
    ],
    quotes: [
      'We cannot execute emergency response without it.',
      'Switching risk is extremely high because our playbooks, integrations, and training are all embedded.',
    ],
    moat: 'Emergency communication platforms embed because playbooks, org charts, contact trees, and crisis response workflows are all configured in-system. Switching during stable periods requires emergency response team retraining.',
  },
];

export const CATALYST_STATS = {
  totalAssets: '20+',
  targeting2026: '60+',
  totalInterviews: '3,500+',
  avgDelivery: '< 2 hrs',
  costSavings: '90%',
  timeSavings: '95%',
  pricePerReport: '$10,000',
};
