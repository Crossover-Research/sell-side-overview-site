import type { MetricCell, ICCard, VerbatimCard } from '../types';

// ── BlueCat metrics (dark green header) ───────────────────────────────────────
export const BLUECAT_METRICS: MetricCell[] = [
  { label: 'NPS Score', value: '64', delta: 'Strong B2B infra', deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Mission Criticality', value: '9.0', sub: '/10', delta: 'Category-leading' },
  { label: 'Renewal Intent', value: '8.8', sub: '/10', delta: 'Structurally sticky' },
  { label: 'Switching Intent', value: '1.9', sub: '/10', delta: 'Near-zero churn', deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Net Retention Est.', value: '98.5', sub: '%', delta: 'Best-in-class' },
  { label: 'NPS Score',           value: '64',   delta: 'Strong B2B infra',    deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Mission Criticality', value: '9.0',  sub: '/10', delta: 'Category-leading' },
  { label: 'Renewal Intent',      value: '8.8',  sub: '/10', delta: 'Structurally sticky' },
  { label: 'Switching Intent',    value: '1.9',  sub: '/10', delta: 'Near-zero churn', deltaStyle: { background: 'rgba(15,123,85,.4)', color: '#5be4ac' } },
  { label: 'Net Retention Est.',  value: '98.5', sub: '%',   delta: 'Best-in-class' },
];

// ── IC Cards ──────────────────────────────────────────────────────────────────
export const IC_CARDS_BLUECAT: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or portfolio company replace DDI with an internal build?',
    verdict: 'No viable in-house path. DDI is foundational network infrastructure.',
    stat: { num: '9.0', label: '/ 10 mission criticality \u2014 category-leading' },
    finding: 'DNS, DHCP, and IP address management are non-negotiable infrastructure for any enterprise. There is no cloud substitute that addresses the complexity of managing non-standard IP schemes across global, distributed environments at scale. Every device on any network needs addressing \u2014 this requirement does not diminish.',
    quote: { text: '"We are using non-standard IP schemes across our global labs and manufacturing sites. BlueCat is the only platform that handles this at our scale."', cite: 'Network Data Services Engineer \u2022 Roche' },
    pills: [{ label: 'Mission criticality 9.0', win: true }, { label: 'Renewal intent 8.8' }, { label: 'Infoblox peer avg lower' }],
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What does switching actually cost?',
    verdict: '1.9/10 switching intent \u2014 near-zero churn across 55 respondents',
    stat: { num: '98.5%', label: 'estimated net retention' },
    finding: 'BlueCat sits in the foundational layer of enterprise network operations. API integrations for DNS change management, custom IP schemes, and security workflows create structural lock-in that is not transferable. A migration is a multi-quarter infrastructure project with material operational risk \u2014 most enterprises won\u2019t attempt it.',
    quote: { text: '"BlueCat Network\u2019s API capabilities are central to how we orchestrate DNS change management in a seamless and secure manner across our institution."', cite: 'IT Director \u2022 Brigham Young University' },
    pills: [{ label: 'Net retention 98.5%', win: true }, { label: 'Switching intent 1.9' }, { label: 'No churn flags' }],
  },
  {
    num: '03',
    question: 'Is Infoblox a real displacement threat, or is the reverse true?',
    verdict: 'Infoblox\u2019s subscription pivot is generating active displacement into BlueCat',
    stat: { num: '3\u20134x', label: 'price increase reported by Infoblox customers post subscription shift' },
    finding: 'Infoblox\u2019s forced migration from perpetual to subscription licensing has created a structural pricing backlash. Verbatims from Infoblox customers show active willingness to evaluate alternatives. Crossover data shows BlueCat\u2019s displacement direction as \u201cGaining\u201d \u2014 Infoblox is the top competitor mentioned across the study.',
    quote: { text: '"The change to a subscription model is the reason why we are not looking to recommend Infoblox to others. We are paying three to four times per year now compared to when we first implemented."', cite: 'VP, Enterprise Architecture \u2022 Barnes & Noble (Infoblox customer)' },
    pills: [{ label: 'Displacement direction: Gaining', win: true }, { label: 'Top competitor: Infoblox' }, { label: 'Infoblox NPS eroding' }],
  },
  {
    num: '04',
    question: 'Are the adoption drivers durable, or does the category commoditize?',
    verdict: 'Foundational infrastructure with a permanent demand profile',
    stat: { num: 'NPS 64', label: 'strong for enterprise infrastructure software' },
    finding: 'Every enterprise network requires DNS, DHCP, and IPAM \u2014 forever. The category cannot commoditize because complexity scales with enterprise growth. DNS security is an additive tailwind: DNS is increasingly the attack surface of choice, making DDI a security investment, not just a network ops cost line.',
    quote: { text: '"DDI is a foundational infrastructure layer. Surface attack reduction through DNS security is a key driver of its criticality to our defense programs."', cite: 'Senior Manager, Network Engineering \u2022 SAIC' },
    pills: [{ label: 'DNS security tailwind', win: true }, { label: 'Non-discretionary spend' }, { label: 'Regulated sectors' }],
  },
];

// ── Verbatims ─────────────────────────────────────────────────────────────────
const GREEN_THEME = { background: '#e6f4ef', color: '#0f7b55' };
const AMBER_THEME = { background: '#fef3c7', color: '#b45309' };

export const VERBATIMS_BLUECAT: VerbatimCard[] = [
  { theme: 'Mission Criticality',    text: '"BlueCat is the foundational DNS/DHCP layer for our entire broadband network. Without it we cannot provision customers or manage the subscriber experience."',                                                                                                   attr: 'Director of Network Operations \u2022 Charter Communications', themeStyle: GREEN_THEME },
  { theme: 'Enterprise Scale',       text: '"We are using non-standard IP schemes across our global labs and manufacturing sites. BlueCat is the only platform that handles this at our scale."',                                                                                                          attr: 'Network Data Services Engineer \u2022 Roche',                 themeStyle: GREEN_THEME },
  { theme: 'Healthcare Critical Infra', text: '"Vital for DNS/DHCP across a highly complex environment. We operate across regulated healthcare facilities where network uptime is non-negotiable."',                                                                                                    attr: 'Senior Director \u2022 GE Healthcare',                        themeStyle: GREEN_THEME },
  { theme: 'API Lock-In',            text: '"BlueCat Network\u2019s API capabilities are central to how we orchestrate DNS change management in a seamless and secure manner across our institution."',                                                                                                  attr: 'IT Director \u2022 Brigham Young University',                 themeStyle: GREEN_THEME },
  { theme: 'Implementation Quality', text: '"BlueCat executed our migration from QIP with zero downtime and under budget. DNS downtime was zero, and DHCP downtime was less than 2\u20133 minutes per server, per cutover."',                                                                          attr: 'Verified Respondent \u2022 Enterprise Customer (CR-2024-006)', themeStyle: GREEN_THEME },
  { theme: 'DNS Security Tailwind',  text: '"DDI is a foundational infrastructure layer. Surface attack reduction through DNS security is a key driver of its criticality to our defense programs."',                                                                                                   attr: 'Senior Manager, Network Engineering \u2022 SAIC',             themeStyle: GREEN_THEME },
  { theme: 'OpEx Reduction',         text: '"The effort to maintain the DNS/DHCP infrastructure has been reduced thanks to the tool, and the number of incidents due to incorrect management has decreased significantly."',                                                                             attr: 'Network Data Services Engineer \u2022 Roche',                 themeStyle: GREEN_THEME },
  { theme: 'Infoblox Backlash',      text: '"The change to a subscription model is the reason why we are not looking to recommend Infoblox to others. We are paying three to four times per year now compared to when we first implemented under a perpetual license model."',                        attr: 'VP, Enterprise Architecture \u2022 Barnes & Noble (Infoblox customer)', themeStyle: AMBER_THEME },
  { theme: 'Deployment Speed',       text: '"We architected, designed, and deployed our full DDI environment in under six months. The speed of implementation and migration to become fully operational was a key outcome."',                                                                             attr: 'IT Director \u2022 Brigham Young University',                 themeStyle: GREEN_THEME },
];

// ── Study intelligence ────────────────────────────────────────────────────────
export const STUDY_INTEL = {
  expansionSegments: 'Enterprise infrastructure teams managing complex, distributed, or non-standard IP schemes at scale. Regulated sectors \u2014 healthcare, financial services, defense \u2014 where DNS/DHCP criticality justifies platform investment.',
  riskFlags: 'Subscription model transition creating 3\u20134x cost pressure for some customers. Development pace perceived as stalled vs. AI/cloud innovation expectations. Cloud-native DDI story needs strengthening for hybrid-cloud buyers.',
  thesisVerdict: 'Category-leading mission criticality. Near-zero churn. Infoblox pricing dislocation creates an active and growing displacement opportunity that BlueCat is already capturing in market.',
};
