import React from 'react';
import FooterBottomLinks from './FooterBottomLinks/FooterBottomLinks';
import './FooterBottom.css';

const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <FooterBottomLinks />
    </div>
  );
};

export default FooterBottom;
