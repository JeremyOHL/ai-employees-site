import React from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Leads come in but slow response sends them straight to a competitor',
    'Your team spends hours on repetitive tasks instead of growing the business',
    'You have no clear picture of where your customers are in the sales process',
    'Questions pile up after hours with no one around to answer them',
    'You can\'t tell which marketing efforts are actually making you money',
    'Appointments get missed or cancelled with no system to catch the fall'
  ];

  const solutions = [
    'Instant automated responses engage every lead before they move on',
    'Repetitive tasks handled automatically — follow-ups, reminders, data entry',
    'Every lead tracked from first contact to closed deal with nothing falling through',
    'Round-the-clock automated responses handle common questions at any hour',
    'Clear dashboards show exactly what\'s working so you invest smarter',
    'Smart reminders slash no-shows and keep your calendar full'
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        <div className="section-header">
          <h2 className="section-title">The Real Reasons Businesses Leave Money on the Table</h2>
          <p className="section-subtitle">
            It is rarely a lack of leads. It is the gaps in follow-up, communication, and visibility that quietly drain revenue every week.
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
              <span className="stat-number">Every Day</span>
              <span className="stat-text">these gaps cost businesses real revenue — most owners don't even know it's happening</span>
            </div>
          </div>

          {/* Solution Side */}
          <div className="solution-column">
            <div className="column-header solution-header">
              <Check className="header-icon" />
              <h3>The Mondays Solution</h3>
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
              <span className="stat-number">One Partner</span>
              <span className="stat-text">We design, build, and manage the systems that close your gaps and run your business more efficiently</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
