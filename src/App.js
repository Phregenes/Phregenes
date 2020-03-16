import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Barcontact from './components/Barcontact';
import Sidebar from './components/Sibebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Barcontact />
      <Sidebar />
    </div>
  );
}

export default App;
