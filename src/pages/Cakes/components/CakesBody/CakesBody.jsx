import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CakesBodyView from './CakesBodyView';
import Loader from '../../../../components/Loader/Loader';
import { UPDATE_CAKES } from '../../../../store/cake/types';

export default function CakesBody({ theme, themeToggler }) {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.cake.cakes);
  const [isLoading, setIsLoading] = useState(false);

  const getCakes = async () => {
    setIsLoading(true);
    const response = await axios.get(
      'https://buy-cakes.herokuapp.com/api/cakes'
    );
    dispatch({ type: UPDATE_CAKES, payload: response.data });
    setIsLoading(false);
  };

  useEffect(() => {
    getCakes();
  }, []);
  return (
    <div className="cakes__body">
      {isLoading && <Loader />}
      <CakesBodyView
        cakes={cakes}
        theme={theme}
        themeToggler={themeToggler}
        updateCakes={getCakes}
      />
    </div>
  );
}

CakesBody.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};
