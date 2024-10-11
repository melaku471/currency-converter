import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {currentYear} Currency Converter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;