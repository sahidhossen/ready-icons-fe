import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import styles from './Icon.module.scss';
import { TwitterIcon, SearchIcon } from './svgIcons';
import { Button } from '../../components';

const Icons = () => {
	const state = useSelector((state) => state);

	useEffect(() => {
		// console.log('state: ', state);
	}, []);

	return (
		<div className="icons-container">
			<section className={[styles.header]}>
				<div className={styles.logoSection}>
					<span className={styles.logoText}>ReadyIcons</span>
					<Button small={true} tag="span">
						<i className="ready-icon-bars"></i>
					</Button>
				</div>
				<div className={styles.searchBarContainer}>
					<div className={styles.searchBox}>
						<span className={cx('search-icon', styles.searchIcon)}>
							<SearchIcon />
						</span>
						<input className={styles.searchField} type="text" placeholder="Search" />
					</div>
					<div className={styles.personalLinks}>
						<Button small={true} tag="a" className={styles.btnWhite} href="#">
							<TwitterIcon />
						</Button>
					</div>
				</div>
				<div className={styles.iconCategoryList}>
					<a href="#" className={cx(styles.activeIconCategory, styles.categoryName)}>
						<span className={styles.itemLabel}>All</span>
						<span className={styles.itemCount}>4000</span>
					</a>
					<a href="#" className={styles.categoryName}>
						<span className={styles.itemLabel}>Arrow</span>
						<span className={styles.itemCount}>50</span>
					</a>
					<a href="#" className={styles.categoryName}>
						<span className={styles.itemLabel}>Astrology</span>
						<span className={styles.itemCount}>100</span>
					</a>
					<a href="#" className={styles.categoryName}>
						<span className={styles.itemLabel}>All</span>
						<span className={styles.itemCount}>4000</span>
					</a>
				</div>
			</section>
			<section className={styles.iconLibrary}>
				<div className={styles.iconGrid}>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
					<div className={styles.iconBox}>
						<div className={styles.iconInner}>
							<div className={styles.iconThumb}>
								<i className="ready-icon-basket"></i>
							</div>
							<div className={styles.iconName}>Basket</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Icons;
