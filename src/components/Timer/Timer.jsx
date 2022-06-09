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
      this.setState((prev) => ({
        time: { ...prev.time, now: +new Date() / 1000 },
      }));
      const newTimeValue = {
        now: this.state.time.now,
        start: this.state.time.start,
        seconds: Math.trunc(this.state.time.now - this.state.time.start),
      };
      newTimeValue.minutes = Math.trunc(newTimeValue.seconds / 60);
      newTimeValue.hours = Math.trunc(newTimeValue.minutes / 60);
      newTimeValue.seconds = newTimeValue.seconds % 60;
      newTimeValue.minutes = newTimeValue.minutes % 60;
      this.setState(() => ({ time: newTimeValue }));
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };
  render() {
    return <TimerView time={this.state.time} />;
  }
}
