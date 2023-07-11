import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;
