import React from 'react';
import './Pseudo.scss';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

function Pseudo({ user }) {
  return (
    <div className="Pseudo">
      <div>
        <img className="pseudo-image" src="/images/avatars/avatar1.png" alt="avatar" />
      </div>
      <div className="pseudo-text">
        <h2>{user}</h2>
        <p>Karma</p>
        <div className="progress-bar-container">
          <p>0</p>
          <div className="progress-bar"></div>
          <p>1</p>
        </div>
      </div>
    </div>
  )
}

const mstp = state => ({
  user: state.displayUser.pseudo
})

const mdtp = dispatch => bindActionCreators({

}

)

export default connect(mstp, mdtp)(Pseudo);
