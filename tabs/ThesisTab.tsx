'use client';
import { ICAccordion } from '../components/ICCard';
import { IC_CARDS_RED_CANARY } from '../lib/data/redCanary';

export function ThesisTab() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Investment Thesis</div>
        <h2 className="section-title">IC Case in Four Questions</h2>
        <p className="section-lead">
          Verified customer data answering the four questions every IC will ask.
          Not management, not projections — sourced from verified Red Canary customers.
        </p>
      </div>
      <ICAccordion cards={IC_CARDS_RED_CANARY} theme="navy" />
    </div>
  );
}
