import React from 'react';
import cl from '../Wrapper.module.css';

export default function Contacts() {
  return (
    <div className={cl.contacts}>
      <div className={cl.contacts_img1}></div>
      <div className={cl.contacts_text}>
        <h2>Our Contacts</h2>
        <p className={cl.contacts_me}>
          mok Street <br />
          Big city, 28001 <br />
          sashrabin@gmail.com <br />
          +380(95)-163-2772
        </p>
        <p className={cl.contacts_timetable}>
          Tuesday 6:30AM – 6:00PM
          <br />
          Wednesday 6:30AM – 6:00PM
          <br />
          Thursday 6:30AM – 6:00PM
          <br />
          Friday 6:30AM – 6:00PM
          <br />
          Saturday 6:30AM – 2:00PM
          <br />
          Sunday 8:00AM - 12:00PM
          <br />
          Monday CLOSED
        </p>
        <div className={cl.contacts_line}></div>
        <a href="*" className={cl.contacts_contact}>
          contact us
        </a>
      </div>
      <div className={cl.contacts_img2}></div>
    </div>
  );
}
