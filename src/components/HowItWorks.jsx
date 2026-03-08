import React from 'react';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Search />,
      title: 'Find the Revenue Leaks',
      description: 'We map your lead flow and identify where you are losing calls, follow-up, and booked jobs.',
      features: [
        'Lead response audit',
        'Follow-up process breakdown',
        'Conversion bottleneck report'
      ]
    },
    {
      number: '02',
      icon: <Wrench />,
      title: 'Launch AI Agent Essentials',
      description: 'We deploy AI Agents to handle missed calls, incoming messages, and first-touch qualification.',
      features: [
        'Instant lead response',
        'AI qualification workflows',
        'Booking and handoff rules'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'Activate the Full App Suite',
      description: 'When you are ready, we configure the Mondays Marketing App as your all-in-one sales and marketing system.',
      features: [
        'CRM and pipeline setup',
        'Unified inbox and automations',
        'Campaign and nurture engine'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'Optimize Close Rate & ROI',
      description: 'We improve response speed, follow-up consistency, and campaign performance using real pipeline data.',
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
            A practical rollout designed for busy home service owners who need results, not another tool to manage.
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
            <div className="badge">✓ AI Agent or Full Suite</div>
            <div className="badge">✓ Done-With-You Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
