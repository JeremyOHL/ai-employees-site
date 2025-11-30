import React from 'react';
import { LayoutDashboard, Wand2, Megaphone, Calendar, BarChart3, Headset } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard />,
      title: 'White-Labeled Mondays App Workspace',
      description: 'Your own branded Mondays App instance with CRM, pipelines, calendars, forms, and permissions pre-configured for your team.'
    },
    {
      icon: <Wand2 />,
      title: 'Automations That Never Quit',
      description: 'Multi-step nurture, lead routing, and task creation that keeps prospects moving without your team chasing them manually.'
    },
    {
      icon: <Megaphone />,
      title: 'Funnels & Campaigns Ready to Launch',
      description: 'Prebuilt landing pages, chat widgets, and campaigns tailored to your offer so you can launch without reinventing the wheel.'
    },
    {
      icon: <Calendar />,
      title: 'Calendars & Scheduling Built-In',
      description: 'Round-robin, territory-based, or resource scheduling with reminders and confirmations that match how your business operates.'
    },
    {
      icon: <BarChart3 />,
      title: 'Reporting You Can Trust',
      description: 'Dashboards for speed-to-lead, pipeline health, and revenue attribution so leadership sees what is working.'
    },
    {
      icon: <Headset />,
      title: 'Service Included Every Month',
      description: 'Strategy, implementation, and optimizations from our team—because software is only as good as the people operating it.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Your Systems Do the Heavy Lifting</h2>
          <p className="section-subtitle">
            A complete Mondays App-powered stack—software plus service—that captures, routes, nurtures, and reports on every lead.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
