import React from 'react';
import { NavLink } from "react-router-dom";
import './Sousmenu.scss';

function Sousmenu() {
  return (
    <ul className="Sousmenu">
      <li>
        <NavLink to="/profil/monhistorique">
          <span>Historique</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/profil/infoskarma">
          <span>Infos Karma</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/profil/gamification">
          <span>Gamification</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default Sousmenu;
