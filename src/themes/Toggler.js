import React from 'react';
import PropTypes from 'prop-types';

export default function Toggler({ toggleTheme }) {
  return (
    <button className="theme_toggler" type="button" onClick={toggleTheme}>
      THEME
    </button>
  );
}

Toggler.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
