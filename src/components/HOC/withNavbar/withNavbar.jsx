/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React from 'react';
import Navbar from '../../Navbar/Navbar';

export default function withNavbar(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (this.props) console.log('Пропсы присутствуют');
      return (
        <>
          <Navbar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}
