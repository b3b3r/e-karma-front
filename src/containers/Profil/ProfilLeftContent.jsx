import React from "react";
import { connect } from "react-redux";

import './ProfilLeftContent.scss';

function ProfilLeftContent({ user }) {
  return (
    <div className='ProfilLeftContent'>
      <div className="avatar">
        <img src={`/images/avatars/${user.imgUrl}.png`} alt={user.imgUrl} />
      </div>
      <div className="user-name">
        {user.nickname}
      </div>
      <div className="karma-title">Karma :</div>
      <div className="user-karma">
        <span style={{ width: `${Math.abs(user.karma)}%` }} />
        <span>{`${user.karma}/100`}</span>
      </div> 
    </div>
  )
}

const mstp = state => ({
  user: state.user.user
});

export default connect(mstp)(ProfilLeftContent);
