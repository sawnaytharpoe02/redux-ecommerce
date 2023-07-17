import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import productsReducer from './products_reducer';
import { cartReducer } from './carts_reducer';
import { toastReducer } from './toast_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  carts: cartReducer,
  toast: toastReducer,
});

export default rootReducer;
