import React from 'react';
import cl from '../Wrapper.module.css';

export default function Shop() {
  return (
    <div className={cl.shop}>
      <div className={cl.shop_text}>
        <h2>Visit Our Online Shop</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          facilis eligendi sequi dolor, exercitationem ullam obcaecati alias
          similique, eaque, fugiat cumque doloribus neque facere quibusdam quod
          commodi autem sit voluptatem quas sint quam veniam quia in! Minus fuga
          harum quisquam!
        </p>
        <a href="*" className={cl.shop_view}>
          shop
        </a>
      </div>
    </div>
  );
}
