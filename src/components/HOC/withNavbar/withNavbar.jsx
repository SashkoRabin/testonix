import React from 'react';
import Navbar from '../../Navbar/Navbar';

export default function withNavbar(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (this.props.length) console.log('Пропсы присутствуют');
      return (
        <>
          <Navbar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}
