import React from 'react';
import cl from '../Todo.module.css';
import PropTypes from 'prop-types';

export default function Input({ value, setValue, inputId, text }) {
  return (
    <div className={cl.input_container}>
      <label className={cl.label} htmlFor={inputId}>
        {text}
      </label>
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
  value: PropTypes.string,
  inputId: PropTypes.string,
  text: PropTypes.string,
  setValue: PropTypes.func,
};
