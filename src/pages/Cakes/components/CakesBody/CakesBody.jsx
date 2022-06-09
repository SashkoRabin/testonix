import React, { useEffect, useState } from 'react';
import CakesBodyView from './CakesBodyView';
import axios from 'axios';
import Loader from '../../../../components/Loader/Loader';

export default function CakesBody() {
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
  return <>{isLoading ? <Loader /> : <CakesBodyView cakes={cakes} />}</>;
}
