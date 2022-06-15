import React from 'react';
import PropTypes from 'prop-types';
import CakeCardView from './CakeCardView';

export default function CakeCard({ cake }) {
  return <CakeCardView cake={cake} />;
}
CakeCard.propTypes = {
  cake: PropTypes.shape.isRequired,
};
