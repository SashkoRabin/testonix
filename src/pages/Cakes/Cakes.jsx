import React from 'react';
import CakesBody from './components/CakesBody/CakesBody';
import cl from './Cakes.module.css';
import withNavbar from '../../components/HOC/withNavbar/withNavbar';

class Cakes extends React.Component {
  render() {
    return (
      <div className={cl.cakes__container}>
        <CakesBody />
      </div>
    );
  }
}

Cakes = withNavbar(Cakes);

export default Cakes;
