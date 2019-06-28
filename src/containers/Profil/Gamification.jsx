import React from 'react';
import Badge1 from '../../images/badge1.svg';
import Badge2 from '../../images/badge2.svg';
import Badge3 from '../../images/badge3.svg';
import './Gamification.scss';

function Gamification() {
  return (
    <div className="Gamification">
      <h2> Mes badges</h2>
      <div className="badges">
        <img src={Badge1} className="badge" alt="badge1" />
        <img src={Badge2} className="badge" alt="badge2" />
        <img src={Badge3} className="badge" alt="badge3" />
      </div>
    </div>
  )
}

export default Gamification;
