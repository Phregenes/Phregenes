import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Barcontact from './components/Barcontact';
import Bar from './components/Bar';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Barcontact />
      <Bar />
    </div>
  );
}

export default App;
