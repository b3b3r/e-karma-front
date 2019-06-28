import React from 'react';
import { Link } from "react-router-dom";
import './Sousmenu.scss';

function Sousmenu() {
  return (
    <div className="Sousmenu">
      <Link to="/profil/monhistorique"><button className="buton-profil">Mon historique</button></Link>
      <Link to="/profil/infoskarma"><button className="buton-profil">Infos Karma</button></Link>
      <Link to="/profil/gamification"><button className="buton-profil">Gamification</button></Link>
    </div>
  )
}

export default Sousmenu;
