import React from 'react';
import PropTypes from 'prop-types';
import CakeCard from '../CakeCard/CakeCard';
import cl from '../../Cakes.module.css';

export default function CakesBodyView({ cakes }) {
  return (
    <>
      <h3 className={cl.cakes__title}>List of our cakes</h3>
      <div className={cl.cards__container}>
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
};
