import React from 'react';
import Profil from './components/profil';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Components from './Components';

import './App.scss';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Switch>
        <Route path="/components" component={Components} />
        <Route path="/profil" component={Profil} />
      </Switch>
    </div>
  );
}

export default App;
