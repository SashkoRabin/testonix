import React from 'react';
import Bakery from './components/Bakery';
import Cake from './components/Cake';
import Contacts from './components/Contacts';
import Info from './components/Info';
import Menu from './components/Menu';
import Shop from './components/Shop';
import PropTypes from 'prop-types';

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

WrapperView.propTypes = {
  day: PropTypes.number,
  year: PropTypes.number,
  prefix: PropTypes.string,
  month: PropTypes.string,
};
