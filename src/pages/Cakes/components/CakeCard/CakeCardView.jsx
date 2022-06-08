import React from 'react';
import cl from '../../Cakes.module.css';

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
        Description:{' '}
        {cake.description ? cake.description : 'no description for this cake'}
      </p>
      <h4 className={cl.card__item}>
        Price: {cake.price ? cake.price : 'no price yet...'}
      </h4>
    </div>
  );
}
