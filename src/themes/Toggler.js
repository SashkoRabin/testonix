import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function Toggler({ toggleTheme }) {
  const { t } = useTranslation();
  return (
    <button
      className="theme_toggler"
      type="button"
      onClick={toggleTheme}
    >
      {t('theme')}
    </button>
  );
}

Toggler.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
