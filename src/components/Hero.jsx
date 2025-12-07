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
            Free website that books customers.
            <span className="highlight-text"> Built and hosted for you.</span>
          </h1>
          
          <p className="hero-subtitle">
            Get a custom, one-page site in your brand with lead forms, chat, and scheduling—no contracts, no setup fees. Pay a flat monthly to host and keep stacking conversions.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>Your logo, colors, copy included</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>Forms, chat, and contact buttons that convert</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Launch in under 10 days</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Flat monthly hosting • No contracts</span>
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
