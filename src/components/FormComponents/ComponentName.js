import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ComponentName extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			machineName: this.props.machineName
		}

		this.updateName = this.updateName.bind(this);
	}

	updateName(event) {
		this.setState({
			name: event.target.value,
			machineName: event.target.value.toLowerCase()
				.replace(/[^\w ]+/g,'')
				.replace(/ +/g,'-')
		});
	}

	render() {
		const { name, machineName } = this.state;

		return(
			<Row>
				<Col sm={12} md={6}>
					<FormGroup controlId="add-component">
						<ControlLabel className="sr-only">Add a new component</ControlLabel>
						<FormControl
							type="text"
							placeholder="Add a new component"
							value={name}
							onChange={this.updateName}
						/>
						<FormControl.Feedback />
					</FormGroup>
				</Col>
				<Col sm={12} md={6}>
					<FormGroup>
						<ControlLabel>Machine Name: <span className="machine-name">{machineName}</span></ControlLabel>
					</FormGroup>
				</Col>

			</Row>
		)
	}
}

ComponentName.defaultProps = {
	name: '',
	machineName: ''
};

ComponentName.propTypes = {
	name: PropTypes.string,
	machineName: PropTypes.string
};

export default ComponentName;