import React from 'react';
import './styles.css';
import celular from '../../assets/img/calular.png';

const Bar = () =>(
  <ul className="ulbar">
    <li className="libar">
      <div className="tres">
      <img src={celular} />
      </div>
    </li>
  </ul>
//<div className="tres" />

);

export default Bar;
