import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import './Navbar.scss';
class Navbar extends Component {

  render() {
    const { pseudo, avatar } = this.props;
    console.log({pseudo})
    return (
      <div className="Navbar">
        <img src ='/images/Logo.png' className='logo' alt="logo"/>
        <NavLink className='avatar' to='/profil'>
          <img src={avatar}  alt="profil" />
        </NavLink>
      </div>
    );
  }
}

const mstp = state => ({
  pseudo: state.displayUser.pseudo,
  avatar: state.displayUser.avatar,
});

export default connect(mstp)(Navbar);