import React from 'react';
import moment from 'moment';
import './Historique.scss';

import upvotes from '../images/arrow-up.svg';
import downvotes from '../images/arrow-down.svg';

const myHistory = [{
  date: 1551524868526,
  topic: 'pourquoi mon chat est moche?',
  comment: 'peut-être que tu devrais le piquer',
  votes: [10, 17]
},
{
  date: 1551524868526,
  topic: 'pourquoi mon chat est moche?',
  comment: 'son poil est dégueulasse',
  votes: [24, 89]
},
{
  date: 1551524868526,
  topic: 'pourquoi mon chat est moche?',
  comment: 'de toute façon les chiens c\'est la vie',
  votes: [25, 2]
}]

function Historique() {
  return (
    <div className="Historique">
      <h2> Mon historique</h2>
      <ul>
        {myHistory.map(({ date, topic, comment, votes }) => (
          <li className="history">
            <div className="date">
              {`Posté le ${moment(date).format('DD/MM/YYYY')} à ${moment(date).format('HH:mm:ss')}`}
            </div>
            <div className="topic-title">
              {topic}
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
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Historique;
