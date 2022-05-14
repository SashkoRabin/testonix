import React from 'react';
import WrapperView from './WrapperView';

const Wrapper = () => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  let prefix = 'th';
  const month = date.toLocaleString('en', { month: 'short' });
  if (day === 1) prefix = 'st';
  if (day === 2) prefix = 'nd';
  if (day === 3) prefix = 'rd';

  return <WrapperView day={day} prefix={prefix} month={month} year={year} />;
};

export default Wrapper;
