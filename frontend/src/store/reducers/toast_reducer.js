import { ActionTypes } from '../constants/action-types';

const initialState = {
  showToast: false,
  toastMessage: '',
};

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_TOAST:
      return { ...state, showToast: true, toastMessage: action.payload };
    case ActionTypes.HIDE_TOAST:
      return { ...state, showToast: false, toastMessage: action.payload };
    default:
      return state;
  }
};
