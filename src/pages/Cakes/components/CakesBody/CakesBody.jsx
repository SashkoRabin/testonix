import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CakesBodyView from './CakesBodyView';
import Loader from '../../../../components/Loader/Loader';

export default function CakesBody({ theme, themeToggler }) {
  const [cakes, setCakes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCakes = async () => {
    setIsLoading(true);
    const response = await axios.get(
      'https://buy-cakes.herokuapp.com/api/cakes'
    );
    setCakes(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getCakes();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <CakesBodyView
          cakes={cakes}
          theme={theme}
          themeToggler={themeToggler}
        />
      )}
    </div>
  );
}

CakesBody.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};
