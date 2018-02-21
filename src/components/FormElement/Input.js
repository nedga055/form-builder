import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focused: false
		};

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onFocus() {
		this.setState({
			focused: true
		});
	}

	onBlur() {
		this.setState({
			focused: false
		});
	}

	render() {
		const { id, name, type, placeholder, label, required, disabled } = this.props;

		const { focused } = this.state;

		let fgLineClasses = (!focused) ? 'fg-line' : 'fg-line fg-toggled';

		return (
			<div className="form-group">
				<div className={fgLineClasses}>
					<label className="sr-only" htmlFor={name}>{label}</label>
					<input id={id}
					       className="form-control"
					       name={name}
					       type={type}
					       placeholder={placeholder}
					       required={required}
					       disabled={disabled}
					       onFocus={this.onFocus}
					       onBlur={this.onBlur}
					/>
				</div>
			</div>
		)
	}
}

Input.defaultProps = {
	id: '',
	name: '',
	type: 'text',
	placeholder: '',
	label: '',
	required: true,
	disabled: false
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
	disabled: PropTypes.bool
};

export default Input;