import axios from 'axios';
import { UPDATE_CAKES } from './types';

export const updateCakes = (payload) => ({
  type: UPDATE_CAKES,
  payload,
});
export const fetchCakes = () => {
  return async (dispatch) => {
    const response = await axios.get(
      'https://buy-cakes.herokuapp.com/api/cakes'
    );
    dispatch(updateCakes(response.data));
  };
};
