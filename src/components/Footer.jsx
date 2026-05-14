import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import LogoLink from './LogoLink';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-brand">
            <LogoLink className="footer-logo-link" />
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#problem">How We Help</a></li>
              <li><a href="#features">Solutions</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">What We Build</h4>
            <ul className="footer-links">
              <li><a href="#features">Lead Response Systems</a></li>
              <li><a href="#features">Automated Follow-Up</a></li>
              <li><a href="#features">Appointment Reminders</a></li>
              <li><a href="#features">Customer Chat & FAQ</a></li>
              <li><a href="#features">Review Automation</a></li>
              <li><a href="#features">Reporting & Dashboards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:hello@mondaysmarketing.com">hello@leadwithmondays.com</a>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+15132763058">(513) 276-3058</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Mondays Marketing. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
