import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import notificationReducer from './notificationReducer';
import userReducer from './userReducer';
import iconReducer from './iconReducer';

export const combinedReducer = combineReducers({
	icons: iconReducer,
	user: userReducer,
	notifications: notificationReducer,
});

const reducers = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export default reducers;
