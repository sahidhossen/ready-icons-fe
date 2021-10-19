// REDUCERS
import { FIRE_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';
import { revisedRandId } from '../../utils';

const notificationReducer = (state = {}, action) => {
	switch (action.type) {
		case FIRE_NOTIFICATION:
			let { payload } = action;
			payload = { ...payload, id: revisedRandId() };
			return { ...state, [payload.id]: action.payload };
		case REMOVE_NOTIFICATION:
			const { id } = action.payload;
			let nextState = { ...state };
			if (id) {
				delete nextState[id];
			} else {
				nextState = {};
			}
			return nextState;
		default:
			return state;
	}
};

export default notificationReducer;
