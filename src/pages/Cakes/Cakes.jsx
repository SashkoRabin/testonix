import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CakesBody from './components/CakesBody/CakesBody';
import './Cakes.module.css';

export default function Cakes() {
  return (
    <>
      <Navbar />
      <CakesBody />
    </>
  );
}
