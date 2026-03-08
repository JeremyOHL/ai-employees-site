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
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#pricing">AI Agent Essentials</a></li>
              <li><a href="#pricing">Mondays Marketing App Suite</a></li>
              <li><a href="#features">Automation & Follow-Up</a></li>
              <li><a href="#features">Pipeline & Reporting</a></li>
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
                <a href="tel:+15139604070">(513) 960-4070</a>
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
