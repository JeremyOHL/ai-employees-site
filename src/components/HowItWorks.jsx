import React from 'react';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Search />,
      title: 'Systems Audit & Plan',
      description: 'We diagnose your current stack, map the gaps, and prioritize the systems that will unlock growth fastest.',
      features: [
        'Clarify goals, offers, and handoffs',
        'Select the right systems and automations',
        'Set success metrics and timelines'
      ]
    },
    {
      number: '02',
      icon: <Wrench />,
      title: 'Build Your Workspace',
      description: 'We configure your environment—pipelines, calendars, automations, and permissions—so the system mirrors your business.',
      features: [
        'CRM, calendars, funnels, chat',
        'Routing + nurture automations',
        'Copy, creative, and QA checks'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'Launch & Enable',
      description: 'We connect domains, numbers, and inboxes, then go live with your campaigns while training your team.',
      features: [
        'Go-live in about 14 days',
        'Team onboarding + playbooks',
        'Live support during rollout'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'Optimize & Grow',
      description: 'We operate the system with you: campaign refreshes, reporting, and continuous improvements.',
      features: [
        'Weekly/bi-weekly reviews',
        'New campaigns every month',
        'Slack + email support'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How Mondays Marketing Systems Works</h2>
          <p className="section-subtitle">
            A clear, done-with-you process that gets your operating system live quickly—and keeps it sharp.
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
            <div className="badge">✓ Service Included</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
