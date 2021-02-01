import {LOAD_REST} from '../types';

const initState = {
  allRests: [],
};

export const restReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_REST:
      return {...state, allRests: action.payload};
    default:
      return state;
  }
};
