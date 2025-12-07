import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Free Site',
      price: 0,
      description: 'We build and brand your one-page site at no cost. Yours to keep.',
      features: [
        'Custom design with your logo/colors',
        'Conversion copy + hero CTA',
        'Lead form + click-to-call buttons',
        'Chat widget placement',
        'Mobile-first + SEO basics',
        'Launch in under 10 days'
      ],
      popular: false
    },
    {
      name: 'Launch Hosting',
      price: 197,
      description: 'Flat monthly hosting and support for your free site. No contracts, no setup fees.',
      features: [
        'Managed hosting + SSL + backups',
        'Unlimited edits to your page',
        'Form/chat inbox with lead alerts',
        'Analytics + heatmaps',
        'Page speed + uptime monitoring',
        'Email support'
      ],
      popular: true
    },
    {
      name: 'Growth Add-Ons',
      price: 397,
      description: 'Add automations, booking, and campaigns to turn visitors into booked revenue.',
      features: [
        'Everything in Launch Hosting',
        'Booking flows + reminders',
        'Email/SMS nurture sequences',
        'Promo funnels and offers',
        'A/B tests + conversion reviews',
        'Priority support'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Free site. Flat monthly hosting.</h2>
          <p className="section-subtitle">
            Your custom page is free. Keep it hosted, updated, and conversion-ready for one flat monthly—add campaigns when you want.
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
          <p>✓ No contracts • No setup fees • Cancel anytime</p>
          <p>✓ Hosting, SSL, updates, and support included in your monthly</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
