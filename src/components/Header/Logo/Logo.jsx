import React from 'react';

import { logo, icon, logoMom, logoContainer } from './Logo.module.css';

const Logo = () => {
  return (
    <div className={logoContainer}>
      <img src="/images/logo.png" alt="logo" className={icon} />
      <h1 className={logo} value="slim">
        slim
        <span className={logoMom}> mom </span>
      </h1>
    </div>
  );
};

export default Logo;
