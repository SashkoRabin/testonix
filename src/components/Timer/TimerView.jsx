import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function TimerView({ time }) {
  const { t } = useTranslation();
  return (
    <div className="timer">
      <span>{t('on_the_page')}</span>
      <span>{`${time.hours}:${time.minutes}:${time.seconds}`}</span>
    </div>
  );
}

TimerView.propTypes = {
  time: PropTypes.shape.isRequired,
};
