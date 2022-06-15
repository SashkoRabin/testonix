/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export default function ImgWithEvents({ link, alt }) {
  return (
    <img
      src={link}
      alt={alt}
      onLoad={() => console.log('Loaded')}
      onError={() => console.log('Error')}
    />
  );
}

ImgWithEvents.propTypes = {
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
