import React from 'react';
import './styles.css';
import menubar from '../../components/menubar.png'

const Header = () => 
  <nav>
    <ul className="menu">
      <li className="menu1">phregenes</li>
      <li className="menu2">
      <img src={menubar} />
      </li>                
    </ul>
  </nav>;

export default Header;

/* <a href="http://localhost:3000/"></a> */