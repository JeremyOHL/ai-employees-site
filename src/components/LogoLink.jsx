import React from 'react';
import { Link } from 'react-router-dom';

const LogoLink = ({ className = '' }) => {
  return (
    <Link to="/" className={`logo-link ${className}`}>
      <img
        src="https://storage.googleapis.com/funnel-ai-production/chat/Sf7aTUm2lqA6OpM6417Y/brandmark-design-12.png"
        alt="Mondays Marketing Systems"
        className="logo-image"
      />
    </Link>
  );
};

export default LogoLink;
