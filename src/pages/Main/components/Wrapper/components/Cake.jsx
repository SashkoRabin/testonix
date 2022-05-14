import React from 'react';
import cl from '../Wrapper.module.css';

export default function Cake() {
  return (
    <div className={cl.cake}>
      <div className={cl.cake_info}>
        <div className={cl.cake_text}>
          <img
            src="https://images01.nicepage.com/thumbs/a1389d7bc73adea1e1c1fb7e/62ab4a46dace59d4bd6e61a6/Untitled2_150.png"
            alt="logo"
          />
          <h1>Tasty & Fresh</h1>
          <h4>BAKERY</h4>
          <div className={cl.cake_line}></div>
        </div>
      </div>
    </div>
  );
}
