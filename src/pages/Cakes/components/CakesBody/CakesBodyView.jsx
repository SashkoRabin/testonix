import React from 'react';
import CakeCard from '../CakeCard/CakeCard';
import cl from '../../Cakes.module.css';
import PropTypes from 'prop-types';

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
  cakes: PropTypes.array,
};
