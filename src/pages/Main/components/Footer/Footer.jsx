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
    return (
      <FooterView
        isOriginalDesignLooked={this.state.isOriginalDesignLooked}
        originalDesignLooked={this.originalDesignLooked}
      />
    );
  }
}

export default Footer;
