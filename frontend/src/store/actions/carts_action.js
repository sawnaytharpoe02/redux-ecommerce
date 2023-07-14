import { ActionTypes } from '../constants/action-types';

export const addToCart = (item) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: item,
    });
  };
};

export const deleteCart = (item) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.DELETE_CART,
      payload: item,
    });
  };
};
