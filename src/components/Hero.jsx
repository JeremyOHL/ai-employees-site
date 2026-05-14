import React from 'react';
import { ArrowRight, Zap, Clock, BarChart3, Settings, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LogoLink from './LogoLink';

const Hero = ({ openModal }) => {
  const navigate = useNavigate();

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
          <div className="hero-badge">Business Systems That Run Themselves</div>

          <h1 className="hero-title">
            More Leads. More Revenue. Less Work.
          </h1>

          <p className="hero-subtitle">
            We build custom systems that follow up with leads, handle customer questions, and run your back office — automatically.
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
              onClick={() => navigate('/audit')}
            >
              <ClipboardList size={18} className="button-icon" />
              Audit Your Business — Free
            </button>
            <button
              className="cta-secondary"
              onClick={() => openModal()}
            >
              Let's Talk
              <ArrowRight size={16} className="button-icon" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="social-proof-text">
              <strong>Built for home service businesses —</strong> HVAC, plumbing, electrical, roofing, landscaping, cleaning, pest control, and more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
