import React from 'react';
import { Phone, MessageSquare, Mail, Smartphone, Target, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Phone />,
      title: 'Answer Inbound Calls',
      description: 'Never miss a call again. Our AI employees answer every call professionally, gather information, and handle customer inquiries 24/7.'
    },
    {
      icon: <Target />,
      title: 'Follow Up With Leads',
      description: 'Automated follow-ups ensure no lead falls through the cracks. Your AI employee nurtures prospects with timely, personalized communication.'
    },
    {
      icon: <MessageSquare />,
      title: 'Respond to Live Chat',
      description: 'Instant responses to website visitors. Engage customers in real-time, answer questions, and guide them toward booking.'
    },
    {
      icon: <Mail />,
      title: 'Handle Email Inquiries',
      description: 'Professional email responses sent instantly. Your AI employee understands context and provides accurate, helpful information.'
    },
    {
      icon: <Smartphone />,
      title: 'Manage SMS Messages',
      description: 'Text messaging handled seamlessly. Quick responses to SMS inquiries keep customers engaged and moving toward conversion.'
    },
    {
      icon: <Calendar />,
      title: 'Book Appointments',
      description: 'Automated scheduling that syncs with your calendar. Qualify leads, check availability, and book appointments without lifting a finger.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Your AI Employee Does It All</h2>
          <p className="section-subtitle">
            A complete customer engagement solution that handles every touchpoint of your business communication.
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
