import React from 'react';
import CakeCard from '../CakeCard/CakeCard';
import cl from '../../Cakes.module.css';

export default function CakesBodyView({ cakes }) {
  return (
    <>
      <h3 className={cl.cakes__title}>List of our cakes</h3>
      <div className={cl.cards__container}>
        {cakes.map((item) => (
          <CakeCard cake={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
