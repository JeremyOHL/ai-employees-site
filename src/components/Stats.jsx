import React from 'react';
import { Zap, Clock, Settings, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Zap className="stat-icon" />,
      value: 'Instant',
      label: 'Automated lead response — day or night'
    },
    {
      icon: <Clock className="stat-icon" />,
      value: '24/7',
      label: 'Systems that work even when you don\'t'
    },
    {
      icon: <Settings className="stat-icon" />,
      value: 'Custom',
      label: 'Built around your specific workflow — not a template'
    },
    {
      icon: <TrendingUp className="stat-icon" />,
      value: 'More Revenue',
      label: 'Less time on tasks, more time closing business'
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
