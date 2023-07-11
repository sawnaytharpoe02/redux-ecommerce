import { ActionTypes } from '../constants/action-types';

export const authUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_USER,
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOGOUT_USER,
    });
  };
};
