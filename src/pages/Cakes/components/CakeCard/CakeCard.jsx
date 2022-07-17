/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

export default function CakeCard({ cake }) {
  return (
    <div className="card__container">
      <span className="card__item">
        "
        <strong>{cake?.name?.substring(0, 30) || 'no cake name'}</strong>
        "
      </span>
      <p className="card__item">
        {cake.description || 'no description for this cake'}
      </p>
      <h4 className="card__price">{cake.price || 'no price yet...'}</h4>
      <button type="button" className="card__buy_btn">
        Buy &gt;
      </button>
    </div>
  );
}
CakeCard.propTypes = {
  cake: PropTypes.shape({
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
