import React from 'react';
import {
  PhoneMissed,
  FileText,
  Star,
  CalendarCheck,
  MessageCircle,
  BarChart3,
  RefreshCw,
  Bell,
  ShoppingCart,
  Users
} from 'lucide-react';

const Features = () => {
  const solutions = [
    {
      icon: <PhoneMissed size={28} />,
      problem: 'Missed calls turn into lost customers.',
      title: 'Never Lose a Lead to Voicemail Again',
      description: 'When a customer calls and no one picks up, an instant text goes out to keep the conversation alive — right when they\'re still thinking about you. No more lost leads from missed calls.',
      outcome: 'Leads stay warm, even when you\'re busy on a job.'
    },
    {
      icon: <FileText size={28} />,
      problem: 'Quotes sit unanswered for days.',
      title: 'Follow-Up That Happens Without You',
      description: 'Once a quote or proposal goes out, automated follow-ups check in at the right intervals — nudging prospects toward a decision so your team doesn\'t have to chase every one manually.',
      outcome: 'More quotes convert without your team lifting a finger.'
    },
    {
      icon: <Star size={28} />,
      problem: 'You have too few online reviews to compete.',
      title: 'Build Your Reputation on Autopilot',
      description: 'After every completed job or transaction, a review request goes out automatically. Happy customers are guided to leave feedback where it matters most — Google, Facebook, and beyond.',
      outcome: 'A steady stream of fresh reviews without ever asking manually.'
    },
    {
      icon: <CalendarCheck size={28} />,
      problem: 'No-shows and last-minute cancellations wreck your schedule.',
      title: 'Appointments That Actually Get Kept',
      description: 'Automated reminders go out before every appointment via text and email, with easy rescheduling options. Clients remember. No-shows drop. Your team stops playing phone tag.',
      outcome: 'A fuller, more predictable calendar every week.'
    },
    {
      icon: <MessageCircle size={28} />,
      problem: 'Customer questions pile up after hours.',
      title: '24/7 Responses Without Hiring Anyone',
      description: 'A smart automated assistant handles common questions around the clock — business hours, pricing, availability, directions — so customers get answers and you don\'t miss opportunities.',
      outcome: 'Customers feel taken care of. You sleep without missing a beat.'
    },
    {
      icon: <BarChart3 size={28} />,
      problem: 'You don\'t know which marketing is actually working.',
      title: 'See Exactly Where Your Revenue Comes From',
      description: 'A clear, simple dashboard shows you where every lead originated, how many converted, and which efforts are worth your budget — so you stop guessing and start investing smarter.',
      outcome: 'Confident decisions backed by real numbers, not gut feelings.'
    },
    {
      icon: <RefreshCw size={28} />,
      problem: 'Past customers forget you exist.',
      title: 'Reactivate Customers Who\'ve Gone Quiet',
      description: 'Automated campaigns reach back out to past customers at the right time — seasonal offers, check-ins, referral asks — keeping your business top of mind without any manual outreach.',
      outcome: 'More repeat business and referrals from customers you already earned.'
    },
    {
      icon: <Bell size={28} />,
      problem: 'Your team doesn\'t know who to call or when.',
      title: 'Alerts That Keep Your Team on Track',
      description: 'When a lead goes cold, a task goes overdue, or a deal needs attention, automated alerts notify the right person at the right moment — so nothing slips through the cracks.',
      outcome: 'A team that acts on time, every time, without being micromanaged.'
    },
    {
      icon: <ShoppingCart size={28} />,
      problem: 'Getting paid takes too many back-and-forth steps.',
      title: 'Invoices That Pay Themselves (Almost)',
      description: 'Send digital invoices that customers can pay instantly via text or email — no logins, no hassle. Automated reminders go out for unpaid invoices so you don\'t have to chase checks.',
      outcome: 'Faster payments and less awkward follow-up.'
    },
    {
      icon: <Users size={28} />,
      problem: 'New customers don\'t know what to expect after they sign.',
      title: 'Onboarding That Runs Itself',
      description: 'When a new customer comes on board, an automated welcome sequence goes out — next steps, key contacts, important info — delivered at the right pace so they feel supported from day one.',
      outcome: 'Happier customers, fewer confused calls, and stronger retention.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <p className="section-eyebrow">Real Problems. Real Solutions.</p>
          <h2 className="section-title">Common Business Headaches We Fix Every Day</h2>
          <p className="section-subtitle">
            These are real scenarios business owners face — and exactly the kind of problems Mondays Marketing Systems is built to solve.
          </p>
        </div>

        <div className="features-grid-expanded">
          {solutions.map((sol, index) => (
            <div key={index} className="feature-card-expanded">
              <div className="feature-icon">
                {sol.icon}
              </div>
              <p className="feature-problem-label">{sol.problem}</p>
              <h3 className="feature-title">{sol.title}</h3>
              <p className="feature-description">{sol.description}</p>
              <div className="feature-outcome">
                <span className="outcome-label">Result: </span>
                {sol.outcome}
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta-strip">
          <p className="features-strip-text">
            Every solution is built specifically for your business — not a copy-paste template. We learn how you work, then build a system that fits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
