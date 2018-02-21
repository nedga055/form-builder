import React, { Component } from 'react';

import Card from '../components/Card/Card';
import Input from '../components/FormElement/Input';

class FormBuilder extends Component {
	render() {
		let title = "Build your form";
		let description = "Use the following tools to build a custom form";

		return (
			<div className="form-builder">
				<Card title={title} description={description}>
					<Input id="add-component" name="add-component" placeholder="Add a new component" label="Add a new component" />
				</Card>
			</div>
		)
	}
}

export default FormBuilder;