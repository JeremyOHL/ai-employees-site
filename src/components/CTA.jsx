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
              Ready for your free website?
            </h2>
            <p className="cta-subtitle">
              We design and launch a custom one-page site in your brand for free. Keep it hosted, updated, and converting for a flat monthly—no contracts or hidden fees.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Free build, your brand and copy</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Forms, chat, and booking included</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Go live in under 10 days</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button size="lg" className="cta-primary-button" onClick={scrollToForm}>
                Claim Your Free Site
                <ArrowRight className="button-icon" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cta-secondary-button"
                onClick={scrollToPricing}
              >
                View Pricing
              </Button>
            </div>

            <p className="cta-guarantee">
              No contracts. No setup fees. Flat monthly hosting and support.
            </p>
          </div>

          <div className="cta-form-shell" id="demo-form">
            <div className="form-placeholder">
              <p className="form-placeholder-title">Your form or scheduler goes here</p>
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
