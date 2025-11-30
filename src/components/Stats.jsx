import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="stat-icon" />,
      value: '4.5x',
      label: 'Faster follow-up velocity'
    },
    {
      icon: <Clock className="stat-icon" />,
      value: '14 days',
      label: 'Average time to go live'
    },
    {
      icon: <DollarSign className="stat-icon" />,
      value: '38%',
      label: 'Avg. lift in booked revenue'
    },
    {
      icon: <Users className="stat-icon" />,
      value: '150+',
      label: 'Operators on the MMS stack'
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
