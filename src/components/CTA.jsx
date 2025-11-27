import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
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
            <Button size="lg" className="cta-primary-button">
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
      </div>
    </section>
  );
};

export default CTA;
