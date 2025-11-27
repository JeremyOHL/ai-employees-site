import React from 'react';
import LogoLink from '../components/LogoLink';

const PrivacyPage = () => {
  const sections = [
    {
      title: 'Data We Collect',
      body: 'Contact info, communication metadata, device/browser details, and usage data to improve the experience.'
    },
    {
      title: 'How We Use It',
      body: 'To respond to inquiries, power AI employees, improve services, and keep the platform secure.'
    },
    {
      title: 'Sharing',
      body: 'Vetted service providers under contract, only as needed for operations, compliance, and security.'
    },
    {
      title: 'Your Controls',
      body: 'Request access, corrections, or deletion; opt out of marketing; update preferences anytime.'
    }
  ];

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <LogoLink />
        <h1 className="legal-title">We protect the conversations that grow your business.</h1>
        <p className="legal-subtitle">
          Clear, human-readable rules on how we collect, use, and safeguard your data—so you can keep scaling with confidence.
        </p>
      </header>

      <main className="legal-content">
        <div className="legal-card">
          <h2 className="legal-card-title">Quick Highlights</h2>
          <ul className="legal-bullets">
            {sections.map((section, idx) => (
              <li key={idx} className="legal-bullet">
                <span className="legal-bullet-title">{section.title}</span>
                <span className="legal-bullet-body">{section.body}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="legal-grid">
          <div className="legal-section">
            <h3>Information We Collect</h3>
            <p>
              We collect contact details, business context, communications metadata, and usage data to power AI interactions and improve performance. We do not sell personal data.
            </p>
          </div>
          <div className="legal-section">
            <h3>How We Use Information</h3>
            <p>
              To provide services, personalize responses, monitor quality, prevent fraud, and comply with legal obligations. Marketing emails are opt-in and easy to turn off.
            </p>
          </div>
          <div className="legal-section">
            <h3>Sharing & Transfers</h3>
            <p>
              Shared only with trusted vendors under strict agreements for hosting, analytics, communications, and payments. Cross-border transfers follow applicable safeguards.
            </p>
          </div>
          <div className="legal-section">
            <h3>Your Rights</h3>
            <p>
              You can request access, correction, deletion, or a copy of your data. Contact us to exercise rights or ask questions: hello@leadwithmondays.com.
            </p>
          </div>
          <div className="legal-section">
            <h3>Security</h3>
            <p>
              We apply encryption in transit, role-based access, logging, and regular reviews. Report security concerns to security@leadwithmondays.com.
            </p>
          </div>
          <div className="legal-section">
            <h3>Updates</h3>
            <p>
              When this policy changes, we will update this page and adjust the effective date. Continued use after changes means acceptance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
