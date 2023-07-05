const initialState = {
  user: null,
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
