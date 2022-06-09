import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CakesBody from './components/CakesBody/CakesBody';
import cl from './Cakes.module.css';

export default function Cakes() {
  return (
    <div className={cl.cakes__container}>
      <Navbar />
      <CakesBody />
    </div>
  );
}
