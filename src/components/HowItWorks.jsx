import React from 'react';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Search />,
      title: 'Claim Your Free Site',
      description: 'We learn your offer, gather your brand assets, and write copy built to convert.',
      features: [
        'Brand colors, logo, and messaging',
        'Offer, headline, and CTA crafted for you',
        'Page outline in 24-48 hours'
      ]
    },
    {
      number: '02',
      icon: <Wrench />,
      title: 'Design & Build',
      description: 'We design and build your landing page with forms, chat, and booking wired in.',
      features: [
        'Mobile-first design in your brand',
        'Lead forms, chat, and click-to-call',
        'QA, speed, and SEO basics'
      ]
    },
    {
      number: '03',
      icon: <Rocket />,
      title: 'Launch & Host',
      description: 'We connect your domain, handle SSL, and go live. Hosting and updates are included.',
      features: [
        'Done in under 10 days',
        'Hosting, SSL, backups included',
        'Simple edits post-launch'
      ]
    },
    {
      number: '04',
      icon: <TrendingUp />,
      title: 'Optimize & Grow',
      description: 'Add campaigns, automations, and nurture when you want more demand—still no contracts or hidden fees.',
      features: [
        'Turn on promos and funnels fast',
        'Reporting on lead flow and bookings',
        'Cancel anytime'
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
