import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'AI Agent Essentials',
      price: 297,
      description: 'Best for owners who need faster lead response and better follow-up.',
      features: [
        'Missed-call text back',
        'Fast response to new inquiries',
        'Lead qualification and routing',
        'Booking and handoff rules',
        'Basic pipeline view',
        'Month-to-month'
      ],
      popular: false
    },
    {
      name: 'Mondays Marketing App Suite',
      price: 697,
      description: 'A complete business suite for communication, CRM, automation, and reporting.',
      features: [
        'Everything in AI Agent Essentials',
        'One inbox for calls, texts, chat, and forms',
        'Full CRM and pipeline management',
        'Automated follow-up campaigns',
        'Calendar, reminders, and no-show protection',
        'Dashboards and performance reporting',
        'Priority support'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Simple Pricing for Busy Owners</h2>
          <p className="section-subtitle">
            Pick what fits now. Upgrade when your team is ready.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <Check className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={plan.popular ? 'pricing-cta popular-cta' : 'pricing-cta'}
                size="lg"
                onClick={scrollToForm}
              >
                Start Here
              </Button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>✓ Built for small home service businesses</p>
          <p>✓ Clear setup, clear ownership, clear results</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
