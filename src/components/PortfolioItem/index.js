import React from 'react';
import celular from '../../assets/img/calular.png';

const PortfolioItem = (props) => {

  return (
    <section class="tres">
      {props.children}
    </section>
  );
}

export default PortfolioItem;