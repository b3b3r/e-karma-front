import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Topic from './containers/Topic';
import Components from './Components';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/topics/:id" component={Topic} />
        <Route path="/components" component={Components} />
      </Switch>
    </div>
  );
}

export default App;
