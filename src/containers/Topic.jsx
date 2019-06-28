import React, { Component } from 'react';
import Comment from './Comment';

import './Topic.scss';

const commentTitle = {
  user: {
    avatar: 'avatar1',
    name: 'User 1',
    karma: 48,
    dateSubscribe: 1561574868526,
  },
  title: 'Pourquoi mon chat est-il aussi moche ?',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const topComment = {
  user: {
    avatar: 'avatar2',
    name: 'User 2',
    karma: 78,
    dateSubscribe: 1551524868526,
  },
  top: true,
  comment: 'Réponse XXX qui est la meilleure',
  date: 1551524868526,
  votes: [180, 12],
}

const comment1 = {
  user: {
    avatar: 'avatar3',
    name: 'User 3',
    karma: 24,
    dateSubscribe: 1541524868526,
  },
  comment: 'Réponse 1 sans intérêt',
  date: 1551524868526,
  votes: [12, 1],
}

const comment2 = {
  user: {
    avatar: 'avatar1',
    name: 'User 1',
    karma: 48,
    dateSubscribe: 1561574868526,
  },
  comment: 'Réponse 2 du user qui a lancé la question',
  date: 1551524868526,
  votes: [34, 0],
}

const comment3 = {
  user: {
    avatar: 'avatar4',
    name: 'User 4',
    karma: -28,
    dateSubscribe: 1401574868526,
  },
  worst: true,
  comment: 'Réponse 3 d\'un troll ',
  date: 1551524868526,
  votes: [12, 98],
}

class Topic extends Component {
  render() { 
    return ( 
      <div className="Topic">
        <Comment {...commentTitle} />
        <Comment {...topComment} />
        <Comment {...comment1} />
        <Comment {...comment2} />
        <Comment {...comment3} />
      </div>
     );
  }
}
 
export default Topic;