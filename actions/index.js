import API from '../utils/API';
import { FETCH_ICONS } from '../constants';

export const fetchIconAction = () => async (dispatch) => {
	const { icons } = await API({ path: '/icons', method: 'GET' });
	const categories = {};
	let total = 0;
	icons.map((icon) => {
		total += 1;
		categories[icon.cat] = categories[icon.cat]
			? { ...categories[icon.cat], items: categories[icon.cat].items + 1 }
			: { name: icon.cat, items: 1, select: false };
	});
	dispatch({ type: FETCH_ICONS, payload: { icons, categories }, total });
};
