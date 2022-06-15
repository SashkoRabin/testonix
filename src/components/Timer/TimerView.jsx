import React from 'react';
import PropTypes from 'prop-types';

export default function TimerView({ time }) {
  return (
    <div className="timer">
      <span>Вы на странице уже </span>
      <span>{`${time.hours}:${time.minutes}:${time.seconds}`}</span>
    </div>
  );
}

TimerView.propTypes = {
  time: PropTypes.shape.isRequired,
};
