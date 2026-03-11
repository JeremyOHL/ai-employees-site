import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Missed calls and late replies send leads to competitors',
    'No-shows and weak follow-up leave estimates hanging',
    'Leads are scattered, so your pipeline is unclear',
    'Admin work steals time from sales and operations',
    'Without clear numbers, money leaks go unseen'
  ];

  const solutions = [
    'AI Agents respond, qualify, and route leads 24/7',
    'Automations handle reminders and follow-up',
    'One inbox for calls, texts, forms, and chat',
    'Track each lead from first contact to closed job',
    'Run your team from one clear system'
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        <div className="section-header">
          <h2 className="section-title">Where Home Service Businesses Leak Revenue</h2>
          <p className="section-subtitle">
            You do not need more leads first. You need faster response, better follow-up, and clear visibility. We fix that.
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
              <span className="stat-number">30%+</span>
              <span className="stat-text">of inbound leads often go unanswered or under-followed</span>
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
              <span className="stat-number">1 App</span>
              <span className="stat-text">Minimal owner time, automated follow-up, and clear weekly performance visibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
