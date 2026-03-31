import React from 'react';
import { ArrowRight, Phone, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import LogoLink from './LogoLink';

const Hero = ({ openModal }) => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
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
          <div className="hero-badge">The Complete Platform for Home Service Businesses</div>

          <h1 className="hero-title">
            Run Your Entire Business from One Powerful App.
          </h1>

          <p className="hero-subtitle">
            CRM, automation, messaging, scheduling, marketing, payments, and more — all in the Mondays Marketing Systems App.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Phone className="benefit-icon" />
              <span>Never miss a lead — AI follows up instantly</span>
            </div>
            <div className="benefit-item">
              <MessageSquare className="benefit-icon" />
              <span>All calls, texts, emails & chats in one inbox</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Automated follow-up so no deal goes cold</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <span>Choose your level — DIY, guided, or fully done-for-you</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button
              className="cta-primary hero-primary-btn"
              onClick={() => openModal()}
            >
              Get My Info Package
              <ArrowRight size={18} className="button-icon" />
            </button>
            <button
              className="cta-secondary"
              onClick={scrollToPricing}
            >
              See Pricing & Plans
            </button>
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
