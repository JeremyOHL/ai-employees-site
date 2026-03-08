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
            Stop losing leads after hours.
            <span className="highlight-text"> AI Agents and the Mondays Marketing App for home services.</span>
          </h1>
          
          <p className="hero-subtitle">
            If missed calls, slow follow-up, and scattered tools are costing you jobs, we fix it. Choose AI Agent Essentials or run your whole growth engine in one app.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>24/7 AI responds to missed calls and new leads in seconds</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>Every text, call, web lead, and chat in one inbox</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Automated follow-up so prospects never go cold</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Choose AI Agent only or the full Mondays Marketing App suite</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Button 
              size="lg" 
              className="cta-primary"
              onClick={scrollToForm}
            >
              Book a Growth Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="cta-secondary"
              onClick={scrollToPricing}
            >
              Compare Solutions
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
              <strong>Built for</strong> plumbers, HVAC, roofing, electrical, cleaning, and more
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
