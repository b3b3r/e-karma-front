import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./containers/Navbar";
import Home from "./containers/Home/Home";
import Profil from "./containers/Profil/Profil";
import ProfilLeftContent from "./containers/Profil/ProfilLeftContent";
import ProfilRightContent from "./containers/Profil/ProfilRightContent";
import Historique from "./containers/Profil/Historique";
import Gamification from "./containers/Profil/Gamification";
import Karma from "./containers/Profil/Karma";

import Topic from "./containers/Topics/Topic";
import Components from "./Components";
import { asyncFetchUsers } from './actions/fetchUsers.js';
import { asyncFetchTopics } from './actions/search';
import { asyncFetchTags } from './actions/search';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import "./App.scss";

class App extends Component {
  
  componentDidMount() {
    const { asyncFetchTopics, asyncFetchUsers, asyncFetchTags } = this.props;
    asyncFetchTopics();
    asyncFetchUsers();
    asyncFetchTags();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/topics/:id" component={Topic} />
          <Route path="/components" component={Components} />
          <Route
            path="/profil"
            render={() => (
              <Profil>
                <ProfilLeftContent />
                <ProfilRightContent>
                  <Route path="/profil/monhistorique" component={Historique} />
                  <Route path="/profil/infoskarma" component={Karma} />
                  <Route path="/profil/gamification" component={Gamification} />
                </ProfilRightContent>
              </Profil>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators(
  { asyncFetchTopics, asyncFetchUsers, asyncFetchTags },
  dispatch,
)

export default connect(null, mdtp)(App);
