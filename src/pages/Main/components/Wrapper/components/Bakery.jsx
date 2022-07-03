import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from '../Wrapper.module.css';

export default function Bakery() {
  const { t } = useTranslation();
  return (
    <div className={cl.bakery}>
      <div className={cl.bakery_content}>
        <div className={cl.bakery_text}>
          <h2>{t('our_bakery_offers')}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sit animi sunt temporibus repudiandae obcaecati voluptatum
            soluta, unde harum fugit vero.
          </p>
        </div>
        <div className={cl.bakery_line} />
        <div className={cl.about_bakery}>
          <div className={cl.ab_left} />
          <div className={cl.ab_right}>
            <p>{t('about_bakery')}</p>
            <div className={cl.ab_right_img} />
          </div>
        </div>
      </div>
    </div>
  );
}
