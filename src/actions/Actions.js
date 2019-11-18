import {
  SET_ZIP,
  SET_CITY,
} from './ActionsTypes';

export const setZip  = d => dispatch => {
  console.log('ZIP', d);
  dispatch({ type: SET_ZIP, payload: d });
};

export const setCity = (d) => dispatch => {
  dispatch({ type: SET_CITY, payload: d });
};
