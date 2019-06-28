import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Profil from './components/Profil';
import ProfilLeftContent from './components/ProfilLeftContent';
import ProfilRightContent from './components/ProfilRightContent';
import Historique from './components/Historique';
import Gamification from './components/Gamification';
import Karma from './components/Karma';

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
          <Profil>
            <ProfilLeftContent />
            <ProfilRightContent>
              <Route path="/profil/monhistorique" component={Historique} />
              <Route path="/profil/infoskarma" component={Karma} />
              <Route path="/profil/gamification" component={Gamification} />
            </ProfilRightContent>
          </Profil>
        )} />
      </Switch>
    </div>
  );
}

export default App;
