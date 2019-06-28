import React from 'react';
import Sousmenu from './Sousmenu';

const ProfilRightContent = ({ children }) => {
  return (
    <div className="ProfilRightContent">
      <Sousmenu />
      {children}
    </div>
  );
}
 
export default ProfilRightContent;