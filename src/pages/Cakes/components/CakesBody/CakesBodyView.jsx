import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CakeCard from '../CakeCard/CakeCard';
import Toggler from '../../../../themes/Toggler';

export default function CakesBodyView({
  cakes,
  theme,
  themeToggler,
  updateCakes,
}) {
  const { t } = useTranslation();
  return (
    <>
      <Toggler theme={theme} toggleTheme={themeToggler} />
      <h3 className="cakes__title">{t('list_of_cakes')}</h3>
      <button
        onClick={() => updateCakes()}
        type="button"
        className="update__cakes"
      >
        {t('update_cakes')}
      </button>
      <div className="cards__container">
        {cakes.length ? (
          cakes.map((item) => <CakeCard cake={item} key={item.id} />)
        ) : (
          <h3>{t('no_cakes')}</h3>
        )}
      </div>
    </>
  );
}

CakesBodyView.propTypes = {
  cakes: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
  updateCakes: PropTypes.func.isRequired,
};
