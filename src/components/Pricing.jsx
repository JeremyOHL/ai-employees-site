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
      description: 'For owners who want to stop losing leads from missed calls, slow replies, and inconsistent follow-up.',
      features: [
        'AI missed-call text-back',
        'Instant AI response to new lead inquiries',
        'AI lead qualification and routing',
        'Booking and handoff workflows',
        'Basic pipeline visibility',
        'Month-to-month flexibility'
      ],
      popular: false
    },
    {
      name: 'Mondays Marketing App Suite',
      price: 697,
      description: 'Your full business suite: communications, CRM, automations, marketing, and reporting in one branded app.',
      features: [
        'Everything in AI Agent Essentials',
        'Unified inbox for calls, SMS, chat, and forms',
        'Full CRM and opportunity pipeline management',
        'Automated follow-up and nurture campaigns',
        'Calendar, reminders, and no-show prevention',
        'Dashboards, attribution, and performance reporting',
        'Priority support'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Two Offers. One Goal: More Booked Jobs.</h2>
          <p className="section-subtitle">
            Start with AI Agent Essentials or run your operation on the full Mondays Marketing App suite.
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
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>✓ Built for small home service businesses focused on lead response and close rate</p>
          <p>✓ No platform confusion, no patchwork tools, and no leads left behind</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
