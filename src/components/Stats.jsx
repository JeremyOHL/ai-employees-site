import React from 'react';
import { PhoneMissed, CalendarCheck, Star, DollarSign } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <PhoneMissed className="stat-icon" />,
      value: 'Never Miss a Lead',
      label: 'Every inquiry gets an instant response — before they call your competitor'
    },
    {
      icon: <CalendarCheck className="stat-icon" />,
      value: 'Zero No-Shows',
      label: 'Automatic reminders keep your schedule full and your crew busy'
    },
    {
      icon: <Star className="stat-icon" />,
      value: 'More 5-Star Reviews',
      label: 'Every completed job triggers a review request while the experience is fresh'
    },
    {
      icon: <DollarSign className="stat-icon" />,
      value: 'Get Paid Faster',
      label: 'Digital invoices and automatic follow-ups mean fewer unpaid jobs to chase'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
