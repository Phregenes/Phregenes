import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import './styles.css';


const App = () => {
  return (
    <div className="App">
     
       <Switch>
         <Route path="/home/about" component={About}/>
         <Route path="/home" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/" component={Home}/>
       </Switch>
     
    </div>
  );
}

export default App;