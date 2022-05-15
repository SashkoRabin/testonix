import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import Timer from '../../../../components/Timer/Timer';

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Timer />
    </div>
  );
};

export default Header;
