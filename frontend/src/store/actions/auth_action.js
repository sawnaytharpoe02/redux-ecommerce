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

// export const login = (data) => {
//   return async (dispatch) => {
//     dispatch({ type: SET_LOADING });
//     try {
//       const response = await apiCall("login","post",  data);
//       const { name, email, token } = response.data;

//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: { name, email },
//       });

//     } catch (error) {
//       const { status, data } = error.response;
//       if (status === 401) {
//         //NotificationManager.error(data.data.message);
//       } else {
//        // NotificationManager.error(data);
//       }
//     }
//     dispatch({ type: SET_LOADING });
//   };
// };
