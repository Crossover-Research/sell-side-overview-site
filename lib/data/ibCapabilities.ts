export const IB_TRACK_RECORD = {
  mandatesSupported: '50+',
  jpmEngagements: '22+',
  totalTransactionValue: '$25B+',
  winRateWithCrossover: '50%',
  avgDeliveryDays: '14–21',
};

export const IB_WORKFLOW_STAGES = [
  { num: '01', label: 'Mandate Pitch',      desc: 'Evidence in the room before competing banks arrive' },
  { num: '02', label: 'CIM Enhancement',   desc: 'Customer-backed claims no buyer can challenge' },
  { num: '03', label: 'Buyer Intelligence', desc: 'Know conviction levels before the first call' },
  { num: '04', label: 'Process Execution',  desc: 'Compress diligence, accelerate buyer conviction' },
  { num: '05', label: 'Management Prep',    desc: 'Simulate buyer IC before the real meeting' },
  { num: '06', label: 'Close & Compound',   desc: 'Intelligence that builds across every mandate' },
];

export const IB_CAPS = ['mandate', 'narrative', 'buyers', 'process', 'prep'] as const;
export type IBCap = typeof IB_CAPS[number];

export interface CapabilityFeature { title: string; desc: string; }

export interface IBCapabilityData {
  label: string;
  headline: string;
  body: string;
  bankerProblem: string;
  crossoverAnswer: string;
  stats: { label: string; val: string }[];
  features: CapabilityFeature[];
}

export const IB_CAP_DATA: Record<IBCap, IBCapabilityData> = {
  mandate: {
    label: 'Mandate Pitch',
    headline: 'Win the mandate before the pitch meeting starts',
    body: "Before you pitch alongside five competing banks with identical decks, we deliver pre-engagement intelligence no other bank has. You walk in knowing the operator's verified customer base, ARR proxy, and competitive vulnerabilities from independent sources. You are not just another bank. You are the one who already knows the company better than anyone else in the room.",
    bankerProblem: 'You are pitching alongside 4 other banks with identical decks and identical relationship narratives. The client has no rational basis to choose you.',
    crossoverAnswer: 'We deliver a pre-engagement intelligence package on the target before your pitch meeting. You walk in with proprietary evidence. They do not.',
    stats: [],
    features: [
      { title: 'Pre-Pitch Intelligence Snapshot', desc: 'Verified customer universe, ARR proxy, competitive vulnerabilities, and one anchoring verbatim delivered in under 48 hours. In the room before competing banks finish reading the teaser.' },
      { title: 'Catalyst Pre-Built Study Access', desc: 'If your target is in the Catalyst library, 30-100+ verified respondents across 9 benchmark dimensions are available within hours. Research your competitors would take 6 weeks to commission, delivered before the pitch.' },
      { title: 'Competitive Moat Assessment', desc: 'Switching cost evidence, replication difficulty, and retention signals scored from verified respondents. If the moat does not hold under primary research, you know before the CIM reaches buyers.' },
      { title: 'Customer Universe Discovery', desc: 'Verified customer base mapped from 30+ public signal sources: 350-600 organizations with enriched contacts. The foundation for every subsequent piece of research, built before a single interview is commissioned.' }
    ],
  },

  narrative: {
    label: 'CIM Enhancement',
    headline: 'Customer evidence that survives LP scrutiny',
    body: 'The most scrutinized pages in any CIM make claims about customer loyalty, market position, and competitive differentiation. Buyers discount management-sourced evidence before the first page turn. Crossover replaces assertion with independently sourced primary research from verified customers the sell-side did not select.',
    bankerProblem: 'Your CIM has claims like "best-in-class NPS" and "category-leading retention." Sophisticated buyers know these come from management. They discount them before the first page turn.',
    crossoverAnswer: 'Every retention claim, NPS benchmark, and competitive positioning statement in the CIM traces to verified respondents the buyer did not select. Assertion becomes sourced data. Skepticism becomes conviction.',
    stats: [],
    features: [
      { title: 'Crossover Core 9 Benchmarking', desc: 'Nine standardized dimensions: NPS, Renewal Intent, Switching Difficulty, Mission Criticality, and five more: benchmarkable against every comparable study we have run. A 9.0 NPS means something different when you can show it ranks in the top decile of 40 MDR studies.' },
      { title: 'CIM Evidence Insertion', desc: 'Customer-backed proof points written for direct insertion into CIM narrative sections: verbatims formatted for the management presentation, NPS benchmarks calibrated to the competitive set. Every sentence in the customer section traces to a Crossover respondent.' },
      { title: 'Van Westendorp Pricing Analysis', desc: 'Four-question pricing battery in every study produces the acceptable price range, optimal price point, and indifference price: mapped against competitive alternatives. Supports the revenue growth narrative with independent price elasticity evidence, not management optimism.' },
      { title: 'Competitive Benchmarking Scorecard', desc: 'Across 8-12 named competitors, every dimension of the competitive landscape is scored from verified customer responses: who wins where, what drives switching, where the target is vulnerable. The CIM\'s competitive section gets a scorecard buyers cannot replicate without their own 6-week study.' },
      { title: 'Mission Criticality Evidence', desc: 'Direct measurement of what happens to the customer\'s business if the product goes away, what the workaround costs, and how many systems depend on it. A 9.0/10 mission criticality score from 75 verified respondents is not a claim that can be challenged in buyer IC.' },
      { title: 'Verbatim Evidence Extraction', desc: 'Unedited customer voice organized by theme: switching costs, competitive differentiation, ROI, management: with full respondent attribution. The management presentation\'s customer pages stop looking like marketing and start looking like research.' },
    ],
  },

  buyers: {
    label: 'Buyer Intelligence',
    headline: 'Know conviction levels before the first call',
    body: 'Banks send the same process letter to the same 40 names and wait. Crossover builds a scored buyer landscape: strategic acquirers mapped against competitive synergy, financial buyers scored on mandate fit and fund dynamics: and delivers a researched outreach campaign on day one of the process.',
    bankerProblem: 'You send a generic process letter to 40 buyers and wait. You have no visibility into which buyers have the highest conviction before they respond.',
    crossoverAnswer: 'We score every potential acquirer before the first call: IC simulation to assess their likely objections, portfolio fit, and fund dynamics. You know which buyers will bid at the highest conviction before you prioritize management\'s time.',
    stats: [],
    features: [
      { title: 'Scored Buyer Landscape', desc: 'Every potential acquirer assessed on mandate fit and fund dynamics: sector thesis, deal size, deployment velocity, LP pressure, and competitive portfolio conflicts. The top 50 most qualified buyers are ranked before the first call goes out.' },
      { title: 'IC Simulation for Top Buyers', desc: 'For the top 5 buyer candidates, we simulate their IC: what dimensions they will interrogate, what evidence they demand, where they will walk. Use it to pre-screen which buyers are worth management\'s time before the first NDA is signed.' },
      { title: 'Strategic Acquirer Intelligence', desc: 'For each strategic candidate, we map the competitive synergy case, integration logic, and likely deal structure. The outreach message demonstrates you understand their business case better than they have articulated it yet.' },
      { title: 'Financial Buyer Fund Dynamics', desc: 'Hold period monitoring, fund deployment pace, and competitive ownership patterns surface which funds are most motivated before they post a mandate. A fund at year 4 of 5 with two add-ons in the same vertical is not an incidental buyer.' },
      { title: 'Klenty-Ready Outreach Campaigns', desc: 'Three-message cadences researched and written for each specific recipient: not templates. Fund-specific personalization hooks grounded in their portfolio, deal history, and thesis language. Ready to import and run on day one of the process.' },
      { title: 'Buyer Opportunity Pages', desc: 'Custom single-page intelligence portals for each target buyer: thesis framing tailored to their criteria, what the Catalyst report covers, and a direct engagement path. Designed to accelerate internal approval to engage rather than sitting in a data room queue.' },
    ],
  },

  process: {
    label: 'Process Execution',
    headline: 'Compress buyer diligence from weeks to days',
    body: 'Buyer diligence drags 6-10 weeks because every buyer commissions independent research on the same questions. Crossover evidence is pre-positioned in the data room as a queryable intelligence portal. Buyers arrive at the LOI stage already convinced because the research was done before exclusivity.',
    bankerProblem: 'Buyer diligence drags for 6-10 weeks because every buyer is validating customer retention, competitive positioning, and pricing power from scratch.',
    crossoverAnswer: 'Crossover evidence is pre-positioned in the data room. Buyers access a queryable portal that answers the IC questions before they are asked. Diligence telescopes because the research is done before exclusivity.',
    stats: [],
    features: [
      { title: 'Queryable Intelligence Portals', desc: 'Every deliverable is a hosted portal with an embedded AI assistant: buyers query in natural language, the portal answers immediately from verified respondent data. No analyst in the loop, no 48-hour turnaround on follow-up questions.' },
      { title: 'Catalyst Data Room Integration', desc: 'Buyers who would otherwise spend 6 weeks commissioning their own VoC find 50-100+ verified respondents, benchmarked across 9 dimensions, already completed. The first buyer to access Catalyst enters exclusivity with the highest conviction: and the most aggressive price.' },
      { title: 'Attack Surface Pre-Emption', desc: 'Nine canonical IC attack vectors assessed against the VoC evidence before any buyer raises them: revenue quality, churn risk, moat durability, and six more, each with a sourced rebuttal. The process does not stall because management was caught unprepared.' },
      { title: 'Parallel Buyer Diligence Support', desc: 'Multiple buyers running simultaneous diligence generate questions answered from the shared intelligence layer: no separate reference check processes per bidder. Management time concentrates on highest-conviction buyers while research handles the rest.' },
      { title: 'Buy-Side Diligence Augmentation', desc: 'Respondent list built from public signals (no management references), survey scoped to your IC questions, 50-100+ responses, IC-ready writeup with attack surface analysis. Independent by construction. 5-10 day turnaround.' },
      { title: 'CIM and Management Presentation Layer', desc: 'Every claim in the CIM that touches customer quality, competitive positioning, or market position gets a Crossover evidence layer: specific statistic, supporting verbatim, benchmark context. No assertion is unsourced.' },
    ],
  },

  prep: {
    label: 'Management Prep',
    headline: 'Simulate buyer IC before the real meeting happens',
    body: 'Management teams that close deals have already been through the hardest version of the buyer conversation before it happened. Crossover simulates fund-specific IC deliberations with adversarial personas grounded in the named fund\'s actual investment thesis. The real IC feels like a repeat performance.',
    bankerProblem: 'Management walks into buyer IC meetings cold on the hardest questions. When a sophisticated buyer pushes on churn risk or competitive displacement and management stumbles, the deal loses momentum it rarely recovers.',
    crossoverAnswer: 'We simulate the buyer\'s IC before the meeting using fund-specific personas grounded in their actual investment thesis and deal history. Management has already answered every blocking objection. The real IC is not a surprise.',
    stats: [],
    features: [
      { title: 'Buyer IC Simulation Engine', desc: 'For any named acquirer, we simulate their IC: five personas grounded in the fund\'s actual thesis, portfolio, and deal history. The output: which dimensions they will interrogate, what evidence they demand, and where they are likely to walk.' },
      { title: 'Interactive Management Prep Mode', desc: 'Management plays themselves, the engine plays the buyer IC panel: every blocking objection turned into a live question. The session produces a readiness score by topic and a prioritized prep list. The real IC feels like a repeat.' },
      { title: 'Attack Surface Mapping', desc: 'Nine canonical attack vectors mapped against VoC evidence: each with the adversarial framing a GP would use, the rebuttal evidence, and a residual risk flag if the evidence is thin. Management walks into IC knowing where the pushback will come.' },
      { title: 'IC-Ready Investment Writeups', desc: 'Thesis-driven narratives built for a partner with 15 minutes between flights: Crossover Determinations lead every section, no survey language, narrative before data. Passes a six-agent QA sweep before delivery.' },
      { title: 'Seller IC Simulation', desc: 'Before committing to a process, simulate your own fund\'s IC deliberation: five personas, fund-specific criteria, structured memo output with blocking objections and minimum evidence threshold. Know your IC\'s verdict before you commission a banker.' },
      { title: 'Objection Library Compounding', desc: 'Every simulation and prep session adds to an objection library tied to the mandate: resolved, open, and newly surfaced objections tracked across multiple buyer conversations. Management knows which risks are universal versus buyer-specific.' },
    ],
  }

};

export const IB_DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Independent by Construction',
    desc: 'We build the respondent universe ourselves from 30+ public signal sources — management does not select the references, the sell-side cannot curate the evidence. Every finding survives buyer IC scrutiny because no one in the transaction controlled who we talked to.',
  },
  {
    num: '02',
    title: 'Built for the Transaction Clock',
    desc: 'Catalyst pre-built studies are available immediately. Custom studies turn in 5-10 days. Pre-pitch snapshots in 48 hours. Every capability is designed around the constraint that matters: the first-round bid date.',
  },
  {
    num: '03',
    title: 'The Independent Measurement Standard',
    desc: 'In media, advertisers and networks both rely on Nielsen because neither can accept audience data the other produced. Private markets had no equivalent — until now. Crossover is the independent measurement layer both sides of a transaction can use, because neither side chooses the respondents and verbatim quotes cannot be curated without being changed. Proof: J.P. Morgan commissioned Crossover research to win the Nerdio Series C mandate. General Atlantic used the same research — the verbatim truth from those same interviews — as the foundation for their investment thesis and $500M conviction.',
  },
  {
    num: '04',
    title: 'Queryable, Not Static',
    desc: 'Every deliverable is a hosted portal with an embedded AI assistant — your team queries in natural language, no analyst in the loop, no static PDF. The research is alive for the duration of the process.',
  },
  {
    num: '05',
    title: 'Trusted by J.P. Morgan, Used on $25B+',
    desc: '"Having a Voice of Customer document was seen as a differentiator by the client." 22+ engagements with J.P. Morgan alone. $25B+ in transaction value supported. 50% win rate on mandates where Crossover was part of the pitch.',
  },
];
