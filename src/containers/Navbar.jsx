import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
class Navbar extends Component {
  render() {
    const { users } = this.props;
    const { avatar } = this.props;
    return (
      <div className="Navbar">
        <NavLink to="/">
          <img src="/images/Logo.png" className="logo" alt="logo" />
        </NavLink>
        <NavLink to="/profil">
          <img src={users[0].avatar} className="avatar"  alt="profil" />
        </NavLink>
      </div>
    );
  }
}

const mstp = state => ({
  users: state.users,
});

export default connect(mstp)(Navbar);
