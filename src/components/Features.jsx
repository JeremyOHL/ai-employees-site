import React from 'react';
import { LayoutDashboard, Wand2, Megaphone, Calendar, BarChart3, Headset } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard />,
      title: 'AI Missed-Call Recovery',
      description: 'When you miss a call, AI texts back right away so the lead stays warm.'
    },
    {
      icon: <Wand2 />,
      title: 'AI Qualification & Booking',
      description: 'AI asks key questions, pre-qualifies prospects, and sends real buyers to booking.'
    },
    {
      icon: <Megaphone />,
      title: 'Lead Reactivation Campaigns',
      description: 'Re-engage old estimates with automated text and email follow-up.'
    },
    {
      icon: <Calendar />,
      title: 'Calendar + No-Show Prevention',
      description: 'Use reminders and confirmations to cut no-shows.'
    },
    {
      icon: <BarChart3 />,
      title: 'Pipeline & Revenue Visibility',
      description: 'See where jobs stall and fix it quickly.'
    },
    {
      icon: <Headset />,
      title: 'All-In-One Mondays Marketing App',
      description: 'CRM, communication, automation, and reporting in one app.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Your Systems Do the Heavy Lifting</h2>
          <p className="section-subtitle">
            We help you fix lead response first, then scale with one system your team can actually use.
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
