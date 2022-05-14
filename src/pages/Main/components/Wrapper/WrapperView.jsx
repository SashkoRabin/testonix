import React from 'react';
import Bakery from './components/Bakery';
import Cake from './components/Cake';
import Contacts from './components/Contacts';
import Info from './components/Info';
import Menu from './components/Menu';
import Shop from './components/Shop';

export default function WrapperView({ day, prefix, month, year }) {
  return (
    <div className="wrapper">
      <Cake />
      <Bakery />
      <Menu day={day} prefix={prefix} month={month} year={year} />
      <Shop />
      <Info />
      <Contacts />
    </div>
  );
}
