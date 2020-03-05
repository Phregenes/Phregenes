import React from 'react';
import './styles.css';

import PortfolioItem from './../PortfolioItem';

import celular from '../../assets/img/calular.png';

const Bar = () =>(
  <section>
    <ul className="ulbar">
      <li className="libar">
        <PortfolioItem>
          <img src={celular} />
        </PortfolioItem>
        <PortfolioItem>
          <img src={celular} />
        </PortfolioItem>
      </li>
    </ul>
  </section>

);

export default Bar;
