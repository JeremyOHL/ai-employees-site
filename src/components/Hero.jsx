import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import LogoLink from './LogoLink';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Logo */}
        <div className="hero-logo">
          <LogoLink />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Turn missed leads into booked jobs.
          </h1>
          
          <p className="hero-subtitle">
            We help home service owners respond faster and follow up every time.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>Reply to leads fast, even after hours</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>Keep calls, texts, forms, and chat in one inbox</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Follow up on time so deals do not go cold</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Simple setup, clear numbers, and ongoing support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Button 
              size="lg" 
              className="cta-primary"
              onClick={scrollToForm}
            >
              Book My Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="cta-secondary"
              onClick={scrollToPricing}
            >
              See Pricing
            </Button>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="avatar-group">
              <div className="avatar">JS</div>
              <div className="avatar">MR</div>
              <div className="avatar">TK</div>
              <div className="avatar">AL</div>
            </div>
            <div className="social-proof-text">
              <strong>Built for</strong> plumbers, HVAC, roofing, electrical, cleaning, landscapers, and more
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
