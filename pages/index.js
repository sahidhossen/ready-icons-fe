import React from 'react';
import { icons } from '../utils/heroIcons';
import { Button } from '../components';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	const onIconPage = (event) => {
		event.preventDefault();
		router.push('/icons');
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
							1200+
							<Button tag="span" type="primary" className="icon-btn" onClick={onIconPage}>
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
