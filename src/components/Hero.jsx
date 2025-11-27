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
            AI Employees That
            <span className="highlight-text"> Never Sleep</span>
            <br />
            For Your Home Services Business
          </h1>
          
          <p className="hero-subtitle">
            Stop losing leads to missed calls and slow responses. Our AI employees answer every call, 
            respond to every message, and book appointments 24/7—so you can focus on delivering 
            exceptional service.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>Answer Every Call</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>Respond to All Messages</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Work 24/7/365</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Qualify & Book Leads</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Button 
              size="lg" 
              className="cta-primary"
              onClick={scrollToForm}
            >
              Book a Demo
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
              <strong>200+</strong> home services businesses trust us
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
