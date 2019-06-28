import React from 'react';
import ClassNames from 'classnames';

import './ProfilLeftContent.scss';

function ProfilLeftContent({ user: { avatar, name, karma } }) {
  const clsPlc = ClassNames('ProfilLeftContent', {
    'positive-karma': karma > 0,
    'negative-karma': karma < 0,
  });
  return (
    <div className={clsPlc}>
      <div className="avatar">
        <img src={`/images/avatars/${avatar}.png`} alt={avatar} />
      </div>
      <div className="user-name">
        {name}
      </div>
      <div className="karma-title">Karma :</div>
      <div className="user-karma">
        <span style={{ width: `${Math.abs(karma)}%` }} />
        <span>{`${karma}/100`}</span>
      </div> 
    </div>
  )
}

ProfilLeftContent.defaultProps = {
  user: {
    avatar: 'avatar1',
    name: 'User 1',
    karma: 48,
    dateSubscribe: 1561574868526,
  }
}

export default ProfilLeftContent;
