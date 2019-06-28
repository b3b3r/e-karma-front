import React from 'react';

const myHistory = [{
  date: '20/06/2019',
  topic: 'pourquoi mon chat est moche?',
  sentence: 'peut-être que tu devrais le piquer'
},
{
  date: '20/06/2019',
  topic: 'pourquoi mon chat est moche?',
  sentence: 'son poil est dégueulasse'
},
{
  date: '21/06/2019',
  topic: 'pourquoi mon chat est moche?',
  sentence: 'de toute façon les chiens c\'est la vie'
}]

function Historique() {
  return (
    <div className="Historique">
      <p>historique</p>
      <ul>
        {myHistory.map(history=>
        <li>date:{history.date}
         topic:{history.topic}
         message:{history.sentence}</li>)}
      </ul>
    </div>
  )
}

export default Historique;
