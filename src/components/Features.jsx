import React from 'react';
import { LayoutDashboard, Wand2, Megaphone, Calendar, BarChart3, Headset } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard />,
      title: 'AI Missed-Call Recovery',
      description: 'When you miss a call, your AI Agent follows up instantly by text so leads do not move on.'
    },
    {
      icon: <Wand2 />,
      title: 'AI Qualification & Booking',
      description: 'AI Agents ask the right questions, pre-qualify prospects, and route serious opportunities to booking.'
    },
    {
      icon: <Megaphone />,
      title: 'Lead Reactivation Campaigns',
      description: 'Turn old estimates and past leads into booked jobs with automated text and email reactivation.'
    },
    {
      icon: <Calendar />,
      title: 'Calendar + No-Show Prevention',
      description: 'Self-booking with reminders and confirmations to reduce drop-off before the job.'
    },
    {
      icon: <BarChart3 />,
      title: 'Pipeline & Revenue Visibility',
      description: 'Track every lead from first contact to close so you can see where deals stall and fix it fast.'
    },
    {
      icon: <Headset />,
      title: 'All-In-One Mondays Marketing App',
      description: 'Full business suite with CRM, communications, automations, marketing, and reporting in one place.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Your Systems Do the Heavy Lifting</h2>
          <p className="section-subtitle">
            Start with AI Agents or run your entire operation inside the Mondays Marketing App. Either way, every lead gets handled.
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
