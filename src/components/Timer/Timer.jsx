import React, { Component } from 'react';
import TimerView from './TimerView';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        start: +new Date() / 1000,
        now: +new Date() / 1000,
      },
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({
        time: { ...prev.time, now: +new Date() / 1000 },
      }));
      const { time } = this.state;
      const newTimeValue = {
        now: time.now,
        start: time.start,
        seconds: Math.trunc(time.now - time.start),
      };
      newTimeValue.minutes = Math.trunc(newTimeValue.seconds / 60);
      newTimeValue.hours = Math.trunc(newTimeValue.minutes / 60);
      newTimeValue.seconds %= 60;
      newTimeValue.minutes %= 60;
      this.setState(() => ({ time: newTimeValue }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return <TimerView time={time} />;
  }
}
