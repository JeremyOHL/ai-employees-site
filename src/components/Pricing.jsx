import React from 'react';
import { Check, Zap, Users, Star } from 'lucide-react';

const Pricing = ({ openModal }) => {
  const plans = [
    {
      name: 'Self-Starter',
      badge: 'DIY Platform Access',
      price: 97,
      icon: <Zap size={24} />,
      description: 'Full access to the Mondays Marketing Systems App. You are in the driver\'s seat — build, manage, and grow your business on your own timeline.',
      features: [
        'Complete platform access — all tools included',
        'CRM & full contact management',
        'Two-way SMS, email & phone calling',
        'Website & funnel builder',
        'Calendar & appointment scheduling',
        'Automation workflow builder',
        'Email & SMS marketing campaigns',
        'Reputation management & review requests',
        'Social media planner & scheduler',
        'Reporting & analytics dashboards',
        'Mobile app included',
        'Community & email support'
      ],
      popular: false,
      ctaLabel: 'Get Started — $97/mo',
      accentColor: '#00d4ff'
    },
    {
      name: 'Growth Partner',
      badge: 'Done With You',
      price: 297,
      icon: <Users size={24} />,
      description: 'Everything in Self-Starter plus hands-on guidance. We build alongside you — strategy sessions, system setup support, and expert coaching every step of the way.',
      features: [
        'Everything in Self-Starter',
        'Onboarding strategy session',
        'Done-with-you system buildout',
        'Dedicated setup support (calls + messaging)',
        'AI chatbot & missed-call text back setup',
        'Automated lead follow-up campaigns built with you',
        'Pipeline and workflow setup coaching',
        'Reputation & review campaign configuration',
        'Monthly review & optimization calls',
        'Priority support (faster response times)'
      ],
      popular: false,
      ctaLabel: 'Get Started — $297/mo',
      accentColor: '#9b4dff'
    },
    {
      name: 'White Glove',
      badge: 'Done For You',
      price: 497,
      icon: <Star size={24} />,
      description: 'We handle everything. Our team builds your entire system — custom automations, campaigns, pipelines, and integrations — while you focus on running your business.',
      features: [
        'Everything in Growth Partner',
        'Full done-for-you system build',
        'Custom automation workflows',
        'Lead nurture & follow-up sequences',
        'Reputation management campaign setup',
        'Social media scheduling configured',
        'Funnel & landing page build',
        'Integrations with your existing tools',
        'Missed call, AI chat & booking configured',
        'Ongoing monthly optimization & updates',
        'Dedicated account manager',
        'White-glove onboarding experience'
      ],
      popular: true,
      ctaLabel: 'Get Started — $497/mo',
      accentColor: '#9b4dff'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <p className="section-eyebrow">Flexible Plans for Every Stage</p>
          <h2 className="section-title">One Complete Platform. Three Ways to Get Started.</h2>
          <p className="section-subtitle">
            Every plan gives you full access to the Mondays Marketing Systems App — the difference is how much we help you build it out.
          </p>
        </div>

        <div className="pricing-grid-three">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="pricing-header">
                <div className="plan-icon-wrap" style={{ color: plan.accentColor }}>
                  {plan.icon}
                </div>
                <div className="plan-tier-badge">{plan.badge}</div>
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

              <button
                className={`pricing-cta ${plan.popular ? 'popular-cta' : ''}`}
                onClick={() => openModal(plan.name)}
              >
                {plan.ctaLabel}
              </button>

              <p className="pricing-card-note">No contracts. Cancel anytime.</p>
            </div>
          ))}
        </div>

        <div className="pricing-comparison-note">
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>All plans include the full Mondays Marketing Systems App platform</span>
          </div>
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>Built specifically for home service businesses</span>
          </div>
          <div className="comparison-item">
            <Check size={18} className="comparison-check" />
            <span>Upgrade or adjust your plan at any time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
