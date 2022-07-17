import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CakesBodyView from './CakesBodyView';
import Loader from '../../../../components/Loader/Loader';
import { fetchCakes } from '../../../../store/cake/actions';

export default function CakesBody({ theme, themeToggler }) {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.cake.cakes);
  const [isLoading, setIsLoading] = useState(false);

  const getCakes = async () => {
    setIsLoading(true);
    dispatch(fetchCakes());
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
