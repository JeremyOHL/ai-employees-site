import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Starter',
      price: 97,
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 500 interactions/month',
        'Phone call handling',
        'SMS & Email responses',
        'Basic lead qualification',
        'Appointment scheduling',
        'Email support',
        'Monthly performance reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 297,
      description: 'For growing businesses ready to scale',
      features: [
        'Up to 2,000 interactions/month',
        'Everything in Starter',
        'Live chat integration',
        'Advanced lead qualification',
        'CRM integration',
        'Priority support',
        'Weekly performance reports',
        'Custom AI training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 497,
      description: 'For established businesses maximizing ROI',
      features: [
        'Unlimited interactions',
        'Everything in Professional',
        'Multiple AI employees',
        'Advanced analytics dashboard',
        'Custom integrations',
        'Dedicated account manager',
        'Daily performance reports',
        '24/7 priority support'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your business. All plans require a one-time setup fee.
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
          <p>✓ One-time setup investment (includes custom configuration and training)</p>
          <p>✓ Cancel anytime • No long-term contracts • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
