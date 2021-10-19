import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import userReducer from './userReducer';

export default combineReducers({
	user: userReducer,
	notifications: notificationReducer,
});
