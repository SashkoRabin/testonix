import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FooterView extends Component {
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
          onClick={this.props.originalDesignLooked}
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
        {this.props.isOriginalDesignLooked && <span>Спасибо!!!</span>}
      </footer>
    );
  }
}

FooterView.propTypes = {
  isOriginalDesignLooked: PropTypes.bool,
  originalDesignLooked: PropTypes.func,
};
