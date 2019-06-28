import React from 'react';
import Sousmenu from './Sousmenu';

import './ProfilRightContent.scss';

const ProfilRightContent = ({ children }) => {
  return (
    <div className="ProfilRightContent">
      <Sousmenu />
      {children}
    </div>
  );
}
 
export default ProfilRightContent;