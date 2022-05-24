import React, { Component } from 'react';
import WrapperView from './WrapperView';

class Wrapper extends Component {
  date = new Date();
  day = this.date.getDate();
  year = this.date.getFullYear();
  month = this.date.toLocaleString('en', { month: 'short' });

  getPrefix = (day) => {
    let pref = 'th';
    if (day === 1) pref = 'st';
    if (day === 2) pref = 'nd';
    if (day === 3) pref = 'rd';
    return pref;
  };
  componentDidMount = () => {
    const images = Array.prototype.slice.call(document.images);
    images.forEach((item) => {
      item.addEventListener('load', () => console.log('Loaded'));
      item.addEventListener('error', () => console.log('Error'));
    });
  };
  componentWillUnmount = () => {
    const images = Array.prototype.slice.call(document.images);
    images.forEach((item) => {
      item.removeEventListener('load', () => console.log('Loaded'));
      item.removeEventListener('error', () => console.log('Error'));
    });
  };

  prefix = this.getPrefix(this.day);

  render() {
    return (
      <WrapperView
        day={this.day}
        prefix={this.prefix}
        month={this.month}
        year={this.year}
      />
    );
  }
}

export default Wrapper;
