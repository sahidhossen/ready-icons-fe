import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { icons } from '../utils/heroIcons';
import { Button } from '../components';

const Home = () => {
	const state = useSelector((state) => state);

	useEffect(() => {
		// console.log('state: ', state);
	}, []);

	const onIconPage = (event) => {
		event.preventDefault();
		console.log('clicked: ');
	};

	return (
		<div className="ready-icon-home-container">
			<div className="home-container">
				<div className="logo-section">
					<div className="site-title">
						<h1 className="title">Ready Icons</h1>
					</div>
					<div className="site-subtitle">
						<div className="slogan">
							1200+{' '}
							<Button tag="span" className="icon-btn" onClick={onIconPage}>
								<i className="duotone ready-icon-click"></i>
								Icons
							</Button>
						</div>
					</div>
				</div>
				<div className="home-icon-container">
					{icons.map((icon, index) => {
						return (
							<div key={index}>
								<div>
									<span className={icon}></span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
