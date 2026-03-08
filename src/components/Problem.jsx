import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Missed calls and late replies send hot leads to your competitors',
    'No-shows and weak follow-up leave open estimates sitting in limbo',
    'Leads come from too many places and nobody sees the full pipeline',
    'Manual admin steals owner time from sales, crews, and growth',
    'Without clear reporting, you cannot spot where money is leaking'
  ];

  const solutions = [
    'AI Agents answer, qualify, and respond instantly 24/7',
    'Automations handle reminders, reactivation, and nurture at scale',
    'One inbox for calls, texts, forms, and chat conversations',
    'Pipeline visibility from first touch to closed job',
    'Mondays Marketing App gives your team one operating system'
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        <div className="section-header">
          <h2 className="section-title">Where Home Service Businesses Leak Revenue</h2>
          <p className="section-subtitle">
            You do not have a lead problem. You have a speed-to-lead, follow-up, and conversion problem. We fix the system behind the sale.
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
              <span className="stat-number">2 Offers</span>
              <span className="stat-text">AI Agent Essentials or full Mondays Marketing App suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
