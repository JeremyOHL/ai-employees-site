import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mike Richardson',
      company: 'Richardson Plumbing',
      role: 'Owner',
      text: 'Since implementing the AI employee, we\'ve increased our booking rate by 45%. It answers calls while we\'re on jobs, and customers love the instant response.',
      avatar: 'MR'
    },
    {
      name: 'Sarah Thompson',
      company: 'Thompson HVAC Services',
      role: 'Operations Manager',
      text: 'Game changer for our business. We used to miss so many after-hours calls. Now we capture every lead, and our revenue has increased by $60K in just 6 months.',
      avatar: 'ST'
    },
    {
      name: 'James Martinez',
      company: 'Elite Landscaping Co',
      role: 'CEO',
      text: 'The AI employee handles lead qualification perfectly. It books the right appointments and filters out tire-kickers. Our close rate has improved dramatically.',
      avatar: 'JM'
    },
    {
      name: 'Lisa Chen',
      company: 'Pro Electrical Solutions',
      role: 'Owner',
      text: 'Best investment we\'ve made. The AI responds to emails, texts, and calls instantly. Our customers think we have a full-time receptionist. Worth every penny.',
      avatar: 'LC'
    },
    {
      name: 'Tom Anderson',
      company: 'Anderson Roofing',
      role: 'President',
      text: 'I was skeptical at first, but the results speak for themselves. We\'re booking 3x more appointments and spending less time on admin work. It just works.',
      avatar: 'TA'
    },
    {
      name: 'Rachel Foster',
      company: 'Foster Cleaning Services',
      role: 'Founder',
      text: 'As a solo operator, I couldn\'t answer my phone during jobs. I was losing customers left and right. Now my AI employee handles everything. Life-changing.',
      avatar: 'RF'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Home Services Businesses Are Saying</h2>
          <p className="section-subtitle">
            Real results from real businesses just like yours.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
