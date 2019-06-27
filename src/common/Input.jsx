import React from 'react';
import './Input.scss';

const Input = ({id, label, ...props}) => {
  return (
    <div className="Input">
      <input id={id} {...props} />
      <span className="highlight" />
      <span className="bar"></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
 
export default Input;
