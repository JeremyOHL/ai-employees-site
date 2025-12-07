import React from 'react';
import { LayoutDashboard, Wand2, Megaphone, Calendar, BarChart3, Headset } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard />,
      title: 'Free Branded Page',
      description: 'A custom one-page site with your logo, colors, and copy written to convert visitors into leads.'
    },
    {
      icon: <Wand2 />,
      title: 'Lead Capture That Works',
      description: 'Click-to-call buttons, smart forms, and chat that route leads instantly to the right place.'
    },
    {
      icon: <Megaphone />,
      title: 'Add Campaigns Anytime',
      description: 'Ready-to-launch funnels and promos you can turn on when you’re ready to generate more demand.'
    },
    {
      icon: <Calendar />,
      title: 'Built-In Booking',
      description: 'Calendars and confirmations so prospects can schedule themselves—plus reminders to keep them from no-showing.'
    },
    {
      icon: <BarChart3 />,
      title: 'Hosting & Updates Included',
      description: 'Managed hosting, SSL, backups, and performance tweaks included in your flat monthly.'
    },
    {
      icon: <Headset />,
      title: 'No Fees. No Contracts.',
      description: 'Cancel anytime. Add forms, chat, or campaigns as you grow without hidden setup fees.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Your Systems Do the Heavy Lifting</h2>
          <p className="section-subtitle">
            A complete, done-with-you stack that captures, routes, nurtures, and reports on every lead—without you wrangling tools.
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
