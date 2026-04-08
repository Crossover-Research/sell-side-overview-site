import { MetricCell, ICCard, CompetitorRow, VerbatimCard, VendorSpotlightData, ChartDataset } from '../types';

export const RED_CANARY_METRICS: MetricCell[] = [
  {
    label: 'NPS Score',
    value: '9.0',
    sub: 'Top-tier MDR',
    delta: '+12%',
    deltaStyle: 'positive'
  },
  {
    label: 'Replication Difficulty',
    value: '8.8',
    sub: '/ 10 score',
    delta: 'vs 8.4 avg',
    deltaStyle: 'positive'
  },
  {
    label: 'Cost Advantage',
    value: '84%',
    sub: 'customers report savings',
    delta: 'vs alternatives',
    deltaStyle: 'positive'
  },
  {
    label: 'Security Posture',
    value: '8.6',
    sub: '/ 10 improvement',
    delta: '#3 ranked',
    deltaStyle: 'positive'
  },
  {
    label: 'Consolidation Preference',
    value: '5.5',
    sub: '/ 10 score',
    delta: 'vs 3.6 Microsoft',
    deltaStyle: 'positive'
  }
];

export const IC_CARDS_RED_CANARY: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or portfolio company replicate this capability in-house?',
    verdict: 'Structurally impossible to replicate at equivalent cost',
    stat: {
      num: '8.8',
      label: '/ 10 average replication difficulty score'
    },
    finding: 'Red Canary scores 8.8/10 on replication difficulty, exceeding CrowdStrike (8.5) and SentinelOne (8.0). Customers cite the combination of analyst coverage, ML detection, and EDR integrations as structurally impossible to rebuild internally.',
    quote: {
      text: 'Building equivalent in-house would require 8-10 senior analysts...spend 4x what we pay Red Canary.',
      cite: 'VP of IT Security • Mid-Market Financial Services • 800 employees'
    },
    pills: [
      { label: 'Red Canary 8.8', win: true },
      { label: 'CrowdStrike 8.5' },
      { label: 'SentinelOne 8.0' },
      { label: 'Peer avg 8.4' }
    ]
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What are switching costs?',
    verdict: 'Deeply embedded; institutional knowledge prevents switching',
    stat: {
      num: '9.0',
      label: '/ 10 likelihood to recommend'
    },
    finding: '9.0/10 recommendation score places Red Canary among the top purpose-built MDR vendors, well ahead of legacy alternatives. Security posture improvement rated 8.6/10. Zero percent of customers reported the platform as significantly more expensive than alternatives.',
    quote: {
      text: 'Red Canary\'s team knows our environment as well as we do at this point...embedded capability, not a vendor relationship.',
      cite: 'CISO • B2B SaaS • 1,200 employees'
    },
    pills: [
      { label: 'Red Canary 9.0', win: true },
      { label: 'CrowdStrike 8.8' },
      { label: 'SentinelOne 8.7' },
      { label: 'Microsoft 7.4' }
    ]
  },
  {
    num: '03',
    question: 'Does CrowdStrike or Microsoft represent a displacement threat?',
    verdict: 'Complementary to CrowdStrike; Microsoft is not a credible substitute',
    stat: {
      num: '5.5x',
      label: 'vendor consolidation preference vs. Microsoft (3.6)'
    },
    finding: 'Red Canary outperforms on recommendation (9.0 vs. Microsoft 7.4) and vendor consolidation preference (5.5 vs. Microsoft 3.6). 73% of customers use CrowdStrike + Red Canary together, viewing services as complementary rather than competitive.',
    quote: {
      text: 'CrowdStrike for endpoint. Red Canary actually monitors it. Relationship not going anywhere - complementary, not competitive.',
      cite: 'Head of Security Operations • Regional Health System'
    },
    pills: [
      { label: 'Red Canary 5.5', win: true },
      { label: 'CrowdStrike 5.8' },
      { label: 'Microsoft 3.6' },
      { label: 'Peer avg 5.1' }
    ]
  },
  {
    num: '04',
    question: 'What is the addressable market expansion trajectory?',
    verdict: 'Secular tailwinds drive market expansion and wallet share growth',
    stat: {
      num: '47%',
      label: 'of customers expanded scope in past 12 months'
    },
    finding: 'Market expansion driven by regulatory requirements, cyber insurance mandates, and threat landscape complexity. 89% of customers report increasing cybersecurity budget allocation. Red Canary positioned to capture disproportionate wallet share growth.',
    quote: {
      text: 'Threat landscape more complex every year since onboarding. Red Canary more essential, not less. Can\'t imagine a scenario where we reduce reliance.',
      cite: 'Director of Cybersecurity • Fortune 500 Retailer'
    },
    pills: [
      { label: 'Budget Growth 89%', win: true },
      { label: 'Scope Expansion 47%' },
      { label: 'Insurance Req. 71%' },
      { label: 'Reg. Compliance 82%' }
    ]
  }
];

export const COMPETITOR_ROWS: CompetitorRow[] = [
  {
    vendor: 'Red Canary',
    securityPosture: 8.6,
    replicationDifficulty: 8.8,
    recommend: 9.0,
    integration: 7.2,
    consolidationPref: 5.5,
    highlight: true
  },
  {
    vendor: 'CrowdStrike',
    securityPosture: 9.0,
    replicationDifficulty: 8.5,
    recommend: 8.8,
    integration: 7.3,
    consolidationPref: 5.8
  },
  {
    vendor: 'ReliaQuest',
    securityPosture: 8.7,
    replicationDifficulty: 9.7,
    recommend: 9.3,
    integration: 7.7,
    consolidationPref: 6.3
  },
  {
    vendor: 'eSentire',
    securityPosture: 10.0,
    replicationDifficulty: 9.0,
    recommend: 8.5,
    integration: 7.8,
    consolidationPref: 5.2
  },
  {
    vendor: 'SentinelOne',
    securityPosture: 8.4,
    replicationDifficulty: 8.0,
    recommend: 8.7,
    integration: 8.1,
    consolidationPref: 6.8
  },
  {
    vendor: 'Rapid7',
    securityPosture: 7.9,
    replicationDifficulty: 7.6,
    recommend: 8.2,
    integration: 7.9,
    consolidationPref: 5.9
  },
  {
    vendor: 'Arctic Wolf',
    securityPosture: 8.2,
    replicationDifficulty: 8.3,
    recommend: 8.6,
    integration: 7.4,
    consolidationPref: 5.7
  },
  {
    vendor: 'Microsoft',
    securityPosture: 7.1,
    replicationDifficulty: 6.8,
    recommend: 7.4,
    integration: 8.9,
    consolidationPref: 3.6
  },
  {
    vendor: 'IBM',
    securityPosture: 7.8,
    replicationDifficulty: 7.2,
    recommend: 7.6,
    integration: 7.1,
    consolidationPref: 4.3
  }
];

export const VERBATIMS_RED_CANARY: VerbatimCard[] = [
  {
    theme: 'Switching Costs',
    text: 'Red Canary deeply embedded into security operations. Replacing would mean starting detection baseline from zero, lose months of behavioral context.',
    attr: 'Director of Information Security • Enterprise Software • 2,800 employees'
  },
  {
    theme: 'In-House Economics',
    text: 'In-house equivalent requires 8-10 senior analysts...spend 4x Red Canary cost, not match detection fidelity. Economics don\'t work even with talent.',
    attr: 'VP of IT Security • Mid-Market Financial Services • 800 employees'
  },
  {
    theme: 'Detection Quality',
    text: 'False positive rate dropped 90% with Red Canary. Previous MSSP generated noise, Red Canary generates signal. Completely different operating model.',
    attr: 'CISO • Fintech Platform • Series C'
  },
  {
    theme: 'vs. CrowdStrike',
    text: 'CrowdStrike for endpoint. Red Canary actually monitors it. Relationship not going anywhere - complementary, not competitive.',
    attr: 'Head of Security Operations • Regional Health System'
  },
  {
    theme: 'Response Speed',
    text: 'Red Canary contained threat in 4 minutes last quarter. Previous provider had a 4-hour SLA. Difference between a contained incident and a material breach.',
    attr: 'IT Director • Manufacturing Enterprise • 3,400 employees'
  },
  {
    theme: 'Platform Embeddedness',
    text: 'Red Canary team knows our environment as well as we do. Embedded capability, not a vendor relationship. Institutional knowledge is not transferable.',
    attr: 'CISO • B2B SaaS Company • 1,200 employees'
  },
  {
    theme: 'Demand Durability',
    text: 'Threat landscape more complex every year since onboarding. Red Canary more essential, not less. Can\'t imagine a scenario where we reduce reliance.',
    attr: 'Director of Cybersecurity • Fortune 500 Retailer'
  },
  {
    theme: 'Cost Efficiency',
    text: 'Red Canary delivers enterprise-grade detection at 60% of what we paid previous provider. Better outcomes, lower cost. Board loves the math.',
    attr: 'CFO • Mid-Market Technology Company • 1,500 employees'
  }
];

export const VENDOR_SPOTLIGHT: VendorSpotlightData = {
  name: 'Red Canary',
  descriptor: 'Purpose-built MDR • 9-vendor benchmark',
  scores: [
    { val: '9.0', lbl: 'Recommend' },
    { val: '8.8', lbl: 'Replication Difficulty' },
    { val: '8.6', lbl: 'Security Posture' },
    { val: '5.5', lbl: 'Consolidation Pref' },
    { val: '84%', lbl: 'Cost Advantage' }
  ],
  rankNum: '#3',
  rankLbl: 'Security Posture'
};

export const NPS_CHART_DATA = {
  labels: ['Red Canary', 'ReliaQuest', 'CrowdStrike', 'SentinelOne', 'Arctic Wolf', 'eSentire', 'Rapid7', 'IBM', 'Microsoft'],
  data: [9.0, 9.3, 8.8, 8.7, 8.6, 8.5, 8.2, 7.6, 7.4]
};

export const REP_CHART_DATA = {
  labels: ['ReliaQuest', 'eSentire', 'Red Canary', 'CrowdStrike', 'Arctic Wolf', 'SentinelOne', 'Rapid7', 'IBM', 'Microsoft'],
  data: [9.7, 9.0, 8.8, 8.5, 8.3, 8.0, 7.6, 7.2, 6.8]
};

export const COST_CHART_DATA = {
  labels: ['Significantly More', 'Somewhat More', 'About the Same', 'Somewhat Less', 'Significantly Less'],
  data: [0, 16, 32, 38, 46],
  colors: ['#e8334a', '#b45309', '#6b7280', '#0f7b55', '#0f7b55']
};

export const ADOPTION_DRIVERS_DATA = {
  labels: ['Threat Detection', 'Analyst Expertise', 'Response Speed', 'Cost Efficiency', 'Compliance', 'Integration'],
  redCanaryData: [9.2, 8.9, 8.7, 8.4, 8.1, 7.2],
  avgData: [8.1, 7.8, 7.6, 7.3, 7.5, 7.8]
};