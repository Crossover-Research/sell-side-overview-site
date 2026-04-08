import type { TrackStatItem, AdvantageCard, EngagementCard } from '../types';




export const TRACK_STATS: TrackStatItem[] = [
  {
    num: "50%",
    label: "Win rate on mandates with Crossover research"
  },
  {
    num: "22+",
    label: "Completed engagements with J.P. Morgan alone"
  },
  {
    num: "$25B+",
    label: "Total transaction value supported"
  },
  {
    num: "PE/IB",
    label: "Both buy-side and sell-side coverage: GA, Battery, Lead Edge & others"
  }
];

export const ADVANTAGE_CARDS: AdvantageCard[] = [
  {
    title: "Win the Mandate",
    desc: "4-6 banks compete on every tech mandate. Crossover data is concrete differentiation that competitors cannot replicate on your timeline. It changes the conversation from \"trust us\" to \"here's what customers actually said.\""
  },
  {
    title: "Anchor the CIM",
    desc: "\"84% of verified customers say Red Canary costs less than building in-house\" is an independent, third-party claim. It lands in the CIM as sourced evidence, not management narrative. Buyers cannot challenge what they didn't produce."
  },
  {
    title: "Compress Diligence",
    desc: "Buyer IC questions about stickiness, replication cost, and moat are answered before they're asked. That shortens the diligence window and lets you close on the seller's timeline."
  },
  {
    title: "Bypass the Credibility Filter",
    desc: "Post-2022 buyers are structurally skeptical of management-sourced evidence. Crossover data is the only format that survives IC-level interrogation. It is not supplemental. It is the credibility infrastructure."
  },
  {
    title: "Know the Asset Better Than the Room",
    desc: "When you can quote verified customer switching costs, NPS, and replication difficulty before the operator speaks, you own the valuation narrative. Independent customer data builds faster buyer conviction, supports stronger multiples, and compresses the path from mandate to close."
  },
  {
    title: "Built for the Sell-Side Timeline",
    desc: "Every engagement is scoped to your process milestones, not a generic research calendar. Catalyst portfolio delivery is immediate. Custom studies are scoped to your first-round bid date."
  }
];

export const ENGAGEMENT_OPTIONS: EngagementCard[] = [
  {
    label: "Option A",
    type: "Live Mandate",
    desc: "You have a company and a process stage. We scope immediately to your diligence timeline and IC questions.",
    steps: [
      "Share company name and current process stage",
      "Immediate delivery if covered in Catalyst portfolio",
      "Custom study scoped to your bid date if not",
      "IC-ready data before first-round bids close"
    ],
    ctaText: "Start a Mandate",
    ctaHref: "mailto:ian@crossoverresearch.com"
  },
  {
    label: "Option B",
    type: "Upcoming Pitch",
    desc: "You have a target company and a pitch date. We check Catalyst coverage immediately and confirm what fits your window.",
    steps: [
      "Provide company name and pitch date",
      "Immediate Catalyst coverage check",
      "Production timeline confirmed vs. your window",
      "Report in pitch deck is the primary differentiator"
    ],
    ctaText: "Prep a Pitch",
    ctaHref: "mailto:ian@crossoverresearch.com"
  },
  {
    label: "Option C",
    type: "20-Minute Call",
    desc: "You want to understand how Crossover data fits into your process. We walk through sample outputs and scoping options.",
    steps: [
      "Schedule a 20-minute call",
      "See live examples of Catalyst reports",
      "Understand custom study options and timelines",
      "Get immediate answer: is your target already covered?"
    ],
    ctaText: "Book a Call",
    ctaHref: "https://book.crossoverresearch.com/#/crossoverresearch",
    ctaTarget: "_blank"
  }
];

export const CONTACT_INFO = {
  name: "Ian McArdle",
  title: "Head of Strategic Partnerships • Crossover Research",
  email: "ian@crossoverresearch.com"
};