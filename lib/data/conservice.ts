// Conservice VoC study data
import type { ICCard, VerbatimCard } from '../types';

export const IC_CARDS_CONSERVICE: ICCard[] = [
  {
    num: '01',
    question: 'Can a buyer or a PMS-embedded tool replicate what Conservice does?',
    verdict: 'Category leader; only vendor above 7.0 on all six core metrics',
    stat: { num: '6/6', label: 'core metrics above 7.0' },
    finding: 'Conservice is the only vendor in the benchmark to clear 7.0 on all six operational metrics: Implementation 7.5, Support 8.2, Satisfaction 8.1, ROI 7.7, Recommend 8.3, Renewal 8.2. On the core job — utility billing accuracy and recovery — it leads the field at 8.5 versus a 7.6 all-vendor average, ahead of AppFolio 8.0, Yardi Energy 7.1, Entrata 6.0 and RealPage 4.5. Customers who tried PMS-embedded utility modules report resident complaints and missed recovery before standardizing on Conservice.',
    quote: { text: 'Our portfolio spans RealPage, Yardi, and Entrata. We previously used PMS utility services from Yardi and RealPage, which led to resident complaints and missed opportunities. After evaluating Conservice, we standardized on their platform and are very satisfied.', cite: 'CTO • Greystar' },
    pills: [{ label: 'Billing accuracy 8.5', win: true }, { label: 'All-vendor avg 7.6' }, { label: 'RealPage 4.5' }],
  },
  {
    num: '02',
    question: 'How sticky is the customer base? What does switching actually cost?',
    verdict: 'Embedded in operations; switching is a major undertaking',
    stat: { num: '57%', label: 'say switching means major operational challenges' },
    finding: 'Utility billing touches every lease and every resident, and recovery absorption flows straight to NOI. 72% of Conservice customers rate the platform critical or extremely critical to core operations and none call it easily replaceable. 57% say switching would create major operational challenges and another 29% call it moderate effort — only 7% describe it as relatively simple.',
    quote: { text: 'We have relied on Conservice for so long that nobody would know how to do it otherwise. It’s plug and play at this point. We need to have a reliable way to bill utilities to residents.', cite: 'President & COO • Enterprise Operator' },
    pills: [{ label: 'Mission critical 72%', win: true }, { label: 'Switching friction 86%' }, { label: 'Easily replaceable 0%' }],
  },
  {
    num: '03',
    question: 'How strong is customer advocacy and satisfaction?',
    verdict: 'Operational gold standard; top-tier advocacy',
    stat: { num: '8.3', label: '/ 10 likelihood to recommend' },
    finding: '8.3/10 likelihood to recommend with renewal intent at 8.2 and support rated 8.2 across 29 verified operator respondents. Customers rate satisfaction versus alternatives 7.0/10 — toward the significantly-better end of the scale — and describe Conservice as the industry standard for responsiveness, billing accuracy, and analytical reporting.',
    quote: { text: 'They continue to set the standard in the industry with exceptional responsiveness.', cite: 'Managing Director, Asset Management • TruAmerica' },
    pills: [{ label: 'Recommend 8.3', win: true }, { label: 'Renewal intent 8.2' }, { label: 'Support 8.2' }],
  },
  {
    num: '04',
    question: 'Are the adoption drivers durable, or does the category commoditize?',
    verdict: 'Structural demand: recovery, compliance and resident billing do not commoditize',
    stat: { num: '5.7', label: 'lean toward dedicated utility vendors, 0-10 scale' },
    finding: 'Operators lean toward dedicated utility-management vendors over PMS-embedded tools — 5.7 on a 0-to-10 embedded-versus-dedicated scale. Demand is anchored in recovery absorption, regulatory and ESG compliance enablement rated 7.2 versus a 7.0 average, and accurate resident billing across mixed portfolios spanning RealPage, Yardi, and Entrata. Maximizing recovery absorption is treated as core cost efficiency, not discretionary software spend.',
    quote: { text: 'Utility consumption represents a significant expense for property management companies. Maximizing recovery absorption is essential to optimize cost efficiency.', cite: 'SVP, Property Management • Capreit' },
    pills: [{ label: 'Dedicated-vendor lean 5.7', win: true }, { label: 'ESG enablement 7.2' }, { label: 'Recovery drives NOI' }],
  },
  ];

export const VERBATIMS_CONSERVICE: VerbatimCard[] = [
  { theme: 'Displacing PMS Tools', text: '“Our portfolio spans RealPage, Yardi, and Entrata. We previously used PMS utility services from Yardi and RealPage, which led to resident complaints and missed opportunities. After evaluating Conservice, we standardized on their platform and are very satisfied.”', attr: 'CTO • Greystar' },
  { theme: 'Mission Criticality', text: '“We have relied on Conservice for so long that nobody would know how to do it otherwise. It’s plug and play at this point.”', attr: 'President & COO • Enterprise Operator' },
  { theme: 'Industry Standard', text: '“They continue to set the standard in the industry with exceptional responsiveness.”', attr: 'Managing Director, Asset Management • TruAmerica' },
  { theme: 'NOI Impact', text: '“Conservice is critical to our operations because it ensures accurate utility billing, recovery, and compliance across our portfolio. It plays a key role in maintaining NOI and reducing utility-related delinquencies.”', attr: 'VP, Operations • Lantower Residential' },
  { theme: 'Reliability', text: '“Conservice has consistently delivered reliable performance in utility billing, expense recovery, and overall utility management. This operational support is the primary reason I would recommend them.”', attr: 'VP of Technology • AMLI Residential' },
  { theme: 'Value for Money', text: '“The platform stands out for being more affordable than other options and is user-friendly.”', attr: 'Senior Energy Manager • Cushman & Wakefield' },
  { theme: 'Responsiveness', text: '“They were the most responsive vendor, and we were under a time crunch to implement a solution. Their experience in our service area sealed the deal.”', attr: 'Manager, Asset Management & Investments • Pacific Reach Properties' },
  { theme: 'Analytics', text: '“I’ve been satisfied with their billing, metering solutions, and the quality of their analytical reporting.”', attr: 'SVP, Property Management • Capreit' },
  ];

export const STUDY_INTEL_CONSERVICE = {
  thesisVerdict: 'Category-leading operational performance — the only vendor above 7.0 on all six core metrics — with deeply embedded workflows: 72% of customers rate Conservice critical or extremely critical to core operations and 57% say switching would create major operational challenges. Advocacy is top-tier at 8.3 recommend and 8.2 renewal intent. Watch items are platform integration, where PMS-native suites rate higher, and spend visibility and analytics depth.',
  expansionSegments: 'Multifamily, student housing, single-family, commercial and senior living operators consolidating utility billing, expense recovery and compliance across mixed PMS estates spanning RealPage, Yardi and Entrata — plus growing ESG, benchmarking and sustainability reporting demand.',
  riskFlags: 'Platform integration rated 7.4 versus Entrata 8.7 and AppFolio 9.0. Spend visibility and analytics rated 6.9. Customers name data and analytics, utility analysis and expense recovery as the top three product priorities to address.',
};
