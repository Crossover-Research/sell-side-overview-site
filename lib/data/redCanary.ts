import type { MetricCell, ICCard, CompetitorRow, VerbatimCard, VendorSpotlightData } from '../types';

// ── Hero metrics (exact from source) ─────────────────────────────────────────
export const RED_CANARY_METRICS: MetricCell[] = [
  { label: 'Red Canary NPS', value: '9.0', sub: '/10', delta: 'Top-tier MDR' },
  { label: 'Red Canary ARR Growth', value: '40%', delta: 'Best in MDR peer group' },
  { label: 'BlueCat Mission Criticality', value: '9.0', sub: '/10', delta: 'Category-leading' },
  { label: 'BlueCat Switching Intent', value: '1.9', sub: '/10', delta: 'Near-zero churn', deltaStyle: { background: 'rgba(15,123,85,.35)', color: '#5be4ac' } },
  { label: 'BlueCat Net Retention', value: '98.5', sub: '%', delta: 'Best-in-class' },
];

// ── IC Cards — Thesis tab ─────────────────────────────────────────────────────
export const IC_CARDS_RED_CANARY: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or portfolio company replicate this capability in-house?',
    verdict: 'Structurally impossible to replicate at equivalent cost',
    stat: { num: '8.8', label: '/ 10 average replication difficulty score' },
    finding: 'Red Canary scores 8.8/10 on replication difficulty, exceeding CrowdStrike (8.5) and SentinelOne (8.0). Customers cite the combination of analyst coverage, ML detection, and EDR integrations as structurally impossible to rebuild internally.',
    quote: { text: '"Building equivalent in-house would require 8\u201310 senior analysts\u2026spend 4x what we pay Red Canary."', cite: 'VP of IT Security \u2022 Mid-Market Financial Services \u2022 800 employees' },
    pills: [{ label: 'Red Canary 8.8', win: true }, { label: 'CrowdStrike 8.5' }, { label: 'SentinelOne 8.0' }, { label: 'Peer avg 8.4' }],
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What are switching costs?',
    verdict: 'Deeply embedded; institutional knowledge prevents switching',
    stat: { num: '9.0', label: '/ 10 likelihood to recommend' },
    finding: '9.0/10 recommendation score places Red Canary among the top purpose-built MDR vendors, well ahead of legacy alternatives. Security posture improvement rated 8.6/10. Zero percent of customers reported the platform as significantly more expensive than alternatives.',
    quote: { text: '"Red Canary\u2019s team knows our environment as well as we do at this point\u2026embedded capability, not a vendor relationship."', cite: 'CISO \u2022 B2B SaaS \u2022 1,200 employees' },
    pills: [{ label: 'Red Canary 9.0', win: true }, { label: 'CrowdStrike 8.8' }, { label: 'SentinelOne 8.7' }, { label: 'Microsoft 7.4' }],
  },
  {
    num: '03',
    question: 'Does CrowdStrike or Microsoft represent a displacement threat?',
    verdict: 'Complementary to CrowdStrike; Microsoft is not a credible substitute',
    stat: { num: '5.5x', label: 'vendor consolidation preference vs. Microsoft (3.6)' },
    finding: 'Red Canary outperforms on recommendation (9.0 vs. Microsoft 7.4) and vendor consolidation preference (5.5 vs. Microsoft 3.6), indicating customers actively choose Red Canary over platform bundling. CrowdStrike coexistence is the dominant pattern.',
    quote: { text: '"We have CrowdStrike for endpoint. Red Canary actually monitors it\u2026not going anywhere. Anyone saying Red Canary loses doesn\u2019t understand tool usage."', cite: 'Head of Security Operations \u2022 Regional Health System' },
    pills: [{ label: 'Consolidation pref 5.5', win: true }, { label: 'CrowdStrike 5.8' }, { label: 'Microsoft 3.6' }],
  },
  {
    num: '04',
    question: 'Are adoption drivers durable or cyclical? Will this reverse?',
    verdict: 'Structural secular tailwinds, not cyclical demand',
    stat: { num: '81%', label: 'cite 24/7 monitoring as primary adoption driver' },
    finding: '81% cite 24/7 monitoring need as primary driver \u2014 a structural, ongoing requirement. 77% cite limited internal security staff. Both are secular tailwinds tied to the expanding threat landscape and structural talent shortage.',
    quote: { text: '"Threat landscape more complex every year since onboarding\u2026Red Canary more essential, not less. Can\u2019t imagine a scenario where we reduce reliance."', cite: 'Director of IT \u2022 Manufacturing Enterprise \u2022 3,400 employees' },
    pills: [{ label: '24/7 monitoring need 81%', win: true }, { label: 'Staff shortage 77%' }, { label: 'Faster detection 65%' }],
  },
];

// ── Vendor comparison table ───────────────────────────────────────────────────
export const COMPETITOR_ROWS: CompetitorRow[] = [
  { vendor: 'Red Canary',       securityPosture: 8.6, replicationDifficulty: 8.8, recommend: 9.0, integration: 7.2, consolidationPref: 5.5, highlight: true },
  { vendor: 'CrowdStrike',      securityPosture: 9.0, replicationDifficulty: 8.5, recommend: 8.8, integration: 7.3, consolidationPref: 5.8 },
  { vendor: 'ReliaQuest',       securityPosture: 8.7, replicationDifficulty: 9.7, recommend: 9.3, integration: 7.7, consolidationPref: 6.3 },
  { vendor: 'eSentire',         securityPosture: 10.0, replicationDifficulty: 9.0, recommend: 10.0, integration: 9.5, consolidationPref: 2.0 },
  { vendor: 'SentinelOne',      securityPosture: 8.3, replicationDifficulty: 8.0, recommend: 8.7, integration: 9.3, consolidationPref: 4.3 },
  { vendor: 'Microsoft Defender', securityPosture: 7.0, replicationDifficulty: 8.2, recommend: 7.4, integration: 7.4, consolidationPref: 3.6 },
  { vendor: 'Secureworks',      securityPosture: 6.5, replicationDifficulty: 5.5, recommend: 5.5, integration: 6.5, consolidationPref: 4.0 },
];

// ── Vendor spotlight ──────────────────────────────────────────────────────────
export const VENDOR_SPOTLIGHT: VendorSpotlightData = {
  name: 'Red Canary',
  descriptor: 'Purpose-built MDR \u2022 9-vendor benchmark',
  scores: [
    { val: '9.0', lbl: 'Recommend' },
    { val: '8.8', lbl: 'Replication Difficulty' },
    { val: '8.6', lbl: 'Security Posture' },
    { val: '5.5', lbl: 'Consolidation Pref' },
    { val: '84%', lbl: 'Cost Advantage' },
  ],
  rankNum: '#3',
  rankLbl: 'Security Posture',
};

// ── Verbatims ─────────────────────────────────────────────────────────────────
export const VERBATIMS_RED_CANARY: VerbatimCard[] = [
  { theme: 'Switching Costs',      text: '"Red Canary deeply embedded into security operations. Replacing would mean starting detection baseline from zero, lose months of behavioral context."',                                                                      attr: 'Director of Information Security \u2022 Enterprise Software \u2022 2,800 employees' },
  { theme: 'In-House Economics',   text: '"In-house equivalent requires 8\u201310 senior analysts\u2026spend 4x Red Canary cost, not match detection fidelity. Economics don\u2019t work even with talent."',                                                       attr: 'VP of IT Security \u2022 Mid-Market Financial Services \u2022 800 employees' },
  { theme: 'Detection Quality',    text: '"False positive rate dropped 90% with Red Canary. Previous MSSP generated noise, Red Canary generates signal. Completely different operating model."',                                                                       attr: 'CISO \u2022 Fintech Platform \u2022 Series C' },
  { theme: 'vs. CrowdStrike',      text: '"CrowdStrike for endpoint. Red Canary actually monitors it. Relationship not going anywhere \u2014 complementary, not competitive."',                                                                                       attr: 'Head of Security Operations \u2022 Regional Health System' },
  { theme: 'Response Speed',       text: '"Red Canary contained threat in 4 minutes last quarter. Previous provider had a 4-hour SLA. Difference between a contained incident and a material breach."',                                                              attr: 'IT Director \u2022 Manufacturing Enterprise \u2022 3,400 employees' },
  { theme: 'Platform Embeddedness', text: '"Red Canary team knows our environment as well as we do. Embedded capability, not a vendor relationship. Institutional knowledge is not transferable."',                                                                   attr: 'CISO \u2022 B2B SaaS Company \u2022 1,200 employees' },
  { theme: 'Demand Durability',    text: '"Threat landscape more complex every year since onboarding. Red Canary more essential, not less. Can\u2019t imagine a scenario where we reduce reliance."',                                                                  attr: 'VP of Technology \u2022 Logistics and Supply Chain \u2022 6,000 employees' },
  { theme: 'Cost vs. Value',       text: '"Red Canary costs significantly less than a SOC team. Coverage is better. Ran the math twice. No version where we go in-house."',                                                                                           attr: 'CFO \u2022 Technology Company \u2022 450 employees' },
  { theme: 'Peer Recommendation',  text: '"Recommended Red Canary to three peers over two years. Not asked, because it\u2019s the only honest answer."',                                                                                                              attr: 'Director of Cybersecurity \u2022 Professional Services \u2022 900 employees' },
];

// ── Chart data ────────────────────────────────────────────────────────────────
export const NPS_CHART_DATA = {
  labels: ['eSentire', 'ReliaQuest', 'Red Canary', 'CrowdStrike', 'SentinelOne', 'Palo Alto', 'Microsoft', 'deepwatch', 'Secureworks'],
  data:   [10.0,       9.3,          9.0,          8.8,           8.7,           8.0,          7.4,         7.0,         5.5],
};

export const REP_CHART_DATA = {
  labels: ['ReliaQuest', 'eSentire', 'Red Canary', 'CrowdStrike', 'Microsoft', 'SentinelOne', 'deepwatch', 'Palo Alto', 'Secureworks'],
  data:   [9.7,          9.0,        8.8,          8.5,           8.2,         8.0,           8.0,         6.0,         5.5],
};

export const COST_CHART_DATA = {
  labels: ['Significantly less expensive', 'Somewhat less expensive', 'About the same', 'Somewhat more expensive'],
  data:   [67, 17, 8, 8],
  colors: ['#5974a0', '#7890b2', '#6b7280', '#f59e0b'],  // teal, blue, grey, amber
};

export const ADOPTION_DRIVERS_DATA = {
  labels: ['24/7 Monitoring Need', 'Limited Internal Staff', 'Faster Threat Detection', 'Cost of In-House SecOps', 'Complexity of Alerts', 'Program Modernization', 'Compliance Requirements', 'Cloud Security Needs', 'Recent Security Incident'],
  redCanaryData: [81, 77, 65, 58, 35, 35, 15, 15, 8],
  avgData:       [68, 61, 58, 49, 42, 28, 22, 18, 12],
};
