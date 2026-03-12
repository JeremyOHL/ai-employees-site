import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to stop losing leads and book more jobs?
            </h2>
            <p className="cta-subtitle">
              Book a strategy call. We will show you exactly where leads are slipping and what to fix first.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Recover missed calls and online inquiries</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Improve follow-up and close rate</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Get a clear rollout plan your team can run</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button size="lg" className="cta-primary-button" onClick={scrollToForm}>
                Get My Plan
                <ArrowRight className="button-icon" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cta-secondary-button"
                onClick={scrollToPricing}
              >
                See Plans
              </Button>
            </div>

            <p className="cta-guarantee">
              Built for owners who want steady lead flow and predictable revenue.
            </p>
          </div>

          <div className="cta-form-shell" id="demo-form">
            <div className="form-placeholder">
              <p className="form-placeholder-title">Strategy call form goes here</p>
              <p className="form-placeholder-body">
                Embed your form or scheduler here so visitors can choose the right offer and request a callback.
              </p>
              <p className="form-placeholder-note">
                Keep this wrapper so all CTA buttons continue to scroll here and tracking can be connected later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
