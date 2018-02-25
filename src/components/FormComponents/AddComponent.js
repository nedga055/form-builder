import React, { Component } from 'react';
//import PropTypes from 'prop-types';

// Bootstrap
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Components
import ComponentName from './ComponentName';

// Constants
import * as types from './ComponentTypes';

class AddComponent extends Component {
	constructor(props) {
		super(props);

		this.handleAddComponent = this.handleAddComponent.bind(this);
	}

	handleAddComponent(event) {

	}

	render() {
		return (
			<div className="add-component">
				<ComponentName />
				<Row>
					<Col sm={12} md={6}>
						<FormGroup controlId="component-type">
							<ControlLabel className="sr-only">Select component type</ControlLabel>
							<FormControl componentClass="select" placeholder="Select a component type">
								{types.COMPONENT_TYPES.map((option) => {
									return(
										<option key={option.value} value={option.value}>{option.text}</option>
									)
								})}
							</FormControl>
						</FormGroup>
					</Col>
				</Row>
				<button className="btn btn-default" onClick={this.handleAddComponent}>Add</button>

			</div>
		)
	}
}

export default AddComponent;