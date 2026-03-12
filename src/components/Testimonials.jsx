import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mike Richardson',
      company: 'Richardson Plumbing',
      role: 'Owner',
      text: 'Mondays cleaned up our process. Now we can see leads, bookings, and revenue in one place.',
      avatar: 'MR'
    },
    {
      name: 'Sarah Thompson',
      company: 'Thompson HVAC Services',
      role: 'Operations Manager',
      text: 'They launched us in two weeks and keep shipping new campaigns. Booked jobs are up 40% because follow-up just happens without us chasing it.',
      avatar: 'ST'
    },
    {
      name: 'James Martinez',
      company: 'Elite Landscaping Co',
      role: 'CEO',
      text: 'The follow-up and routing rules work. Our team spends time with qualified leads, not tire-kickers.',
      avatar: 'JM'
    },
    {
      name: 'Lisa Chen',
      company: 'Pro Electrical Solutions',
      role: 'Owner',
      text: 'Our team finally has one place to run lead follow-up and communication. It feels like an in-house team without extra payroll.',
      avatar: 'LC'
    },
    {
      name: 'Tom Anderson',
      company: 'Anderson Roofing',
      role: 'President',
      text: 'Weekly reviews and dashboards show real numbers. We make faster decisions with more confidence.',
      avatar: 'TA'
    },
    {
      name: 'Rachel Foster',
      company: 'Foster Cleaning Services',
      role: 'Founder',
      text: 'I used to live in chaos. With the Mondays Marketing App, nothing slips: forms, chat, SMS, reviews, calendars, and follow-up all work together.',
      avatar: 'RF'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Home Service Operators Growing with Mondays Marketing</h2>
          <p className="section-subtitle">
            Real teams fixing dropped leads and replacing patchwork tools with one clear system.
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
