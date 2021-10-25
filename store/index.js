import { createWrapper } from 'next-redux-wrapper';

import initializeStore from './init';

export const wrapper = createWrapper(initializeStore);
