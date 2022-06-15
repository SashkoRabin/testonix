/* eslint-disable no-class-assign */
import React from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import withNavbar from '../../components/HOC/withNavbar/withNavbar';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper />
        <Footer />
      </>
    );
  }
}

Main = withNavbar(Main);

export default Main;
