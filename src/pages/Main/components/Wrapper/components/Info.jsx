import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgWithEvents from '../../../../../components/ImgWithEvents/ImgWithEvents';
import cl from '../Wrapper.module.css';

export default function Info() {
  const { t } = useTranslation();
  return (
    <div className={cl.info}>
      <div className={cl.info_wrapper}>
        <div className={cl.info_left}>
          <ImgWithEvents
            link="
            https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/59f9f99513af5894a5a8f11b/pexelsphoto907142.jpeg"
            alt="cake"
          />
          <p>{t('muffins')}</p>
        </div>
        <div className={cl.info_right}>
          <p>{t('bread')}</p>
          <div className={cl.info_line} />

          <img
            src="
            https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d2057c146d09515b941c9ea9/pexelsphoto1028711.jpeg"
            alt="cake"
          />
        </div>
      </div>
    </div>
  );
}
