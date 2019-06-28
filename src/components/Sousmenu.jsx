import React from 'react';
import { Link } from "react-router-dom";
import './Sousmenu.scss';

function Sousmenu() {
  return (
    <div className="Sousmenu">
      <Link to="/profil/monhistorique"><button>Mon historique</button></Link>
      <Link to="/profil/infoskarma"><button>Infos Karma</button></Link>
      <Link to="/profil/gamification"><button>Gamification</button></Link>
    </div>
  )
}

export default Sousmenu;
