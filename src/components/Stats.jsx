import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="stat-icon" />,
      value: '<60 sec',
      label: 'Typical first response time'
    },
    {
      icon: <Clock className="stat-icon" />,
      value: '24/7',
      label: 'Lead response coverage after hours'
    },
    {
      icon: <DollarSign className="stat-icon" />,
      value: 'Fewer Drops',
      label: 'Stronger follow-up and fewer lost leads'
    },
    {
      icon: <Users className="stat-icon" />,
      value: '1 App',
      label: 'Calls, texts, leads, and pipeline in one place'
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
