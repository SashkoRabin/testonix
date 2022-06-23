/* eslint-disable no-func-assign */
import React, { useContext } from 'react';
import CakesBody from './components/CakesBody/CakesBody';
import withNavbar from '../../components/HOC/withNavbar/withNavbar';
import { MyThemeContext } from '../../contexts/MyThemeContext';

function Cakes() {
  const { theme, themeToggler, mountedComponent } = useContext(MyThemeContext);
  if (!mountedComponent) return <div />;
  return (
    <div className="cakes__container">
      <CakesBody theme={theme} themeToggler={themeToggler} />
    </div>
  );
}

Cakes = withNavbar(Cakes);

export default Cakes;
