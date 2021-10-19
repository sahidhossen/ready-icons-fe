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
	const { onClick, children, className, type, tag: TagName } = props;

	const classes = classNames(className, styles.btn, styles[btnTypes[type]]);

	return (
		<TagName className={classes} role="button" onClick={onClick}>
			{children}
		</TagName>
	);
};

Button.defaultProps = {
	type: 'primary',
	tag: 'button',
};

Button.propTypes = {
	tag: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'default', 'secondary']),
	onClick: PropTypes.func.isRequired,
};

export default Button;
