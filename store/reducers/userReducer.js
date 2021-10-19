// REDUCERS
import { LOGIN_SUCCSS, LOGIN_ERROR, USER_INFO, FETCHING_USER, FETCHED_USER } from '../types';

const initialState = {
	isLogin: false,
	token: null,
	user: null,
	fetching: false,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCSS:
			return { ...state, isLogin: true, error: null, token: action.payload };
		case USER_INFO:
			return { ...state, isLogin: false, user: action.payload };
		case LOGIN_ERROR:
			return { ...state, error: action.payload };
		case FETCHING_USER:
			return { ...state, fetching: true };
		case FETCHED_USER:
			return { ...state, fetching: false };
		default:
			return state;
	}
};

export default userReducer;
