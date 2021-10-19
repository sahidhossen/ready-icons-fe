import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/withReduxStore';
import '../public/readyicons/readyicon-fonts.min.css';
import '../styles/_variables.scss';
import '../styles/main.scss';

const ReadyIcons = ({ Component, pageProps, reduxStore }) => {
	return (
		<Provider store={reduxStore}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default withReduxStore(ReadyIcons);
