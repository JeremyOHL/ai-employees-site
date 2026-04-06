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
          <p className="cta-eyebrow">Ready to Build Something That Works?</p>
          <h2 className="cta-title">
            Stop Running Your Business on Duct Tape and Spreadsheets.
          </h2>
          <p className="cta-subtitle">
            Mondays Marketing Systems builds custom integrations that automate the frustrating parts of your business — so you can focus on growth, not busywork.
          </p>

          <div className="cta-benefits">
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Custom-built around how your business actually runs</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>We handle the setup — you just see the results</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Ongoing support so your systems keep getting better</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle2 className="benefit-icon" />
              <span>Month-to-month — no long-term commitment required</span>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="cta-primary-button" onClick={() => openModal()}>
              Let's Talk About Your Business
              <ArrowRight size={18} className="button-icon" />
            </button>
            <button className="cta-secondary-button" onClick={scrollToPricing}>
              See Pricing
            </button>
          </div>

          <p className="cta-guarantee">
            We start with a quick discovery conversation — no pressure, no obligation. If we're a good fit, we'll show you exactly what we'd build and what it costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
