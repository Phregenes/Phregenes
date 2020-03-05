import React from 'react';
import celular from '../../assets/img/calular.png';

const PortfolioItem = (props) => {
  console.log(props)
  return (
    <section className={`tres ${props.halfWidth}`}>
      {props.children}
    </section>
  );
}

export default PortfolioItem;