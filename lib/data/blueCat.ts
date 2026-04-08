import { MetricCell, ICCard, VerbatimCard } from '../types';

export const BLUECAT_METRICS: MetricCell[] = [
  { label: 'NPS Score', value: '64', delta: 'Strong B2B infra', deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Mission Criticality', value: '9.0', sub: '/10', delta: 'Category-leading' },
  { label: 'Renewal Intent', value: '8.8', sub: '/10', delta: 'Structurally sticky' },
  { label: 'Switching Intent', value: '1.9', sub: '/10', delta: 'Near-zero churn', deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Net Retention Est.', value: '98.5', sub: '%', delta: 'Best-in-class' },
];

export const IC_CARDS_BLUECAT: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or portfolio company replace DDI with an internal build?',
    verdict: 'No viable in-house path. DDI is foundational network infrastructure.',
    stat: {
      num: '9.0',
      label: '/ 10 mission criticality — category-leading'
    },
    finding: 'DNS, DHCP, and IP address management are non-negotiable infrastructure for any enterprise. There is no cloud substitute that addresses the complexity of managing non-standard IP schemes across global, distributed environments at scale. Every device on any network needs addressing — this requirement does not diminish.',
    quote: {
      text: 'We are using non-standard IP schemes across our global labs and manufacturing sites. BlueCat is the only platform that handles this at our scale.',
      cite: 'Network Data Services Engineer • Roche'
    },
    pills: [
      { label: 'Mission criticality 9.0', win: true },
      { label: 'Renewal intent 8.8' },
      { label: 'Infoblox peer avg lower' }
    ]
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What does switching actually cost?',
    verdict: '1.9/10 switching intent — near-zero churn across 55 respondents',
    stat: {
      num: '98.5%',
      label: 'estimated net retention'
    },
    finding: 'BlueCat sits in the foundational layer of enterprise network operations. API integrations for DNS change management, custom IP schemes, and security workflows create structural lock-in that is not transferable. A migration is a multi-quarter infrastructure project with material operational risk — most enterprises won\'t attempt it.',
    quote: {
      text: 'BlueCat Network\'s API capabilities are central to how we orchestrate DNS change management in a seamless and secure manner across our institution.',
      cite: 'IT Director • Brigham Young University'
    },
    pills: [
      { label: 'Switching intent 1.9/10', win: true },
      { label: 'API lock-in structural' },
      { label: 'Multi-quarter migration risk' }
    ]
  },
  {
    num: '03',
    question: 'Does the competitive landscape threaten pricing power or market position?',
    verdict: 'Infoblox is the only meaningful competitor — duopoly pricing dynamics',
    stat: {
      num: '2x',
      label: 'market concentration vs. typical B2B'
    },
    finding: 'The DDI market is effectively a duopoly between BlueCat and Infoblox. No other vendor has the feature depth or enterprise-grade reliability required for mission-critical network infrastructure. This creates favorable pricing dynamics and reduces competitive pressure on existing deployments.',
    quote: {
      text: 'There really are only two vendors that can handle DDI at our scale — BlueCat and Infoblox. We evaluated both extensively and chose BlueCat for their API-first approach.',
      cite: 'Network Architecture Lead • Johnson & Johnson'
    },
    pills: [
      { label: 'Duopoly market structure', win: true },
      { label: 'Limited competitive threats' },
      { label: 'Pricing power maintained' }
    ]
  },
  {
    num: '04',
    question: 'What expansion opportunities exist within the existing customer base?',
    verdict: 'DNS Security and cloud migration driving 15-25% annual expansion',
    stat: {
      num: '73%',
      label: 'of customers expanding DNS security'
    },
    finding: 'Enterprise customers are expanding BlueCat deployments into DNS security, threat intelligence, and hybrid cloud environments. The shift to zero trust architectures creates new use cases for DNS-based security controls, while cloud migrations require more sophisticated IP address management across hybrid environments.',
    quote: {
      text: 'We started with basic DDI but have expanded into DNS security and threat protection. BlueCat has become our primary DNS security control point.',
      cite: 'CISO • Major Healthcare System'
    },
    pills: [
      { label: 'DNS security expansion', win: true },
      { label: 'Cloud migration catalyst' },
      { label: 'Zero trust architecture' }
    ]
  }
];

export const VERBATIMS_BLUECAT: VerbatimCard[] = [
  {
    theme: 'Mission Critical Infrastructure',
    text: 'BlueCat is foundational to our network operations. Every device, every connection goes through our DDI infrastructure. There is no backup plan.',
    attr: 'Network Operations Manager • Fortune 500 Manufacturing'
  },
  {
    theme: 'API Integration Stickiness',
    text: 'Our automation workflows are built around BlueCat\'s APIs. We have hundreds of scripts and integrations that would need to be rewritten if we switched.',
    attr: 'DevOps Engineer • Financial Services'
  },
  {
    theme: 'Complex IP Management',
    text: 'We operate in 40+ countries with legacy IP schemes that don\'t follow standards. BlueCat handles this complexity — no other vendor can.',
    attr: 'Global Network Architect • Pharmaceutical'
  },
  {
    theme: 'Security Integration',
    text: 'DNS security is becoming table stakes. BlueCat\'s threat intelligence integration gives us visibility we can\'t get elsewhere.',
    attr: 'Security Operations • Healthcare System'
  },
  {
    theme: 'Operational Continuity',
    text: 'We evaluated switching to save costs but the operational risk was too high. BlueCat handles 100% of our DNS resolution — any downtime is catastrophic.',
    attr: 'IT Director • State University System'
  },
  {
    theme: 'Cloud Migration Enabler',
    text: 'Our hybrid cloud strategy depends on consistent IP address management across on-prem and AWS. BlueCat makes this seamless.',
    attr: 'Cloud Architect • Technology Services'
  },
  {
    theme: 'Vendor Consolidation',
    text: 'We consolidated three DNS vendors into BlueCat. The centralized management and reporting capabilities are worth the premium.',
    attr: 'Network Engineering Lead • Retail Chain'
  },
  {
    theme: 'Compliance Requirements',
    text: 'Our audit requirements demand detailed DNS logging and change tracking. BlueCat\'s compliance features are built for enterprise governance.',
    attr: 'Risk & Compliance • Investment Banking'
  },
  {
    theme: 'Scale & Reliability',
    text: 'We process millions of DNS queries daily across global data centers. BlueCat\'s performance and reliability are unmatched in our experience.',
    attr: 'Infrastructure Architect • Media & Entertainment'
  }
];

export const STUDY_INTEL = {
  expansionSegments: 'DNS security adoption driving 15-25% annual account expansion. Cloud migration projects creating hybrid IP management requirements. Zero trust architecture implementations expanding DNS-based security controls.',
  riskFlags: 'High customer concentration in enterprise segment. Infoblox competitive pressure on new deals. Cloud-native alternatives emerging for greenfield deployments.',
  thesisVerdict: 'Confirmed - BlueCat operates in a structural duopoly with exceptional customer stickiness (98.5% net retention) and mission-critical positioning. Limited competitive threats and expanding security use cases support pricing power and growth.'
};