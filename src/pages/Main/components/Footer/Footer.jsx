import React from 'react';
import FooterView from './FooterView';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { isOriginalDesignLooked: false };
  }

  originalDesignLooked = () => {
    this.setState({
      isOriginalDesignLooked: true,
    });
  };

  render() {
    const { isOriginalDesignLooked } = this.state;
    return (
      <FooterView
        isOriginalDesignLooked={isOriginalDesignLooked}
        originalDesignLooked={this.originalDesignLooked}
      />
    );
  }
}

export default Footer;
