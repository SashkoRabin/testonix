import React from 'react';

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
