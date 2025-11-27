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
              Ready to Stop Missing Leads?
            </h2>
            <p className="cta-subtitle">
              Join 200+ home services businesses using AI employees to capture more leads, 
              book more appointments, and grow their revenue—without adding headcount.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Free 30-minute consultation</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Custom AI employee setup</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Live in 2 weeks or less</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button size="lg" className="cta-primary-button" onClick={scrollToForm}>
                Book Your Free Demo
                <ArrowRight className="button-icon" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cta-secondary-button"
                onClick={scrollToPricing}
              >
                View Pricing Again
              </Button>
            </div>

            <p className="cta-guarantee">
              30-day money-back guarantee • No long-term contracts • Cancel anytime
            </p>
          </div>

          <div className="cta-form-shell" id="demo-form">
            <div className="form-placeholder">
              <p className="form-placeholder-title">GoHighLevel form goes here</p>
              <p className="form-placeholder-body">
                Paste your form embed code or scheduler snippet. Keep this wrapper so buttons can scroll here and tracking params can be added later.
              </p>
              <p className="form-placeholder-note">
                When ready, attach link tracking to this form submit and to all buttons that call <code>scrollToForm</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
