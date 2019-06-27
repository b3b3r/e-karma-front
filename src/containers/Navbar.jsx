import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
class Navbar extends Component {
  render() {
    const { pseudo, avatar } = this.props;
    console.log({ pseudo });
    return (
      <div className="Navbar">
        <NavLink to="/">
          <img src="/images/Logo.png" className="logo" alt="logo" />
        </NavLink>
        <NavLink to="/profil">
          <img src={avatar} className="avatar"  alt="profil" />
        </NavLink>
      </div>
    );
  }
}

const mstp = state => ({
  pseudo: state.displayUser.pseudo,
  avatar: state.displayUser.avatar
});

export default connect(mstp)(Navbar);
