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
              Ready to stop losing leads and booked jobs?
            </h2>
            <p className="cta-subtitle">
              Book a strategy call and we will map where revenue is leaking, then recommend either AI Agent Essentials or the full Mondays Marketing App suite.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Recover missed calls and inquiries with 24/7 AI response</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Improve follow-up, close rate, and customer communication</span>
              </div>
              <div className="cta-benefit">
                <CheckCircle2 className="benefit-icon" />
                <span>Choose AI Agent only or your full Mondays Marketing App suite</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button size="lg" className="cta-primary-button" onClick={scrollToForm}>
                Book Your Strategy Call
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
              Built for home service owners who want fewer dropped leads and more predictable revenue.
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
