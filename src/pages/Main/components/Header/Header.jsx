import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import ProjectName from './ProjectName';

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <ProjectName />
    </div>
  );
};

export default Header;
