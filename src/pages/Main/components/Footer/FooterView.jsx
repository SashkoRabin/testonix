/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FooterView extends Component {
  render() {
    const { originalDesignLooked } = this.props;
    const { isOriginalDesignLooked } = this.props;
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
          onClick={originalDesignLooked}
          className="footer__design_link"
          role="note"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nicepage.com/ru/st/19813/vkusnaya-i-svezhaya-eda-shablon-sayta"
          >
            Original design...
          </a>
        </span>
        {isOriginalDesignLooked && <span>Спасибо!!!</span>}
      </footer>
    );
  }
}

FooterView.propTypes = {
  isOriginalDesignLooked: PropTypes.bool.isRequired,
  originalDesignLooked: PropTypes.func.isRequired,
};
