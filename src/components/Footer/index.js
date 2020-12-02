import React from 'react';
import './styles.css';

import Logo from '../../assets/img/logo.svg';


const Footer = () => {
  return (
    <div className="footer-container">
      <div>
      <p>© 2020 Pedro Regenes. Built using React Js.</p>
      </div>
      <div className="logomenu-img-footer">
      <img src={Logo} />
      </div>
    </div>
  );
}

export default Footer;