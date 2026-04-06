import React from 'react';
import { ArrowRight, Zap, Clock, BarChart3, Settings } from 'lucide-react';
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
          <div className="hero-badge">Custom Business Integrations & Automation</div>

          <h1 className="hero-title">
            Your Business Runs Smoother When the Right Systems Are Working For You.
          </h1>

          <p className="hero-subtitle">
            Mondays Marketing Systems builds custom integrations that handle the busywork — so you and your team can focus on what actually grows your business.
          </p>

          {/* Key Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <Zap className="benefit-icon" />
              <span>Respond to leads instantly — even while you sleep</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <span>Eliminate repetitive manual tasks your team dreads</span>
            </div>
            <div className="benefit-item">
              <BarChart3 className="benefit-icon" />
              <span>Know exactly where every lead and customer stands</span>
            </div>
            <div className="benefit-item">
              <Settings className="benefit-icon" />
              <span>Custom-built for your business — not a generic template</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button
              className="cta-primary hero-primary-btn"
              onClick={() => openModal()}
            >
              Let's Talk About Your Business
              <ArrowRight size={18} className="button-icon" />
            </button>
            <button
              className="cta-secondary"
              onClick={scrollToPricing}
            >
              See Our Pricing
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
              <strong>Built for</strong> service businesses, retailers, agencies, contractors, and growing teams of all kinds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
