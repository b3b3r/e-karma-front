import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Profil from './components/Profil';
import Home from './containers/Home';
import Components from './Components';

import './App.scss';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/components" component={Components} />
        <Route path="/profil" component={Profil} />
      </Switch>
    </div>
  );
}

export default App;
