import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Leads live in spreadsheets, inboxes, and sticky notes',
    'Follow-up dies after day one and money is left on the table',
    'Teams waste hours moving data between disconnected tools',
    'Leaders can’t see pipeline health or ROI in real time',
    'Campaigns stall because the tech never gets fully configured'
  ];

  const solutions = [
    'One Mondays App operating system running every lead',
    'Automated nurture and routing that never forgets a prospect',
    'Prebuilt pipelines, calendars, forms, and funnels',
    'Dashboards for lead source, speed-to-lead, and revenue',
    'Hands-on team that implements and optimizes for you'
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
