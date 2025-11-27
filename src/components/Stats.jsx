import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="stat-icon" />,
      value: '95%',
      label: 'Lead Response Rate'
    },
    {
      icon: <Clock className="stat-icon" />,
      value: '24/7',
      label: 'Always Available'
    },
    {
      icon: <DollarSign className="stat-icon" />,
      value: '$45K',
      label: 'Avg. Revenue Increase'
    },
    {
      icon: <Users className="stat-icon" />,
      value: '100+',
      label: 'Happy Businesses'
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