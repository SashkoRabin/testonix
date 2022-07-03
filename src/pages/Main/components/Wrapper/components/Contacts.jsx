/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from '../Wrapper.module.css';

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <div className={cl.contacts}>
      <div className={cl.contacts_img1} />
      <div className={cl.contacts_text}>
        <h2>{t('our_contacts')}</h2>
        <p className={cl.contacts_me}>
          {t('street')}
          <br />
          {t('big_city')}
          , 28001
          <br />
          sashrabin@gmail.com
          <br />
          +380(95)-163-2772
        </p>
        <p className={cl.contacts_timetable}>
          {t('tuesday')} 6:30AM – 6:00PM
          <br />
          {t('wednesday')} 6:30AM – 6:00PM
          <br />
          {t('thursday')} 6:30AM – 6:00PM
          <br />
          {t('friday')} 6:30AM – 6:00PM
          <br />
          {t('saturday')} 6:30AM – 2:00PM
          <br />
          {t('sunday')} 8:00AM - 12:00PM
          <br />
          {t('monday')} {t('closed')}
        </p>
        <div className={cl.contacts_line} />
        <a href="*" className={cl.contacts_contact}>
          {t('contact_us')}
        </a>
      </div>
      <div className={cl.contacts_img2} />
    </div>
  );
}
