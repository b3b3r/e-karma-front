import React from "react";
import ClassNames from 'classnames';
import { connect } from "react-redux";

import './ProfilLeftContent.scss';

function ProfilLeftContent({ user }) {
  const clsPlc = ClassNames('ProfilLeftContent', {
    'positive-karma': user.karma > 0,
    'negative-karma': user.karma < 0,
  });
  return (
    <div className={clsPlc}>
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
