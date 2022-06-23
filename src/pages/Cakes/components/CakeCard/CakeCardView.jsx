/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function CakeCardView({ cake }) {
  return (
    <div className="card__container">
      <span className="card__item">
        "
        <strong>
          {cake.name ? cake.name.substring(0, 30) : 'no cake name'}
        </strong>
        "
      </span>
      <p className="card__item">
        {cake.description ? cake.description : 'no description for this cake'}
      </p>
      <h4 className="card__price">
        {cake.price ? cake.price : 'no price yet...'}
      </h4>
      <button type="button" className="card__buy_btn">
        Buy &gt;{' '}
      </button>
    </div>
  );
}

CakeCardView.propTypes = {
  cake: PropTypes.shape.isRequired,
};
