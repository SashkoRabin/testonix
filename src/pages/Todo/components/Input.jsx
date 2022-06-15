import React from 'react';
import PropTypes from 'prop-types';
import cl from '../Todo.module.css';

// eslint-disable-next-line object-curly-newline
export default function Input({ value, setValue, inputId, text }) {
  return (
    <div>
      <label htmlFor={inputId}>{text}</label>
      <input
        type="text"
        className={cl.text_input}
        id={inputId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
        required
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
