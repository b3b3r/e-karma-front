import React from 'react';
import { NavLink } from "react-router-dom";
import './Sousmenu.scss';

function Sousmenu() {
  return (
    <div className="Sousmenu">
      <NavLink to="/profil/monhistorique">
        <button className="bouton-profil">Mon historique</button>
      </NavLink>
      <NavLink to="/profil/infoskarma">
        <button className="bouton-profil">Infos Karma</button>
      </NavLink>
      <NavLink to="/profil/gamification">
        <button className="bouton-profil">Gamification</button>
      </NavLink>
    </div>
  )
}

export default Sousmenu;
