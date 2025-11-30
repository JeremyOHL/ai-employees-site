import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mike Richardson',
      company: 'Richardson Plumbing',
      role: 'Owner',
      text: 'Mondays rebuilt our entire system and turned it into a real operating platform. We finally have one place to see leads, bookings, and revenue.',
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
      text: 'The nurture sequences and routing rules filter tire-kickers and get serious prospects on the calendar. Our sales team only sees qualified opportunities now.',
      avatar: 'JM'
    },
    {
      name: 'Lisa Chen',
      company: 'Pro Electrical Solutions',
      role: 'Owner',
      text: 'We keep our brand, but the Mondays team runs the tech. It feels like having an internal marketing ops department without the headcount.',
      avatar: 'LC'
    },
    {
      name: 'Tom Anderson',
      company: 'Anderson Roofing',
      role: 'President',
      text: 'The weekly reviews and dashboards give us real numbers: speed-to-lead, close rates, and ROI by channel. Decisions are faster now.',
      avatar: 'TA'
    },
    {
      name: 'Rachel Foster',
      company: 'Foster Cleaning Services',
      role: 'Founder',
      text: 'I used to live in chaos. With the MMS stack, nothing slips: forms, chat, SMS, reviews, calendars—it all talks to each other.',
      avatar: 'RF'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Operators Who Moved to Mondays Marketing Systems</h2>
          <p className="section-subtitle">
            Real teams replacing patchwork tools with one operated system and real service.
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
