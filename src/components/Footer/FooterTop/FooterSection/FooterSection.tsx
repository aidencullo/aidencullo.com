import React, { ReactNode } from 'react';
import './FooterSection.css';

interface FooterSectionProps {
  header: string;
  children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ header, children }) => {
  const headerStylized = header.toUpperCase()

  return (
    <div className="footer-section">
      <p className="footer-section-header">
        {headerStylized}
      </p>
      <ul>
        {children}
      </ul>
    </div>
  )
};

export default FooterSection
