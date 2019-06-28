import React from 'react';
import ClassNames from 'classnames';
import moment from 'moment';

import UserTopic from './UserTopic';

import upvotes from '../images/arrow-up.svg';
import downvotes from '../images/arrow-down.svg';

import './Comment.scss';

const Comment = ({ user, title, date, comment, votes, top, worst }) => {
  const clsComment = ClassNames('Comment', {
    top,
    worst,
    'positive-karma': user.karma > 0,
    'negative-karma': user.karma < 0,
  });

  const clsTitle = ClassNames('title', {
    hidden: title === '',
  });

  return (
    <div className={clsComment}>
      <UserTopic user={user} />
      <div className="content">
        <div className="date">
          {`Posté le ${moment(date).format('DD/MM/YYYY')} à ${moment(date).format('HH:mm:ss')}`}
        </div>
        <div className={clsTitle}>
          {title}
        </div>
        <div className="comment">
          {comment}
        </div>
        {
          votes
            ? (
              <div className="votes">
                <span className="upvotes">
                  <img src={upvotes} alt="upvotes" />
                  <span>{votes[0]}</span>
                </span>
                <span className="downvotes">
                  <img src={downvotes} alt="downvotes" />
                  <span>{votes[1]}</span>
                </span>
              </div>
            )
            : ''
        }
      </div>
    </div>
  );
}

export default Comment;