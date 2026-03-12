import React from 'react';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Search />,
      title: 'Find the Revenue Leaks',
      description: 'We map your lead flow and find where jobs are slipping through.',
      features: [
        'Lead response audit',
        'Follow-up process breakdown',
        'Clear list of what to fix first'
      ]
    },
    {
      number: '02',
      icon: <Wrench />,
      title: 'Launch AI Agent Essentials',
      description: 'We launch AI to handle missed calls, new messages, and first response.',
      features: [
        'Instant lead response',
        'AI lead qualification',
        'Booking and handoff rules'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'Activate the Full App Suite',
      description: 'When ready, we set up your team’s full internal app for sales, follow-up, and growth.',
      features: [
        'CRM and pipeline setup',
        'Unified inbox and automations',
        'Campaign setup and follow-up engine'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'Optimize Close Rate & ROI',
      description: 'We use real pipeline data to improve response, follow-up, and close rate.',
      features: [
        'Weekly KPI reviews',
        'Lead source performance tracking',
        'Continuous automation tuning'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How Mondays Marketing Works</h2>
          <p className="section-subtitle">
            A simple rollout for busy owners who want results without tool chaos.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <ul className="step-features">
                {step.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <div className="cta-badges">
            <div className="badge">✓ Built for Home Services</div>
            <div className="badge">✓ Clear Plans That Scale</div>
            <div className="badge">✓ Done-With-You Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
