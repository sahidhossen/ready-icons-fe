import React from 'react';
import { wrapper } from '../store';
import '../public/readyicons/readyicon-fonts.min.css';
import '../styles/_variables.scss';
import '../styles/main.scss';

const ReadyIcons = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(ReadyIcons);
