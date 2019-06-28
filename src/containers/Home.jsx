import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { asyncFetchUsers } from '../actions/fetchUsers.js';

import Input from "../common/Input";

import "./Home.scss";

class Home extends Component {

  componentDidMount() {
      const { asyncFetchUsers } = this.props;
      asyncFetchUsers();
    }

  render() {
    const { topics, users } = this.props;
    const top = [];
    const usersArray = [...users].sort(
      (a, b) => parseFloat(a.karma) - parseFloat(b.karma)
    );
    const worst = usersArray.slice(0, 2);
    top.push(usersArray[usersArray.length - 1]);
    top.push(usersArray[usersArray.length - 2]);
    if (users.length === 0) {
      return (
        <div className="Home">
          No users...
        </div>
      )
    }
    return (
      <div className="Home">
        <Input label="Recherche" className="recherche"/>
        <div className="topics">
          {topics.map(topic => (
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">{topic.titre}</div>
                <div className="comments">
                  {topic.commentaires} commentaires
                </div>
              </div>
              <div className="tags">
                {topic.tags.map(tag => (
                  <div className="tag">{tag}</div>
                ))}
              </div>
            </div>
            </NavLink>
          ))}
        </div>
        <div className="top-worst">
          <div className="top">
            <h2>Top Utilisateurs</h2>
            {top.map(user => (
              <div className="top-user">
                <img src={`/images/avatars/${user.imgUrl}.png`} className="avatar" alt="avatar" />
                <div className="desc">
                  <div className="pseudo">{user.nickname}</div>
                  <div className="karma">
                    Karma: <span className="int">{user.karma}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="worst">
            <h2>Top Trolls</h2>
            {worst.map(user => (
              <div className="worst-user">
                <img src={`/images/avatars/${user.imgUrl}.png`} className="avatar" alt="avatar" />
                <div className="desc">
                  <div className="pseudo">{user.nickname}</div>
                  <div className="karma">
                    Karma: <span className="int">{user.karma}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  topics: state.topics,
  users: state.users.users
});

const mdtp = dispatch => bindActionCreators({ asyncFetchUsers }, dispatch);

export default connect(mstp, mdtp)(Home);
