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
  comment: `Il n'a rien pour attirer les regards.... Il est tout maigre, tout rikiki, sa couleur est plutôt étrange, il a la queue cassée à plusieurs endroits alors elle forme une boucle toute bizarre....

  Mais depuis qu'il est entré dans ma vie, j'en suis tombée amoureuse !
  
  Je peux le regarder pendant des heures, et quand je le prends dans mes bras mon coeur fond littéralement.
  `,
};

const topComment = {
  user: {
    avatar: 'avatar2',
    name: 'User 2',
    karma: 78,
    dateSubscribe: 1551524868526,
  },
  top: true,
  comment: `Oui
  moi j'ai Leeloo, elle a 4 ans, elle est blanche avec quelques taches noires comme une vache, elle est toute petite, il lui des poils sur le museau, sur les oreilles, sur le ventre, elle a une drole de tronche....
  
  Pourtant c'est une des plus inteligentes de toutes mes fifilles, et accesoirement, c'est elle qui fait la loi`,
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
  comment: `Ton titre m'a fait peur...
  ... et puis je t'ai lu, ouf !!!!
  
  Si je m'étais trouvée à ta place, c'est sans aucun doute celui que j'aurais pris, tu connais probablement ma défense des "n'importe quoi" que je peux aussi appeler "3ème choix" en pensant à tous les chats que j'ai eu au fil du temps.
  `,
  date: 1551524868526,
  votes: [12, 1],
}

const comment1bis = {
  user: {
    avatar: 'avatar6',
    name: 'User 6',
    karma: 32,
    dateSubscribe: 1541524868526,
  },
  comment: `De toute façon ...

  tu en parles tellement bien qu'à travers ton amour , il est beau
  
  Comment s'appelle-t-il au fait ? Longue vie à lui`,
  date: 1541524868526,
  votes: [3, 1],
}

const comment2 = {
  user: {
    avatar: 'avatar1',
    name: 'User 1',
    karma: 48,
    dateSubscribe: 1561574868526,
  },
  comment: `J'hésite encore
  Entre Maurice, Pookie, et Lolek....
  
  C'est pas facile de lui trouver un nom à celui-là ! `,
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
  comment: `Je suis pas très chat
  mais le seul chat qui m'a fait chavirer était une très villaine chatte 'poivre et sel', gros ventre, petites pattes, poil miteux etc... mais qu'est ce que je l'adorais cette bestiole
  
  Dans le même genre, quand je revois des photos de mon chien le jour ou je l'ai adopté, je me demande même comment j'ai fait pour le choisir`,
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
        <Comment {...comment1bis} />
        <Comment {...comment2} />
        <Comment {...comment3} />
      </div>
     );
  }
}
 
export default Topic;