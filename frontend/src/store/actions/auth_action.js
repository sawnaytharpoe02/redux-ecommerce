export const authUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'AUTH_USER',
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT_USER',
    });
  };
};
