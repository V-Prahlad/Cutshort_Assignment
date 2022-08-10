import React from 'react';
import Logo from '../assets/Eden Logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Eden Logo Icon" />
      </div>
      <div className="logo__text">
        <span>Eden</span>
      </div>
    </div>
  );
};

export default Header;
