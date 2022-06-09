import React from 'react';
import cl from '../../Cakes.module.css';
import PropTypes from 'prop-types';

export default function CakeCardView({ cake }) {
  return (
    <div className={cl.card__container}>
      <span className={cl.card__item}>
        "
        <strong>
          {cake.name ? cake.name.substring(0, 30) : 'no cake name'}
        </strong>
        "
      </span>
      <p className={cl.card__item}>
        {cake.description ? cake.description : 'no description for this cake'}
      </p>
      <h4 className={cl.card__price}>
        {cake.price ? cake.price : 'no price yet...'}
      </h4>
      <button className={cl.card__buy_btn}>Buy &gt; </button>
    </div>
  );
}

CakeCardView.propTypes = {
  cake: PropTypes.object,
};
