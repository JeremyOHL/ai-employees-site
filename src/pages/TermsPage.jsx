import React from 'react';
import LogoLink from '../components/LogoLink';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="legal-page">
      <header className="legal-hero">
        <LogoLink />
        <h1 className="legal-title">Simple terms for Mondays Marketing Systems.</h1>
        <p className="legal-subtitle">
          How we partner, protect your data, and keep your operating system running smoothly.
        </p>
      </header>

      <main className="legal-content">
        <div className="legal-card">
          <h2 className="legal-card-title">What to Expect</h2>
          <ul className="legal-bullets">
            <li className="legal-bullet">
              <span className="legal-bullet-title">Services</span>
              <span className="legal-bullet-body">We design and launch your website, host it, and can add forms, chat, booking, and campaigns. Technology runs behind the scenes on the Mondays platform.</span>
            </li>
            <li className="legal-bullet">
              <span className="legal-bullet-title">Acceptable Use</span>
              <span className="legal-bullet-body">No unlawful, harmful, or abusive content. Keep credentials safe and notify us of suspected misuse.</span>
            </li>
            <li className="legal-bullet">
              <span className="legal-bullet-title">Billing</span>
              <span className="legal-bullet-body">Flat monthly billing for hosting and services. No setup fees or long-term contracts unless otherwise stated.</span>
            </li>
            <li className="legal-bullet">
              <span className="legal-bullet-title">Liability</span>
              <span className="legal-bullet-body">Service provided “as is” with standard limitations; capped liability tied to recent fees where permitted.</span>
            </li>
          </ul>
        </div>

        <div className="legal-grid">
          <div className="legal-section">
            <h3>Account & Access</h3>
            <p>
              You’re responsible for account credentials and authorized users. Let us know immediately about unauthorized access or suspected misuse.
            </p>
          </div>
          <div className="legal-section">
            <h3>Service Commitments</h3>
            <p>
              We aim for high availability and fast responses. We may make updates that improve quality, reliability, and security without prior notice.
            </p>
          </div>
          <div className="legal-section">
            <h3>Payment Terms</h3>
            <p>
              Fees are due in advance per billing cycle. Late or failed payments may pause service. Taxes are your responsibility where applicable.
            </p>
          </div>
          <div className="legal-section">
            <h3>Prohibited Uses</h3>
            <p>
              No illegal activity, harassment, spam, or attempts to reverse engineer the service. We may suspend accounts that violate these rules.
            </p>
          </div>
          <div className="legal-section">
            <h3>Intellectual Property</h3>
            <p>
              We retain ownership of the platform, templates, and playbooks. You retain ownership of your data and brand assets and grant us rights to use them to provide the service.
            </p>
          </div>
          <div className="legal-section">
            <h3>Termination</h3>
            <p>
              You may cancel with notice per your plan; we may terminate for material breach. Post-termination, we’ll provide data export on request when feasible.
            </p>
          </div>
          <div className="legal-section">
            <h3>Disclaimers & Limits</h3>
            <p>
              Service is provided “as is” subject to applicable law. Our liability is limited to amounts you paid in the prior 3 months, where permitted.
            </p>
          </div>
          <div className="legal-section">
            <h3>Contact</h3>
            <p>
              Questions? Reach us at hello@leadwithmondays.com for account, billing, or legal topics.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
