import React from 'react';
import {
  MessageSquare,
  Users,
  Zap,
  Megaphone,
  Calendar,
  BarChart3,
  Star,
  Globe,
  Phone,
  DollarSign
} from 'lucide-react';

const Features = () => {
  const categories = [
    {
      icon: <MessageSquare size={28} />,
      title: 'Unified Inbox & Communication',
      description: 'Every conversation in one place — no more switching between apps.',
      items: [
        'Two-way SMS & MMS texting',
        'Email inbox & outbound campaigns',
        'Phone calling with call recording',
        'Facebook & Instagram DMs',
        'Live chat widget for your website',
        'Google Business Messages'
      ]
    },
    {
      icon: <Users size={28} />,
      title: 'CRM & Pipeline Management',
      description: 'Track every lead from first contact to paid invoice.',
      items: [
        'Full contact & lead management',
        'Custom sales pipelines & stages',
        'Opportunity tracking & deal values',
        'Tags, smart lists & segmentation',
        'Lead source tracking',
        'Notes, tasks & activity history'
      ]
    },
    {
      icon: <Zap size={28} />,
      title: 'Automation & AI Tools',
      description: 'Let the system work while you\'re on the job.',
      items: [
        'Missed call text-back (instant reply)',
        'AI conversational chatbot',
        'Drag-and-drop workflow builder',
        'Trigger-based automations',
        'Lead qualification sequences',
        'Voicemail drops'
      ]
    },
    {
      icon: <Megaphone size={28} />,
      title: 'Marketing & Campaigns',
      description: 'Reach leads and past customers automatically.',
      items: [
        'Email drip & broadcast campaigns',
        'SMS marketing campaigns',
        'Lead reactivation sequences',
        'Social media planner & scheduler',
        'Reputation management & review requests',
        'Google & Facebook review monitoring'
      ]
    },
    {
      icon: <Calendar size={28} />,
      title: 'Scheduling & Bookings',
      description: 'Fill your calendar without playing phone tag.',
      items: [
        'Online self-booking calendar',
        'Appointment reminders (SMS & email)',
        'No-show follow-up automation',
        'Confirmation & rescheduling flows',
        'Team calendar management',
        'Round-robin & resource scheduling'
      ]
    },
    {
      icon: <Globe size={28} />,
      title: 'Websites, Funnels & Forms',
      description: 'Build the pages that capture leads and convert them.',
      items: [
        'Drag-and-drop website builder',
        'High-converting funnel pages',
        'Form & survey builder',
        'Pop-ups & lead capture widgets',
        'Blog & SEO-ready pages',
        'Custom domain support'
      ]
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Payments & Invoicing',
      description: 'Get paid faster — right from the same app.',
      items: [
        'Online invoicing & payment links',
        'Text-to-pay & email-to-pay',
        'Estimates & proposals',
        'Recurring billing & subscriptions',
        'Payment tracking & receipts',
        'Stripe & other payment integrations'
      ]
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Reporting & Analytics',
      description: 'Know your numbers and where to improve.',
      items: [
        'Lead source & revenue dashboards',
        'Pipeline conversion reporting',
        'Campaign performance tracking',
        'Call & communication analytics',
        'Google Ads & Facebook Ads reporting',
        'Custom report builder'
      ]
    },
    {
      icon: <Phone size={28} />,
      title: 'Mobile App & Team Tools',
      description: 'Run your business from anywhere, with your whole team.',
      items: [
        'Full-featured iOS & Android app',
        'Team inbox & conversation routing',
        'Staff user roles & permissions',
        'Internal notes & task assignments',
        'Real-time lead & opportunity alerts',
        'Multi-location support'
      ]
    },
    {
      icon: <Star size={28} />,
      title: 'Memberships & Course Delivery',
      description: 'Sell your expertise or onboard customers at scale.',
      items: [
        'Membership site builder',
        'Online course creation & delivery',
        'Video content hosting',
        'Drip course schedules',
        'Client onboarding portals',
        'Affiliate & referral tracking'
      ]
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <p className="section-eyebrow">Everything In One Platform</p>
          <h2 className="section-title">Every Tool Your Business Needs — No Stitching Required</h2>
          <p className="section-subtitle">
            The Mondays Marketing Systems App replaces 10+ separate tools with a single, unified platform built for home service businesses.
          </p>
        </div>

        <div className="features-grid-expanded">
          {categories.map((cat, index) => (
            <div key={index} className="feature-card-expanded">
              <div className="feature-icon">
                {cat.icon}
              </div>
              <h3 className="feature-title">{cat.title}</h3>
              <p className="feature-description">{cat.description}</p>
              <ul className="feature-list">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="feature-list-item">
                    <span className="feature-list-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="features-cta-strip">
          <p className="features-strip-text">
            All of this is included with every plan — the difference is how much help you get setting it up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
