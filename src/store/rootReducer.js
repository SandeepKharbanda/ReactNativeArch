import {combineReducers} from 'redux';
import {authReducer} from '../services/auth/reducer';

export default combineReducers({
  auth: authReducer,
});
