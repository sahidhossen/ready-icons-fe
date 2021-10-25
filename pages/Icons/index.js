import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { wrapper } from '../../store';
import { fetchIconAction } from '../../actions';
import styles from './Icon.module.scss';
import { TwitterIcon, SearchIcon } from './svgIcons';
import { Button } from '../../components';
import { icons } from '../../utils/heroIcons';

export const getStaticProps = wrapper.getStaticProps((store) => async (props) => {
	await store.dispatch(fetchIconAction());
});

const Icons = (props) => {
	const state = useSelector((store) => ({
		icons: store.icons.icons,
		categories: store.icons.categories,
		total: store.icons.total,
		iconFetched: store.icons.fetched,
	}));

	useEffect(() => {
		console.log('state: ', state, props);
	}, []);

	console.log('props: ', props);

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
						<span className={styles.itemCount}>{state.total}</span>
					</a>
					{Object.keys(state.categories).map((key, index) => {
						const category = state.categories[key];
						return (
							<a href="#" key={index} className={styles.categoryName}>
								<span className={styles.itemLabel}>{category.name}</span>
								<span className={styles.itemCount}>{category.items}</span>
							</a>
						);
					})}
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
