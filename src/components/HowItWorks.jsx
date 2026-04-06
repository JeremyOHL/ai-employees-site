import React from 'react';
import { Search, Pencil, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Search />,
      title: 'We Learn Your Business',
      description: 'We start with a discovery conversation — no jargon, no pressure. We want to understand your workflow, your team, your pain points, and where things are falling through the cracks.',
      features: [
        'Workflow and process review',
        'Identify your biggest time and revenue leaks',
        'Understand your goals and what matters most'
      ]
    },
    {
      number: '02',
      icon: <Pencil />,
      title: 'We Design Your Custom System',
      description: 'Based on what we learn, we map out a custom integration plan tailored to your specific business — not a cookie-cutter solution pulled off a shelf.',
      features: [
        'Custom automation blueprint',
        'Clear plan with expected outcomes',
        'Review and approval before we build'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'We Build It and Launch It',
      description: 'Our team handles the full build — setup, testing, and launch. You stay focused on running your business while we get everything working in the background.',
      features: [
        'Full buildout by our team',
        'Tested before it goes live',
        'Walkthrough so you understand what\'s running'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'We Optimize as You Grow',
      description: 'Once your systems are live, we keep an eye on performance and make improvements over time — so your integrations stay sharp as your business evolves.',
      features: [
        'Ongoing monitoring and adjustments',
        'Performance reporting',
        'Updates as your needs change'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How Working With Mondays Works</h2>
          <p className="section-subtitle">
            A straightforward process from discovery to launch — designed for busy owners who want results, not complexity.
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
            <div className="badge">✓ Built Around Your Workflow</div>
            <div className="badge">✓ We Handle the Technical Side</div>
            <div className="badge">✓ Ongoing Support Included</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
