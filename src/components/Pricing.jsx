import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Foundation Systems',
      price: 297,
      description: 'SwaS essentials for teams getting off spreadsheets and into a real operating system.',
      features: [
        'Your own white-labeled Mondays App workspace',
        'CRM + unified inbox setup',
        '1 pipeline + 1 calendar built for you',
        'Lead capture forms + chat widget',
        'Speed-to-lead + reminder automations',
        'Review requests + reputation hub',
        'Reporting starter dashboard',
        'Office hours + email support'
      ],
      popular: false
    },
    {
      name: 'Growth Systems',
      price: 597,
      description: 'Most teams start here: go live fast with full-funnel systems and ongoing optimization.',
      features: [
        'Everything in Foundation',
        'Multi-channel nurture + routing',
        '2-3 funnels/landing pages built',
        'Pipeline + stage automation rules',
        'Call tracking + attribution setup',
        'Conversion dashboards + KPIs',
        '2 new campaigns each month',
        'Priority support + Slack'
      ],
      popular: true
    },
    {
      name: 'Authority Systems',
      price: 997,
      description: 'For leaders who want a fully operated system, multi-location control, and aggressive growth.',
      features: [
        'Everything in Growth',
        'Multi-location + territory controls',
        'Outbound sequences + power dialer',
        'Hiring/recruiting pipelines',
        'Advanced attribution & forecasting',
        'Quarterly planning workshops',
        'Dedicated strategist + weekly reviews',
        'Done-with-you integrations'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent SwaS Pricing</h2>
          <p className="section-subtitle">
            Every plan includes your own white-labeled Mondays App workspace plus our service to build, launch, and optimize it with you.
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
          <p>✓ One-time build fee covers migration, brand setup, domains, and QA</p>
          <p>✓ Month-to-month • Keep your data • Dedicated strategist with every plan</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
