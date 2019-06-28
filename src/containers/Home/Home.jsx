import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Input from "../../common/Input";

import "./Home.scss";

class Home extends Component {

  findRandomTag = () => {
    const { tags } = this.props;
    if (tags.length > 0) {
      const randomNum = parseInt(Math.random() * tags.length);
      return tags[randomNum].name;
    }
    return '';
  }

  render() {
    const { users } = this.props;
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
        <Input label="Recherche" className="recherche" />
        <div className="topics">
          <div className="topic-title"> Animaux </div>
          <div className="topic-line">
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">Pourquoi mon chat est-il aussi moche ?</div>
                <div className="comments">
                  3 commentaires
                </div>
              </div>
              <div className="tags">
                <div className="tag"> animaux </div>
                <div className="tag"> chats </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="topic-title"> Jeux vidéos </div>
          <div className="topic-line">
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">Cherche un joueur pour Saison Coop FIFA 15 Ps3</div>
                <div className="comments">
                  24 commentaires
                </div>
              </div>
              <div className="tags">
                <div className="tag"> jeux-vidéos </div>
                <div className="tag"> fifa </div>
                <div className="tag"> coop </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="topic-line">
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">Steep (PC) vue montagne non sélectionnable</div>
                <div className="comments">
                  3 commentaires
                </div>
              </div>
              <div className="tags">
                <div className="tag"> steep </div>
                <div className="tag"> bug </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="topic-title"> Divers </div>
          <div className="topic-line">
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">Immeuble - Canaux wifi saturés</div>
                <div className="comments">
                  45 commentaires
                </div>
              </div>
              <div className="tags">
                <div className="tag"> wifi </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="topic-line">
            <NavLink to="/topics/1" className="liens"><div className="topic">
              <div className="core">
                <div className="title">Outil de calibration pour moniteur de PC et Télévision</div>
                <div className="comments">
                  12 commentaires
                </div>
              </div>
              <div className="tags">
                <div className="tag"> tech </div>
                <div className="tag"> outil </div>
              </div>
            </div>
            </NavLink>
          </div>
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
  topics: state.topics.list,
  users: state.users.users,
  tags: state.tags.list,
});

export default connect(mstp)(Home);
