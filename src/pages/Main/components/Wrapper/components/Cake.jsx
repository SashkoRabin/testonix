import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgWithEvents from '../../../../../components/ImgWithEvents/ImgWithEvents';
import cl from '../Wrapper.module.css';

export default function Cake() {
  const { t } = useTranslation();
  return (
    <div className={cl.cake}>
      <div className={cl.cake_info}>
        <div className={cl.cake_text}>
          <ImgWithEvents
            link="
            https://images01.nicepage.com/thumbs/a1389d7bc73adea1e1c1fb7e/62ab4a46dace59d4bd6e61a6/Untitled2_150.png"
            alt="logo"
          />
          <h1>{t('tasty_fresh')}</h1>
          <h4>{t('bakery')}</h4>
          <div className={cl.cake_line} />
        </div>
      </div>
    </div>
  );
}
