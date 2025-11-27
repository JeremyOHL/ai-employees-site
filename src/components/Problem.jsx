import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Missing calls after hours costs you $50K+ annually',
    'Competitors respond faster and steal your leads',
    'Manual follow-ups take hours each day',
    'No time to qualify leads properly',
    'Customers expect instant responses 24/7'
  ];

  const solutions = [
    'Answer every call instantly, day or night',
    'Respond to leads within seconds',
    'Automated follow-ups handled perfectly',
    'AI qualifies leads and books appointments',
    'Your business never sleeps'
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="section-header">
          <h2 className="section-title">Stop Losing Money to Missed Opportunities</h2>
          <p className="section-subtitle">
            Every missed call, delayed response, or unanswered message is revenue walking out the door.
          </p>
        </div>

        <div className="problem-grid">
          {/* Problem Side */}
          <div className="problem-column">
            <div className="column-header problem-header">
              <X className="header-icon" />
              <h3>The Problem</h3>
            </div>
            <div className="problem-list">
              {problems.map((problem, index) => (
                <div key={index} className="problem-item">
                  <div className="problem-bullet"></div>
                  <p>{problem}</p>
                </div>
              ))}
            </div>
            <div className="problem-stat">
              <span className="stat-number">$75K+</span>
              <span className="stat-text">Lost annually to missed opportunities</span>
            </div>
          </div>

          {/* Solution Side */}
          <div className="solution-column">
            <div className="column-header solution-header">
              <Check className="header-icon" />
              <h3>The Solution</h3>
            </div>
            <div className="solution-list">
              {solutions.map((solution, index) => (
                <div key={index} className="solution-item">
                  <Check className="solution-check" />
                  <p>{solution}</p>
                </div>
              ))}
            </div>
            <div className="solution-stat">
              <span className="stat-number">300%</span>
              <span className="stat-text">Average ROI within first year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;