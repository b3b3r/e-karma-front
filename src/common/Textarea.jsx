import React from 'react';
import './Textarea.scss';

const Textarea = ({ id, label, ...props }) => {
  return (
    <div className="Textarea">
      <textarea {...props}></textarea>
      <span className="highlight" />
      <span className="bar"></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Textarea;