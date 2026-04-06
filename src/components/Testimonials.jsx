import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mike Richardson',
      company: 'Richardson & Sons Plumbing',
      role: 'Owner',
      text: 'Mondays cleaned up our entire operation. Leads, bookings, follow-up — it all just runs. We stopped losing jobs to voicemail.',
      avatar: 'MR'
    },
    {
      name: 'Sarah Thompson',
      company: 'Thompson Property Group',
      role: 'Operations Manager',
      text: 'They were up and running in two weeks. Our follow-up happens automatically now and we\'ve seen a 40% jump in closed deals without chasing anything manually.',
      avatar: 'ST'
    },
    {
      name: 'James Martinez',
      company: 'Martinez Agency',
      role: 'CEO',
      text: 'The systems they built save my team hours every week. We focus on clients, not admin. It\'s the best investment we\'ve made in the business.',
      avatar: 'JM'
    },
    {
      name: 'Lisa Chen',
      company: 'Chen Wellness Studio',
      role: 'Owner',
      text: 'Our no-show rate dropped dramatically after they set up our reminder system. Clients actually show up — and the ones who don\'t reschedule automatically.',
      avatar: 'LC'
    },
    {
      name: 'Tom Anderson',
      company: 'Anderson Construction Group',
      role: 'President',
      text: 'Now I have a dashboard that shows me exactly where our revenue comes from and where we\'re losing deals. Way better decisions, way less guessing.',
      avatar: 'TA'
    },
    {
      name: 'Rachel Foster',
      company: 'Foster Creative Co.',
      role: 'Founder',
      text: 'I used to live in chaos trying to juggle client communications, invoices, and follow-ups. Mondays built a system that handles most of it — I barely think about it anymore.',
      avatar: 'RF'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Business Owners Running Smarter with Mondays Marketing</h2>
          <p className="section-subtitle">
            Real results from real businesses — fewer dropped leads, less manual work, and more time to grow.
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
