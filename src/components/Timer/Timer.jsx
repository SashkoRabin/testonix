import React, { Component } from 'react';
import TimerView from './TimerView';

export default class Timer extends Component {
  state = {
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      start: +new Date() / 1000,
      now: +new Date() / 1000,
    },
  };
  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState((prev) => (prev.time.now = +new Date() / 1000));
      this.setState((prev) => {
        prev.time.seconds = Math.trunc(prev.time.now - prev.time.start);
        prev.time.minutes = Math.trunc(prev.time.seconds / 60);
        prev.time.hours = Math.trunc(prev.time.minutes / 60);
        prev.time.seconds = prev.time.seconds % 60;
        prev.time.minutes = prev.time.minutes % 60;
      });
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };
  render() {
    return <TimerView time={this.state.time} />;
  }
}
