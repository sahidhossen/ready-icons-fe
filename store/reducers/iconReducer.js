// REDUCERS
import { FETCH_ICONS } from '../../constants';

const initialState = {
	icons: [],
	categories: {},
	fetched: false,
};

const iconReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ICONS: {
			const { payload } = action;
			return { ...state, ...payload, fetched: true };
		}
		default:
			return state;
	}
};

export default iconReducer;
