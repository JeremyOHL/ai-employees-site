import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = ({ openModal }) => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-inner">
          <p className="cta-eyebrow">Ready to Build Your System?</p>
          <h2 className="cta-title">
            Stop Losing Leads. Start Running a Tighter Business.
          </h2>
          <p className="cta-subtitle">
            The Mondays Marketing Systems App gives you everything you need — CRM, automation, communication, scheduling, marketing, and reporting — all in one platform built for home service businesses.
          </p>

          <div className="cta-benefits">
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Replace 10+ tools with one unified system</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Never miss a lead with AI-powered follow-up</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Choose the level of support that fits your business</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>No long-term contracts — start and scale at your pace</span>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="cta-primary-button" onClick={() => openModal()}>
              Get My Info Package
              <ArrowRight size={18} className="button-icon" />
            </button>
            <button className="cta-secondary-button" onClick={scrollToPricing}>
              View All Plans
            </button>
          </div>

          <p className="cta-guarantee">
            We'll send you a personalized overview, demo video, and everything you need to make a confident decision — no pressure, no obligation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
