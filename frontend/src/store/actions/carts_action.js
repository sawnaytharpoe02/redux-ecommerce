import { ActionTypes } from '../constants/action-types';

export const addToCart = (item) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: item,
    });
  };
};

export const deleteCart = (itemId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.DELETE_CART,
      payload: itemId,
    });
  };
};

export const increaseQuantity = (itemId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.INCREASE_QUANTITY,
      payload: itemId,
    });
  };
};

export const decreaseQuantity = (itemId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.DECREASE_QUANTITY,
      payload: itemId,
    });
  };
};

export const setTotalCartPrice = (itemId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_TOTAL_CART_PRICE,
      payload: itemId,
    });
  };
};
