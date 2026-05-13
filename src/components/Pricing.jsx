import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Pricing = ({ openModal }) => {
  const included = [
    'Custom-built to fit your specific business and workflow',
    'Full setup and launch handled by our team',
    'Ongoing support and optimization included',
    'No long-term contracts — month-to-month flexibility',
    'Scales as your business grows'
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <p className="section-eyebrow">Simple, Transparent Pricing</p>
          <h2 className="section-title">Custom Integrations Without the Enterprise Price Tag</h2>
          <p className="section-subtitle">
            Every business is different — so every solution we build is priced based on what your business actually needs.
          </p>
        </div>

        <div className="pricing-single-wrap">
          <div className="pricing-single-card">
            <div className="pricing-single-badge">Custom Business Integrations</div>

            <div className="pricing-single-price-block">
              <span className="pricing-single-from">Starting at</span>
              <div className="pricing-single-amount">
                <span className="currency">$</span>
                <span className="amount">127</span>
                <span className="period">/month</span>
              </div>
            </div>

            <p className="pricing-single-tagline">
              A fully custom integration built around your business — designed to save time, capture more leads, and run more of your operation on autopilot.
            </p>

            <div className="pricing-single-features">
              {included.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <Check className="feature-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              className="pricing-cta popular-cta pricing-single-cta"
              onClick={() => openModal('Custom Integration')}
            >
              Get a Custom Quote
              <ArrowRight size={18} className="button-icon" />
            </button>

            <p className="pricing-single-disclaimer">
              * Starting price may vary based on the scope of your integration, specific services required, applicable fees, or taxes. We'll walk you through exact pricing after learning about your business — no surprises.
            </p>
          </div>
        </div>

        <div className="pricing-comparison-note">
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>No cookie-cutter packages — everything is built for your specific workflow</span>
          </div>
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>Works alongside your existing tools or replaces them entirely</span>
          </div>
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>Cancel or adjust at any time — we earn your business every month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
