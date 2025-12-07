import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Your site is a digital brochure instead of a lead machine',
    'You pay designers/developers and still wait weeks for updates',
    'Leads bounce because there’s no fast way to call, chat, or book',
    'Follow-up is manual and inconsistent',
    'Hidden fees and contracts make switching painful'
  ];

  const solutions = [
    'A free branded landing page built to convert',
    'Fast launch with your copy, colors, and logo',
    'Click-to-call, chat, and lead forms baked in',
    'Automated reminders and handoffs so follow-up happens',
    'Flat monthly hosting—no contracts, no setup fees'
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        <div className="section-header">
          <h2 className="section-title">Stop Surviving on Patchwork Tools</h2>
          <p className="section-subtitle">
            When your systems are scattered, growth stalls. Mondays Marketing Systems installs the structure you need to thrive.
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
              <span className="stat-number">$250K</span>
              <span className="stat-text">Average pipeline left unmanaged each year</span>
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
              <span className="stat-number">3.2x</span>
              <span className="stat-text">Average ROI inside the first 12 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
