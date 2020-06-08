import React from 'react';
import './styles.css';

import Presentation from '../Presentation';
import Skills from '../Skills';
import Flowchart from '../Flowchart';
import Barcontact from '../Barcontact';

const Home = () => 

  <body>
    <div className="pimg1">
      <div className="text1">
        <Presentation />
      </div>
    </div>

    <div className="pimg3">
      <div className="ptext">
        <span className="border trans">
          <Barcontact />
        </span>
      </div>
    </div>

    <section className="section section-1">
      <h1>Skills</h1>
      <Skills />
    </section>

    <div className="pimg2">
      <div className="ptext">
        <span className="border trans">
          Caminho das pedras para um Dev Front End 
        </span>
      </div>
    </div>

    <section className="section section-2">
      <Flowchart />
    </section>
  </body>

export default Home;