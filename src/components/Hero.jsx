import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageSquare, Mail, Clock, CheckCircle2 } from 'lucide-react';
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
            Mondays Marketing Systems
            <span className="highlight-text"> Software with a Service</span>
            <br />
            Built to install revenue-ready systems into your business
          </h1>
          
          <p className="hero-subtitle">
            Stop surviving on duct-taped tools. We install and run a complete growth system—pipelines, follow-up, campaigns, reporting, and proven automations—so your business has the structure to thrive.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>Unified inbox + routing that responds fast</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>Campaigns + funnels ready to deploy</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Go live in 14 days</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Done-with-you service every month</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Button 
              size="lg" 
              className="cta-primary"
              onClick={scrollToForm}
            >
              Book a Systems Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="cta-secondary"
              onClick={scrollToPricing}
            >
              View Pricing
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
              <strong>200+</strong> teams run their systems on Mondays Marketing
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
