import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const state = useSelector((state) => state);

	useEffect(() => {
		console.log('state: ', state);
	}, []);

	return <div>Home</div>;
};

export default Home;
