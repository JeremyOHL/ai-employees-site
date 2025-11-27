import React from 'react';
import { Phone, Settings, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Phone />,
      title: 'Discovery Call',
      description: 'We start with a free 30-minute consultation to understand your business, processes, and specific needs.',
      features: [
        'Analyze your current workflow',
        'Identify automation opportunities',
        'Define success metrics'
      ]
    },
    {
      number: '02',
      icon: <Settings />,
      title: 'Custom Setup',
      description: 'We configure your AI employee with your business information, tone, and specific requirements.',
      features: [
        'Custom AI training',
        'Integration with your team',
        'Personalized responses'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'Launch & Test',
      description: 'Your AI employee goes live. We monitor performance closely and make adjustments as needed.',
      features: [
        '2-week deployment',
        'Real-time testing',
        '24/7 monitoring'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'Optimize & Grow',
      description: 'Continuous optimization ensures maximum ROI. We refine performance based on real data and results.',
      features: [
        'Performance analytics',
        'Ongoing optimization',
        'Regular updates'
      ]
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our proven 4-step process gets your AI employee up and running in just 2 weeks.
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
            <div className="badge">✓ Free Consultation</div>
            <div className="badge">✓ 2-Week Setup</div>
            <div className="badge">✓ 24/7 Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;