import React from 'react';
import './InputRadio.scss';

const InputRadio = ({ id, label, checked, ...props }) => {
  return (
    <label className="InputRadio" htmlFor={id}>
      <input  id={id} type="radio" {...props} />
      <span>{label}</span>
    </label>
  );
}

export default InputRadio;