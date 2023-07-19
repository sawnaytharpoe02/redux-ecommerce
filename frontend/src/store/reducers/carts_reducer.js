import { ActionTypes } from '../constants/action-types';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.DELETE_CART:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        ],
      };
    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                quantity: item.quantity < 2 ? 1 : item.quantity - 1,
              };
            }
            return item;
          }),
        ],
      };
    case ActionTypes.SET_TOTAL_CART_PRICE:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                price: item.unitPrice * item.quantity,
              };
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};
