import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Profil from './components/Profil';
import Home from './containers/Home';
import Profil from './components/Profil';
import Historique from './components/Historique';
import Gamification from './components/Gamification';
import Karma from './components/Karma';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Topic from './containers/Topic';
import Components from './Components';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/topics/:id" component={Topic} />
        <Route path="/components" component={Components} />
        <Route path="/profil" render={() => (
          <React.Fragment>
            <Profil />
            <Route path="/profil/monhistorique" component={Historique} />
            <Route path="/profil/infoskarma" component={Karma} />
            <Route path="/profil/gamification" component={Gamification} />
          </React.Fragment>
        )} />
      </Switch>
    </div>
  );
}

export default App;
