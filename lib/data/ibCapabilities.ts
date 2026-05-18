export const IB_TRACK_RECORD = {
  mandatesSupported: '30+',
  jpmEngagements: '22+',
  totalTransactionValue: '$25B+',
  winRateWithCrossover: '70%',
  avgDeliveryDays: 'Same day (Catalyst) · 14 days (custom)',
};

export const IB_WORKFLOW_STAGES = [
  { num: '01', label: 'Mandate Pitch',          desc: 'Line of sight before competing banks arrive' },
  { num: '02', label: 'CIM Narrative',          desc: 'Customer equity story no buyer can challenge' },
  { num: '03', label: 'Buyer Mapping',          desc: 'Know conviction levels before the first call' },
  { num: '04', label: 'AI Management Meetings', desc: 'Simulate buyer IC before the real meeting' },
  { num: '05', label: 'Cortex Research',        desc: 'The intelligence infrastructure underneath everything' },
];

export const IB_CAPS = ['mandate','cim-narrative','buyer-mapping','ai-mgmt','cortex'] as const;
export type IBCap = typeof IB_CAPS[number];

export interface CapabilityFeature { title: string; desc: string; }
export interface IBCapabilityData {
  label: string; headline: string; body: string;
  anchorStat: string; anchorLabel: string; anchorContext: string;
  bankerProblem: string; crossoverAnswer: string;
  stats: { label: string; val: string }[];
  features: CapabilityFeature[];
}

export const IB_CAP_DATA: Record<IBCap, IBCapabilityData> = {

  mandate: {
    label: 'Mandate Pitch',
    headline: 'Walk in with customer proof management never commissioned',
    anchorStat: '1st',
    anchorLabel: 'Bank in the room with independent customer proof',
    anchorContext: 'Verbatims the operator never commissioned — no competing bank can replicate on any timeline',
    body: "Crossover's sell-side engagements create line of sight into high-quality assets before they're in formal processes. When J.P. Morgan engaged us for the Nerdio Series C, the customer interviews won them the mandate. We then formed a fundamental view from those findings, alerted select funds, and GA took a 30-minute conviction brief; secondary diligence followed, and $500M at $1B+ closed. That's the flywheel. You walk in knowing the company better than anyone else in the room. Then the research works for you after the mandate is won.",
    bankerProblem: 'Four other banks. Identical decks. No rational basis to choose you.',
    crossoverAnswer: 'Verified customer verbatims the operator has never seen. No other bank has them. The research exists because you engaged Crossover.',
    stats: [],
    features: [
      { title: 'Pre-Pitch Intelligence Snapshot', desc: 'Verified customer universe, ARR proxy, competitive vulnerabilities, and one anchoring verbatim in under 48 hours. In the room before competing banks finish reading the teaser.' },
      { title: 'Catalyst Same-Day Access', desc: 'If your target is in the Catalyst library, 30-100+ verified respondents across 9 benchmark dimensions are available same day. Research competitors would take 6 weeks to commission, delivered before your pitch.' },
      { title: 'Competitive Moat Assessment', desc: 'Switching cost evidence, replication difficulty, and retention signals from verified respondents. If the moat does not hold under primary research, you know before the CIM reaches buyers.' },
      { title: 'Customer Universe Discovery', desc: 'Verified customer base mapped from 30+ public signal sources: 350-600 organizations with enriched contacts. Built before a single interview is commissioned.' },
      { title: 'Sell-Side Line of Sight → Buy-Side Match', desc: "Crossover forms an independent fundamental view on every asset we cover. When the mandate research reveals a high-conviction story, we alert select buy-side funds, stockpicking private markets using sell-side line of sight. The Nerdio deal is the proof: mandate engagement → original thesis → GA 30-min brief → $500M at $1B+." },
      { title: 'Instant vs. 14-Day Delivery', desc: 'Same day if covered in Catalyst. 14 days for a custom study. Pre-pitch snapshot in 48 hours. Every timeline structured around your bid date, not a research calendar.' },
      { title: 'Queryable Intelligence Portal', desc: 'Every engagement delivers a live portal — not a PDF. Your client queries findings in natural language, explores verbatims, and shares internally. No analyst turnaround. The research stays live.' },
    ],
  },

  'cim-narrative': {
    label: 'CIM Narrative',
    headline: 'The equity story told through customer voice, not management assertion',
    anchorStat: '9',
    anchorLabel: 'Core benchmark dimensions',
    anchorContext: 'Standardised across 40+ comparable Crossover studies',
    body: "Two things live inside every CIM: the operator's claims, and the evidence supporting them. Most CIMs have strong claims and weak evidence: management interviews, public comps, analyst estimates. Crossover replaces the evidence layer entirely. Every retention claim, NPS benchmark, and competitive positioning statement traces to verified respondents the buyer did not select and the sell-side did not curate. The narrative is the same. The credibility is structurally different.",
    bankerProblem: "Sophisticated buyers discount management-sourced evidence before the first page turn.",
    crossoverAnswer: 'Every CIM claim that touches customer quality traces to independent respondents the buyer cannot challenge.',
    stats: [],
    features: [
      { title: 'Crossover Core 9 Benchmarking', desc: 'Nine standardized dimensions: NPS, Renewal Intent, Switching Difficulty, Mission Criticality, and five more, benchmarkable against 40+ comparable studies in the Crossover database. A 9.0 NPS in MDR ranks in the top decile. That context changes valuations.' },
      { title: 'CIM Evidence Insertion', desc: 'Customer-backed proof points written for direct insertion into CIM narrative sections. Verbatims formatted for the management presentation. Every sentence in the customer section traces to a Crossover respondent.' },
      { title: 'Van Westendorp Pricing Analysis', desc: 'Four-question pricing battery produces the acceptable range, optimal price point, and indifference price, mapped against competitive alternatives. Supports the revenue growth narrative with independent price elasticity evidence.' },
      { title: 'Competitive Benchmarking Scorecard', desc: 'Across 8-12 named competitors, every dimension scored from verified customer responses: who wins where, what drives switching, where the target is vulnerable. Buyers cannot replicate this without their own 6-week study.' },
      { title: 'Mission Criticality Evidence', desc: "Direct measurement of what happens to the customer's business if the product goes away. A 9.0/10 mission criticality score from 75 verified respondents is not a claim that can be challenged at IC." },
      { title: 'Verbatim Evidence Extraction', desc: 'Unedited customer voice organized by theme (switching costs, competitive differentiation, ROI), with full respondent attribution. The management presentation stops looking like marketing and starts looking like research.' },
      { title: 'Independent Gap Assessment', desc: "Respondents sourced entirely from public signals, with no management reference list and no handpicked advocates. The findings reflect what the full customer base actually experiences, including friction, complaints, and risk flags buyers will surface. We don't sanitize what we find." },
      { title: 'Attack Surface Mapping', desc: "Nine canonical IC attack vectors assessed against the primary evidence: revenue quality, churn risk, competitive displacement, moat durability, pricing power, and four more. Each: here's the adversarial question, here's what the evidence says, here's the residual risk if the evidence is thin." },
      { title: 'Narrative Hardening', desc: "The equity story gets rebuilt around the evidence, not the aspiration. Claims that can't be independently supported get replaced with what the data actually shows. A narrower, more defensible narrative is more valuable to buyers than a broad narrative they don't believe." },
    ],
  },

  'buyer-mapping': {
    label: 'Buyer Mapping',
    headline: 'Know conviction levels before the first call goes out',
    anchorStat: '50',
    anchorLabel: 'Buyers ranked before first outreach',
    anchorContext: 'IC simulation run on top 5 before a call goes out',
    body: "Most sell-side processes send the same process letter to the same 40 names and wait. Crossover builds a scored buyer landscape before the first outreach, with strategic acquirers mapped against competitive synergy and financial buyers scored on mandate fit and fund dynamics. You know which buyers will bid at the highest conviction before you prioritize management's time.",
    bankerProblem: "Generic process letter to 40 buyers. No visibility into conviction levels. Management time wasted on the wrong meetings.",
    crossoverAnswer: 'Every potential acquirer scored before first outreach. IC simulation, portfolio fit, fund dynamics — you know who will move before you call.',
    stats: [],
    features: [
      { title: 'Scored Buyer Landscape', desc: 'Every potential acquirer assessed on mandate fit and fund dynamics: sector thesis, deal size, deployment velocity, LP pressure, competitive portfolio conflicts. Top 50 buyers ranked before the first call goes out.' },
      { title: 'IC Simulation for Top Buyers', desc: "For the top 5 buyer candidates, we simulate their IC: what dimensions they'll interrogate, what evidence they demand, where they'll walk. Pre-screen which buyers are worth management's time." },
      { title: 'Strategic Acquirer Intelligence', desc: "For each strategic candidate, we map the competitive synergy case, integration logic, and likely deal structure. The outreach message demonstrates you understand their business case better than they've articulated it yet." },
      { title: 'Financial Buyer Fund Dynamics', desc: 'Hold period monitoring, fund deployment pace, and competitive ownership patterns surface which funds are most motivated. A fund at year 4 of 5 with two add-ons in the same vertical is not an incidental buyer.' },
      { title: 'Personalized Outreach Campaigns', desc: 'Three-message cadences researched and written for each specific recipient, not templates. Fund-specific personalization grounded in their portfolio, deal history, and thesis language. Import and run on day one.' },
      { title: 'Buyer Opportunity Pages', desc: 'Custom single-page intelligence portals for each target buyer: thesis framing tailored to their criteria, Catalyst preview, direct engagement path. Designed to accelerate internal approval to engage.' },
    ],
  },

  'ai-mgmt': {
    label: 'AI Mgmt. Meetings',
    headline: 'Simulate buyer IC before the real meeting happens',
    anchorStat: '5',
    anchorLabel: 'Adversarial personas per simulation',
    anchorContext: 'Grounded in fund thesis, portfolio, and deal history',
    body: "Management teams that close deals have already been through the hardest version of the buyer conversation before it happened. Crossover builds fund-specific adversarial personas grounded in the named fund's actual investment thesis, portfolio, and deal history, then runs management through the IC as many times as needed. The real IC feels like a repeat performance because it is.",
    bankerProblem: "Management walks in cold. One stumble on churn risk or competitive displacement and the deal loses momentum it rarely recovers.",
    crossoverAnswer: "Management has already answered every blocking objection before the real IC. Fund-specific personas. The meeting feels like a repeat performance.",
    stats: [],
    features: [
      { title: 'Fund-Specific IC Simulation', desc: "For any named acquirer, five personas grounded in the fund's actual thesis, portfolio, and deal history. Which dimensions they'll interrogate, what evidence they demand, where they'll walk, built from primary research on the buyer rather than generic PE archetypes." },
      { title: 'Interactive Adversarial Mode', desc: 'Management plays themselves. The engine plays the buyer IC panel, turning every blocking objection into a live question. The session produces a readiness score by topic and a prioritized prep list.' },
      { title: 'VoC Evidence Integration', desc: "Every management response gets mapped against Crossover primary research. When management's answer contradicts what customers said, the simulation flags it immediately. Consistency between management claims and customer reports is the highest-value IC prep outcome." },
      { title: 'Seller IC Simulation', desc: "Before committing to a process, simulate your own fund's IC deliberation: five personas, fund-specific criteria, structured memo output with blocking objections and minimum evidence threshold. Know your IC's verdict before you commission a banker." },
      { title: 'Attack Surface Resolution Tracking', desc: 'Every simulation tracks objections: resolved, open, newly surfaced. Management knows which risks are universal across buyers versus buyer-specific. Prep compounds across multiple management presentations in the same process.' },
      { title: 'IC-Ready Investment Writeups', desc: 'Thesis-driven narratives built for a partner with 15 minutes between flights. Crossover Determinations lead every section, narrative before data, no survey language. Multi-agent adversarial QA before delivery.' },
    ],
  },

  cortex: {
    label: 'Cortex Research',
    headline: 'The proprietary intelligence engine underneath every Crossover capability',
    anchorStat: '30+',
    anchorLabel: 'Public signal sources',
    anchorContext: 'Respondent universe built without management input',
    body: "Cortex is why the research is independent by construction, not by policy. It builds the respondent universe from 30+ public signal sources without any input from management. It maintains the longitudinal benchmark database that makes every new study contextually meaningful. It powers the AI assistant layer that makes Crossover research queryable rather than static. And because Crossover's revenue model is sum of parts: mandate fee, CIM enhancement, Catalyst resales, secondary diligence. Cortex serves every party with the same data because no single party's economics can corrupt it.",
    bankerProblem: 'Expert networks give opinions. Management references give advocates. None of these sources resolve the information asymmetry both sides rely on.',
    crossoverAnswer: 'Cortex builds the respondent universe itself, from public signals no party controls. Both sides of a transaction can rely on the research because neither side chose who we talked to.',
    stats: [],
    features: [
      { title: '30+ Signal Source Universe', desc: 'Customer discovery from G2, Capterra, LinkedIn, conference data, patent filings, SEC disclosures, job postings, and 24 more sources. Management does not select the respondents. The research cannot be curated toward a predetermined conclusion.' },
      { title: 'Longitudinal Benchmark Database', desc: 'Every Crossover study writes back to a growing database of scores across sectors, company sizes, and competitive landscapes. Context makes scores meaningful: a 9.0 NPS in MDR vs. infrastructure software tells different stories.' },
      { title: 'Crossover Core 9 Methodology', desc: 'Nine standardized dimensions in every study: NPS, Renewal Intent, Switching Difficulty, Mission Criticality, Competitive Advantage, Replication Cost, Pricing Power, Management Quality, Growth Driver Durability. Consistent methodology means every study is comparable to every other.' },
      { title: 'Queryable Intelligence Portals', desc: 'Every deliverable is a hosted portal with an embedded AI assistant where buyers query in natural language, answers drawn from verified respondent data immediately. No analyst in the loop, no 48-hour turnaround. The research is alive for the duration of the process.' },
      { title: 'Sum-of-Parts Independence', desc: "Crossover monetizes across the full transaction lifecycle: mandate fee, success fee, CIM enhancement, Catalyst resales, secondary diligence. No single party extraction. Because no party drives disproportionate revenue, no party's agenda can corrupt the research. This is the structural answer to the conflict-of-interest question." },
      { title: 'Compounding Intelligence Asset', desc: 'The research built for a mandate pitch becomes the CIM evidence, the buyer pre-read, and the management prep material. Each engagement builds the benchmark database. Intelligence that compounds across the asset lifecycle rather than extracting once at close.' },
    ],
  },

};

export const IB_DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Independent by Construction',
    desc: "Cortex builds the respondent universe from 30+ public signal sources. Management doesn't select the references, neither side of the transaction controls who we interview. Both sides can rely on the research because both sides know neither of them chose the respondents.",
  },
  {
    num: '02',
    title: 'Weakness-First Methodology',
    desc: "Most research firms confirm the thesis. Crossover surfaces the gaps using independent respondents who weren't handpicked, findings that include the friction and the complaints. Operator Rebuttal finds weaknesses weeks before buyers do and builds customer-backed evidence to close them proactively. Research that includes limitations is the highest-credibility format available in private markets.",
  },
  {
    num: '03',
    title: 'The Independent Measurement Standard',
    desc: "In media, advertisers and networks both rely on Nielsen because neither can accept audience data the other produced. Private markets had no equivalent. Crossover is the independent measurement layer both sides can use, because neither side chooses the respondents and verbatim quotes can't be curated without being changed. Proof: sell-side mandate gave Crossover line of sight on Nerdio. Original fundamental view formed. Select funds alerted. GA took a 30-minute conviction brief, commissioned secondary diligence, validated the findings. $500M Series C at $1B+.",
  },
  {
    num: '04',
    title: 'Sum-of-Parts Economics',
    desc: "Consulting firms charge $100K+ per engagement because they justify the fee to one party, which means they're motivated to validate whatever that party paid for. Crossover monetizes across the full transaction lifecycle: mandate fee, success fee, CIM enhancement, Catalyst resales, secondary buy-side diligence. No single party extraction. No extraction incentive. The multi-sided revenue model is the structural proof of independence.",
  },
  {
    num: '05',
    title: 'Compounding Intelligence',
    desc: 'Each Crossover engagement builds the Cortex benchmark database. Each new study triangulates against existing benchmarks. Intelligence compounds across the asset lifecycle, not extracted once at close and discarded. The operator who commissions a study today contributes to the database that makes the next CIM more defensible.',
  },
];
