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
              Ready to Install Mondays Marketing Systems?
            </h2>
            <p className="cta-subtitle">
              Get the software and the service in one motion: your Mondays App-powered operating system, implemented, launched, and optimized with you.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Free 30-minute systems consult</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Custom Mondays App workspace + funnels</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Go live in ~14 days</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button size="lg" className="cta-primary-button" onClick={scrollToForm}>
                Book Your Systems Call
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
              Month-to-month. One-time build fee. You keep your data and brand.
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
