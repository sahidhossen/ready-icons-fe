import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/withReduxStore';

const ReadyIcons = ({ Component, pageProps, reduxStore }) => {
	return (
		<Provider store={reduxStore}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default withReduxStore(ReadyIcons);
