import {LOAD_REST} from '../types';

export const loadRest = (data: {}) => {
  return {
    type: LOAD_REST,
    payload: data,
  };
};
