import React from 'react';

const Footer = () => {
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
      <span className="footer__design_link">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nicepage.com/ru/st/19813/vkusnaya-i-svezhaya-eda-shablon-sayta"
        >
          Original design...
        </a>
      </span>
    </footer>
  );
};

export default Footer;
