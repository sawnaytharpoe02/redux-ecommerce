import { ActionTypes } from '../constants/action-types';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case ActionTypes.DELETE_CART:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};
