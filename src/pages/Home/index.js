import React from 'react';
import './styles.css';

import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';
import Barcontact from '../../components/Barcontact';
import History from '../../components/History';

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
        Curiosidades. 
        </span>
      </div>
    </div>

    <section className="section section-2">
      <div>
        <History />
      </div>
    </section>

    <section className="section section-1">
      <footer>© 2020 Pedro Regenes. Built using React Js.</footer>
    </section>
</body>

export default Home;