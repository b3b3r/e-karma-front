import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from 'lodash';

import "./Navbar.scss";
class Navbar extends Component {

  render() {
    const { user } = this.props;
    return (
      <div className="Navbar">
        <NavLink to="/">
          <img src="/images/Logo.png" className="logo" alt="logo" />
        </NavLink>
        {
          (!_.isEmpty(user))
          ? (
            <NavLink to="/profil">
              <img src={`/images/avatars/${user.imgUrl}.png`} className="avatar"  alt="profil" />
              <span>Mon profil</span>
            </NavLink>
          )
          : (
            <React.Fragment>
              <button>S'inscrire</button>
              <button>Se connecter</button>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

const mstp = state => ({
  user: state.user.user
});

export default connect(mstp)(Navbar);
