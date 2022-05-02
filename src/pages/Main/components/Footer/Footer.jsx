import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { isOriginalDesignLooked: false };
    this.originalDesignLooked = this.originalDesignLooked.bind(this);
  }

  originalDesignLooked() {
    this.setState({
      isOriginalDesignLooked: true,
    });
  }

  render() {
    return (
      <footer className="footer">
        <span className="footer__author_name">Меркулов Саша</span>
        <span className="footer__author_github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SashkoRabin"
          >
            GitHub
          </a>
        </span>
        <span
          onClick={this.originalDesignLooked}
          className="footer__design_link"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nicepage.com/ru/st/19813/vkusnaya-i-svezhaya-eda-shablon-sayta"
          >
            Original design...
          </a>
        </span>
        {this.state.isOriginalDesignLooked && <span>Спасибо!!!</span>}
      </footer>
    );
  }
}

export default Footer;
