import React from 'react';
import moment from 'moment';

import './UserTopic.scss';

const UserTopic = ({ user }) => {
  return (
    <div className="UserTopic">
      <div className="user-avatar">
        <img src={`/images/avatars/${user.avatar}.png`} alt={user.avatar} />
      </div>
      <div className="user-name">
        {user.name}
      </div>
      <div className="user-karma">
        <span style={{ width: `${Math.abs(user.karma)}%` }} />
      </div>
      <div className="user-subscription">
        <span>{`Inscrit depuis le ${moment(user.dateSubscribe).format('DD/MM/YYYY')}`}</span>
      </div>
    </div>
  );
}

export default UserTopic;