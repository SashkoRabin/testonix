import React, { Component } from 'react';
import TimerView from './TimerView';

export default class Timer extends Component {
  state = {
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  };
  componentDidMount = () => {
    this.timer = setInterval(() => {
      if (this.state.time.seconds < 60) {
        this.setState((prev) => ({
          time: { ...prev.time, seconds: prev.time.seconds + 1 },
        }));
      }
      if (this.state.time.seconds >= 60) {
        this.setState((prev) => ({
          time: { ...prev.time, minutes: prev.time.minutes + 1, seconds: 0 },
        }));
      }
      if (this.state.time.minutes >= 60) {
        this.setState((prev) => ({
          time: { ...prev.time, minutes: 0, hours: prev.time.hours + 1 },
        }));
      }
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };
  render() {
    return <TimerView time={this.state.time} />;
  }
}
