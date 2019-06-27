import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    const { pseudo, avatar } = this.props;
    console.log({pseudo})
    return (
      <div className="Navbar">
        <h1>Oui</h1>
        <img src={avatar} alt="profil" />
      </div>
    );
  }
}

const mstp = state => ({
  pseudo: state.displayUser.pseudo,
  avatar: state.displayUser.avatar,
});

export default connect(mstp)(Navbar);