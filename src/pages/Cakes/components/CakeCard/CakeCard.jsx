import React from 'react';
import CakeCardView from './CakeCardView';
import PropTypes from 'prop-types';

export default function CakeCard({ cake }) {
  return <CakeCardView cake={cake} />;
}
CakeCard.propTypes = {
  cake: PropTypes.object,
};
