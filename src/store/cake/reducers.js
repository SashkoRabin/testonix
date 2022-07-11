import { UPDATE_CAKES } from './types';

const initialState = {
  cakes: [],
};

export const cakeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CAKES:
      return { ...state, cakes: [...action.payload] };
    default:
      return state;
  }
};
