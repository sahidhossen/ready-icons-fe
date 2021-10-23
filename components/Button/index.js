import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const btnTypes = {
	primary: 'btn-primary',
	default: 'btn-default',
	secondary: 'btn-secondary',
};

const Button = (props) => {
	const { onClick, children, className, type, tag: TagName, small, ...Others } = props;

	const classes = classNames(className, styles.btn, styles[btnTypes[type]], { [styles.btnSmall]: small });

	const onClickHandler = (event) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<TagName {...Others} className={classes} role="button" onClick={onClickHandler}>
			{children}
		</TagName>
	);
};

Button.defaultProps = {
	type: 'default',
	tag: 'button',
};

Button.propTypes = {
	tag: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'default', 'secondary']),
	onClick: PropTypes.func,
	href: PropTypes.string,
	small: PropTypes.bool,
};

export default Button;
