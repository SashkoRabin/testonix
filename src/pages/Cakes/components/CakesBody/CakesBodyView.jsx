import React from 'react';
import PropTypes from 'prop-types';
import CakeCard from '../CakeCard/CakeCard';
import Toggler from '../../../../themes/Toggler';

export default function CakesBodyView({ cakes, theme, themeToggler }) {
  return (
    <>
      <Toggler theme={theme} toggleTheme={themeToggler} />
      <h3 className="cakes__title">List of our cakes</h3>
      <div className="cards__container">
        {cakes.length ? (
          cakes.map((item) => <CakeCard cake={item} key={item.id} />)
        ) : (
          <h3>No cakes here...</h3>
        )}
      </div>
    </>
  );
}

CakesBodyView.propTypes = {
  cakes: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};
