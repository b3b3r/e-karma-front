import React from 'react';
import ToggleButton from 'react-toggle-button';

import './Checkbox.scss';

const Checkbox = ({ label, checked, onToggle }) => {
  return (
    <div className="Checkbox">
      <ToggleButton
        inactiveLabel="Non"
        activeLabel="Oui"
        value={checked || false}
        onToggle={onToggle}
        colors={{
          activeThumb: {
            base: 'rgb(42, 187, 78)',
          },
          active: {
            base: 'rgb(42, 187, 78)',
            hover: 'rgb(42, 187, 78)',
          },
        }}
      />
      <span className="label">{label}</span>
    </div>
  );
}

export default Checkbox;