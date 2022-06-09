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
