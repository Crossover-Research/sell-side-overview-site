/**
 * Investment Banking Capability Framework
 * 7 pillars mapped to the sell-side banker workflow.
 * Mirrors the architecture of fund-capability-showcase but
 * scoped to IB mandate lifecycle rather than PE investment lifecycle.
 */

export const IB_TRACK_RECORD = {
  mandatesSupported: '50+',
  jpmEngagements: '22+',
  totalTransactionValue: '$25B+',
  winRateWithCrossover: '50%',
  avgDeliveryDays: '5–10',
  verifiedRespondentsDeployed: '3,500+',
};

export const IB_WORKFLOW_STAGES = [
  { num: '01', label: 'Mandate Pursuit',    desc: 'Evidence in the room before competing banks arrive' },
  { num: '02', label: 'Equity Narrative',    desc: 'Customer-backed claims no buyer can challenge' },
  { num: '03', label: 'Buyer Intelligence',  desc: 'Know conviction levels before the first call' },
  { num: '04', label: 'Process Execution',   desc: 'Compress diligence, accelerate buyer conviction' },
  { num: '05', label: 'Management Prep',     desc: 'Simulate buyer IC before the real meeting' },
  { num: '06', label: 'Close & Compound',    desc: 'Intelligence that builds across every mandate' },
];

export const IB_CAPS = ['mandate', 'narrative', 'buyers', 'process', 'prep', 'intelligence'] as const;
export type IBCap = typeof IB_CAPS[number];

export interface CapabilityFeature {
  title: string;
  desc: string;
}

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
    label: 'Mandate Pursuit',
    headline: 'Win the mandate before the pitch meeting starts',
    body: 'Every tech mandate has five competing banks. They all walk in with the same public comps, the same analyst reports, and the same management-sourced diligence. Crossover walks in with something none of them have: independent customer evidence built before the pitch. Pre-engagement intelligence snapshots, verified customer universe maps, and ARR proxy triangulation — delivered in under 48 hours for any B2B software target. The room knows within two minutes which bank did the real work.',
    bankerProblem: 'You are pitching alongside 4 other banks with identical decks, identical comps, and identical relationship narratives. The client has no rational basis to choose you.',
    crossoverAnswer: 'We deliver a pre-engagement intelligence package on the target — verified customer universe, ARR proxy triangulation, competitive positioning snapshot — before your pitch meeting. You walk in with proprietary evidence. They do not.',
    stats: [
      { label: 'Intelligence snapshot delivery', val: '< 48 hrs' },
      { label: 'Signal sources scanned', val: '30+' },
      { label: 'Verified customer orgs mapped', val: '350–600' },
      { label: 'Mandate win rate with Crossover', val: '50%' },
    ],
    features: [
      {
        title: 'Pre-Pitch Intelligence Snapshot',
        desc: 'A structured intelligence brief on any B2B software target, delivered in under 48 hours: verified customer universe size, ARR proxy range triangulated from five independent signals, top 3 competitive vulnerabilities, NPS benchmark context from comparable studies, and one customer verbatim surfaced from public sources that anchors the equity story. Enough to differentiate your pitch. Delivered before the competing banks have finished reading the teaser.',
      },
      {
        title: 'ARR Proxy Triangulation',
        desc: 'Five independent signals combined into a reliable ARR bracket before you rely on management-provided financials: LinkedIn headcount composition (AE-to-CSM ratio, VP Sales tenure patterns), job posting velocity and mix, G2/Capterra review volume trajectory, ecosystem partner tier, and marketplace listing signals. Surfaces the revenue story with independent corroboration. Your financial model goes into the pitch with a confidence interval, not just a management number.',
      },
      {
        title: 'Catalyst Pre-Built Study Access',
        desc: 'Crossover maintains a growing library of completed VoC studies on institutional-grade B2B software assets — available immediately. If your target is covered, you receive the full Catalyst report within hours of mandate inquiry: 50-100+ verified customer respondents across 9 benchmark dimensions, competitive scoring, verbatim evidence, and pricing analysis. The research your competitors would take 6 weeks to commission, you get before the pitch.',
      },
      {
        title: 'Competitive Moat Assessment',
        desc: 'Before you stake your firm\'s credibility on an equity story, we validate the moat claims. Independent scoring across switching cost evidence, replication difficulty versus named competitors, and customer retention signals — all sourced from verified respondents rather than management. If the moat does not hold up under primary research, you know before the CIM goes to buyers, not after.',
      },
      {
        title: 'Customer Universe Discovery',
        desc: 'Exhaustive mapping of a target company\'s verified customer base from 30+ public signal sources: case studies, conference speaker lists, G2 and Capterra profiles, implementation partner pages, job postings, developer communities, and press releases. 350-600 verified customer organizations per scan, with enriched contacts ready for outreach. The foundation for every subsequent piece of research — built before you commission a single interview.',
      },
      {
        title: 'Sector Mandate Intelligence',
        desc: 'Continuous scanning of PE portfolio hold periods, management team movements, fund deployment patterns, and sector M&A velocity. Surfaces companies approaching a process 12-18 months ahead of the banker call: hold period plus activity signals, management team changes, advisor additions, and board composition shifts. Know which assets are approaching a process before the company\'s management has decided to run one.',
      },
    ],
  },

  narrative: {
    label: 'Equity Narrative',
    headline: 'Customer evidence that survives LP scrutiny',
    body: 'The most scrutinized pages in any CIM are the ones that make claims about customer loyalty, market position, and competitive differentiation. Buyers have seen management-sourced reference letters. They have read the hand-picked G2 reviews. What they cannot challenge is independently sourced, statistically significant primary research from verified customers they did not select. Crossover evidence does not live in a footnote. It is the credibility infrastructure that makes every other claim in the document defensible.',
    bankerProblem: 'Your CIM has claims like "best-in-class NPS" and "category-leading retention." Sophisticated buyers know these come from management. They discount them before the first page turn.',
    crossoverAnswer: 'We replace assertion with evidence. Every retention claim, NPS benchmark, and competitive positioning statement in the CIM traces to verified respondents the buyer did not select. The claim becomes a sourced data point. The skepticism becomes conviction.',
    stats: [
      { label: 'Respondents per VoC study', val: '50–100+' },
      { label: 'Benchmark dimensions (Core 9)', val: '9' },
      { label: 'Vendors benchmarked per study', val: '8–12' },
      { label: 'Typical study turnaround', val: '5–10 days' },
    ],
    features: [
      {
        title: 'Crossover Core 9 Benchmarking',
        desc: 'Nine standardized dimensions scored on 0-10 scales across every study: NPS, Renewal Intent, Switching Difficulty, Implementation Quality, Support Satisfaction, Overall Satisfaction, Mission Criticality, ROI Perception, and Competitive Comparison. Every score is benchmarkable against comparable studies in the same vertical. "9.0 NPS" means something different when you can show it ranks in the top decile of 40 comparable MDR studies. The benchmark context is what makes the number credible.',
      },
      {
        title: 'CIM Evidence Insertion',
        desc: 'Customer-backed proof points written for direct insertion into CIM narrative sections: verbatim quotes formatted for the management presentation, NPS benchmark language calibrated to the competitive set, retention evidence framed against named alternatives. Every sentence in the CIM\'s customer section traces to a Crossover study respondent. Not a "customer letter." Not a reference check. A statistically significant primary research finding with full methodology disclosure.',
      },
      {
        title: 'Van Westendorp Pricing Analysis',
        desc: 'Four-question pricing battery embedded in every study: too expensive, expensive but acceptable, bargain, and too cheap. Produces the acceptable price range, optimal price point, and indifference price — mapped against competitive alternatives. For the CIM\'s pricing section, this means you can assert "customers report significant room for price increases versus alternatives" with supporting data, not just management optimism. Supports the revenue growth narrative with independent price elasticity evidence.',
      },
      {
        title: 'Competitive Benchmarking Scorecard',
        desc: 'Across 8-12 named competitors per study, we score every dimension of the competitive landscape from verified customer responses: who wins in which segment, which features drive switching decisions, where the target has structural advantages versus alternatives, and where it is vulnerable. The CIM\'s competitive differentiation section gets a benchmarking scorecard that buyers cannot replicate without commissioning their own study — which takes six weeks and arrives after the first-round bids close.',
      },
      {
        title: 'Mission Criticality Evidence',
        desc: 'The most important claim in any enterprise software equity story is that customers cannot run their operations without the product. We measure mission criticality directly — what happens to the customer\'s business if the product goes away, what the manual workaround costs, and how many other systems depend on the product. A score of 9.0/10 on mission criticality, sourced from 75 verified respondents, is not a claim that can be challenged in buyer IC.',
      },
      {
        title: 'Verbatim Evidence Extraction',
        desc: 'Unedited customer voice, formatted for institutional consumption. Verbatims organized by theme — switching costs, competitive differentiation, ROI evidence, management praise — with full respondent attribution (role, company size, segment, tenure as customer). The management presentation\'s customer pages stop looking like marketing and start looking like research. That is the difference between a buyer who enters the room skeptical and one who enters the room convinced.',
      },
    ],
  },

  buyers: {
    label: 'Buyer Intelligence',
    headline: 'Know conviction levels before the first call',
    body: 'Buyer selection in a sell-side process is where most value is left on the table. Banks send the same process letter to the same 40 names and wait for IOIs. Crossover builds a scored buyer landscape with conviction ratings — strategic acquirers mapped against competitive synergy and integration logic, financial buyers scored on the M&F model across mandate fit and fund dynamics. The result is not a list. It is a prioritized outreach campaign where every sequence is researched and written for the specific recipient, ready to run the day we deliver.',
    bankerProblem: 'You send a generic process letter to 40 buyers and wait. You have no visibility into which buyers have the highest conviction before they respond — which means you are spending equal time on a buyer who will bid 10x and one who will pass after one management call.',
    crossoverAnswer: 'We score every potential acquirer before the first call: IC simulation to assess their likely objections, portfolio fit analysis, fund dynamics assessment, and conviction rating. You know which buyers will bid at the highest conviction before you prioritize management\'s time.',
    stats: [
      { label: 'Fund/company match scores computed', val: '11,000+' },
      { label: 'Buyer types scored', val: 'Strategic + Financial' },
      { label: 'IC simulations per mandate', val: 'Top 5 buyers' },
      { label: 'Outreach campaign delivery', val: 'Day 1 of process' },
    ],
    features: [
      {
        title: 'Scored Buyer Landscape',
        desc: 'Every potential acquirer assessed across two dimensions: mandate fit (sector thesis alignment, deal size compatibility, stage preference, hold period) and fund dynamics (recent deployment velocity, LP pressure signals, team bandwidth from active deal count, and competitive portfolio conflicts). Financial buyers get an M&F score. Strategic buyers get a competitive synergy and integration logic assessment. The output ranks the top 50 most qualified buyers and flags which have the most to gain from the asset.',
      },
      {
        title: 'IC Simulation for Top Buyers',
        desc: 'For the top 5 buyer candidates in your process, we simulate their Investment Committee using fund-specific grounded personas. The simulation identifies which investment dimensions they will interrogate, what evidence they will demand to proceed, where they are likely to walk, and what terms they historically require. Use it to pre-screen which buyers are worth management\'s time and to prepare management for the specific objections they will face in each meeting.',
      },
      {
        title: 'Strategic Acquirer Intelligence',
        desc: 'For each strategic acquirer candidate, we map the competitive synergy case, integration logic, and likely deal structure. Which product gaps does this asset fill? Which customer segments does it add? Which geographies does it unlock? What is the revenue synergy case they will take to their board? The outreach message to a strategic acquirer should demonstrate that you understand their business case better than they have articulated it yet.',
      },
      {
        title: 'Financial Buyer Fund Dynamics',
        desc: 'We monitor hold periods across PE portfolios, fund deployment patterns, LP pressure signals, and competitive ownership to identify which funds are most motivated to transact. A fund at year 3-4 of a 5-year fund with a comparable asset approaching exit needs a platform add-on. A fund that recently exited a market-leader in the same vertical is primed for a category bet. These patterns surface from public signals before the fund has posted the mandate on their website.',
      },
      {
        title: 'Klenty-Ready Outreach Campaigns',
        desc: 'Production-ready email campaign scripts tiered by buyer type: strategic acquirers, PE platform add-ons, and growth equity investors. Three-message cadences with buyer-specific personalization hooks grounded in their portfolio, deal history, and thesis language. Each sequence is researched and written for the specific recipient — not a template. Ready to import and run the day we deliver. The process letter goes out on day one, not after two weeks of analyst research.',
      },
      {
        title: 'Buyer Opportunity Pages',
        desc: 'Custom single-page intelligence portals built for each target buyer in your process. Asset overview, investment thesis framing tailored to their specific criteria, what the Catalyst report covers and what it answers for their IC, and a direct engagement path. Designed to accelerate the buyer\'s internal approval to engage rather than sitting in a data room queue. Buyers who receive an Opportunity Page engage 40% faster than those who receive a standard CIM.',
      },
    ],
  },

  process: {
    label: 'Process Execution',
    headline: 'Compress buyer diligence from weeks to days',
    body: 'The fastest deals close because buyers arrive at the LOI stage already convinced. They do not commission their own VoC study at the exclusivity stage because the evidence is already there. Crossover\'s queryable intelligence portals give buyers direct access to primary research they would otherwise spend 4-6 weeks commissioning — which means the diligence process is telescoped rather than sequential. Your deal does not wait for a competing fund to finish their expert network calls.',
    bankerProblem: 'Buyer diligence drags for 6-10 weeks because every buyer is commissioning independent research on the same questions. Each one needs to validate customer retention, competitive positioning, and pricing power from scratch.',
    crossoverAnswer: 'Crossover evidence is pre-positioned in the data room. Buyers access a queryable intelligence portal that answers the IC questions before they are asked. Diligence telescopes because the research is done before exclusivity.',
    stats: [
      { label: 'Catalyst studies available', val: '20+' },
      { label: 'Typical diligence compression', val: '4–6 wks' },
      { label: 'Portal query response time', val: 'Instant' },
      { label: 'Process support modes', val: 'Buy-side + Sell-side' },
    ],
    features: [
      {
        title: 'Queryable Intelligence Portals',
        desc: 'Every Crossover deliverable is a hosted intelligence portal with an embedded AI research assistant. Buyers query in natural language: "show me NPS by customer size," "which customers mentioned switching risk," "how does pricing satisfaction compare across the competitive set." The portal answers immediately from the underlying verified respondent data. No analyst in the loop. No 48-hour turnaround on follow-up questions. The data room stops being a document repository and becomes a live research engine.',
      },
      {
        title: 'Catalyst Data Room Integration',
        desc: 'Crossover\'s pre-built Catalyst studies integrate directly into the data room as the primary diligence evidence layer for customer intelligence. Buyers who would otherwise spend 6 weeks commissioning their own VoC study find 50-100+ verified respondents, benchmarked across 9 dimensions, with full methodology disclosure, already completed. The first competitive buyer to access Catalyst is the buyer who enters exclusivity negotiations with the highest conviction — and the most aggressive price.',
      },
      {
        title: 'Attack Surface Pre-Emption',
        desc: 'Before any buyer raises a diligence concern, we have mapped it. Nine canonical IC attack vectors — revenue quality, customer concentration, competitive moat durability, pricing power, implementation friction, churn risk, TAM ceiling, management depth, and technology obsolescence — assessed against the VoC evidence with a rebuttal for each. Management knows the attack before the buyer launches it. The process does not stall because a buyer found a data room gap that management was not prepared to answer.',
      },
      {
        title: 'Parallel Buyer Diligence Support',
        desc: 'In a competitive process, multiple buyers are running diligence simultaneously. Each one generates questions. Crossover answers them from the shared intelligence layer without requiring management to run separate reference check processes for each bidder. Management time is concentrated on highest-conviction buyers while the research infrastructure handles commodity diligence questions at scale.',
      },
      {
        title: 'Buy-Side Diligence Augmentation',
        desc: 'On the buy side, we serve as the primary customer research engine for a live process: build the respondent list from public signals (no management-provided references), design the survey instrument scoped to your IC questions, field 50-100+ responses, and deliver an IC-ready writeup with attack surface analysis. Turnaround in 5-10 days. Independent by construction. The research that competes with the sell-side diligence package — and often wins.',
      },
      {
        title: 'CIM and Management Presentation Layer',
        desc: 'Every page of the CIM and management presentation that makes a claim about customer quality, competitive differentiation, or market position gets a Crossover evidence layer: the specific statistic from the primary research, the verbatim that supports the narrative, and the benchmark context that makes the number meaningful. No claim in the document is unsourced. No assertion survives that primary research does not support.',
      },
    ],
  },

  prep: {
    label: 'Management Prep',
    headline: 'Simulate buyer IC before the real meeting happens',
    body: 'Management teams that close deals are the ones who have already been through the hardest version of the buyer conversation before it happened. Crossover\'s IC simulation engine runs fund-specific Investment Committee deliberations with adversarial personas grounded in the named fund\'s actual investment thesis, portfolio, and deal history. Management answers every blocking objection in a controlled environment first. The real IC feels like a repeat performance. Companies that run management prep close faster and at better terms — the research speaks for itself.',
    bankerProblem: 'Management walks into buyer IC meetings cold on the hardest questions. When a sophisticated buyer pushes on churn risk or competitive displacement and management stumbles, the deal loses momentum it rarely recovers.',
    crossoverAnswer: 'We simulate the buyer\'s IC before the meeting using fund-specific personas grounded in their actual investment thesis and deal history. Management has already answered every blocking objection. The real IC is not a surprise.',
    stats: [
      { label: 'IC simulation modes', val: '3' },
      { label: 'Persona archetypes per simulation', val: '5' },
      { label: 'Attack vectors stress-tested', val: '9' },
      { label: 'Output format', val: 'IC Memo + Objection Library' },
    ],
    features: [
      {
        title: 'Buyer IC Simulation Engine',
        desc: 'For any named acquirer in your buyer universe, we simulate their Investment Committee. Five personas — the Outside Skeptic, LP Voice, Operating Partner, Deal Champion, and IC Chair — grounded in the fund\'s actual investment thesis, portfolio composition, typical hold period, and deal history. The simulation identifies which dimensions they will interrogate, what evidence they will demand, where they are likely to walk, and what concessions they historically require. Your management team knows the specific buyer\'s objections before the meeting.',
      },
      {
        title: 'Interactive Management Prep Mode',
        desc: 'Management plays themselves. The simulation engine plays the buyer IC panel. Every blocking objection from the attack surface analysis gets turned into a live question. Management answers, the panel probes, the engine identifies gaps in the answer, and the session produces a readiness score by topic area plus a prioritized prep list. The prep session is harder than the real meeting by design. Management that survives Crossover prep does not get caught flat-footed in the actual room.',
      },
      {
        title: 'Attack Surface Mapping',
        desc: 'Nine canonical PE attack vectors mapped against the Crossover VoC evidence: revenue quality, customer concentration, competitive moat durability, pricing power, implementation friction, churn risk, TAM ceiling, management depth, and technology obsolescence. Each vector gets the adversarial framing a GP would use, the VoC rebuttal evidence, and a residual risk flag if the evidence is insufficient to close the objection. Management walks into IC knowing exactly where the pushback will come and what to say.',
      },
      {
        title: 'IC-Ready Investment Writeups',
        desc: 'Thesis-driven narrative documents built for a PE partner reading with 15 minutes between flights. Crossover Determinations — our structured conclusions on each investment dimension — lead every section. Narrative leads the data. Survey language is banned. The bar is whether your IC would give this to an LP and feel it makes them look smarter. Every writeup passes a six-agent QA sweep before delivery: analytical rigor, narrative quality, evidence sufficiency, GP voice calibration, management suitability, and buyer readiness.',
      },
      {
        title: 'Seller IC Simulation',
        desc: 'Before committing your firm to a process, simulate the seller\'s own Investment Committee deliberation. Five personas debate the mandate using fund-specific investment criteria and thesis alignment. The Chair synthesizes a structured memo: blocking objections, the deciding question, the minimum evidence threshold required to proceed, and a targeted research brief for any gaps. Know whether the sell-side story holds before you commit management time to a process that will fail at the IC stage.',
      },
      {
        title: 'Objection Library Compounding',
        desc: 'Every IC simulation and management prep session adds to an objection library tied to the mandate. The engine tracks which objections were resolved, which remain open, which new ones emerged from additional diligence, and what the net readiness trajectory looks like. Across multiple buyer conversations, management knows which objections are universal (structural risks that need a rebuttal) versus buyer-specific (thesis misalignment they can route around). The library compounds across the process.',
      },
    ],
  },

  intelligence: {
    label: 'Deal Flow Intelligence',
    headline: 'Proprietary signals that surface mandates before they exist',
    body: 'The most valuable intelligence in investment banking is knowing which companies are approaching a process before the management team has decided to run one. Crossover\'s continuous signal monitoring tracks PE portfolio hold periods, management team movements, sector M&A velocity, fund deployment patterns, and advisor activity across 30+ source types. When a combination of signals converges — hold period threshold, management team shuffle, advisor addition, sector comps pricing — you get an alert. Your coverage call is not a cold call. It is a conversation you have been positioned for months in advance.',
    bankerProblem: 'Your coverage calls are reactive. You learn a company is running a process when a banker you know gets the mandate, or when the teaser lands in your inbox after someone else was hired.',
    crossoverAnswer: 'We monitor 30+ signal sources continuously and surface convergence alerts when a combination of hold period, management movement, advisor addition, and sector signals indicate a process is approaching. You call before the pitch list is finalized.',
    stats: [
      { label: 'Signal sources monitored', val: '30+' },
      { label: 'Studies in longitudinal database', val: 'Growing' },
      { label: 'Portfolio hold period coverage', val: 'Continuous' },
      { label: 'Lead time advantage', val: '12–18 months' },
    ],
    features: [
      {
        title: 'Pipeline Signal Monitoring',
        desc: 'Continuous scanning of PE portfolio hold periods, management team movements, board changes, advisor additions, sector M&A velocity, and fund deployment patterns. Surfaces three types of signals: companies approaching a process (hold period threshold plus convergent activity), dormant relationships that should be reactivated (prior Crossover engagement with no recent activity), and new sector entrants that represent sourcing targets. The signals are specific enough to brief a relationship banker for a targeted conversation.',
      },
      {
        title: 'Sector M&A Velocity Tracking',
        desc: 'Real-time monitoring of sector transaction activity: deal announcements, valuation multiples, buyer identity, diligence timeline signals, and advisor selection patterns. When a sector heats up — three transactions in six months at expanding multiples — we surface the next likely target based on comparable profile, hold period, and management activity. Coverage strategy is informed by data, not gut feel about which sectors are hot.',
      },
      {
        title: 'Longitudinal Intelligence Database',
        desc: 'Every completed Crossover study writes back into a structured intelligence database: NPS by study and date, mission criticality scores, competitive rankings, proof points, risk flags, and verbatim quotes. As we complete more studies in a vertical, every subsequent engagement benchmarks against the full history. A mission criticality score of 7.8 means something different when you can compare it against 18 prior studies in the same sector. The intelligence compounds.',
      },
      {
        title: 'Competitive Intelligence Tracking',
        desc: 'Ongoing monitoring of named competitors across your active mandates: pricing changes, product announcements, G2 review velocity shifts, customer win/loss signals, and M&A activity. When a direct competitor raises a round or gets acquired, we update the competitive benchmarking within days and flag the downstream impact on your mandate\'s positioning. The equity story stays current throughout the process.',
      },
      {
        title: 'Fund Activity Signal Detection',
        desc: 'Monitors fund hiring patterns, platform company announcements, and deployment pace to surface which funds are actively looking in your sector before they post an LOI. A fund that recently promoted a sector specialist, hired an operating partner with relevant domain expertise, and completed two add-ons in the same vertical in 18 months is not an incidental buyer. They are building a thesis. Getting to them before they engage a competitor starts a relationship, not a pitch.',
      },
      {
        title: 'Cross-Mandate Learning',
        desc: 'Every mandate we support adds to the coverage intelligence available on the next one. Buyer preferences identified in one process inform the outreach strategy for the next comparable asset. Objections that surfaced in one buyer IC get catalogued for the next management prep session on a similar company. Competitive benchmarks from one sector become the baseline for the next study in the same vertical. The intelligence platform gets sharper with every engagement, not just the database.',
      },
    ],
  },
};

export const IB_DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Independent by Construction',
    desc: 'Crossover builds the respondent universe itself from 30+ public signal sources — case studies, conference speaker lists, G2 profiles, implementation partner pages, job postings, and developer communities. Management does not select the references. The sell-side cannot curate the evidence. Every finding is independently sourced, which is why it survives buyer IC scrutiny in a way that management-selected references never will.',
  },
  {
    num: '02',
    title: 'Built for the Transaction Clock',
    desc: 'The single most important feature of Crossover intelligence is speed. A Catalyst pre-built study is available immediately. A custom study turns in 5-10 days. A pre-pitch intelligence snapshot arrives in under 48 hours. Transaction processes do not wait for six-week research timelines — and neither do we. Every capability is designed around the constraint that actually matters: the first-round bid date.',
  },
  {
    num: '03',
    title: 'Both Sides of the Same Transaction',
    desc: 'Crossover data serves sell-side advisors building the equity story, buy-side funds evaluating the target, and management teams preparing for IC. One independent source trusted by every party in the room. We are not an advisor to one side. We are the intelligence layer that makes every participant in the transaction better informed — which is why the process closes faster.',
  },
  {
    num: '04',
    title: 'Queryable, Not Static',
    desc: 'Every deliverable is a hosted intelligence portal with an embedded AI assistant. Your deal team queries the underlying data in natural language — no waiting for an analyst, no 48-hour turnaround on follow-up questions, no static PDF that is out of date by the time management has read it. The research is alive for the duration of the process.',
  },
  {
    num: '05',
    title: 'Trusted by J.P. Morgan, Used on $25B+',
    desc: '"Having a Voice of Customer document was seen as a differentiator by the client. The findings from your report were a key part of the equity story materials we presented." 22+ completed engagements with J.P. Morgan alone. $25B+ in transaction value supported. 50% win rate on mandates where Crossover research was part of the pitch. The track record exists because the work is differentiated.',
  },
];
