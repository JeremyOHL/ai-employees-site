import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-brand">
            <img 
              src="https://storage.googleapis.com/funnel-ai-production/chat/Sf7aTUm2lqA6OpM6417Y/brandmark-design-12.png" 
              alt="Mondays Marketing Systems" 
              className="footer-logo"
            />
            <p className="footer-description">
              AI employees for home services businesses. Never miss a lead again.
            </p>
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
              <li><a href="#">Call Answering</a></li>
              <li><a href="#">Lead Follow-up</a></li>
              <li><a href="#">Chat & SMS</a></li>
              <li><a href="#">Appointment Booking</a></li>
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
          <p>&copy; 2025 Mondays Marketing Systems. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;