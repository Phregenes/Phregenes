import React from 'react';
import './styles.css';

import PortfolioItem from './../PortfolioItem';

import celular from '../../assets/img/calular.png';

const Bar = () =>(
  <section>
    <div className="container">
      <li className="libar">
        <PortfolioItem>
          <img src={celular} />
        </PortfolioItem>
      </li>
    </div>
    <div className="containerdivision">
      <ul>
        <li className="libar">
          <PortfolioItem  halfWidth="half-width">
            <img src={celular} />
          </PortfolioItem>
        </li>
        <li className="libar">
          <PortfolioItem  halfWidth="half-width">
            <img src={celular} />
          </PortfolioItem>
        </li>
      </ul>
    </div>
  </section>

);

export default Bar;
