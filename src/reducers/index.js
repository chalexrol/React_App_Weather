import {
  SET_ZIP,
  SET_CITY
} from '../actions/ActionsTypes';

const initialState = {
  zip:['426000','101000', '190000'],
  city: [ 'Izhevsk','Moscow','S.Petersburg'],
};

export const MainStore = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZIP:
      return {
        ...state,
        zip: [...state.zip, action.payload]
      };
    case SET_CITY:
      return {
        ...state,
        city: [...state.city, action.payload]
      };
    default:
      return state;
  }
};

