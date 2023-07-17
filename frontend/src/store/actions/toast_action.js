import { ActionTypes } from '../constants/action-types';

export const showToast = (message) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SHOW_TOAST,
      payload: message,
    });
  };
};

export const hideToast = (message) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.HIDE_TOAST,
      payload: message,
    });
  };
};
