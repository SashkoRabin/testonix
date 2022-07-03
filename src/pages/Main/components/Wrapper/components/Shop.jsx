import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from '../Wrapper.module.css';

export default function Shop() {
  const { t } = useTranslation();
  return (
    <div className={cl.shop}>
      <div className={cl.shop_text}>
        <h2>{t('visit_our_shop')}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vitae facilis eligendi sequi dolor, exercitationem ullam
          obcaecati alias similique, eaque, fugiat cumque doloribus
          neque facere quibusdam quod commodi autem sit voluptatem
          quas sint quam veniam quia in! Minus fuga harum quisquam!
        </p>
        <a href="*" className={cl.shop_view}>
          {t('shop')}
        </a>
      </div>
    </div>
  );
}
